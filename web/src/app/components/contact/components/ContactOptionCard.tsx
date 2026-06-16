'use client';

import React from 'react';

interface ContactOption {
  id: string;
  title: string;
  description: string;
  details: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  icon: string;
  features: string[];
}

interface ContactOptionCardProps {
  option: ContactOption;
  onSelect: () => void;
}

// Client Component - Interactive card with hover effects
export default function ContactOptionCard({ option, onSelect }: ContactOptionCardProps) {
  const renderIcon = () => {
    const iconClass = "w-6 h-6 text-white";
    
    switch (option.icon) {
      case 'chemicals':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
          </svg>
        );
      case 'service':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'sales':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      type="button"
      onClick={onSelect}
      className="group cursor-pointer flex flex-col text-left bg-white p-6 pt-7 border border-gray-200 border-t-4 border-t-[#f0da11] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-4 group-hover:bg-[#f0da11] group-hover:text-black transition-colors duration-300 shadow-sm">
        {renderIcon()}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {option.title}
      </h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {option.details}
      </p>

      {/* Features List */}
      <ul className="text-sm text-gray-600 mb-5 space-y-2">
        {option.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg className="w-4 h-4 text-[#f0da11] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto inline-flex items-center font-bold text-base text-gray-900 group-hover:text-[#d0b211] transition-colors duration-300">
        <span className="mr-2">Get Started</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </button>
  );
}
