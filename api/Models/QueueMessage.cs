using System.Text.Json.Serialization;

namespace ContactFormProcessor.Models;

public class QueueMessage
{
    [JsonPropertyName("type")]
    public string Type { get; set; } = string.Empty;

    /// <summary>Contact-form payload. Populated when <see cref="Type"/> is "contact_form".</summary>
    [JsonPropertyName("data")]
    public ContactFormData? Data { get; set; }

    /// <summary>Careers-application payload. Populated when <see cref="Type"/> is "careers_application".</summary>
    [JsonPropertyName("careers")]
    public CareersFormData? Careers { get; set; }

    [JsonPropertyName("timestamp")]
    public string Timestamp { get; set; } = string.Empty;
}
