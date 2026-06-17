using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.Extensions.Logging;

namespace ContactFormProcessor.Services;

/// <summary>
/// Stores and retrieves applicant resumes in Azure Blob Storage. Resumes are too large
/// (up to 5 MB) to travel through the Storage Queue inline, so the HTTP trigger uploads
/// them here and the queue processor downloads them to attach to the notification email.
/// Uses the same storage account as the function runtime (AzureWebJobsStorage).
/// </summary>
public class ResumeBlobService
{
    private readonly ILogger<ResumeBlobService> _logger;
    private readonly BlobContainerClient _container;

    public ResumeBlobService(ILogger<ResumeBlobService> logger)
    {
        _logger = logger;

        var connectionString = Environment.GetEnvironmentVariable("AzureWebJobsStorage");
        if (string.IsNullOrWhiteSpace(connectionString))
        {
            throw new InvalidOperationException(
                "AzureWebJobsStorage is not configured — required for resume blob storage.");
        }

        var containerName = Environment.GetEnvironmentVariable("RESUME_BLOB_CONTAINER") ?? "resumes";
        _container = new BlobContainerClient(connectionString, containerName);
    }

    /// <summary>Uploads a resume and returns the generated blob name.</summary>
    public async Task<string> UploadAsync(Stream content, string contentType, string originalFileName)
    {
        await _container.CreateIfNotExistsAsync(PublicAccessType.None);

        var extension = Path.GetExtension(originalFileName);
        var blobName = $"{DateTime.UtcNow:yyyy/MM/dd}/{Guid.NewGuid():N}{extension}";
        var blob = _container.GetBlobClient(blobName);

        await blob.UploadAsync(
            content,
            new BlobUploadOptions { HttpHeaders = new BlobHttpHeaders { ContentType = contentType } });

        _logger.LogInformation("Uploaded resume to blob {BlobName} ({ContentType}).", blobName, contentType);
        return blobName;
    }

    /// <summary>Downloads a resume's bytes. Returns null if the blob no longer exists.</summary>
    public async Task<byte[]?> DownloadAsync(string blobName)
    {
        var blob = _container.GetBlobClient(blobName);
        if (!await blob.ExistsAsync())
        {
            _logger.LogWarning("Resume blob {BlobName} not found.", blobName);
            return null;
        }

        using var ms = new MemoryStream();
        await blob.DownloadToAsync(ms);
        return ms.ToArray();
    }

    /// <summary>Best-effort delete of a processed resume blob. Swallows errors.</summary>
    public async Task DeleteAsync(string blobName)
    {
        try
        {
            await _container.GetBlobClient(blobName).DeleteIfExistsAsync();
            _logger.LogInformation("Deleted resume blob {BlobName}.", blobName);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Failed to delete resume blob {BlobName} — leaving for manual cleanup.", blobName);
        }
    }
}
