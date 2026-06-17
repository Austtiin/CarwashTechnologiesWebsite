using System.Text.Json.Serialization;

namespace ContactFormProcessor.Models;

/// <summary>
/// A job application submitted through the careers form. The resume itself is not
/// carried inline (it can be up to 5 MB, which exceeds the 64 KB queue limit) — it is
/// uploaded to Blob Storage by the HTTP trigger and referenced here by blob name.
/// </summary>
public class CareersFormData
{
    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;

    [JsonPropertyName("email")]
    public string Email { get; set; } = string.Empty;

    [JsonPropertyName("phone")]
    public string? Phone { get; set; }

    [JsonPropertyName("position")]
    public string? Position { get; set; }

    [JsonPropertyName("message")]
    public string? Message { get; set; }

    /// <summary>Areas of interest selected by the applicant (service-tech, installation, etc.).</summary>
    [JsonPropertyName("areasOfInterest")]
    public List<string>? AreasOfInterest { get; set; }

    /// <summary>Applicant confirmed they hold a valid driver's license.</summary>
    [JsonPropertyName("hasLicense")]
    public bool HasLicense { get; set; }

    /// <summary>Applicant acknowledged the at-will / EEO statement.</summary>
    [JsonPropertyName("acknowledged")]
    public bool Acknowledged { get; set; }

    /// <summary>Original file name of the uploaded resume (for the email attachment), if any.</summary>
    [JsonPropertyName("resumeFileName")]
    public string? ResumeFileName { get; set; }

    /// <summary>Blob name under which the resume was stored, if any.</summary>
    [JsonPropertyName("resumeBlobName")]
    public string? ResumeBlobName { get; set; }

    /// <summary>MIME content type of the uploaded resume, if any.</summary>
    [JsonPropertyName("resumeContentType")]
    public string? ResumeContentType { get; set; }
}
