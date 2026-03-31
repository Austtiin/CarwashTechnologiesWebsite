# Contact Form API Integration Example

## Using the Contact Form Hook

Here's how to integrate the contact form API into your components:

### Basic Implementation

```tsx
'use client';

import { useState } from 'react';
import { useContactForm } from '@/app/contact/hooks/useContactForm';
import type { ContactFormData } from '@/types/api';

export function ContactForm() {
  const { isSubmitting, isSuccess, error, submitForm, reset } = useContactForm();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: '',
    bestTime: '',
    urgency: 'normal',
    contactType: 'general_inquiry'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm(formData);
    
    if (success) {
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiry: '',
        bestTime: '',
        urgency: 'normal',
        contactType: 'general_inquiry'
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Success Message */}
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Your message has been sent! We'll get back to you soon.
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={100}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          disabled={isSubmitting}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={254}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          disabled={isSubmitting}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          maxLength={20}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          disabled={isSubmitting}
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          maxLength={100}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          disabled={isSubmitting}
        />
      </div>

      {/* Inquiry */}
      <div>
        <label htmlFor="inquiry" className="block text-sm font-medium">
          Message *
        </label>
        <textarea
          id="inquiry"
          name="inquiry"
          value={formData.inquiry}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={1000}
          rows={5}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          disabled={isSubmitting}
        />
        <p className="mt-1 text-sm text-gray-500">
          {formData.inquiry.length}/1000 characters
        </p>
      </div>

      {/* Best Time to Contact */}
      <div>
        <label htmlFor="bestTime" className="block text-sm font-medium">
          Best Time to Contact
        </label>
        <select
          id="bestTime"
          name="bestTime"
          value={formData.bestTime}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          disabled={isSubmitting}
        >
          <option value="">Select a time</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
          <option value="anytime">Anytime</option>
        </select>
      </div>

      {/* Urgency */}
      <div>
        <label htmlFor="urgency" className="block text-sm font-medium">
          Urgency
        </label>
        <select
          id="urgency"
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          disabled={isSubmitting}
        >
          <option value="normal">Normal</option>
          <option value="soon">Soon</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

## Direct API Usage (without hook)

If you prefer to use the API client directly:

```tsx
'use client';

import { useState } from 'react';
import { submitContactForm } from '@/lib/api-client';
import type { ContactFormData } from '@/types/api';

export function SimpleContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      inquiry: formData.get('inquiry') as string,
      bestTime: formData.get('bestTime') as ContactFormData['bestTime'],
      urgency: formData.get('urgency') as ContactFormData['urgency'],
      contactType: 'general_inquiry'
    };

    try {
      const response = await submitContactForm(data);
      
      if (response.success) {
        alert('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        alert(response.message || 'Failed to send message');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields... */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
```

## Fetching from Server Components

For Server Components that need to check API health:

```tsx
import { checkApiHealth } from '@/lib/api-client';

export default async function StatusPage() {
  const health = await checkApiHealth();
  
  return (
    <div>
      <h1>API Status</h1>
      <p>Status: {health.data?.healthy ? 'Operational' : 'Degraded'}</p>
    </div>
  );
}
```

## TypeScript Types

All available types are in `@/types/api`:

```typescript
import type {
  ApiResponse,
  ContactFormData,
  ContactFormResponse
} from '@/types/api';
```

## Error Handling

The API client automatically handles:
- Network errors
- Timeouts (15s for submissions, 5s for health checks)
- JSON parsing errors
- Server errors

All errors are returned in a consistent format:

```typescript
{
  success: false,
  error: 'Error type',
  message: 'Human-readable message'
}
```
