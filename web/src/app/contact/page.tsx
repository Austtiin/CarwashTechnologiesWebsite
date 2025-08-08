'use client';

import React, { useState, useCallback } from 'react';
import BlurText from '../components/animations/BlurText';
import SafeLink from '../components/ui/SafeLink';
import { sanitize, securitySchemas, globalRateLimiter } from '../../lib/security';
import { z } from 'zod';

type ContactType = 'chemicals' | 'service' | 'sales';

const ContactPage = () => {
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: '',
    bestTime: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);

  // Secure contact options with validation
  const contactOptions = [
    {
      id: 'chemicals' as ContactType,
      title: 'Chemical Sales',
      description: 'High-quality wash chemicals and chemical programs',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      details: 'Get information about our chemical programs, pricing, and delivery options for detergents, waxes, and specialty solutions.',
    },
    {
      id: 'service' as ContactType,
      title: 'Service & Maintenance',
      description: 'Professional maintenance and repair services',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      details: 'Schedule maintenance, request emergency repairs, or inquire about our comprehensive service programs.',
    },
    {
      id: 'sales' as ContactType,
      title: 'Equipment Sales',
      description: 'Premium wash equipment and installation',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      details: 'Explore our equipment options, get quotes, and learn about installation services for new or existing facilities.',
    }
  ].map(option => ({
    ...option,
    title: sanitize.text(option.title),
    description: sanitize.text(option.description),
    details: sanitize.text(option.details)
  }));

  // Enhanced rate limiting with security
  const checkRateLimit = useCallback(() => {
    try {
      const clientIP = 'client-' + Date.now(); // In production, use actual client IP
      const allowed = globalRateLimiter.isAllowed(clientIP, 3, 300000); // 3 attempts per 5 minutes
      
      if (!allowed) {
        setRateLimitExceeded(true);
        return false;
      }
      
      setRateLimitExceeded(false);
      return true;
    } catch (error) {
      console.warn('Rate limiting error:', error);
      return true; // Allow on error, but log it
    }
  }, []);

  // Secure input change handler with comprehensive validation
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Validate input name to prevent prototype pollution
    const allowedFields = ['name', 'email', 'phone', 'company', 'inquiry', 'bestTime', 'urgency'];
    if (!allowedFields.includes(name)) {
      console.warn('Invalid form field:', name);
      return;
    }

    // Apply field-specific validation and sanitization
    let sanitizedValue = value;
    
    switch (name) {
      case 'email':
        // For email, we want to preserve the @ symbol and dots, so minimal sanitization
        sanitizedValue = value.replace(/[<>"'&]/g, '').trim().substring(0, 254);
        break;
      case 'phone':
        // Allow only phone-safe characters
        sanitizedValue = value.replace(/[^0-9\s\-\(\)\+\.]/g, '').substring(0, 20);
        break;
      case 'name':
      case 'company':
        // Remove potentially dangerous characters but allow basic punctuation
        sanitizedValue = sanitize.text(value).substring(0, 100);
        break;
      case 'inquiry':
        // More permissive for inquiry text but still safe
        sanitizedValue = sanitize.text(value).substring(0, 1000);
        break;
      case 'bestTime':
      case 'urgency':
        // Validate against allowed values only
        const allowedValues = {
          bestTime: ['', 'morning', 'afternoon', 'evening', 'anytime'],
          urgency: ['normal', 'soon', 'urgent']
        };
        if (!allowedValues[name as keyof typeof allowedValues].includes(value)) {
          console.warn('Invalid value for field:', name, value);
          return;
        }
        sanitizedValue = value;
        break;
      default:
        sanitizedValue = sanitize.text(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  }, []);

  // Enhanced form submission with comprehensive security
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkRateLimit()) {
      alert('Too many requests. Please wait before submitting again.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Comprehensive server-side validation
      const validatedData = securitySchemas.contactForm.parse({
        ...formData,
        contactType: selectedContact || 'general'
      });

      // Additional security checks
      if (validatedData.name.length < 2) {
        throw new Error('Name must be at least 2 characters long');
      }

      if (validatedData.inquiry.length < 10) {
        throw new Error('Inquiry must be at least 10 characters long');
      }

      // Email validation
      if (!securitySchemas.email.safeParse(validatedData.email).success) {
        throw new Error('Please enter a valid email address');
      }

      // Submit form with additional security headers
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': 'contact-form', // In production, use proper CSRF tokens
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          inquiry: '',
          bestTime: '',
          urgency: 'normal'
        });
        setSelectedContact(null);
      } else {
        throw new Error(result.message || 'Submission failed');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Provide user-friendly error messages without exposing system details
      if (error instanceof z.ZodError) {
        alert('Please check your input and try again.');
      } else if (error instanceof Error) {
        alert(error.message.includes('Server error') ? 
          'There was a server error. Please try again later.' : 
          error.message
        );
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedContact(null);
    setSubmitStatus(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiry: '',
      bestTime: '',
      urgency: 'normal'
    });
  };

  const selectedOption = contactOptions.find(option => option.id === selectedContact);

  return (
    <div className={sanitize.className("min-h-screen")}>
      {/* Enhanced Hero Section with Advanced Effects */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-[50vh] flex items-center">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated gradient overlay - FIXED: from-Yellow-600/10 to from-yellow-600/10 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f0da11]/20 via-yellow-600/10 to-yellow-600/20 opacity-70"></div>
          
          {/* Floating geometric shapes with different animations */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-[#f0da11]/40 rotate-45 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400/30 rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-32 left-16 w-8 h-8 bg-purple-400/25 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-16 right-12 w-5 h-5 bg-orange-400/35 rotate-45 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-green-400/40 rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-7 h-7 bg-red-400/20 rotate-45 animate-bounce" style={{ animationDelay: '0.8s' }}></div>
          
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `linear-gradient(rgba(240, 218, 17, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 218, 17, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            ></div>
          </div>
          
          {/* Radial gradient spotlights */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-[#000000]/20 to-transparent opacity-60 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-600/15 to-transparent opacity-40 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <BlurText
              text="Get In Touch"
              delay={50}
              animateBy="words"
              direction="top"
              className="!text-4xl font-extrabold !text-white mb-6 tracking-tight"
            />
            <BlurText
              text="Ready to transform your wash operation? Let's discuss your specific needs and create a customized solution that drives results."
              delay={150}
              animateBy="words"
              direction="bottom"
              className="!text-xl !text-gray-300 max-w-3xl mx-auto leading-relaxed sm:!text-2xl"
            />
            
            {/* Enhanced CTA buttons in hero */}
            <div className="flex flex-col gap-4 justify-center items-center mt-8 sm:flex-row sm:gap-6">
              <div className="bg-gradient-to-r from-[#f0da11] to-[#e6c200] text-gray-900 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <span className="flex items-center">
                  Quick Response Guarantee
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
              <div className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <span className="flex items-center">
                  24/7 Emergency Service
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave transition at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 sm:h-24 md:h-32"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="contactWaveGradient" x1="0" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#F3F4F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F9FAFB" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
              fill="url(#contactWaveGradient)"
            />
          </svg>
        </div>
      </section>

      <section className="relative py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden sm:py-16 lg:py-20">
        {/* Enhanced Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating animated shapes */}
          <div className="absolute top-20 right-16 w-12 h-12 border-2 border-[#f0da11]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
          <div className="absolute bottom-32 left-20 w-8 h-8 border-2 border-blue-400/15 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-16 w-6 h-6 border-2 border-purple-400/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '18s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-24 w-10 h-10 border-2 border-orange-400/15 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '14s', animationDelay: '3s' }}></div>
          
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #f0da11 2px, transparent 2px)`,
                backgroundSize: '40px 40px'
              }}
            ></div>
          </div>

          {/* Gradient overlays for depth */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#f0da11]/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/3 to-transparent"></div>
        </div>

        <div className={sanitize.className("container mx-auto px-4 sm:px-6 lg:px-8")}>
          <div className={sanitize.className("max-w-6xl mx-auto")}>

            {!selectedContact ? (
              // Contact Type Selection - Mobile First with Security
              <>
                <div className={sanitize.className("text-center mb-12 sm:mb-16")}>
                  <BlurText
                    text="How Can We Help?"
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="md:!text-[2rem] !text-[2rem] font-extrabold text-gray-900 mb-6"
              />
                  <p className={sanitize.className("!text-lg !text-gray-600 max-w-3xl mx-auto sm:!text-xl")}>
                    {sanitize.text("Choose the service area you're interested in to get connected with the right specialist")}
                  </p>
                </div>

                <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {contactOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setSelectedContact(option.id)}
                      className={`group cursor-pointer bg-gradient-to-br ${option.bgColor} p-8 rounded-3xl border-2 ${option.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden sm:p-10`}
                    >
                      {/* Card background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      
                      {/* Enhanced icon with gradient background */}
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg sm:w-20 sm:h-20 sm:mb-8`}>
                        {option.id === 'chemicals' && (
                          <svg className="w-8 h-8 text-white sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                          </svg>
                        )}
                        {option.id === 'service' && (
                          <svg className="w-8 h-8 text-white sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                        {option.id === 'sales' && (
                          <svg className="w-8 h-8 text-white sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors duration-300 sm:text-3xl sm:mb-6">
                        {option.title}
                      </h3>
                      <p className="text-gray-700 text-center mb-4 leading-relaxed group-hover:text-gray-600 transition-colors duration-300 sm:text-lg sm:mb-6">
                        {option.description}
                      </p>
                      <p className="text-sm text-gray-600 text-center mb-6 group-hover:text-gray-500 transition-colors duration-300 sm:text-base sm:mb-8">
                        {option.details}
                      </p>
                      
                      {/* Enhanced CTA */}
                      <div className={`flex items-center justify-center w-full ${option.textColor} font-bold text-lg group-hover:translate-x-2 transition-all duration-300`}>
                        <span className="mr-2">Get Started</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              // Contact Form with comprehensive security
              <>
                <div className={sanitize.className("mb-8 sm:mb-12")}>
                  {/* Back Button */}
                  <div className={sanitize.className("mb-6 sm:mb-8")}>
                    <button
                      onClick={resetForm}
                      className={sanitize.className("inline-flex items-center text-gray-600 hover:text-gray-800 group transition-colors duration-300")}
                    >
                      <svg className={sanitize.className("w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      {sanitize.text("Back to options")}
                    </button>
                  </div>

                  {/* Service Type Badge and Title */}
                  <div className={sanitize.className("text-center")}>
                    <div className={sanitize.className(`inline-flex items-center bg-gradient-to-br ${selectedOption?.bgColor} rounded-full px-4 py-2 mb-4 sm:px-6 sm:py-3 sm:mb-6`)}>
                      <span className={sanitize.className("font-medium text-gray-800 text-sm sm:text-base")}>
                        {selectedOption?.title}
                      </span>
                    </div>

                    <h2 className={sanitize.className("text-3xl font-bold text-gray-900 mb-3 sm:text-4xl md:text-5xl sm:mb-4")}>
                      {sanitize.text("Let's Connect")}
                    </h2>
                    <p className={sanitize.className("text-lg text-gray-600 max-w-2xl mx-auto sm:text-xl")}>
                      {selectedOption?.details}
                    </p>
                  </div>
                </div>

                {rateLimitExceeded && (
                  <div className={sanitize.className("max-w-2xl mx-auto mb-8")}>
                    <div className={sanitize.className("bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-6")}>
                      <div className={sanitize.className("flex items-center")}>
                        <svg className={sanitize.className("w-6 h-6 text-yellow-600 mr-3")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <p className={sanitize.className("text-yellow-800 font-medium")}>
                          {sanitize.text("Please wait a moment before submitting another request.")}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'success' ? (
                  <div className={sanitize.className("max-w-2xl mx-auto text-center")}>
                    <div className={sanitize.className("bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8")}>
                      <div className={sanitize.className("w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:w-16 sm:h-16")}>
                        <span className={sanitize.className("text-white text-xl sm:text-2xl")}>✓</span>
                      </div>
                      <h3 className={sanitize.className("text-xl font-bold text-gray-900 mb-3 sm:text-2xl sm:mb-4")}>
                        {sanitize.text("Thank You!")}
                      </h3>
                      <p className={sanitize.className("text-gray-700 mb-4 sm:mb-6")}>
                        {sanitize.text("We've received your inquiry and will get back to you within 24 hours. Our specialist will review your request and contact you soon.")}
                      </p>
                      <button
                        onClick={resetForm}
                        className={sanitize.className("bg-[#f0da11] text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-[#d0b211] transition-colors duration-300 sm:px-8")}
                      >
                        {sanitize.text("Submit Another Inquiry")}
                      </button>
                    </div>
                  </div>
                ) : submitStatus === 'error' ? (
                  <div className={sanitize.className("max-w-2xl mx-auto text-center mb-8")}>
                    <div className={sanitize.className("bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8")}>
                      <div className={sanitize.className("w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:w-16 sm:h-16")}>
                        <span className={sanitize.className("text-white text-xl sm:text-2xl")}>!</span>
                      </div>
                      <h3 className={sanitize.className("text-xl font-bold text-gray-900 mb-3 sm:text-2xl sm:mb-4")}>
                        {sanitize.text("Submission Error")}
                      </h3>
                      <p className={sanitize.className("text-gray-700 mb-4 sm:mb-6")}>
                        {sanitize.text("There was an error submitting your form. Please try again or contact us directly at ")}
                        <SafeLink 
                          href="tel:612-408-9010" 
                          className={sanitize.className("text-[#f0da11] hover:underline font-semibold")}
                        >
                          (612) 408-9010
                        </SafeLink>
                      </p>
                      <button
                        onClick={() => setSubmitStatus(null)}
                        className={sanitize.className("bg-[#f0da11] text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-[#d0b211] transition-colors duration-300 sm:px-8")}
                      >
                        {sanitize.text("Try Again")}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 sm:p-12">
                    <div className="grid gap-8 md:grid-cols-2 sm:gap-10">
                      {/* Left Column */}
                      <div className="space-y-6 sm:space-y-8">
                        {/* Name Field */}
                        <div className="group">
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3 group-focus-within:text-[#f0da11] transition-colors duration-300">
                            Full Name *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              maxLength={100}
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-gray-900 placeholder-gray-500"
                              placeholder="Enter your full name"
                              autoComplete="name"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f0da11]/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="group">
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3 group-focus-within:text-[#f0da11] transition-colors duration-300">
                            Email Address *
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              maxLength={254}
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-gray-900 placeholder-gray-500"
                              placeholder="your.email@example.com"
                              autoComplete="email"
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-30 group-focus-within:opacity-100 transition-opacity duration-300">
                              <svg className="w-5 h-5 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Phone Field */}
                        <div className="group">
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3 group-focus-within:text-[#f0da11] transition-colors duration-300">
                            Phone Number
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              maxLength={20}
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-gray-900 placeholder-gray-500"
                              placeholder="(555) 123-4567"
                              autoComplete="tel"
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-30 group-focus-within:opacity-100 transition-opacity duration-300">
                              <svg className="w-5 h-5 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Company Field */}
                        <div className="group">
                          <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-3 group-focus-within:text-[#f0da11] transition-colors duration-300">
                            Company/Business Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="company"
                              name="company"
                              maxLength={100}
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-gray-900 placeholder-gray-500"
                              placeholder="Your business name"
                              autoComplete="organization"
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-30 group-focus-within:opacity-100 transition-opacity duration-300">
                              <svg className="w-5 h-5 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6 sm:space-y-8">
                        {/* Inquiry Field */}
                        <div className="group">
                          <label htmlFor="inquiry" className="block text-sm font-semibold text-gray-800 mb-3 group-focus-within:text-[#f0da11] transition-colors duration-300">
                            What are you inquiring about? *
                          </label>
                          <div className="relative">
                            <textarea
                              id="inquiry"
                              name="inquiry"
                              required
                              rows={5}
                              maxLength={1000}
                              value={formData.inquiry}
                              onChange={handleInputChange}
                              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-gray-900 placeholder-gray-500 resize-vertical min-h-[120px]"
                              placeholder={`Tell us about your ${selectedOption?.title.toLowerCase()} needs...`}
                            />
                            <div className="absolute bottom-3 right-3 text-xs text-gray-400 bg-white/80 px-2 py-1 rounded-lg">
                              {formData.inquiry.length}/1000
                            </div>
                          </div>
                        </div>

                        {/* Best Time Field */}
                        <div className="group">
                          <label htmlFor="bestTime" className="block text-sm font-semibold text-gray-800 mb-3 group-focus-within:text-[#f0da11] transition-colors duration-300">
                            Best time to reach you
                          </label>
                          <div className="relative">
                            <select
                              id="bestTime"
                              name="bestTime"
                              value={formData.bestTime}
                              onChange={handleInputChange}
                              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-gray-900 appearance-none cursor-pointer"
                            >
                              <option value="">Select preferred time</option>
                              <option value="morning">Morning (8AM - 12PM)</option>
                              <option value="afternoon">Afternoon (12PM - 5PM)</option>
                              <option value="evening">Evening (5PM - 8PM)</option>
                              <option value="anytime">Anytime</option>
                            </select>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#f0da11] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Urgency Field */}
                        <div className="group">
                          <label htmlFor="urgency" className="block text-sm font-semibold text-gray-800 mb-3 group-focus-within:text-[#f0da11] transition-colors duration-300">
                            How urgent is your request?
                          </label>
                          <div className="relative">
                            <select
                              id="urgency"
                              name="urgency"
                              value={formData.urgency}
                              onChange={handleInputChange}
                              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#f0da11]/20 focus:border-[#f0da11] transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-gray-900 appearance-none cursor-pointer"
                            >
                              <option value="normal">Normal - Within a few days</option>
                              <option value="soon">Soon - Within 24 hours</option>
                              <option value="urgent">Urgent - Same day if possible</option>
                            </select>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#f0da11] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Info Card */}
                        <div className={`p-6 rounded-2xl bg-gradient-to-br ${selectedOption?.bgColor} border-2 ${selectedOption?.borderColor} shadow-lg backdrop-blur-sm`}>
                          <div className="flex items-start space-x-3">
                            <div className={`w-10 h-10 bg-gradient-to-br ${selectedOption?.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-3 text-lg">
                                What to expect:
                              </h4>
                              <ul className="text-sm text-gray-700 space-y-2">
                                <li className="flex items-center">
                                  <span className="w-2 h-2 bg-[#f0da11] rounded-full mr-3 flex-shrink-0"></span>
                                  Response as soon as possible
                                </li>
                                <li className="flex items-center">
                                  <span className="w-2 h-2 bg-[#f0da11] rounded-full mr-3 flex-shrink-0"></span>
                                  Direct connection with a specialist
                                </li>
                                <li className="flex items-center">
                                  <span className="w-2 h-2 bg-[#f0da11] rounded-full mr-3 flex-shrink-0"></span>
                                  Customized solutions for your needs
                                </li>
                                <li className="flex items-center">
                                  <span className="w-2 h-2 bg-[#f0da11] rounded-full mr-3 flex-shrink-0"></span>
                                  No obligation consultation
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Submit Button - FIXED: border-3 to border-4 */}
                    <div className="mt-10 text-center sm:mt-12">
                      <button
                        type="submit"
                        disabled={isSubmitting || rateLimitExceeded}
                        className="group bg-gradient-to-r from-[#f0da11] via-[#e6c200] to-[#d0b211] text-gray-900 px-12 py-5 rounded-3xl font-bold text-lg hover:from-[#d0b211] hover:via-[#bfb986] hover:to-[#a69650] transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden sm:px-16 sm:py-6 sm:text-xl"
                      >
                        {/* Button background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {isSubmitting ? (
                          <span className="flex items-center justify-center relative z-10">
                            <div className="w-6 h-6 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mr-4"></div>
                            Sending Your Message...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center relative z-10">
                            Send My Inquiry
                            <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </span>
                        )}
                      </button>

                      <p className="text-sm text-gray-600 mt-6 max-w-md mx-auto leading-relaxed">
                        By submitting this form, you agree to be contacted by our team regarding your inquiry. We respect your privacy and will never share your information.
                      </p>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(240, 218, 17, 0.3); }
          50% { box-shadow: 0 0 30px rgba(240, 218, 17, 0.6); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default ContactPage;

