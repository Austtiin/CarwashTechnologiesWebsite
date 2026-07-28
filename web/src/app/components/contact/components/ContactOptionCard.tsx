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

export default function ContactOptionCard({ option, onSelect }: ContactOptionCardProps) {
  const renderIcon = () => {
    const cls = 'w-7 h-7 text-slate-900';
    switch (option.icon) {
      case 'chemicals':
        return (
          <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
          </svg>
        );
      case 'service':
        return (
          <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'sales':
        return (
          <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      className="group cursor-pointer flex flex-col text-left bg-slate-950 border border-slate-800 hover:border-[#f0da11] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(240,218,17,0.12)] hover:-translate-y-1"
    >
      {/* Yellow accent bar */}
      <div className="h-1 w-full bg-[#f0da11] group-hover:h-1.5 transition-all duration-300" />

      <div className="flex flex-col h-full p-7">
        {/* Icon row */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 bg-[#f0da11] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            {renderIcon()}
          </div>
          <svg
            className="w-5 h-5 text-slate-700 group-hover:text-[#f0da11] group-hover:translate-x-1 transition-all duration-300"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Title + detail */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f0da11] transition-colors duration-300">
          {option.title}
        </h3>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          {option.details}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-7">
          {option.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
              <svg className="w-4 h-4 text-[#f0da11] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <div className="mt-auto">
          <div className="w-full bg-slate-800 group-hover:bg-[#f0da11] text-slate-300 group-hover:text-slate-900 font-bold text-sm uppercase tracking-wider py-3.5 px-5 flex items-center justify-between transition-all duration-300">
            <span>Contact Now</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}
