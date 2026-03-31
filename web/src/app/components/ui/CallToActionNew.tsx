'use client';

// Clean Tech Call to Action Section
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/PDQ.webp"
          alt="Car wash equipment"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            {description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-4">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={
                button.variant === 'primary'
                  ? 'flex-1 inline-flex items-center justify-center gap-2 bg-[#f0da11] text-black px-6 py-3 font-semibold text-sm sm:text-base rounded-md hover:bg-[#d0b211] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5'
                  : 'flex-1 inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 font-semibold text-sm sm:text-base rounded-md hover:bg-gray-900 hover:text-white transition-all duration-200'
              }
            >
              {button.text}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ))}
        </div>

        {contactInfo?.phone && contactInfo.showContactCard && (
          <div className="mt-6 max-w-3xl mx-auto text-center text-sm text-gray-600">
            <span className="font-semibold mr-1">Prefer to talk now?</span>
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}
              className="font-semibold text-gray-900 hover:text-[#f0da11]"
            >
              Call {contactInfo.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
