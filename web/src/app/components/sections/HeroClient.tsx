'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BlurText from '../animations/BlurText';
import ShinyText from '../animations/ShinyText';
import SafeLink from '../../components/ui/SafeLink'; // Adjust the import based on your project structure

export default function HeroClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple delay to ensure components are ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Show loading state until ready
  if (!isLoaded) {
    return (
      <div className="relative">
        <div className="opacity-50">
          <div className="block">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 block">
              Welcome to
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-900 block">
              Carwash Technologies
            </h1>
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 block p-2.50 mb-6">
            Sales, Service and Consulting
          </p>
          <p className="text-xl md:text-xl mb-8 text-white">
            Carwash Technologies proudly service the Minnesota, North Dakota, South Dakota and Wisconsin markets.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10">
      <div className="block">
        <ShinyText
          text="Welcome to"
          disabled={false}
          speed={3}
          className="text-4xl md:text-3xl lg:text-4xl font-extrabold !text-gray-900 block drop-shadow-sm"
        />
        <ShinyText
          text="Carwash Technologies"
          disabled={false}
          speed={3}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 !text-gray-900 block drop-shadow-sm"
        />
      </div>

      <BlurText
        text="Sales, Service and Consulting"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl md:text-3xl lg:text-4xl font-semibold !text-gray-900 block p-2.50 mb-6 drop-shadow-sm"
      />

      <BlurText
        text="Carwash Technologies proudly service the Minnesota, North Dakota, South Dakota and Wisconsin markets."
        delay={200}
        animateBy="words"
        direction="bottom"
        className="text-xl md:text-xl mb-8 !text-white drop-shadow-lg"
      />

      {/* Button container with animation */}
      <div 
        className="flex flex-col sm:flex-row gap-4"
        style={{
          animation: 'fadeInUp 0.6s ease-out 0.4s both'
        }}
      >
        <SafeLink 
          href="/contact" 
          className="block bg-[#f0da11] text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
        >
          Get Started
        </SafeLink>
        <SafeLink 
          href="/services" 
          className="block border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-center"
        >
          Our Services
        </SafeLink>
      </div>

      {/* Add the keyframe animation */}
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
    </div>
  );
}