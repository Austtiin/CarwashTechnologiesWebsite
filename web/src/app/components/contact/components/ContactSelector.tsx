'use client';

import React, { useState } from 'react';
import ContactOptionCard from './ContactOptionCard';
import ContactForm from './ContactForm';
import BlurText from '../../animations/BlurText';

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

  return (
    <section className="relative py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden sm:py-16 lg:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-16 w-12 h-12 border-2 border-[#f0da11]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-32 left-20 w-8 h-8 border-2 border-blue-400/15 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #f0da11 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {!selectedContact ? (
            <>
              {/* Selection Header */}
              <div className="text-center mb-12 sm:mb-16">
                <BlurText
                  text="How Can We Help?"
                  delay={0.1}
                  duration={0.8}
                  className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
                />
                <p className="text-lg text-gray-600 max-w-3xl mx-auto sm:text-xl">
                  Choose the service area you&#39;re interested in to get connected with the right specialist
                </p>
              </div>

              {/* Contact Options Grid */}
              <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={resetSelection}
                  className="inline-flex items-center text-gray-600 hover:text-gray-800 group transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to options
                </button>
              </div>

              {/* Selected Service Header */}
              <div className="text-center mb-8 sm:mb-12">
                <div className={`inline-flex items-center bg-gradient-to-br ${selectedOption?.bgColor} rounded-full px-4 py-2 mb-4 sm:px-6 sm:py-3 sm:mb-6`}>
                  <span className="font-medium text-gray-800 text-sm sm:text-base">
                    {selectedOption?.title}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-3 sm:text-4xl md:text-5xl sm:mb-4">
                  Let&#39;s Connect
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto sm:text-xl">
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
    </section>
  );
}