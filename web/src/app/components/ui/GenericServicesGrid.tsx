"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundImage?: string;
  link?: string;
}

interface GenericServicesGridProps {
  eyebrow?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  items: ServiceItem[];
  columns?: 2 | 3 | 4;
  backgroundVariant?: 'white' | 'light-grey';
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export default function GenericServicesGrid({
  eyebrow,
  title,
  highlightedWord,
  description,
  items,
  columns = 4,
  backgroundVariant = 'light-grey',
  showCTA = true,
  ctaText = 'Learn More',
  ctaLink = '/contact'
}: GenericServicesGridProps) {
  const bgClass = backgroundVariant === 'light-grey' ? 'bg-[#f6f6f6]' : 'bg-white';
  const colClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <section className={`relative ${bgClass} py-24 overflow-hidden`}>
      {/* Subtle Wave Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="#1f2937" fill="none" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                {eyebrow}
              </span>
            </div>
          )}
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {highlightedWord ? (
              <>
                {title.split(highlightedWord)[0]}
                <span className="text-[#f0da11]">{highlightedWord}</span>
                {title.split(highlightedWord)[1]}
              </>
            ) : (
              title
            )}
          </h2>
          
          {description && (
            <p className="text-lg text-gray-600">
              {description}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className={`grid ${colClass} gap-6 mb-12`}>
          {items.map((item, index) => {
            const CardContent = (
              <div
                className={`relative group bg-white p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-l-4 border-transparent hover:border-[#f0da11] h-full ${
                  item.link ? 'cursor-pointer' : ''
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {item.backgroundImage && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.backgroundImage}
                      alt=""
                      fill
                      className="object-cover"
                      style={{ opacity: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gray-100 text-gray-900 flex items-center justify-center mb-6 group-hover:bg-[#f0da11] group-hover:text-black transition-all duration-200">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f0da11] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.link && (
                    <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-[#f0da11]">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );

            return item.link ? (
              <Link href={item.link} key={index} className="block h-full">
                {CardContent}
              </Link>
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {showCTA && ctaLink && (
          <div className="text-center">
            <Link 
              href={ctaLink}
              className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#f0da11] transition-colors group"
            >
              {ctaText}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
