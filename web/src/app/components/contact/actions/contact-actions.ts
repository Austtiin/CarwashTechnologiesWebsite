// filepath: d:\Documents\GitHub\CarwashTechnologiesWebsite\web\src\app\contact\actions\contact-actions.ts
'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  phone: z.string().max(20).optional(),
  company: z.string().max(100).optional(),
  inquiry: z.string().min(10).max(1000),
  bestTime: z.enum(['', 'morning', 'afternoon', 'evening', 'anytime']),
  urgency: z.enum(['normal', 'soon', 'urgent']),
  contactType: z.string()
});

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      inquiry: formData.get('inquiry'),
      bestTime: formData.get('bestTime'),
      urgency: formData.get('urgency'),
      contactType: formData.get('contactType')
    });

    // Here you would integrate with your email service
    // For example: SendGrid, Resend, or your internal API
    console.log('Contact form submission:', validatedData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}