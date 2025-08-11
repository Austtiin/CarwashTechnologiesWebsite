'use client';

import React from 'react';
import BlurText from '../animations/BlurText';

export default function ServiceMaintenanceHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#26231d] via-[#595646] to-[#4c6461] text-white py-24">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#f0da11]/20 to-transparent rounded-full opacity-60 -translate-x-48 -translate-y-48 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#d0b211]/30 to-transparent rounded-full opacity-50 translate-x-32 translate-y-32 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[#bfb986]/15 to-transparent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #cecece 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-[#f0da11]/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-[#f0da11]/30">
            <svg className="w-5 h-5 mr-3 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
            <span className="text-sm font-semibold text-[#f0da11] tracking-wide">Expert Service & Maintenance</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#cecece] via-[#f0da11] to-[#bfb986] bg-clip-text text-transparent">
              Service & Maintenance
            </span>
          </h1>

          <div className="flex justify-center">
            <BlurText
              text="Professional maintenance services to keep your wash running at peak performance"
              delay={0.1}
              duration={0.8}
              className="text-xl md:text-2xl text-[#f0da11] max-w-3xl mx-auto leading-relaxed font-light"
            />
          </div>

          {/* Additional service highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#f0da11]/30">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#f0da11] mb-1">24/7</div>
              <div className="text-sm text-[#cecece]">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#f0da11] mb-1">Certified</div>
              <div className="text-sm text-[#cecece]">Technicians</div>
            </div>
            <div className="text-center md:col-span-1 col-span-2">
              <div className="text-2xl md:text-3xl font-bold text-[#f0da11] mb-1">Preventive</div>
              <div className="text-sm text-[#cecece]">Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-32 md:h-40"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="serviceWaveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0da11" stopOpacity="0.18" />
              <stop offset="40%" stopColor="#bfb986" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="url(#serviceWaveGradient)"
          />
          <path
            d="M0,90 C480,30 960,150 1440,90 L1440,120 L0,120 Z"
            fill="#fff"
            fillOpacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
}