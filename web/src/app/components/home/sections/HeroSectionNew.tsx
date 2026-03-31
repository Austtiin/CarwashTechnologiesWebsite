// Server Component - Clean Tech in Motion Hero
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSectionNew() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">

      {/* HomeHero Background Image - full section */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/imgs/HomeHero.png"
          alt="Professional car wash facility"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.85 }}
        />
        {/* Strong gradient overlay on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />
      </div>

      {/* Diagonal Water Flow Lines */}
       {/* decorative elements removed for a cleaner hero */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-12">
          {/* Main Content - Left Aligned */}
          <div className="relative z-10 w-full md:w-5/12 lg:w-1/2 text-left mb-10 md:mb-0 text-gray-900 bg-white/95 md:bg-transparent p-4 sm:p-6 rounded-2xl md:rounded-none md:p-0 md:pr-8">
            {/* Small eyebrow text */}
            <div className="inline-flex items-center gap-2 mb-5 text-xs sm:text-sm font-medium text-gray-600">
              <div className="w-8 h-[2px] bg-[#f0da11]" />
              <span>Professional Wash Systems</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 mb-2 leading-tight">
              Smart Car Wash Systems
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-[#f0da11] mb-4 leading-tight">
              Built for Growth
            </p>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-900 mb-6 max-w-xl font-normal">
              Increase uptime, improve wash quality, and scale your operation with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#f0da11] text-black px-6 py-3 font-semibold text-sm sm:text-base rounded-md hover:bg-[#d0b211] transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                Get a Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link 
                href="/services"
                className="group inline-flex items-center gap-2 bg-transparent border-2 border-gray-900 text-gray-900 px-6 sm:px-7 py-3 sm:py-3.5 font-semibold text-sm sm:text-base hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                View Solutions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right column left empty since background image covers this area */}
        </div>

      </div>
      

      {/* Subtle moving gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f0da11] to-transparent" />
    </section>
  );
}
