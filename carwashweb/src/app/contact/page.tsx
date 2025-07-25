'use client';

import { useState } from 'react';

const contactInfo = [
  {
    title: "Phone",
    details: "(555) 123-WASH",
    description: "Mon-Fri 8AM-6PM EST",
    icon: "📞",
  },
  {
    title: "Email",
    details: "info@carwashtech.com",
    description: "We respond within 24 hours",
    icon: "📧",
  },
  {
    title: "Service Area",
    details: "Nationwide Coverage",
    description: "25+ states and growing",
    icon: "📍",
  },
  {
    title: "Emergency Support",
    details: "24/7 Available",
    description: "For existing customers",
    icon: "🚨",
  },
];

const serviceTypes = [
  "New Car Wash Construction",
  "Facility Renovation",
  "Equipment Upgrades",
  "Maintenance Services", 
  "Chemical Supply",
  "Consultation Only",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-32 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-400 to-yellow-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-4xl py-40 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Ready to start your car wash project? Get a free consultation and quote from our experts. 
              We&apos;re here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center hover-scale bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-5xl mb-6">{info.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-yellow-600 font-medium mb-2 text-lg">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center lg:text-left">
                  Request a Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="block w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="block w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-3">
                      Service Needed *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="block w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-3">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="block w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="over-1m">Over $1,000,000</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-3">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="block w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="over-1-year">Over 1 year</option>
                        <option value="planning">Just planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="block w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 resize-vertical"
                      placeholder="Please describe your project requirements, location, and any specific needs..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center rounded-xl bg-yellow-400 px-8 py-5 text-lg font-semibold text-gray-900 shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 hover-scale"
                    >
                      Send My Request
                      <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* Information Panel */}
              <div className="mt-16 lg:mt-0">
                <div className="bg-gray-50 rounded-3xl p-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                    What Happens Next?
                  </h3>
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full shadow-lg">
                          <span className="text-lg font-bold text-gray-900">1</span>
                        </div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Initial Contact</h4>
                        <p className="text-gray-600 leading-relaxed">We&apos;ll contact you within 24 hours to discuss your project requirements.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full shadow-lg">
                          <span className="text-lg font-bold text-gray-900">2</span>
                        </div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Site Assessment</h4>
                        <p className="text-gray-600 leading-relaxed">Our experts will evaluate your site and requirements for an accurate proposal.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full shadow-lg">
                          <span className="text-lg font-bold text-gray-900">3</span>
                        </div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Proposal</h4>
                        <p className="text-gray-600 leading-relaxed">Receive a detailed proposal with timeline, specifications, and pricing.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full shadow-lg">
                          <span className="text-lg font-bold text-gray-900">4</span>
                        </div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Launch</h4>
                        <p className="text-gray-600 leading-relaxed">Once approved, we begin your project with dedicated project management.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 p-8 bg-yellow-100 rounded-2xl">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      🏆 Why Choose Us?
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></span>
                        10+ years of industry experience
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></span>
                        50+ successful projects completed
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></span>
                        Nationwide service coverage
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></span>
                        Comprehensive warranty and support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></span>
                        Eco-friendly solutions available
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-yellow-400 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Need Emergency Service?
            </h2>
            <p className="mt-8 text-xl leading-8 text-gray-800 max-w-3xl mx-auto mb-12">
              Existing customers can reach our 24/7 emergency support line for urgent maintenance needs.
            </p>
            <div className="flex justify-center">
              <a
                href="tel:555-123-9999"
                className="inline-flex items-center rounded-2xl bg-gray-900 px-10 py-5 text-lg font-semibold text-white shadow-lg hover:bg-gray-800 transition-all duration-200 hover-scale"
              >
                🚨 Emergency Line: (555) 123-9999
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
