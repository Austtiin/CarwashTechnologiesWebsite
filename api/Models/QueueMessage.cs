using System.Text.Json.Serialization;

namespace ContactFormProcessor.Models;

public class QueueMessage
{
    [JsonPropertyName("type")]
    public string Type { get; set; } = string.Empty;

    [JsonPropertyName("data")]
    public ContactFormData Data { get; set; } = new();

    [JsonPropertyName("timestamp")]
    public string Timestamp { get; set; } = string.Empty;
}
