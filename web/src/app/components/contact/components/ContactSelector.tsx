'use client';

import React, { useState } from 'react';
import ContactOptionCard from './ContactOptionCard';
import ContactForm from './ContactForm';

type ContactType = 'chemicals' | 'service' | 'sales';

interface ContactOption {
  id: ContactType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  details: string;
  icon: string;
  features: string[];
}

interface ContactSelectorProps {
  contactOptions: ContactOption[];
}

// Client Component - Handles selection state and navigation
export default function ContactSelector({ contactOptions }: ContactSelectorProps) {
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(null);

  const selectedOption = contactOptions.find(option => option.id === selectedContact);

  const resetSelection = () => {
    setSelectedContact(null);
  };

  const sectionPadding = selectedContact ? 'py-10 md:py-12' : 'py-16';

  return (
    <section className={`relative ${sectionPadding} bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1f2937 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Subtle Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0da11]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0da11]/30 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {!selectedContact ? (
            <>
              {/* Selection Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-[#f0da11]"></div>
                  <span className="text-gray-600 font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
                  <div className="w-10 h-px bg-[#f0da11]"></div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How Can We <span className="text-[#f0da11]">Help</span>?
                </h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Select your area of interest below to connect with the right specialist for your needs
                </p>
              </div>

              {/* Contact Options Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {contactOptions.map((option) => (
                  <ContactOptionCard
                    key={option.id}
                    option={option}
                    onSelect={() => setSelectedContact(option.id)}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Back Button */}
              <div className="mb-8">
                <button
                  onClick={resetSelection}
                  className="inline-flex items-center text-gray-700 hover:text-[#f0da11] group transition-colors duration-300 border-2 border-gray-300 px-6 py-3 bg-white hover:bg-gray-50 shadow-sm cursor-pointer"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to options
                </button>
              </div>

              {/* Selected Service Header */}
              <div className="text-center mb-6" style={{ animation: 'slideInFromRight 0.5s ease-out forwards' }}>
                <div className={`inline-flex items-center bg-gradient-to-br ${selectedOption?.bgColor} border-2 ${selectedOption?.borderColor} px-6 py-3 mb-6 shadow-sm`}>
                  <span className="font-bold text-gray-900 text-base uppercase tracking-wide">
                    {selectedOption?.title}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Inquire about <span className="text-[#f0da11]">{selectedOption?.title}</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                  {selectedOption?.details}
                </p>
              </div>

              {/* Contact Form */}
              <ContactForm
                selectedOption={selectedOption}
                onReset={resetSelection}
              />
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}