# Azure Function - Contact Form Processor

This C# Azure Function processes contact form submissions from the Azure Queue and sends email notifications.

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Azure Functions Core Tools v4](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local)
- Azure Storage Account
- Azure Communication Services (for email)

## Installation

Install Azure Functions Core Tools:

```bash
npm install -g azure-functions-core-tools@4 --unsafe-perm true
```

Or with Chocolatey on Windows:

```bash
choco install azure-functions-core-tools-4
```

## Project Structure

```
api/
├── Functions/
│   └── ContactFormQueueProcessor.cs   # Main queue trigger function
├── Models/
│   ├── ContactFormData.cs             # Contact form data model
│   └── QueueMessage.cs                # Queue message wrapper
├── ContactFormProcessor.csproj        # Project file
├── host.json                          # Function host configuration
├── local.settings.json                # Local environment variables
└── Program.cs                         # Application entry point
```

## Configuration

### Local Development

Update `local.settings.json` with your settings:

```json
{
  "Values": {
    "AZURE_STORAGE_CONNECTION_STRING": "your_connection_string",
    "AZURE_QUEUE_NAME": "webjobqueue",
    "EMAIL_FROM_ADDRESS": "noreply@carwashtechnologies.com",
    "EMAIL_TO_CHEMICALS": "chemicals@carwashtechnologies.com",
    "EMAIL_TO_SERVICE": "service@carwashtechnologies.com",
    "EMAIL_TO_SALES": "sales@carwashtechnologies.com",
    "AZURE_COMMUNICATION_CONNECTION_STRING": "your_acs_connection_string"
  }
}
```

### Production (Azure)

Set these Application Settings in your Azure Function App:
- `AZURE_STORAGE_CONNECTION_STRING`
- `AZURE_QUEUE_NAME` = `webjobqueue`
- `EMAIL_FROM_ADDRESS`
- `EMAIL_TO_CHEMICALS`
- `EMAIL_TO_SERVICE`
- `EMAIL_TO_SALES`
- `AZURE_COMMUNICATION_CONNECTION_STRING`

## Local Development

1. **Restore dependencies:**

```bash
cd api
dotnet restore
```

2. **Build the project:**

```bash
dotnet build
```

3. **Start Azure Storage Emulator** (for local queue testing):

```bash
# Using Azurite (recommended)
azurite --silent --location ./azurite --debug ./azurite/debug.log
```

Or download and use the [Azure Storage Emulator](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-emulator).

4. **Start the Function:**

```bash
func start
```

The function will start and listen for messages on the `webjobqueue` queue.

## How It Works

1. **Queue Trigger**: Function monitors the `webjobqueue` Azure Storage Queue
2. **Message Processing**: Deserializes the contact form data
3. **Email Routing**: Routes email to appropriate inbox based on `contactType`:
   - `chemicals` → chemicals@carwashtechnologies.com
   - `service` → service@carwashtechnologies.com
   - `sales` → sales@carwashtechnologies.com
4. **Email Send**: Uses Azure Communication Services to send formatted HTML email
5. **Logging**: Logs all operations for monitoring

## Testing

### Send a Test Message to Queue

You can test by manually adding a message to your queue:

```json
{
  "type": "contact_form",
  "timestamp": "2026-03-30T12:00:00Z",
  "data": {
    "name": "Test User",
    "email": "test@example.com",
    "phone": "555-1234",
    "company": "Test Company",
    "inquiry": "This is a test inquiry message.",
    "bestTime": "morning",
    "urgency": "normal",
    "contactType": "sales"
  }
}
```

### Using Azure Portal

1. Navigate to your Storage Account
2. Go to Queues → `webjobqueue`
3. Click "Add message"
4. Paste the JSON above
5. Watch the function logs for processing

## Deployment

### Using Azure Functions Core Tools

```bash
# Login to Azure
az login

# Publish to Azure
func azure functionapp publish YOUR_FUNCTION_APP_NAME
```

### Using GitHub Actions

The function can be deployed automatically via CI/CD. Add these secrets to your GitHub repository:

- `AZURE_FUNCTIONAPP_PUBLISH_PROFILE`

## Monitoring

### View Logs Locally

When running `func start`, logs appear in the console.

### View Logs in Azure

1. **Portal**: Function App → Functions → ContactFormQueueProcessor → Monitor
2. **Application Insights**: Navigate to your App Insights resource
3. **Log Stream**: Function App → Log stream

## Error Handling

- **Invalid Message Format**: Logged and skipped
- **Email Send Failure**: Logged but message is marked as processed (not retried)
- **Unexpected Errors**: Message is retried up to 5 times (configurable in `host.json`)
- **Poison Queue**: After max retries, message moves to `webjobqueue-poison`

## Queue Configuration

Configured in `host.json`:

```json
{
  "extensions": {
    "queues": {
      "maxPollingInterval": "00:00:02",
      "visibilityTimeout": "00:00:30",
      "batchSize": 16,
      "maxDequeueCount": 5
    }
  }
}
```

## Email Templates

The function sends HTML-formatted emails with:
- Urgency indicator (color-coded)
- All form fields
- Professional formatting
- Submission timestamp

## Security

- Connection strings stored in Azure Key Vault (recommended for production)
- Email addresses configured via environment variables
- Input validation handled by the Next.js API before queuing
- Function uses managed identity where possible

## Troubleshooting

### Function not triggering

1. Check queue connection string
2. Verify queue exists: `webjobqueue`
3. Check function logs for errors
4. Ensure storage account is accessible

### Emails not sending

1. Verify Azure Communication Services connection string
2. Check sender domain is verified in ACS
3. Review function logs for email errors
4. Test ACS connection separately

### Local development issues

1. Ensure Azurite or Storage Emulator is running
2. Check `local.settings.json` configuration
3. Verify .NET 8 SDK is installed
4. Run `dotnet --version` to confirm

## Commands Reference

```bash
# Restore packages
dotnet restore

# Build project
dotnet build

# Run locally
func start

# Run with debug
func start --verbose

# Publish to Azure
func azure functionapp publish YOUR_FUNCTION_APP_NAME

# View version
func --version
```

## Next Steps

1. Set up Azure Communication Services
2. Configure environment variables
3. Test locally with Azurite
4. Deploy to Azure
5. Monitor via Application Insights
6. Set up alerts for failures
