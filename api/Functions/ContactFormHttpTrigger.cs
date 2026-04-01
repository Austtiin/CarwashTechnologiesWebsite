using System.Net;
using System.Text.Json;
using ContactFormProcessor.Models;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace ContactFormProcessor.Functions;

/// <summary>
/// HTTP endpoint that accepts contact form submissions, validates them,
/// and enqueues them for async processing by ContactFormQueueProcessor.
/// </summary>
public class ContactFormHttpTrigger
{
    private readonly ILogger<ContactFormHttpTrigger> _logger;

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public ContactFormHttpTrigger(ILogger<ContactFormHttpTrigger> logger)
    {
        _logger = logger;
    }

    // Multi-output binding: HTTP response + queue message in one return
    public class Output
    {
        [QueueOutput("webjobqueue", Connection = "AZURE_STORAGE_CONNECTION_STRING")]
        public string? QueueMessage { get; set; }

        public HttpResponseData HttpResponse { get; set; } = null!;
    }

    [Function("ContactFormSubmit")]
    public async Task<Output> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "contact")] HttpRequestData req)
    {
        _logger.LogInformation("========================================");
        _logger.LogInformation(">>> ContactFormSubmit triggered - incoming POST /api/contact");
        _logger.LogInformation("========================================");
        var httpResponse = req.CreateResponse();

        try
        {
            ContactFormData? formData;
            try
            {
                formData = await JsonSerializer.DeserializeAsync<ContactFormData>(req.Body, JsonOptions);
            }
            catch (JsonException)
            {
                httpResponse.StatusCode = HttpStatusCode.BadRequest;
                await httpResponse.WriteAsJsonAsync(new { success = false, error = "Invalid request body." });
                return new Output { HttpResponse = httpResponse };
            }

            // Basic server-side validation
            if (formData == null
                || string.IsNullOrWhiteSpace(formData.Name)
                || string.IsNullOrWhiteSpace(formData.Email)
                || string.IsNullOrWhiteSpace(formData.Inquiry)
                || formData.Name.Length > 100
                || formData.Email.Length > 254
                || formData.Inquiry.Length > 1000)
            {
                _logger.LogWarning(">>> Validation failed - missing or invalid fields. Returning 400.");
                httpResponse.StatusCode = HttpStatusCode.BadRequest;
                await httpResponse.WriteAsJsonAsync(new { success = false, error = "Missing or invalid required fields." });
                return new Output { HttpResponse = httpResponse };
            }

            // Wrap in the envelope the queue processor expects
            var message = new QueueMessage
            {
                Type = "contact_form",
                Data = formData,
                Timestamp = DateTime.UtcNow.ToString("O")
            };

            var queueJson = JsonSerializer.Serialize(message);

            _logger.LogInformation(">>> Validated form data. Enqueueing message to Azure Storage Queue 'webjobqueue'...");
            _logger.LogInformation("    Name:        {Name}", formData.Name);
            _logger.LogInformation("    Email:       {Email}", formData.Email);
            _logger.LogInformation("    ContactType: {ContactType}", formData.ContactType);
            _logger.LogInformation("    Urgency:     {Urgency}", formData.Urgency);

            httpResponse.StatusCode = HttpStatusCode.OK;
            await httpResponse.WriteAsJsonAsync(new
            {
                success = true,
                message = "Your message has been received. We will be in touch shortly."
            });

            _logger.LogInformation(">>> Message enqueued successfully. Returning 200 OK to client.");
            _logger.LogInformation("========================================");

            return new Output
            {
                QueueMessage = queueJson,
                HttpResponse = httpResponse
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unexpected error processing contact form HTTP request");
            httpResponse.StatusCode = HttpStatusCode.InternalServerError;
            await httpResponse.WriteAsJsonAsync(new { success = false, error = "Failed to send your message. Please try again." });
            return new Output { HttpResponse = httpResponse };
        }
    }
}
