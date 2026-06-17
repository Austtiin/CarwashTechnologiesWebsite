using System.Collections.Concurrent;
using System.Text.Json;
using ContactFormProcessor.Models;
using ContactFormProcessor.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace ContactFormProcessor.Functions;

/// <summary>
/// HTTP endpoint that accepts careers/job-application submissions as multipart/form-data
/// (so a resume file can be attached). The resume is uploaded to Blob Storage; the rest of
/// the application is enqueued for async processing by <see cref="CareersQueueProcessor"/>.
/// </summary>
public class CareersHttpTrigger
{
    private readonly ILogger<CareersHttpTrigger> _logger;
    private readonly ResumeBlobService _resumeBlobService;

    private const long MaxResumeBytes = 5 * 1024 * 1024; // 5 MB
    private static readonly string[] AllowedResumeTypes =
    {
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    };

    // ── Rate limiting (mirrors the contact endpoint) ─────────────────────────
    private const int MaxRequestsPerHour = 7;
    private static readonly ConcurrentDictionary<string, RateLimitEntry> RateLimitCache = new();

    private sealed class RateLimitEntry
    {
        public DateTime WindowStart { get; set; }
        public int Count { get; set; }
    }

    private static string GetClientIp(HttpRequest req)
    {
        if (req.Headers.TryGetValue("X-Forwarded-For", out var values))
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
    // ─────────────────────────────────────────────────────────────────────────

    public CareersHttpTrigger(ILogger<CareersHttpTrigger> logger, ResumeBlobService resumeBlobService)
    {
        _logger = logger;
        _resumeBlobService = resumeBlobService;
    }

    // Multi-output binding: HTTP response + queue message in one return. Returning the queue
    // string while also manually writing to HttpContext.Response is unreliable in the ASP.NET
    // Core integration model, so we model both outputs explicitly.
    public class Output
    {
        [QueueOutput("%AZURE_QUEUE_NAME%", Connection = "AzureWebJobsStorage")]
        public string? QueueMessage { get; set; }

        [HttpResult]
        public IActionResult HttpResponse { get; set; } = null!;
    }

    [Function("CareersSubmit")]
    public async Task<Output> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "careers")] HttpRequest req)
    {
        _logger.LogInformation(">>> CareersSubmit triggered — incoming POST /api/careers");

        var clientIp = GetClientIp(req);
        if (IsRateLimited(clientIp))
        {
            _logger.LogWarning(">>> Careers rate limit exceeded for IP: {IP}", clientIp);
            req.HttpContext.Response.Headers["Retry-After"] = "3600";
            return new Output
            {
                HttpResponse = new ObjectResult(
                    new { success = false, error = "Too many requests. Please try again later." })
                { StatusCode = 429 }
            };
        }

        if (!req.HasFormContentType)
        {
            return Fail(StatusCodes.Status400BadRequest, "Expected multipart/form-data.");
        }

        var form = await req.ReadFormAsync();

        // Honeypot — bots populate this; real users never see it. Silently accept + discard.
        if (!string.IsNullOrEmpty(form["website"].ToString()))
        {
            _logger.LogWarning(">>> Careers honeypot triggered — silently discarding submission.");
            return new Output
            {
                HttpResponse = new ObjectResult(
                    new { success = true, message = "Your application has been received." })
                { StatusCode = StatusCodes.Status202Accepted }
            };
        }

        var name        = form["name"].ToString().Trim();
        var email       = form["email"].ToString().Trim();
        var phone       = form["phone"].ToString().Trim();
        var position    = form["position"].ToString().Trim();
        var message     = form["message"].ToString().Trim();
        var hasLicense  = ParseBool(form["hasLicense"]);
        var acknowledged = ParseBool(form["acknowledged"]);

        var areas = form["areasOfInterest"]
            .SelectMany(v => (v ?? string.Empty).Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries))
            .ToList();

        // ── Server-side validation ───────────────────────────────────────────
        if (string.IsNullOrWhiteSpace(name) || name.Length > 100
            || string.IsNullOrWhiteSpace(email) || email.Length > 254
            || !System.Text.RegularExpressions.Regex.IsMatch(
                   email, @"^[^\s@]+@[^\s@]+\.[^\s@]{2,}$",
                   System.Text.RegularExpressions.RegexOptions.IgnoreCase)
            || (message?.Length ?? 0) > 1500
            || (position?.Length ?? 0) > 100
            || (phone?.Length ?? 0) > 20)
        {
            return Fail(StatusCodes.Status400BadRequest, "Missing or invalid required fields.");
        }

        if (!hasLicense || !acknowledged)
        {
            return Fail(StatusCodes.Status400BadRequest,
                "Driver's license confirmation and at-will acknowledgment are required.");
        }

        // ── Resume upload (optional) ──────────────────────────────────────────
        string? resumeBlobName = null, resumeFileName = null, resumeContentType = null;
        var file = form.Files.GetFile("resume");
        if (file is { Length: > 0 })
        {
            if (file.Length > MaxResumeBytes)
            {
                return Fail(StatusCodes.Status400BadRequest, "Resume is too large. Maximum size is 5 MB.");
            }
            if (!AllowedResumeTypes.Contains(file.ContentType))
            {
                return Fail(StatusCodes.Status400BadRequest, "Resume must be a PDF or Word document.");
            }

            try
            {
                await using var stream = file.OpenReadStream();
                resumeBlobName = await _resumeBlobService.UploadAsync(stream, file.ContentType, file.FileName);
                resumeFileName = Path.GetFileName(file.FileName);
                resumeContentType = file.ContentType;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to upload resume to blob storage.");
                return Fail(StatusCodes.Status500InternalServerError,
                    "Failed to upload your resume. Please try again.");
            }
        }

        var application = new CareersFormData
        {
            Name = name,
            Email = email,
            Phone = string.IsNullOrWhiteSpace(phone) ? null : phone,
            Position = string.IsNullOrWhiteSpace(position) ? null : position,
            Message = string.IsNullOrWhiteSpace(message) ? null : message,
            AreasOfInterest = areas.Count > 0 ? areas : null,
            HasLicense = hasLicense,
            Acknowledged = acknowledged,
            ResumeFileName = resumeFileName,
            ResumeBlobName = resumeBlobName,
            ResumeContentType = resumeContentType,
        };

        var envelope = new QueueMessage
        {
            Type = "careers_application",
            Careers = application,
            Timestamp = DateTime.UtcNow.ToString("O"),
        };

        _logger.LogInformation(">>> Validated application from {Email}. Enqueueing. Resume: {HasResume}",
            email, resumeBlobName is not null);

        return new Output
        {
            QueueMessage = JsonSerializer.Serialize(envelope),
            HttpResponse = new ObjectResult(new
            {
                success = true,
                message = "Your application has been received. Our team will review it and follow up."
            })
            { StatusCode = StatusCodes.Status202Accepted }
        };
    }

    private static Output Fail(int statusCode, string error) => new()
    {
        HttpResponse = new ObjectResult(new { success = false, error })
        {
            StatusCode = statusCode
        }
    };

    private static bool ParseBool(Microsoft.Extensions.Primitives.StringValues value)
    {
        var s = value.ToString();
        return s.Equals("true", StringComparison.OrdinalIgnoreCase)
            || s.Equals("on", StringComparison.OrdinalIgnoreCase)
            || s == "1";
    }
}
