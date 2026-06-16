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
  const bgClass = backgroundVariant === 'light-grey' ? 'bg-slate-50' : 'bg-white';
  const colClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <section className={`relative ${bgClass} py-12 sm:py-16 overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          {eyebrow && (
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                {eyebrow}
              </span>
            </div>
          )}
          
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
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
            <p className="text-sm sm:text-base text-gray-600">
              {description}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className={`grid ${colClass} gap-4 sm:gap-5 mb-8 sm:mb-10`}>
          {items.map((item, index) => {
            const CardContent = (
              <div
                className={`relative group bg-white p-5 sm:p-6 border border-gray-200 border-l-4 border-l-[#f0da11] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-full ${
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-white via-white/96 to-white/75" />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-11 h-11 bg-slate-900 text-white flex items-center justify-center mb-4 group-hover:bg-[#f0da11] group-hover:text-black transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#d0b211] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {item.link && (
                    <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-[#d0b211]">
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

