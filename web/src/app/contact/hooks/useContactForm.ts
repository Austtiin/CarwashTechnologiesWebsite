import { useCallback, useState } from 'react';
import { submitContactForm } from '@/lib/api-client';
import type { ContactFormData } from '@/types/api';

interface UseContactFormReturn {
  isSubmitting: boolean;
  isSuccess: boolean;
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
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const submitForm = async (data: ContactFormData): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);
    setRetryCount(0);

    console.log('[ContactForm] Submitting form...', { contactType: data.contactType });

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
    
    setError(`We could not confirm delivery. Your details are still here. Please retry or call (612) 408-9010. ${lastError || ''}`.trim());
    
    return false;
  };

  const reset = useCallback(() => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
    setRetryCount(0);
  }, []);

  return {
    isSubmitting,
    isSuccess,
    error,
    retryCount,
    submitForm,
    reset
  };
}
