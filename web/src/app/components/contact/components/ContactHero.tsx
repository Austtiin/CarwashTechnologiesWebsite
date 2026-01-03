import React from 'react';
import BlurText from '../../animations/BlurText';

// Server Component - Static hero content
export default function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-[50vh] flex items-center">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute -top-32 -left-24 h-64 w-64 rounded-full bg-[#f0da11]/12 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 h-72 w-72 rounded-full bg-slate-500/20 blur-3xl" />
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
                Emergency Service Available
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