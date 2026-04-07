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

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public ContactFormQueueProcessor(
        ILogger<ContactFormQueueProcessor> logger,
        EmailService emailService)
    {
        _logger       = logger;
        _emailService = emailService;
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

        if (envelope?.Data is null)
        {
            _logger.LogWarning("Queue message envelope or data was null — discarding.");
            return;
        }

        var form = envelope.Data;
        _logger.LogInformation(
            "Processing: Name={Name} | Email={Email} | Type={Type} | Urgency={Urgency}",
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
}
