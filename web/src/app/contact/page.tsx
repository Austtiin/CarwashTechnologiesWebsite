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
      description: 'High-quality car wash chemicals and chemical programs',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      details: 'Get information about our chemical programs, pricing, and delivery options for detergents, waxes, and specialty solutions.'
    },
    {
      id: 'service' as ContactType,
      title: 'Service & Maintenance',
      description: 'Professional maintenance and repair services',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      details: 'Schedule maintenance, request emergency repairs, or inquire about our comprehensive service programs.'
    },
    {
      id: 'sales' as ContactType,
      title: 'Equipment Sales',
      description: 'Premium car wash equipment and installation',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      details: 'Explore our equipment options, get quotes, and learn about installation services for new or existing facilities.'
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
      <section className="relative bg-gradient-to-r from-white to-yellow-500 text-yellow-900 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full opacity-20 -translate-x-36 -translate-y-36"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full opacity-10 translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-200 rounded-full opacity-5"></div>
          <div className="absolute top-3/4 right-1/3 w-20 h-20 bg-yellow-200 rounded-full opacity-10"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-yellow-100/40 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium text-yellow-700">Get In Touch</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-700 to-yellow-400 bg-clip-text text-transparent">
              Contact Us
            </h1>

            <div className="flex justify-center">
              <BlurText
                text="Ready to start your car wash journey? We're here to help you succeed."
                delay={100}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl text-yellow-700 max-w-3xl mx-auto leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-yellow-200"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-yellow-100"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
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
                    className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
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
                        <span className="w-8 h-8 bg-white/20 rounded-lg"></span>
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
                <div className="text-center mb-12">
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 group"
                  >
                    <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span>
                    Back to options
                  </button>

                  <div className={`inline-flex items-center bg-gradient-to-br ${selectedOption?.bgColor} rounded-full px-6 py-3 mb-6`}>
                    <div className={`w-8 h-8 bg-gradient-to-br ${selectedOption?.color} rounded-lg flex items-center justify-center mr-3`}>
                      <span className="w-4 h-4 bg-white/20 rounded"></span>
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
                        className="bg-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition-colors duration-300"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                          >
                            <option value="normal">Normal - Within a few days</option>
                            <option value="soon">Soon - Within 24 hours</option>
                            <option value="urgent">Urgent - Same day if possible</option>
                          </select>
                        </div>

                        <div className={`p-4 rounded-xl bg-gradient-to-br ${selectedOption?.bgColor} border ${selectedOption?.borderColor}`}>
                          <h4 className="font-semibold text-gray-900 mb-2">What to expect:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Response within 24 hours</li>
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
                        className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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