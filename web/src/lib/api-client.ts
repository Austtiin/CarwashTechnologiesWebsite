import type { ApiResponse, ContactFormData, ContactFormResponse } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

interface FetchOptions extends RequestInit {
  timeout?: number;
}

class ApiClient {
  private async fetchWithTimeout(
    url: string,
    options: FetchOptions = {}
  ): Promise<Response> {
    const { timeout = 30000, ...fetchOptions } = options;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  /**
   * Submit a contact form
   */
  async submitContactForm(
    data: ContactFormData
  ): Promise<ApiResponse<ContactFormResponse>> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        timeout: 15000 // 15 second timeout
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Contact form submission error:', error);

      // Network error or timeout
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            success: false,
            error: 'Request timeout',
            message: 'The request took too long. Please try again.'
          };
        }

        return {
          success: false,
          error: 'Network error',
          message: 'Unable to connect to the server. Please check your internet connection.'
        };
      }

      return {
        success: false,
        error: 'Unknown error',
        message: 'An unexpected error occurred. Please try again.'
      };
    }
  }

  /**
   * Check API health
   */
  async checkHealth(): Promise<ApiResponse<{ healthy: boolean }>> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/api/contact`, {
        method: 'GET',
        timeout: 5000
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Health check error:', error);
      return {
        success: false,
        data: { healthy: false },
        error: 'Health check failed'
      };
    }
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export individual functions for convenience
export const submitContactForm = (data: ContactFormData) =>
  apiClient.submitContactForm(data);

export const checkApiHealth = () => apiClient.checkHealth();
