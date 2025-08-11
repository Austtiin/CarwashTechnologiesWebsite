// Server Component
import React from 'react';
import Image from 'next/image';
import BlurText from '../../animations/BlurText';

export default function HeroSection() {
  return (
    <section className="relative min-h-500px bg-gradient-to-br from-yellow-400/40 via-white/80 to-yellow-200/90 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
        
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/30 rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-24 h-24 border border-yellow-400/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '20s'}} />
          <div className="absolute bottom-32 left-32 w-16 h-16 bg-yellow-400/10 rounded-full animate-bounce" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-40 right-20 w-20 h-20 border border-yellow-400/25 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Content */}
            <div className="text-center lg:text-left space-y-8 bg-white/15 rounded-2xl p-10">
              {/* Logo above title on mobile/tablet */}
              <div className="lg:hidden flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl" />
                  
                  <Image
                    src="/logoCWT.webp"
                    alt="Carwash Technologies Logo"
                    width={100}
                    height={100}
                    className="relative rounded-2xl shadow-lg p-4"
                  />
                </div>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold !text-black leading-tight">
                  Carwash
                  <span className="block text-yellow-400">Technologies</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 font-light max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  Premium Equipment • Expert Service • Quality Chemicals
                </p>
              </div>

              {/* Interactive rotating text component */}
              <div className="py-6">
                
              </div>

              {/* Description */}
              <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transforming wash operations across the Midwest with over 50 years of combined expertise in equipment sales, service, and chemical programs.
              </p>

              {/* Market Serving Text */}
              

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center pt-4">
                <button className="group bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                  Get Started Today
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  </span>
                </button>

                <button className="group border-2 border-slate-900 text-black px-8 py-4 rounded-xl text-lg hover:bg-yellow-400/20 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (612) 408-9010
                  </span>
                </button>
                </div>

              <BlurText
                  text="Proudly serving the Minnesota, North Dakota, South Dakota and Wisconsin markets."
                  delay={0.5}
                  className="text-center text-md md:text-xl text-black drop-shadow-lg"
                />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700 justify-items-center">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Emergency Service</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right side - Logo showcase (desktop only) */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-500/30 to-yellow-400/5 rounded-3xl transform scale-110 blur overflow-hidden" />

                {/* Logo container */}
                <div className="relative backdrop-blur-sm rounded-3xl p-12 border border-yellow-400/20 shadow-2xl">
                  <Image
                    src="/logoCWT.webp"
                    alt="Carwash Technologies Logo"
                    width={300}
                    height={300}
                    className="rounded-2xl"
                    priority
                  />
                </div>

                {/* Floating elements around logo */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400/20 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-400/30 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-yellow-400/25 rounded-full animate-ping" style={{animationDelay: '2s'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean professional transition - NO WAVES */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* Simple clean edge */}
        <div className=""></div>
      </div>
    </section>
  );
}