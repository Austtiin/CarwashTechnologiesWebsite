'use client';

import React, { useState, useCallback } from 'react';

interface ContactOption {
  id: string;
  title: string;
  details: string;
  bgColor: string;
  borderColor: string;
  color: string;
}

interface ContactFormProps {
  selectedOption: ContactOption | undefined;
  onReset: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiry: string;
  bestTime: string;
  urgency: string;
}

// Client Component - Handles form state and submission
export default function ContactForm({ selectedOption, onReset }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: '',
    bestTime: '',
    urgency: 'normal'
  });
  
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name.trim() !== '' &&
      emailRegex.test(formData.email) &&
      formData.phone.trim() !== '' &&
      formData.company.trim() !== '' &&
      formData.inquiry.trim().length > 0 &&
      formData.bestTime !== '' &&
      formData.urgency !== ''
    );
  };

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Validate input name
    const allowedFields = ['name', 'email', 'phone', 'company', 'inquiry', 'bestTime', 'urgency'];
    if (!allowedFields.includes(name)) return;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          contactType: selectedOption?.id || 'general' 
        }),
      });
      
      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          inquiry: '',
          bestTime: '',
          urgency: 'normal'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-br from-green-900/80 to-green-800/80 border-2 border-green-600 p-8 sm:p-12 backdrop-blur-sm">
          <div className="w-16 h-16 bg-[#f0da11] flex items-center justify-center mx-auto mb-6 sm:w-20 sm:h-20">
            <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Thank You!
          </h3>
          <p className="text-gray-200 text-lg mb-6">
            We&#39;ve received your inquiry and will get back to you within 24 hours.
          </p>
          <button
            onClick={onReset}
            className="bg-[#f0da11] text-gray-900 px-8 py-4 font-bold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  if (submitStatus === 'error') {
    return (
      <div className="max-w-2xl mx-auto text-center mb-8">
        <div className="bg-gradient-to-br from-red-900/80 to-red-800/80 border-2 border-red-600 p-8 sm:p-12 backdrop-blur-sm">
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center mx-auto mb-6 sm:w-20 sm:h-20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Submission Error
          </h3>
          <p className="text-gray-200 text-lg mb-6">
            There was an error submitting your form. Please try again or call us at (612) 408-9010
          </p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="bg-[#f0da11] text-gray-900 px-8 py-4 font-bold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white border border-gray-200 p-4 sm:p-5 md:p-6 shadow-xl rounded-2xl lg:rounded-3xl"
    >
      <div className="grid gap-4 md:gap-5 lg:gap-6 lg:grid-cols-3 items-start">
        {/* Main Form Fields */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-3">
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200 placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  maxLength={20}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200 placeholder-gray-400"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Company Field */}
              <div className="group">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Company/Business Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  maxLength={100}
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200 placeholder-gray-400"
                  placeholder="Your business name"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {/* Inquiry Field */}
              <div className="group">
                <label htmlFor="inquiry" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  What are you inquiring about? *
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  required
                  rows={3}
                  maxLength={1000}
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200 resize-vertical min-h-[80px] placeholder-gray-400 text-sm"
                  placeholder={`Tell us about your ${selectedOption?.title.toLowerCase()} needs...`}
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.inquiry.length}/1000
                </div>
              </div>

              {/* Best Time Field */}
              <div className="group">
                <label htmlFor="bestTime" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Best time to reach you
                </label>
                <select
                  id="bestTime"
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>

              {/* Urgency Field */}
              <div className="group">
                <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  How urgent is your request?
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200"
                >
                  <option value="normal">Normal - Within a few days</option>
                  <option value="soon">Soon - Within 24 hours</option>
                  <option value="urgent">Urgent - Same day if possible</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-2 text-center md:text-right">
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid()}
              className="group bg-[#f0da11] text-gray-900 px-10 py-3.5 font-bold text-base hover:bg-[#d0b211] transition-all duration-300 shadow-xl transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden uppercase tracking-wide cursor-pointer"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mr-4"></div>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Send Inquiry
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Info Column */}
        <div className="space-y-3">
          {/* Info Card */}
          <div className={`p-4 bg-gradient-to-br ${selectedOption?.bgColor} border-2 ${selectedOption?.borderColor}`}>
            <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wide text-xs">What to expect:</h4>
            <ul className="text-xs text-gray-900 space-y-1.5">
              <li className="flex items-center font-medium">
                <span className="w-2 h-2 bg-gray-900 mr-3"></span>
                Fast response time
              </li>
              <li className="flex items-center font-medium">
                <span className="w-2 h-2 bg-gray-900 mr-3"></span>
                Direct specialist connection
              </li>
              <li className="flex items-center font-medium">
                <span className="w-2 h-2 bg-gray-900 mr-3"></span>
                Customized solutions
              </li>
              <li className="flex items-center font-medium">
                <span className="w-2 h-2 bg-gray-900 mr-3"></span>
                No obligation consultation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer full-width along bottom */}
      <div className="mt-4 px-3 py-3 bg-gray-50 border-l-4 border-[#f0da11]">
        <p className="text-[11px] text-gray-600 leading-snug">
          <strong className="text-gray-900">Privacy Notice:</strong> By submitting this form, you consent to Carwash Technologies and all of its affiliates to contact you regarding your inquiry. 
          This is not a sales contract. You are requesting a response to your request. We respect your privacy and will not share your information with third parties. 
          You may opt out of future communications at any time.
        </p>
      </div>
    </form>
  );
}