'use client';

import React, { useState, useCallback } from 'react';
import { submitContactForm } from '../actions/contact-actions';

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
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });
      formDataToSubmit.append('contactType', selectedOption?.id || 'general');

      const result = await submitContactForm(formDataToSubmit);

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
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:w-16 sm:h-16">
            <span className="text-white text-xl sm:text-2xl">✓</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 sm:text-2xl sm:mb-4">
            Thank You!
          </h3>
          <p className="text-gray-700 mb-4 sm:mb-6">
            We&#39;ve received your inquiry and will get back to you within 24 hours.
          </p>
          <button
            onClick={onReset}
            className="bg-[#f0da11] text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-[#d0b211] transition-colors duration-300 sm:px-8"
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
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:w-16 sm:h-16">
            <span className="text-white text-xl sm:text-2xl">!</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 sm:text-2xl sm:mb-4">
            Submission Error
          </h3>
          <p className="text-gray-700 mb-4 sm:mb-6">
            There was an error submitting your form. Please try again or call us at (612) 408-9010
          </p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="bg-[#f0da11] text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-[#d0b211] transition-colors duration-300 sm:px-8"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 sm:p-12">
      <div className="grid gap-8 md:grid-cols-2 sm:gap-10">
        {/* Left Column */}
        <div className="space-y-6 sm:space-y-8">
          {/* Name Field */}
          <div className="group">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
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
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
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
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone Field */}
          <div className="group">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength={20}
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Company Field */}
          <div className="group">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-3">
              Company/Business Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              maxLength={100}
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90"
              placeholder="Your business name"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 sm:space-y-8">
          {/* Inquiry Field */}
          <div className="group">
            <label htmlFor="inquiry" className="block text-sm font-semibold text-gray-800 mb-3">
              What are you inquiring about? *
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              required
              rows={5}
              maxLength={1000}
              value={formData.inquiry}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90 resize-vertical min-h-[120px]"
              placeholder={`Tell us about your ${selectedOption?.title.toLowerCase()} needs...`}
            />
            <div className="text-right text-xs text-gray-400 mt-1">
              {formData.inquiry.length}/1000
            </div>
          </div>

          {/* Best Time Field */}
          <div className="group">
            <label htmlFor="bestTime" className="block text-sm font-semibold text-gray-800 mb-3">
              Best time to reach you
            </label>
            <select
              id="bestTime"
              name="bestTime"
              value={formData.bestTime}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90"
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
            <label htmlFor="urgency" className="block text-sm font-semibold text-gray-800 mb-3">
              How urgent is your request?
            </label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90"
            >
              <option value="normal">Normal - Within a few days</option>
              <option value="soon">Soon - Within 24 hours</option>
              <option value="urgent">Urgent - Same day if possible</option>
            </select>
          </div>

          {/* Info Card */}
          <div className={`p-6 rounded-2xl bg-gradient-to-br ${selectedOption?.bgColor} border-2 ${selectedOption?.borderColor}`}>
            <h4 className="font-bold text-gray-900 mb-3">What to expect:</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f0da11] rounded-full mr-3"></span>
                Response within 24 hours
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f0da11] rounded-full mr-3"></span>
                Direct specialist connection
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f0da11] rounded-full mr-3"></span>
                Customized solutions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f0da11] rounded-full mr-3"></span>
                No obligation consultation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-10 text-center sm:mt-12">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group bg-gradient-to-r from-[#f0da11] via-[#e6c200] to-[#d0b211] text-gray-900 px-12 py-5 rounded-3xl font-bold text-lg hover:from-[#d0b211] hover:via-[#bfb986] hover:to-[#a69650] transition-all duration-500 shadow-2xl transform hover:-translate-y-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden sm:px-16 sm:py-6 sm:text-xl"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mr-4"></div>
              Sending Your Message...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Send My Inquiry
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
          )}
        </button>
      </div>
    </form>
  );
}