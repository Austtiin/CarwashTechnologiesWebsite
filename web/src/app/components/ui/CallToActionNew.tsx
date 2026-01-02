'use client';

// Clean Tech Call to Action Section
import React from 'react';
import Link from 'next/link';

interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface CallToActionProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  contactInfo?: {
    phone?: string;
    address?: string;
    showContactCard?: boolean;
  };
}

export default function CallToActionNew({
  title,
  description,
  buttons,
  contactInfo
}: CallToActionProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#f6f6f6] via-white to-gray-50 py-20 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1f2937 1px, transparent 1px),
            linear-gradient(to bottom, #1f2937 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Yellow Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f0da11] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f0da11] to-transparent opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f0da11]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Get In Touch</span>
            <div className="w-8 h-px bg-[#f0da11]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something <span className="text-[#f0da11]">Great</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're planning a new installation or need expert service, we're here to help every step of the way.
          </p>
        </div>

        {/* Contact Cards */}
        {contactInfo?.showContactCard && (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            
            {/* Phone Card */}
            {contactInfo.phone && (
              <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border-l-4 border-transparent hover:border-[#f0da11]">
                <div className="text-center">
                  <div className="w-14 h-14 bg-gray-100 text-gray-900 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f0da11] group-hover:text-black transition-all duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Call Us</h3>
                  <p className="text-lg text-gray-900 font-bold group-hover:text-[#f0da11] transition-colors">{contactInfo.phone}</p>
                </div>
              </div>
            )}

            {/* Quote Card */}
            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border-l-4 border-transparent hover:border-[#f0da11]">
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-100 text-gray-900 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f0da11] group-hover:text-black transition-all duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Get a Quote</h3>
                <Link 
                  href="/contact"
                  className="text-lg text-gray-900 font-bold hover:text-[#f0da11] transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Location Card */}
            {contactInfo.address && (
              <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border-l-4 border-transparent hover:border-[#f0da11]">
                <div className="text-center">
                  <div className="w-14 h-14 bg-gray-100 text-gray-900 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f0da11] group-hover:text-black transition-all duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Visit Us</h3>
                  <p 
                    className="text-sm text-gray-900 font-semibold leading-relaxed group-hover:text-[#f0da11] transition-colors" 
                    dangerouslySetInnerHTML={{ __html: contactInfo.address }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={
                button.variant === 'primary'
                  ? 'bg-[#f0da11] text-black font-semibold px-10 py-4 text-base hover:-translate-y-0.5 transition-transform duration-200 shadow-sm hover:shadow-md'
                  : 'bg-white text-gray-900 border-2 border-gray-200 font-semibold px-10 py-4 text-base hover:border-[#f0da11] hover:text-[#f0da11] transition-all duration-200 shadow-sm'
              }
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-20px) rotate(45deg);
          }
        }

        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.08;
          }
          50% {
            opacity: 0.12;
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes dropFall {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(300px) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
