import { QueueClient } from '@azure/storage-queue';

interface QueueMessage {
  type: 'contact_form';
  data: unknown;
  timestamp: string;
  environment: string;
}

class AzureQueueService {
  private static instance: AzureQueueService;
  private queueClient: QueueClient | null = null;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): AzureQueueService {
    if (!AzureQueueService.instance) {
      AzureQueueService.instance = new AzureQueueService();
    }
    return AzureQueueService.instance;
  }

  private async initialize() {
    if (this.isInitialized) {
      return;
    }

    const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
    const queueName = process.env.AZURE_QUEUE_NAME || 'webjobqueue';

    if (!connectionString) {
      throw new Error('AZURE_STORAGE_CONNECTION_STRING is not configured');
    }

    try {
      this.queueClient = new QueueClient(connectionString, queueName);
      
      // Ensure queue exists (creates if it doesn't)
      await this.queueClient.createIfNotExists();
      
      this.isInitialized = true;
      console.log(`Azure Queue Service initialized for queue: ${queueName}`);
    } catch (error) {
      console.error('Failed to initialize Azure Queue Service:', error);
      throw new Error('Failed to connect to Azure Queue Storage');
    }
  }

  public async sendMessage(messageType: string, data: unknown): Promise<boolean> {
    try {
      await this.initialize();

      if (!this.queueClient) {
        throw new Error('Queue client is not initialized');
      }

      const message: QueueMessage = {
        type: messageType as 'contact_form',
        data,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
      };

      // Convert to Base64 encoded JSON string (Azure Queue requirement)
      const messageText = Buffer.from(JSON.stringify(message)).toString('base64');
      
      const response = await this.queueClient.sendMessage(messageText);
      
      console.log('Message sent to Azure Queue:', {
        messageId: response.messageId
      });

      return true;
    } catch (error) {
      console.error('Failed to send message to Azure Queue:', error);
      throw error;
    }
  }

  public async healthCheck(): Promise<boolean> {
    try {
      await this.initialize();
      
      if (!this.queueClient) {
        return false;
      }

      // Try to get queue properties as a health check
      await this.queueClient.getProperties();
      return true;
    } catch (error) {
      console.error('Azure Queue health check failed:', error);
      return false;
    }
  }
}

export const azureQueueService = AzureQueueService.getInstance();
