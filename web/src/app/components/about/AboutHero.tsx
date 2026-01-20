// filepath: d:\Documents\GitHub\CarwashTechnologiesWebsite\web\src\app\components\about\AboutHero.tsx
'use client';

import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.10]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Accent Elements */}
      <div className="absolute top-0 left-0 w-2 h-48 bg-[#f0da11]"></div>
      <div className="absolute bottom-0 right-0 w-48 h-2 bg-[#f0da11]"></div>
      <div className="absolute top-16 right-16 w-24 h-24 border-4 border-[#f0da11]/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-[#f0da11] bg-gray-100">
            <span className="text-gray-900 font-bold uppercase tracking-wider text-sm">About Our Company</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Carwash Technologies
          </h1>

          <div className="flex justify-center">
            <h2 className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              50+ years of combined expertise in wash solutions across the Midwest
            </h2>
          </div>

          {/* Stats or highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="border-l-4 border-transparent hover:border-[#f0da11] bg-white shadow-sm hover:shadow-xl p-6 text-center transition-all duration-300">
              <div className="text-3xl font-bold text-[#f0da11] mb-2">50+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Years Combined Experience</div>
            </div>
            <div className="border-l-4 border-transparent hover:border-[#f0da11] bg-white shadow-sm hover:shadow-xl p-6 text-center transition-all duration-300">
              <div className="text-3xl font-bold text-[#f0da11] mb-2">500+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Installations</div>
            </div>
            <div className="border-l-4 border-transparent hover:border-[#f0da11] bg-white shadow-sm hover:shadow-xl p-6 text-center transition-all duration-300">
              <div className="text-3xl font-bold text-[#f0da11] mb-2">4</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">States Served</div>
            </div>
            <div className="border-l-4 border-transparent hover:border-[#f0da11] bg-white shadow-sm hover:shadow-xl p-6 text-center transition-all duration-300">
              <div className="text-3xl font-bold text-[#f0da11] mb-2">98%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}