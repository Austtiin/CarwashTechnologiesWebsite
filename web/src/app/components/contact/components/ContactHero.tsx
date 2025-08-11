import React from 'react';
import BlurText from '../../animations/BlurText';

// Server Component - Static hero content
export default function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-[50vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0da11]/20 via-yellow-600/10 to-yellow-600/20 opacity-70"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#f0da11]/40 rotate-45 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400/30 rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-16 w-8 h-8 bg-purple-400/25 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 right-12 w-5 h-5 bg-orange-400/35 rotate-45 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(240, 218, 17, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 218, 17, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <BlurText
            text="Get In Touch"
            delay={0.1}
            duration={0.6}
            className="text-4xl font-extrabold text-white mb-6 tracking-tight"
          />
          <BlurText
            text="Ready to transform your wash operation? Let's discuss your specific needs and create a customized solution that drives results."
            delay={0.3}
            duration={0.8}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed sm:text-2xl"
          />
          
          {/* Static CTA badges */}
          <div className="flex flex-col gap-4 justify-center items-center mt-8 sm:flex-row sm:gap-6">
            <div className="bg-gradient-to-r from-[#f0da11] to-[#e6c200] text-gray-900 px-8 py-4 rounded-xl font-bold shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <span className="flex items-center">
                Quick Response Guarantee
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
            </div>
            <div className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
              <span className="flex items-center">
                24/7 Emergency Service
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 md:h-32"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="contactWaveGradient" x1="0" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#F3F4F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F9FAFB" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="url(#contactWaveGradient)"
          />
        </svg>
      </div>
    </section>
  );
}