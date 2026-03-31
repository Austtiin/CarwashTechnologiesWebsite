using System.Text.Json;
using Azure.Communication.Email;
using ContactFormProcessor.Models;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace ContactFormProcessor.Functions;

public class ContactFormQueueProcessor
{
    private readonly ILogger<ContactFormQueueProcessor> _logger;

    public ContactFormQueueProcessor(ILogger<ContactFormQueueProcessor> logger)
    {
        _logger = logger;
    }

    [Function("ContactFormQueueProcessor")]
    public async Task Run(
        [QueueTrigger("webjobqueue", Connection = "AZURE_STORAGE_CONNECTION_STRING")] string queueMessage)
    {
        try
        {
            _logger.LogInformation("Processing contact form message from queue");

            // Parse the queue message
            var message = JsonSerializer.Deserialize<QueueMessage>(queueMessage, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            if (message?.Data == null)
            {
                _logger.LogError("Invalid queue message format");
                return;
            }

            var formData = message.Data;

            _logger.LogInformation("Contact form from: {Name} ({Email}), Type: {ContactType}, Urgency: {Urgency}",
                formData.Name,
                formData.Email,
                formData.ContactType,
                formData.Urgency);

            // Send email notification
            await SendEmailNotificationAsync(formData);

            _logger.LogInformation("Successfully processed contact form message");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing contact form message: {Message}", ex.Message);
            throw; // This will put the message in poison queue after max retries
        }
    }

    private async Task SendEmailNotificationAsync(ContactFormData formData)
    {
        try
        {
            // Get environment variables
            var connectionString = Environment.GetEnvironmentVariable("AZURE_COMMUNICATION_CONNECTION_STRING");
            var fromAddress = Environment.GetEnvironmentVariable("EMAIL_FROM_ADDRESS") ?? "noreply@carwashtechnologies.com";

            if (string.IsNullOrEmpty(connectionString))
            {
                _logger.LogWarning("Azure Communication Services connection string not configured. Email not sent.");
                _logger.LogInformation("SIMULATION: Would send email for {ContactType} to {Name} at {Email}",
                    formData.ContactType, formData.Name, formData.Email);
                return;
            }

            // Determine recipient based on contact type
            var toAddress = GetRecipientEmail(formData.ContactType);

            // Create email client
            var emailClient = new EmailClient(connectionString);

            // Build email subject and body
            var subject = $"New {GetContactTypeDisplay(formData.ContactType)} Inquiry - {formData.Urgency.ToUpper()}";
            var htmlBody = BuildEmailBody(formData);

            // Send the email
            var emailContent = new EmailContent(subject)
            {
                Html = htmlBody
            };

            var recipients = new EmailRecipients(new List<EmailAddress>
            {
                new EmailAddress(toAddress)
            });

            var emailMessage = new EmailMessage(fromAddress, recipients, emailContent);

            var operation = await emailClient.SendAsync(Azure.WaitUntil.Started, emailMessage);

            _logger.LogInformation("Email sent successfully. Message ID: {MessageId}", operation.Id);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to send email notification: {Message}", ex.Message);
            // Don't throw - we still want to mark the message as processed
            // You might want to send this to a dead letter queue or notification system
        }
    }

    private string GetRecipientEmail(string contactType)
    {
        var email = contactType.ToLower() switch
        {
            "chemicals" => Environment.GetEnvironmentVariable("EMAIL_TO_CHEMICALS"),
            "service" => Environment.GetEnvironmentVariable("EMAIL_TO_SERVICE"),
            "sales" => Environment.GetEnvironmentVariable("EMAIL_TO_SALES"),
            _ => Environment.GetEnvironmentVariable("EMAIL_TO_SALES")
        };

        return email ?? "info@carwashtechnologies.com";
    }

    private string GetContactTypeDisplay(string contactType)
    {
        return contactType.ToLower() switch
        {
            "chemicals" => "Chemical Sales",
            "service" => "Service & Maintenance",
            "sales" => "Equipment Sales",
            _ => "General"
        };
    }

    private string BuildEmailBody(ContactFormData formData)
    {
        var urgencyColor = formData.Urgency.ToLower() switch
        {
            "urgent" => "#dc2626",
            "soon" => "#f59e0b",
            _ => "#10b981"
        };

        return $@"
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ background-color: #1e40af; color: white; padding: 20px; text-align: center; }}
        .content {{ background-color: #f9fafb; padding: 20px; }}
        .field {{ margin-bottom: 15px; }}
        .label {{ font-weight: bold; color: #4b5563; }}
        .value {{ color: #111827; }}
        .urgency {{ display: inline-block; padding: 5px 10px; border-radius: 5px; color: white; background-color: {urgencyColor}; font-weight: bold; }}
        .footer {{ margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; }}
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
            <p>{GetContactTypeDisplay(formData.ContactType)}</p>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>Urgency:</span>
                <span class='urgency'>{formData.Urgency.ToUpper()}</span>
            </div>
            <div class='field'>
                <span class='label'>Name:</span>
                <span class='value'>{formData.Name}</span>
            </div>
            <div class='field'>
                <span class='label'>Email:</span>
                <span class='value'><a href='mailto:{formData.Email}'>{formData.Email}</a></span>
            </div>
            {(!string.IsNullOrEmpty(formData.Phone) ? $@"
            <div class='field'>
                <span class='label'>Phone:</span>
                <span class='value'>{formData.Phone}</span>
            </div>" : "")}
            {(!string.IsNullOrEmpty(formData.Company) ? $@"
            <div class='field'>
                <span class='label'>Company:</span>
                <span class='value'>{formData.Company}</span>
            </div>" : "")}
            {(!string.IsNullOrEmpty(formData.BestTime) ? $@"
            <div class='field'>
                <span class='label'>Best Time to Contact:</span>
                <span class='value'>{formData.BestTime}</span>
            </div>" : "")}
            <div class='field'>
                <span class='label'>Inquiry:</span>
                <div class='value' style='white-space: pre-wrap; background-color: white; padding: 15px; border-left: 3px solid #1e40af; margin-top: 5px;'>
{formData.Inquiry}
                </div>
            </div>
        </div>
        <div class='footer'>
            <p>This email was generated from the Carwash Technologies website contact form.</p>
            <p>Submitted at: {DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} UTC</p>
        </div>
    </div>
</body>
</html>";
    }
}
