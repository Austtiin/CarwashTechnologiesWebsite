using System.Collections.Concurrent;
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

    // ── Rate limiting ────────────────────────────────────────────────────────
    private const int MaxRequestsPerHour = 7;
    private static readonly ConcurrentDictionary<string, RateLimitEntry> RateLimitCache = new();

    private sealed class RateLimitEntry
    {
        public DateTime WindowStart { get; set; }
        public int Count { get; set; }
    }

    private static string GetClientIp(HttpRequestData req)
    {
        if (req.Headers.TryGetValues("X-Forwarded-For", out var values))
        {
            var forwarded = values.FirstOrDefault();
            if (!string.IsNullOrEmpty(forwarded))
                return forwarded.Split(',')[0].Trim();
        }
        return "unknown";
    }

    private static bool IsRateLimited(string ip)
    {
        var now = DateTime.UtcNow;
        var entry = RateLimitCache.GetOrAdd(ip, _ => new RateLimitEntry { WindowStart = now, Count = 0 });

        lock (entry)
        {
            if ((now - entry.WindowStart).TotalHours >= 1)
            {
                entry.WindowStart = now;
                entry.Count = 0;
            }
            entry.Count++;
            return entry.Count > MaxRequestsPerHour;
        }
    }
    // ────────────────────────────────────────────────────────────────────────

    public ContactFormHttpTrigger(ILogger<ContactFormHttpTrigger> logger)
    {
        _logger = logger;
    }

    // Multi-output binding: HTTP response + queue message in one return
    public class Output
    {
        [QueueOutput("%AZURE_QUEUE_NAME%", Connection = "AzureWebJobsStorage")]
        public string? QueueMessage { get; set; }

        [HttpResult]
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
            // ── Rate limit check ─────────────────────────────────────────────
            var clientIp = GetClientIp(req);
            if (IsRateLimited(clientIp))
            {
                _logger.LogWarning(">>> Rate limit exceeded for IP: {IP}", clientIp);
                httpResponse.StatusCode = (HttpStatusCode)429;
                httpResponse.Headers.Add("Retry-After", "3600");
                await httpResponse.WriteAsJsonAsync(new { success = false, error = "Too many requests. Please try again later." });
                return new Output { HttpResponse = httpResponse };
            }
            // ─────────────────────────────────────────────────────────────────

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

            _logger.LogInformation(">>> Validated form data. Enqueueing message to Azure Storage Queue...");
            _logger.LogInformation("    Name:        {Name}", formData.Name);
            _logger.LogInformation("    Email:       {Email}", formData.Email);
            _logger.LogInformation("    ContactType: {ContactType}", formData.ContactType);
            _logger.LogInformation("    Urgency:     {Urgency}", formData.Urgency);

            // 202 Accepted — message received and queued for async processing
            httpResponse.StatusCode = HttpStatusCode.Accepted;
            await httpResponse.WriteAsJsonAsync(new
            {
                success = true,
                message = "Your message has been received. We will be in touch shortly."
            });

            _logger.LogInformation(">>> Message enqueued successfully. Returning 202 Accepted to client.");
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
