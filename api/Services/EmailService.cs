using Azure;
using Azure.Communication.Email;
using ContactFormProcessor.Models;
using ContactFormProcessor.Templates;
using Microsoft.Extensions.Logging;

namespace ContactFormProcessor.Services;

/// <summary>
/// Sends branded transactional emails via Azure Communication Services.
/// Two emails are sent per submission:
///   1. Customer confirmation — acknowledges receipt, summarises their submission.
///   2. Business notification — routes to the correct internal mailbox by inquiry type.
/// </summary>
public class EmailService
{
    private readonly ILogger<EmailService> _logger;
    private readonly EmailClient _emailClient;
    private readonly string _fromAddress;
    private readonly string _toChemicals;
    private readonly string _toService;
    private readonly string _toSales;
    private readonly string _toCareers;
    private readonly string _toDefault;
    private readonly IReadOnlyList<EmailAddress> _ccAddresses;

    public EmailService(ILogger<EmailService> logger)
    {
        _logger = logger;

        var connectionString = Environment.GetEnvironmentVariable("AZURE_COMMUNICATION_CONNECTION_STRING");
        if (string.IsNullOrWhiteSpace(connectionString) ||
            connectionString.Equals("YOUR_ACS_CONNECTION_STRING_HERE", StringComparison.OrdinalIgnoreCase))
        {
            throw new InvalidOperationException(
                "AZURE_COMMUNICATION_CONNECTION_STRING is not configured. " +
                "Set this application setting in the Azure Function App.");
        }

        _emailClient   = new EmailClient(connectionString);
        _fromAddress   = Environment.GetEnvironmentVariable("EMAIL_FROM_ADDRESS")    ?? "donotreply@carwashtechnologies.com";
        _toChemicals   = Environment.GetEnvironmentVariable("EMAIL_TO_CHEMICALS")    ?? string.Empty;
        _toService     = Environment.GetEnvironmentVariable("EMAIL_TO_SERVICE")      ?? string.Empty;
        _toSales       = Environment.GetEnvironmentVariable("EMAIL_TO_SALES")        ?? string.Empty;
        _toCareers     = Environment.GetEnvironmentVariable("EMAIL_TO_CAREERS")      ?? string.Empty;
        _toDefault     = Environment.GetEnvironmentVariable("EMAIL_TO_DEFAULT")      ?? _toSales;

        // Parse comma-separated CC addresses, e.g. "Mark@Fuhrent.com, Austin@Fuhrent.com"
        var ccRaw = Environment.GetEnvironmentVariable("EMAIL_CC_ADDRESSES") ?? string.Empty;
        _ccAddresses = ccRaw
            .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
            .Where(addr => !string.IsNullOrWhiteSpace(addr))
            .Select(addr => new EmailAddress(addr))
            .ToList();
    }

    // ── Public methods ───────────────────────────────────────────────────────

    /// <summary>Sends the "thank you / confirmation" email to the person who submitted the form.</summary>
    public async Task SendConfirmationToCustomerAsync(ContactFormData form)
    {
        var subject  = $"We received your inquiry \u2013 Carwash Technologies";
        var htmlBody = EmailTemplates.CustomerConfirmation(form);

        var message = new EmailMessage(
            _fromAddress,
            form.Email,
            new EmailContent(subject) { Html = htmlBody });

        await SendWithLoggingAsync(message, $"customer confirmation → {form.Email}");
    }

    /// <summary>Sends the internal notification email to the appropriate business mailbox.</summary>
    public async Task SendNotificationToBusinessAsync(ContactFormData form)
    {
        var toAddress = ResolveBusinessEmail(form.ContactType);
        if (string.IsNullOrWhiteSpace(toAddress))
        {
            _logger.LogWarning(
                "No business email configured for contactType '{Type}'. " +
                "Set EMAIL_TO_DEFAULT (or the type-specific setting) in app config. Skipping.",
                form.ContactType);
            return;
        }

        var urgencyPrefix = (form.Urgency?.ToLower()) switch
        {
            "urgent" => "[URGENT] ",
            "soon"   => "[SOON] ",
            _        => string.Empty
        };

        var subject  = $"{urgencyPrefix}New {FormatContactType(form.ContactType)} Inquiry from {form.Name}";
        var htmlBody = EmailTemplates.BusinessNotification(form);

        var message = new EmailMessage(
            _fromAddress,
            toAddress,
            new EmailContent(subject) { Html = htmlBody });

        // Allow recipient to reply directly to the submitter
        message.ReplyTo.Add(new EmailAddress(form.Email, form.Name));

        // Add CC addresses, skipping any that duplicate the primary recipient
        foreach (var cc in _ccAddresses)
        {
            if (!cc.Address.Equals(toAddress, StringComparison.OrdinalIgnoreCase))
                message.Recipients.CC.Add(cc);
        }

        await SendWithLoggingAsync(message, $"business notification → {toAddress}");
    }

