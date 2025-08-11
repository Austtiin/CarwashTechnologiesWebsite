'use client';

import React from 'react';
import BlurText from '../animations/BlurText';

interface Stats {
  totalSheets: number;
  manufacturers: number;
  access: string;
  compliance: string;
}

interface SDSHeroProps {
  stats: Stats;
}

export default function SDSHero({ stats }: SDSHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#26231d] via-[#595646] to-[#4c6461] text-white py-24 overflow-hidden">
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
      
      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center bg-[#f0da11]/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-[#f0da11]/30">
            <svg className="w-5 h-5 mr-3 text-[#f0da11]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-[#f0da11] tracking-wide">SAFETY COMPLIANCE CENTER</span>
          </div>
          
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#cecece] via-[#f0da11] to-[#bfb986] bg-clip-text text-transparent">
                Safety Data Sheets
              </span>
            </h1>
          </div>
        
          <div className="flex justify-center mb-12">
            <BlurText
              text="Comprehensive safety information for all our chemical products"
              delay={0.1}
              duration={0.8}
              className="text-xl md:text-2xl text-[#f0da11] max-w-4xl mx-auto leading-relaxed font-light"
            />
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#bfb986]/30">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#f0da11] mb-2">{stats.totalSheets}+</div>
              <div className="text-sm text-[#bfb986] font-medium uppercase tracking-wide">Safety Sheets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#f0da11] mb-2">{stats.manufacturers}</div>
              <div className="text-sm text-[#bfb986] font-medium uppercase tracking-wide">Manufacturers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#f0da11] mb-2">{stats.access}</div>
              <div className="text-sm text-[#bfb986] font-medium uppercase tracking-wide">Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#f0da11] mb-2">{stats.compliance}</div>
              <div className="text-sm text-[#bfb986] font-medium uppercase tracking-wide">Compliant</div>
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
            <linearGradient id="sdsWaveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0da11" stopOpacity="0.18" />
              <stop offset="40%" stopColor="#bfb986" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="url(#sdsWaveGradient)"
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