'use client';

import React, { useState, useCallback } from 'react';
import { useContactForm } from '@/app/contact/hooks/useContactForm';
import type { ContactFormData } from '@/types/api';

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
  /** Honeypot — should always be empty */
  website: string;
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
    urgency: 'normal',
    website: ''
  });
  
  const { isSubmitting, isSuccess, isPending, error, submitForm, reset } = useContactForm();

  // List of blocked email domains
  const BLOCKED_EMAIL_DOMAINS = [
    'poop.com', 'fake.com', 'test.com', 'example.com', 'invalid.com',
    'fakeemail.com', 'tempmail.com', 'guerrillamail.com', 'mailinator.com',
    'throwaway.email', '10minutemail.com', 'trashmail.com'
  ];

  // Enhanced email validation
  const validateEmail = (email: string): boolean => {
    // Basic format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    // Check for valid TLD
    const parts = email.split('@');
    if (parts.length !== 2) return false;

    const domain = parts[1].toLowerCase();
    const domainParts = domain.split('.');
    
    // Must have at least domain.tld (2 parts)
    if (domainParts.length < 2) return false;
    
    // TLD must be at least 2 characters (e.g., .co, .uk, .com)
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2) return false;

    // Check against blocked domains
    if (BLOCKED_EMAIL_DOMAINS.includes(domain)) return false;

    // Check for suspicious patterns
    if (domain.includes('..') || domain.startsWith('.') || domain.endsWith('.')) {
      return false;
    }

    return true;
  };

  // Validation function
  const isFormValid = () => {
    return (
      formData.name.trim().length >= 2 &&
      validateEmail(formData.email) &&
      formData.inquiry.trim().length >= 10 &&
      formData.bestTime !== '' &&
      formData.urgency !== ''
    );
  };

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    inquiry: '',
    bestTime: '',
    urgency: ''
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Validate input name
    const allowedFields = ['name', 'email', 'phone', 'company', 'inquiry', 'bestTime', 'urgency', 'website'];
    if (!allowedFields.includes(name)) return;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check — bots fill in this hidden field, humans never see it
    if (formData.website !== '') {
      // Silently succeed so bots don't know they were rejected
      return;
    }

    // Clear previous validation errors
    setValidationErrors({
      name: '',
      email: '',
      inquiry: '',
      bestTime: '',
      urgency: ''
    });

    // Validate all fields
    const errors = {
      name: formData.name.trim().length < 2 ? 'Name must be at least 2 characters' : '',
      email: !validateEmail(formData.email) ? 'Please enter a valid email address' : '',
      inquiry: formData.inquiry.trim().length < 10 ? 'Please provide at least 10 characters' : '',
      bestTime: formData.bestTime === '' ? 'Please select a preferred time' : '',
      urgency: formData.urgency === '' ? 'Please select urgency level' : ''
    };

    // Check if there are any errors
    if (Object.values(errors).some(error => error !== '')) {
      setValidationErrors(errors);
      return;
    }

    const contactFormData: ContactFormData = {
      ...formData,
      bestTime: formData.bestTime as ContactFormData['bestTime'],
      urgency: formData.urgency as ContactFormData['urgency'],
      contactType: selectedOption?.id || 'general',
      website: formData.website
    };

    const success = await submitForm(contactFormData);
    
    if (success) {
      // Clear form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiry: '',
        bestTime: '',
        urgency: 'normal',
        website: ''
      });
    }
  };

  const handleReset = () => {
    reset();
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiry: '',
      bestTime: '',
      urgency: 'normal',
      website: ''
    });
    onReset();
  };

  // Success Message
  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-br from-green-900/80 to-green-800/80 border-2 border-green-600 p-8 sm:p-12 backdrop-blur-sm rounded-2xl">
          <div className="w-16 h-16 bg-[#f0da11] flex items-center justify-center mx-auto mb-6 sm:w-20 sm:h-20 rounded-full">
            <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-200 text-lg mb-2">
            Thank you for contacting us about <span className="font-bold text-[#f0da11]">{selectedOption?.title}</span>.
          </p>
          <p className="text-gray-300 mb-6">
            We&#39;ve received your inquiry and will get back to you within 24 hours.
          </p>
          <button
            onClick={handleReset}
            className="bg-[#f0da11] text-gray-900 px-8 py-4 font-bold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer rounded-lg uppercase tracking-wide"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  // Pending Message (after retries)
  if (isPending) {
    return (
      <div className="max-w-2xl mx-auto text-center mb-8">
        <div className="bg-gradient-to-br from-yellow-900/80 to-yellow-800/80 border-2 border-yellow-600 p-8 sm:p-12 backdrop-blur-sm rounded-2xl">
          <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center mx-auto mb-6 sm:w-20 sm:h-20 rounded-full">
            <svg className="w-10 h-10 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Message Pending
          </h3>
          <p className="text-gray-200 text-lg mb-2">
            We&#39;re experiencing temporary connectivity issues.
          </p>
          <p className="text-gray-300 mb-6">
            {error || 'Your message has been saved and will be processed shortly. For immediate assistance, please call us.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:612-408-9010"
              className="bg-[#f0da11] text-gray-900 px-8 py-4 font-bold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer rounded-lg uppercase tracking-wide"
            >
              📞 Call (612) 408-9010
            </a>
            <button
              onClick={() => reset()}
              className="bg-white text-gray-900 px-8 py-4 font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer rounded-lg uppercase tracking-wide border-2 border-white"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Error Message (validation or hard failure)
  if (error && !isPending) {
    return (
      <div className="max-w-2xl mx-auto text-center mb-8">
        <div className="bg-gradient-to-br from-red-900/80 to-red-800/80 border-2 border-red-600 p-8 sm:p-12 backdrop-blur-sm rounded-2xl">
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center mx-auto mb-6 sm:w-20 sm:h-20 rounded-full">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Submission Failed
          </h3>
          <p className="text-gray-200 text-lg mb-2">
            {error}
          </p>
          <p className="text-gray-300 mb-6">
            Please try again or call us directly at (612) 408-9010 for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="bg-[#f0da11] text-gray-900 px-8 py-4 font-bold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer rounded-lg uppercase tracking-wide"
            >
              Try Again
            </button>
            <a
              href="tel:612-408-9010"
              className="bg-white text-gray-900 px-8 py-4 font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer rounded-lg uppercase tracking-wide border-2 border-white"
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Form rendering
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white border border-gray-200 p-4 sm:p-5 md:p-6 shadow-xl rounded-2xl lg:rounded-3xl"
    >
      {/* Honeypot field — visually hidden, bots fill it in, humans never see it */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-4 md:gap-5 lg:gap-6 lg:grid-cols-3 items-start">
        {/* Main Form Fields */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-3">
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border-2 ${validationErrors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#f0da11] focus:border-[#f0da11]'} bg-white text-gray-900 focus:ring-2 transition-all duration-200 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-lg`}
                  placeholder="Enter your full name"
                />
                {validationErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border-2 ${validationErrors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#f0da11] focus:border-[#f0da11]'} bg-white text-gray-900 focus:ring-2 transition-all duration-200 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-lg`}
                  placeholder="your.email@example.com"
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                )}
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-lg"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-lg"
                  placeholder="Your business name"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {/* Inquiry Field */}
              <div className="group">
                <label htmlFor="inquiry" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  What are you inquiring about? <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  required
                  rows={3}
                  minLength={10}
                  maxLength={1000}
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2 border-2 ${validationErrors.inquiry ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#f0da11] focus:border-[#f0da11]'} bg-white text-gray-900 focus:ring-2 transition-all duration-200 resize-vertical min-h-[80px] placeholder-gray-400 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed rounded-lg`}
                  placeholder={`Tell us about your ${selectedOption?.title.toLowerCase()} needs...`}
                />
                <div className="flex justify-between items-center mt-1">
                  {validationErrors.inquiry ? (
                    <p className="text-sm text-red-600">{validationErrors.inquiry}</p>
                  ) : (
                    <div></div>
                  )}
                  <div className="text-xs text-gray-500">
                    {formData.inquiry.length}/1000
                  </div>
                </div>
              </div>

              {/* Best Time Field */}
              <div className="group">
                <label htmlFor="bestTime" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Best time to reach you <span className="text-red-600">*</span>
                </label>
                <select
                  id="bestTime"
                  name="bestTime"
                  required
                  value={formData.bestTime}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border-2 ${validationErrors.bestTime ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#f0da11] focus:border-[#f0da11]'} bg-white text-gray-900 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-lg`}
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                  <option value="anytime">Anytime</option>
                </select>
                {validationErrors.bestTime && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.bestTime}</p>
                )}
              </div>

              {/* Urgency Field */}
              <div className="group">
                <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  How urgent is your request? <span className="text-red-600">*</span>
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  required
                  value={formData.urgency}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border-2 ${validationErrors.urgency ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#f0da11] focus:border-[#f0da11]'} bg-white text-gray-900 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-lg`}
                >
                  <option value="">Select urgency level</option>
                  <option value="normal">Normal - Within a few days</option>
                  <option value="soon">Soon - Within 24 hours</option>
                  <option value="urgent">Urgent - Same day if possible</option>
                </select>
                {validationErrors.urgency && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.urgency}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-2 text-center md:text-right">
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid()}
              className="group bg-[#f0da11] text-gray-900 px-10 py-3.5 font-bold text-base hover:bg-[#d0b211] transition-all duration-300 shadow-xl transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden uppercase tracking-wide cursor-pointer rounded-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mr-3"></div>
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
          <div className={`p-4 bg-gradient-to-br ${selectedOption?.bgColor} border-2 ${selectedOption?.borderColor} rounded-lg`}>
            <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wide text-xs">What to expect:</h4>
            <ul className="text-xs text-gray-900 space-y-1.5">
              <li className="flex items-center font-medium">
                <span className="w-2 h-2 bg-gray-900 mr-3 rounded-full"></span>
                Fast response time
              </li>
              <li className="flex items-center font-medium">
                <span className="w-2 h-2 bg-gray-900 mr-3 rounded-full"></span>
                Direct specialist connection
              </li>
              <li className="flex items-center font-medium">
                <span className="w-2 h-2 bg-gray-900 mr-3 rounded-full"></span>
                Customized solutions
              </li>
              <li className="flex items-center font-medium">
                <span className="w-2 h-2 bg-gray-900 mr-3 rounded-full"></span>
                No obligation consultation
              </li>
            </ul>
          </div>

          {/* Contact Type Indicator */}
          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-xs text-gray-600 font-medium">
              <span className="text-gray-900">Inquiry Type:</span>
              <span className="ml-1 text-[#f0da11] font-bold">{selectedOption?.title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer full-width along bottom */}
      <div className="mt-4 px-3 py-3 bg-gray-50 border-l-4 border-[#f0da11] rounded">
        <p className="text-[11px] text-gray-600 leading-snug">
          <strong className="text-gray-900">Privacy Notice:</strong> By submitting this form, you consent to Carwash Technologies and all of its affiliates to contact you regarding your inquiry. 
          This is not a sales contract. You are requesting a response to your request. We respect your privacy and will not share your information with third parties. 
          You may opt out of future communications at any time.
        </p>
      </div>
    </form>
  );
}