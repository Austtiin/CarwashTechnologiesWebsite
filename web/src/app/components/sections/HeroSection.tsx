// Server Component
import React from 'react';
import Image from 'next/image';
import HeroClient from './HeroClient';
import AuroraBackground from '../animations/AuroraBackground';

export default function HeroSection() {
  return (
    <section className="relative z-10 bg-gradient-to-br from-white/100 via-white/30 to-white/50 text-white py-16 min-h-[70vh] flex items-center overflow-hidden">
      {/* Aurora Background - spans entire section */}
      <AuroraBackground />
      
      {/* Static background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-[1]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 16px 16px, rgba(0, 0, 0, 0.15) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Client component for interactive content */}
          <HeroClient />
          
          {/* Static logo - Server rendered */}
          <div className="fade-in-up flex justify-center">
            <div className="flex items-center justify-center w-[350px] h-[350px] bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 relative z-10">
              <Image
              src="/logoCWT.webp"
              alt="Carwash Technologies Logo"
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
              loading="eager"
              width={320}
              height={320}
              style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Static SVG wave - Server rendered */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-40 md:h-40"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroWaveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FEFCE8" stopOpacity=".8" />
              <stop offset="100%" stopColor="#FEFCE8" stopOpacity="1" />
              <stop offset="50%" stopColor="#FEFCE8" stopOpacity=".8" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="url(#heroWaveGradient)"
          />
          <path
            d="M0,90 C480,30 960,150 1440,90 L1440,120 L0,120 Z"
            fill="#FEFCE8"
            fillOpacity="1.0"
          />
        </svg>
      </div>
    </section>
  );
}