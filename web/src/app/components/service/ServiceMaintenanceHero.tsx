'use client';

import React from 'react';
import BlurText from '../animations/BlurText';

export default function ServiceMaintenanceHero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #f0da11 1px, transparent 1px), linear-gradient(to bottom, #f0da11 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Accent Elements */}
      <div className="absolute top-0 left-0 w-2 h-48 bg-[#f0da11]"></div>
      <div className="absolute bottom-0 right-0 w-48 h-2 bg-[#f0da11]"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-[#f0da11] bg-gray-800/50">
            <span className="text-[#f0da11] font-bold uppercase tracking-wider text-sm">Expert Service & Maintenance</span>
          </div>

          <BlurText
            text="Service & Maintenance"
            delay={0.1}
            duration={0.8}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          />

          <div className="flex justify-center">
            <BlurText
              text="Professional maintenance services to keep your wash running at peak performance"
              delay={0.0}
              duration={0.0}
              className="text-xl md:text-2xl text-[#f0da11] max-w-3xl mx-auto leading-relaxed font-light"
            />

          </div>
        
          {/* Additional service highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="border-2 border-gray-700 bg-gray-800/50 p-6 text-center">
              <div className="text-3xl font-bold text-[#f0da11] mb-2">24/7</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Emergency Service</div>
            </div>
            <div className="border-2 border-gray-700 bg-gray-800/50 p-6 text-center">
              <div className="text-3xl font-bold text-[#f0da11] mb-2">Certified</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Technicians</div>
            </div>
            <div className="border-2 border-gray-700 bg-gray-800/50 p-6 text-center md:col-span-1 col-span-2">
              <div className="text-3xl font-bold text-[#f0da11] mb-2">Preventive</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,90 C480,30 960,150 1440,90 L1440,120 L0,120 Z" fill="#fff" fillOpacity="0.8" />
        </svg>
      </div>
    </section>
  );
}

