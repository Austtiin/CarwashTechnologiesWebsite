using System.Text.Json.Serialization;

namespace ContactFormProcessor.Models;

public class ContactFormData
{
    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;

    [JsonPropertyName("email")]
    public string Email { get; set; } = string.Empty;

    [JsonPropertyName("phone")]
    public string? Phone { get; set; }

    [JsonPropertyName("company")]
    public string? Company { get; set; }

    [JsonPropertyName("inquiry")]
    public string Inquiry { get; set; } = string.Empty;

    [JsonPropertyName("bestTime")]
    public string BestTime { get; set; } = string.Empty;

    [JsonPropertyName("urgency")]
    public string Urgency { get; set; } = "normal";

    [JsonPropertyName("contactType")]
    public string ContactType { get; set; } = "general";

    /// <summary>Honeypot — must be empty on legitimate submissions.</summary>
    [JsonPropertyName("website")]
    public string? Website { get; set; }
}
