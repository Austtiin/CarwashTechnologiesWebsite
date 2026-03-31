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
    { src: '/logos/logoSimo.webp', alt: 'Simoniz', width: 100, height: 100 },
    { src: '/logos/ChemQuest-960w.webp', alt: 'ChemQuest', width: 100, height: 100 },
    { src: '/logos/logoVertech.webp', alt: 'Vertech', width: 100, height: 100 }
  ];

  return (
    <section className="relative bg-white py-12 sm:py-14 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#f0da11]"></div>
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Chemistry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Premium Wash <span className="text-[#f0da11]">Chemicals</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed">
              High-quality wash chemicals that deliver superior cleaning results while being 
              environmentally responsible. Our chemical programs are designed to maximize 
              efficiency and minimize waste.
            </p>
            
            {/* Feature List */}
            <ul className="space-y-2 mb-6">
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
              className="inline-block bg-[#f0da11] text-black font-semibold px-6 py-3 text-sm rounded-md hover:bg-[#d0b211] hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Explore Chemical Programs
            </Link>
          </div>
          
          {/* Right Column - Partners Card */}
          <div className="bg-white p-6 sm:p-7 lg:p-8 shadow-md border border-gray-100">
            {/* Partners Logos */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider text-center mb-5">
                Trusted Chemicals from Leading Brands
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                {partners.map((partner, index) => (
                  <div key={index} className="hover:scale-110 transition-all duration-300">
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
            <div className="text-center pt-6 border-t border-gray-100">
              <div className="w-10 h-10 bg-gray-100 text-gray-900 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-sm text-gray-600">
                All of our chemicals meet the highest industry standards for performance 
                and environmental safety.
              </p>
            </div>
          </div>
          
        </div>
      </div>


    </section>
  );
}
