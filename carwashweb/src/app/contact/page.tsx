// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
// ... (keep your contactInfo and serviceTypes arrays) ...
// Replace broken icons in contactInfo with emojis
const contactInfo = [
  { title: "Phone", details: "(555) 123-WASH", description: "Mon-Fri 8AM-6PM EST", icon: "📞" },
  { title: "Email", details: "info@carwashtech.com", description: "We respond within 24 hours", icon: "📧" },
  { title: "Service Area", details: "Nationwide Coverage", description: "25+ states and growing", icon: "📍" },
  { title: "Emergency Support", details: "24/7 Available", description: "For existing customers", icon: "🆘" },
];


export default function Contact() {
  const [formData, setFormData] = useState({ /* ... */ });
  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // ... (no change here)
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thank you for your inquiry! We will contact you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', company: '', serviceType: '', budget: '', timeline: '', message: '' }); // Reset form
      } else {
        throw new Error('Failed to submit form.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Sorry, there was an error submitting your form. Please try again.');
    }
  };

  return (
    <div className="bg-white">
      {/* ... Hero, Contact Info Sections ... */}
      
      {/* Contact Form Section */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ... all your form inputs ... */}
            <div className="pt-4">
              <button
                type="submit"
                className="btn-primary w-full"
                disabled={status === 'Submitting...'}
              >
                {status === 'Submitting...' ? 'Sending...' : 'Send My Request'}
              </button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </div>
          </form>
        </div>
      </section>
      
      {/* ... Emergency Contact Section ... */}
    </div>
  );
}