import { useState } from 'react';
import { submitContactForm } from '@/lib/api-client';
import type { ContactFormData } from '@/types/api';

interface UseContactFormReturn {
  isSubmitting: boolean;
  isSuccess: boolean;
  isPending: boolean;
  error: string | null;
  retryCount: number;
  submitForm: (data: ContactFormData) => Promise<boolean>;
  reset: () => void;
}

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second between retries

export function useContactForm(): UseContactFormReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const submitForm = async (data: ContactFormData): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);
    setIsPending(false);
    setRetryCount(0);

    console.log('[ContactForm] Submitting form...', { contactType: data.contactType, name: data.name, email: data.email });

    let lastError: string | null = null;

    // Try up to MAX_RETRIES times
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        setRetryCount(attempt + 1);
        if (attempt > 0) {
          console.log(`[ContactForm] Retry attempt ${attempt + 1}/${MAX_RETRIES}...`);
        }
        
        const response = await submitContactForm(data);

        if (response.success) {
          console.log('[ContactForm] ✅ Successfully queued in Azure Storage Queue.', response);
          setIsSuccess(true);
          setIsSubmitting(false);
          return true;
        } else {
          lastError = response.message || response.error || 'Failed to submit form';
          console.warn('[ContactForm] ⚠️ Submission failed (non-success response):', lastError);
          
          // If this isn't the last attempt, wait before retrying
          if (attempt < MAX_RETRIES - 1) {
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
          }
        }
      } catch (err) {
        lastError = err instanceof Error ? err.message : 'An unexpected error occurred';
        console.error(`[ContactForm] ❌ Attempt ${attempt + 1} threw an error:`, err);
        
        // If this isn't the last attempt, wait before retrying
        if (attempt < MAX_RETRIES - 1) {
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        }
      }
    }

    // All retries failed
    console.error('[ContactForm] ❌ All attempts failed. Last error:', lastError);
    setIsSubmitting(false);
    
    // Mark as pending if it's a network or service error (not validation)
    if (lastError && (
      lastError.includes('Network') || 
      lastError.includes('timeout') || 
      lastError.includes('Service') ||
      lastError.includes('unavailable')
    )) {
      setIsPending(true);
      setError('Your message is pending. We will process it as soon as possible. You can also call us at (612) 408-9010.');
    } else {
      // Hard failure for validation or other errors
      setError(lastError || 'Failed to submit form after multiple attempts. Please try again or call us at (612) 408-9010.');
    }
    
    return false;
  };

  const reset = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setIsPending(false);
    setError(null);
    setRetryCount(0);
  };

  return {
    isSubmitting,
    isSuccess,
    isPending,
    error,
    retryCount,
    submitForm,
    reset
  };
}
