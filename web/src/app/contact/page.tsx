'use client';

import React, { useState } from 'react';
import BlurText from '../components/animations/BlurText';

type ContactType = 'chemicals' | 'service' | 'sales' | null;

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiry: string;
  bestTime: string;
  urgency: string;
}

const ContactPage = () => {
  const [selectedContact, setSelectedContact] = useState<ContactType>(null);
  const [formData, setFormData] = useState<FormData>({
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
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
        </svg>
      )
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
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
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
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would integrate with your email service (EmailJS, SendGrid, etc.)
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form submitted:', {
        contactType: selectedContact,
        ...formData
      });

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
    } catch (error) {
      setSubmitStatus('error');
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#26231d] via-[#595646] to-[#4c6461] text-white py-24">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient overlays using brand colors */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#f0da11]/20 to-transparent rounded-full opacity-60 -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#d0b211]/30 to-transparent rounded-full opacity-50 translate-x-32 translate-y-32 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[#bfb986]/15 to-transparent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #cecece 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-[#f0da11]/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-[#f0da11]/30">
              <svg className="w-5 h-5 mr-3 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-semibold text-[#f0da11] tracking-wide">Get In Touch</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#cecece] via-[#f0da11] to-[#bfb986] bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>

            <div className="flex justify-center">
              <BlurText
                text="Ready to start your wash journey? We're here to help you succeed."
                delay={100}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl !text-[#f0da11] max-w-3xl mx-auto leading-relaxed font-light"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Wave Transition with Brand Colors */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
            <svg
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-32 md:h-40"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f0da11" stopOpacity="0.18" />
                        <stop offset="40%" stopColor="#bfb986" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
                    </linearGradient>
                </defs>
                <path
                    d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                    fill="url(#waveGradient)"
                />
                <path
                    d="M0,90 C480,30 960,150 1440,90 L1440,120 L0,120 Z"
                    fill="#fff"
                    fillOpacity="0.8"
                />
            </svg>
        </div>
      </section>

      {/* Contact Options or Form */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {!selectedContact ? (
              // Contact Type Selection
              <>
                <div className="text-center mb-16">
                  <BlurText
                    text="How Can We Help You?"
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
                  />
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Choose the service area you're interested in to get connected with the right specialist
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {contactOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setSelectedContact(option.id)}
                      className={`group cursor-pointer bg-gradient-to-br ${option.bgColor} p-8 rounded-2xl border ${option.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {option.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{option.title}</h3>
                      <p className="text-gray-700 text-center mb-4">{option.description}</p>
                      <p className="text-sm text-gray-600 text-center mb-6">{option.details}</p>
                      <div className={`inline-flex items-center justify-center w-full ${option.textColor} font-medium group-hover:translate-x-2 transition-transform duration-300`}>
                        Get Started
                        <span className="ml-2">→</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              // Contact Form
              <>
                <div className="mb-12">
                  {/* Back Button */}
                  <div className="mb-8">
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center text-gray-600 hover:text-gray-800 group transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to options
                    </button>
                  </div>

                  {/* Service Type Badge and Title */}
                  <div className="text-center">
                    <div className={`inline-flex items-center bg-gradient-to-br ${selectedOption?.bgColor} rounded-full px-6 py-3 mb-6`}>
                      <div className={`w-8 h-8 bg-gradient-to-br ${selectedOption?.color} rounded-lg flex items-center justify-center mr-3`}>
                        {selectedOption?.icon && React.cloneElement(selectedOption.icon as React.ReactElement, { className: "w-4 h-4 text-white" })}
                      </div>
                      <span className="font-medium text-gray-800">{selectedOption?.title}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      Let's Connect
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      {selectedOption?.details}
                    </p>
                  </div>
                </div>

                {submitStatus === 'success' ? (
                  <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">✓</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                      <p className="text-gray-700 mb-6">
                        We've received your inquiry and will get back to you within 24 hours.
                        Our {selectedOption?.title.toLowerCase()} specialist will review your request and contact you soon.
                      </p>
                      <button
                        onClick={resetForm}
                        className="bg-[#f0da11] text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-[#d0b211] transition-colors duration-300"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f0da11] focus:border-transparent transition-all duration-300"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f0da11] focus:border-transparent transition-all duration-300"
                            placeholder="your.email@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f0da11] focus:border-transparent transition-all duration-300"
                            placeholder="(555) 123-4567"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company/Business Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f0da11] focus:border-transparent transition-all duration-300"
                            placeholder="Your business name"
                          />
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                            What are you inquiring about? *
                          </label>
                          <textarea
                            id="inquiry"
                            name="inquiry"
                            required
                            rows={4}
                            value={formData.inquiry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f0da11] focus:border-transparent transition-all duration-300"
                            placeholder={`Tell us about your ${selectedOption?.title.toLowerCase()} needs...`}
                          />
                        </div>

                        <div>
                          <label htmlFor="bestTime" className="block text-sm font-medium text-gray-700 mb-2">
                            Best time to reach you
                          </label>
                          <select
                            id="bestTime"
                            name="bestTime"
                            value={formData.bestTime}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f0da11] focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Select preferred time</option>
                            <option value="morning">Morning (8AM - 12PM)</option>
                            <option value="afternoon">Afternoon (12PM - 5PM)</option>
                            <option value="evening">Evening (5PM - 8PM)</option>
                            <option value="anytime">Anytime</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                            How urgent is your request?
                          </label>
                          <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f0da11] focus:border-transparent transition-all duration-300"
                          >
                            <option value="normal">Normal - Within a few days</option>
                            <option value="soon">Soon - Within 24 hours</option>
                            <option value="urgent">Urgent - Same day if possible</option>
                          </select>
                        </div>

                        <div className={`p-4 rounded-xl bg-gradient-to-br ${selectedOption?.bgColor} border ${selectedOption?.borderColor}`}>
                          <h4 className="font-semibold text-gray-900 mb-2">What to expect:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Response as soon as we are able</li>
                            <li>• Direct connection with a specialist</li>
                            <li>• Customized solutions for your needs</li>
                            <li>• No obligation consultation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group bg-gradient-to-r from-[#f0da11] to-[#d0b211] text-gray-900 px-12 py-4 rounded-2xl font-bold text-lg hover:from-[#d0b211] hover:to-[#bfb986] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"></span>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send My Inquiry
                            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
                          </span>
                        )}
                      </button>

                      <p className="text-sm text-gray-600 mt-4">
                        By submitting this form, you agree to be contacted by our team regarding your inquiry.
                      </p>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;