    /// <summary>Sends the "thank you / confirmation" email to the job applicant.</summary>
    public async Task SendCareersConfirmationToApplicantAsync(CareersFormData app)
    {
        var subject  = "We received your application – Carwash Technologies";
        var htmlBody = EmailTemplates.CareersConfirmation(app);

        var message = new EmailMessage(
            _fromAddress,
            app.Email,
            new EmailContent(subject) { Html = htmlBody });

        await SendWithLoggingAsync(message, $"careers applicant confirmation → {app.Email}");
    }

    /// <summary>
    /// Sends the internal careers-application notification, optionally with the applicant's
    /// resume attached. Routed to the careers mailbox (EMAIL_TO_CAREERS), falling back to default.
    /// </summary>
    public async Task SendCareersNotificationAsync(
        CareersFormData app, byte[]? resumeBytes, string? resumeContentType, string? resumeFileName)
    {
        var toAddress = FallbackTo(_toCareers, _toDefault);
        if (string.IsNullOrWhiteSpace(toAddress))
        {
            _logger.LogWarning(
                "No careers email configured (EMAIL_TO_CAREERS / EMAIL_TO_DEFAULT). Skipping notification.");
            return;
        }

        var subject  = $"New Job Application from {app.Name}";
        var htmlBody = EmailTemplates.CareersNotification(app);

        var message = new EmailMessage(
            _fromAddress,
            toAddress,
            new EmailContent(subject) { Html = htmlBody });

        // Allow the recipient to reply directly to the applicant.
        message.ReplyTo.Add(new EmailAddress(app.Email, app.Name));

        foreach (var cc in _ccAddresses)
        {
            if (!cc.Address.Equals(toAddress, StringComparison.OrdinalIgnoreCase))
                message.Recipients.CC.Add(cc);
        }

        if (resumeBytes is { Length: > 0 })
        {
            var fileName = string.IsNullOrWhiteSpace(resumeFileName) ? "resume" : resumeFileName;
            message.Attachments.Add(new EmailAttachment(
                fileName,
                resumeContentType ?? "application/octet-stream",
                new BinaryData(resumeBytes)));
        }

        await SendWithLoggingAsync(message, $"careers notification → {toAddress}");
    }

    // ── Private helpers ──────────────────────────────────────────────────────

    private async Task SendWithLoggingAsync(EmailMessage message, string description)
    {
        try
        {
            _logger.LogInformation("Dispatching email: {Desc}", description);
            var operation = await _emailClient.SendAsync(WaitUntil.Completed, message);
            _logger.LogInformation("Email sent. OperationId: {Id} | Status: {Status} | {Desc}",
                operation.Id, operation.Value?.Status, description);

            if (operation.Value?.Status == EmailSendStatus.Failed)
            {
                throw new InvalidOperationException(
                    $"ACS returned Failed status for email: {description}. OperationId: {operation.Id}");
            }
        }
        catch (RequestFailedException ex)
        {
            _logger.LogError(ex,
                "ACS request failed while sending {Desc}. Status: {Status}, Code: {Code}",
                description, ex.Status, ex.ErrorCode);
            throw;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unexpected error sending email: {Desc}", description);
            throw;
        }
    }

    private string ResolveBusinessEmail(string? contactType) => contactType?.ToLower() switch
    {
        "chemicals"                             => FallbackTo(_toChemicals, _toDefault),
        "service" or "service-maintenance"      => FallbackTo(_toService,   _toDefault),
        "sales"   or "equipment-sales"          => FallbackTo(_toSales,     _toDefault),
        _                                       => _toDefault
    };

    private static string FallbackTo(string primary, string fallback) =>
        string.IsNullOrWhiteSpace(primary) ? fallback : primary;

    private static string FormatContactType(string? contactType) => contactType?.ToLower() switch
    {
        "chemicals"          => "Chemical Sales",
        "service"            => "Service & Maintenance",
        "sales"              => "Equipment Sales",
        _                    => contactType ?? "General"
    };
}
