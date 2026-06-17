using System.Text.Json;
using ContactFormProcessor.Models;
using ContactFormProcessor.Services;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace ContactFormProcessor.Functions;

/// <summary>
/// Queue trigger that processes contact form submissions placed on the Azure Storage Queue
/// by <see cref="ContactFormHttpTrigger"/>.
/// Sends two branded emails per message:
///   - A confirmation email to the customer.
///   - An internal notification email to the appropriate business mailbox.
/// If processing fails, the message is returned to the queue and retried up to
/// <c>maxDequeueCount</c> times (configured in host.json) before being moved to the
/// poison queue for manual review.
/// </summary>
public class ContactFormQueueProcessor
{
    private readonly ILogger<ContactFormQueueProcessor> _logger;
    private readonly EmailService _emailService;
    private readonly ResumeBlobService _resumeBlobService;

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public ContactFormQueueProcessor(
        ILogger<ContactFormQueueProcessor> logger,
        EmailService emailService,
        ResumeBlobService resumeBlobService)
    {
        _logger            = logger;
        _emailService      = emailService;
        _resumeBlobService = resumeBlobService;
    }

    [Function("ContactFormQueueProcessor")]
    public async Task Run(
        [QueueTrigger("%AZURE_QUEUE_NAME%", Connection = "AzureWebJobsStorage")] string messageJson)
    {
        _logger.LogInformation("========================================");
        _logger.LogInformation(">>> ContactFormQueueProcessor triggered.");

        // Deserialise the envelope
        QueueMessage? envelope;
        try
        {
            envelope = JsonSerializer.Deserialize<QueueMessage>(messageJson, JsonOptions);
        }
        catch (JsonException ex)
        {
            // Unrecoverable parse failure — log and swallow so the message is not retried.
            _logger.LogError(ex, "Failed to deserialise queue message — message will be discarded.");
            return;
        }

        if (envelope is null)
        {
            _logger.LogWarning("Queue message envelope was null — discarding.");
            return;
        }

        // Route by message type. Careers applications carry a resume reference and use a
        // dedicated email flow; everything else is treated as a contact-form submission.
        if (string.Equals(envelope.Type, "careers_application", StringComparison.OrdinalIgnoreCase))
        {
            await ProcessCareersAsync(envelope.Careers);
            return;
        }

        if (envelope.Data is null)
        {
            _logger.LogWarning("Contact-form message had null data — discarding.");
            return;
        }

        var form = envelope.Data;
        _logger.LogInformation(
            "Processing contact form: Name={Name} | Email={Email} | Type={Type} | Urgency={Urgency}",
            form.Name, form.Email, form.ContactType, form.Urgency);

        // Send both emails concurrently; let any exception propagate so the queue
        // runtime retries the message (up to maxDequeueCount in host.json).
        await Task.WhenAll(
            _emailService.SendConfirmationToCustomerAsync(form),
            _emailService.SendNotificationToBusinessAsync(form)
        );

        _logger.LogInformation(">>> Both emails dispatched for {Email}.", form.Email);
        _logger.LogInformation("========================================");
    }

    private async Task ProcessCareersAsync(CareersFormData? app)
    {
        if (app is null)
        {
            _logger.LogWarning("Careers message had null payload — discarding.");
            return;
        }

        _logger.LogInformation(
            "Processing job application: Name={Name} | Email={Email} | Resume={HasResume}",
            app.Name, app.Email, app.ResumeBlobName is not null);

        // Download the resume (if any) so it can be attached to the notification email.
        byte[]? resumeBytes = null;
        if (!string.IsNullOrWhiteSpace(app.ResumeBlobName))
        {
            resumeBytes = await _resumeBlobService.DownloadAsync(app.ResumeBlobName);
        }

        // Send the internal notification (with resume) and the applicant confirmation concurrently.
        // Any failure propagates so the queue runtime retries the message.
        await Task.WhenAll(
            _emailService.SendCareersNotificationAsync(
                app, resumeBytes, app.ResumeContentType, app.ResumeFileName),
            _emailService.SendCareersConfirmationToApplicantAsync(app)
        );

        // Best-effort cleanup of the blob now that the email has been sent successfully.
        if (!string.IsNullOrWhiteSpace(app.ResumeBlobName))
        {
            await _resumeBlobService.DeleteAsync(app.ResumeBlobName);
        }

        _logger.LogInformation(">>> Careers notification dispatched for {Email}.", app.Email);
        _logger.LogInformation("========================================");
    }
}
