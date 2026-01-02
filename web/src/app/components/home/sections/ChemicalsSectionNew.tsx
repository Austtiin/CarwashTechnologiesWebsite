'use client';

// Clean Tech Chemicals Section
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ChemicalsSectionNew() {
  const features = [
    'Pre-soak and tire cleaners',
    'Foaming detergents and soaps',
    'Spot-free rinse aids and drying agents',
    'Wax and protective coatings'
  ];

  const partners = [
    { src: '/logoSimo.webp', alt: 'Simoniz', width: 100, height: 100 },
    { src: '/logoCWT.webp', alt: 'Carwash Technologies', width: 100, height: 100 },
    { src: '/logoVertech.webp', alt: 'Vertech', width: 100, height: 100 }
  ];

  return (
    <section className="relative bg-gradient-to-tr from-white via-blue-50/20 to-white py-24 overflow-hidden">
      {/* Circular Wave Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="25" fill="none" stroke="#1f2937" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>
      {/* Chemistry Bubbles */}
      <div className="absolute top-20 right-1/4 w-6 h-6 rounded-full border-2 border-blue-400/20 hidden lg:block"
           style={{ animation: 'bubbleRise 6s ease-in-out infinite' }} />
      <div className="absolute top-32 right-1/3 w-8 h-8 rounded-full border-2 border-blue-400/15 hidden lg:block"
           style={{ animation: 'bubbleRise 7s ease-in-out infinite 1.5s' }} />
      <div className="absolute bottom-24 left-1/4 w-5 h-5 rounded-full border border-blue-300/20 hidden lg:block"
           style={{ animation: 'bubbleRise 6.5s ease-in-out infinite 3s' }} />

      {/* Sparkle Effects */}
      <div className="absolute top-1/4 right-20 w-1 h-1 bg-[#f0da11] rounded-full hidden lg:block"
           style={{ animation: 'sparkle 2s ease-in-out infinite' }} />
      <div className="absolute top-1/3 right-32 w-1 h-1 bg-[#f0da11] rounded-full hidden lg:block"
           style={{ animation: 'sparkle 2s ease-in-out infinite 1s' }} />
      {/* Flowing Line Accent */}
      <div className="absolute top-1/2 left-0 w-full h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-[#f0da11]/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div style={{ animation: 'fadeInUp 0.6s ease-out forwards', opacity: 0 }}>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]"></div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Chemistry</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Wash <span className="text-[#f0da11]">Chemicals</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              High-quality wash chemicals that deliver superior cleaning results while being 
              environmentally responsible. Our chemical programs are designed to maximize 
              efficiency and minimize waste.
            </p>
            
            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[#f0da11] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <Link 
              href="/chemical-sales"
              className="inline-block bg-[#f0da11] text-black font-semibold px-8 py-3.5 hover:-translate-y-0.5 transition-transform duration-200 shadow-sm hover:shadow-md"
            >
              Explore Chemical Programs
            </Link>
          </div>
          
          {/* Right Column - Partners Card */}
          <div 
            className="bg-white p-12 shadow-md border border-gray-100"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards', opacity: 0 }}
          >
            {/* Partners Logos */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider text-center mb-6">
                Trusted Partners
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                {partners.map((partner, index) => (
                  <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                    <Image 
                      src={partner.src} 
                      alt={partner.alt} 
                      width={partner.width} 
                      height={partner.height} 
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Guarantee Content */}
            <div className="text-center pt-8 border-t border-gray-100">
              <div className="w-12 h-12 bg-gray-100 text-gray-900 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                All of our chemicals meet the highest industry standards for performance 
                and environmental safety.
              </p>
            </div>
          </div>
          
        </div>
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

        @keyframes bubbleRise {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          50% {
            transform: translateY(-200px) translateX(20px) scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-400px) translateX(-10px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
    </section>
  );
}
