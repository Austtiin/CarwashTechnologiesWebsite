// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiry: string;
  bestTime: '' | 'morning' | 'afternoon' | 'evening' | 'anytime';
  urgency: 'normal' | 'soon' | 'urgent';
  contactType: string;
  /** Honeypot — should always be empty; bots fill it in */
  website?: string;
}

export interface ContactFormResponse {
  messageId?: string;
  submittedAt: string;
}

// Queue Message Types
export interface QueueMessagePayload {
  type: 'contact_form';
  data: ContactFormData;
  timestamp: string;
  environment: string;
}
