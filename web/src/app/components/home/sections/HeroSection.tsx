// Server Component
import React from 'react';
import Image from 'next/image';
import BlurText from '../../animations/BlurText';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-200/20 via-white/80 to-yellow-200/50 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {/* Base fabric-like texture overlay - MORE PROMINENT */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-white/70 to-yellow-200/20" />
          {/* Enhanced fabric weave pattern */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 3px,
                  rgba(117, 88, 1, 0.25) 3px,
                  rgba(255, 193, 7, 0.25) 6px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 3px,
                  rgba(255, 193, 7, 0.15) 3px,
                  rgba(255, 193, 7, 0.15) 6px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 1px,
                  rgba(255, 255, 255, 0.3) 1px,
                  rgba(255, 255, 255, 0.3) 2px
                )
              `
            }}
          />
        </div>

        {/* Enhanced tech grid overlay */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(10, 8, 1, 0.2) 1px, transparent 1px),
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(8, 1, 1, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 8px 8px, 8px 8px'
          }}
        />

        {/* Enhanced depth gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/10 via-transparent to-yellow-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/15" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/80 via-white/70 to-yellow-300/50" />

        {/* MORE PROMINENT floating elements */}
        <div className="absolute inset-0 opacity-40">
          {/* Enhanced hexagonal tech patterns */}
          <div className="absolute top-10 left-4 w-20 h-20 sm:top-20 sm:left-20 sm:w-40 sm:h-40">
            <div className="w-full h-full border-2 border-yellow-400/50 transform rotate-30 animate-pulse bg-yellow-400 backdrop-blur-sm"
              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }} />
          </div>

          {/* Enhanced rotating geometric shapes */}
          <div className="absolute top-20 right-8 w-16 h-16 sm:top-40 sm:right-32 sm:w-32 sm:h-32">
            <div className="w-full h-full border-3 border-yellow-400/50 transform rotate-45 animate-spin bg-gradient-to-br from-yellow-400/20 to-transparent backdrop-blur-sm"
              style={{ animationDuration: '15s' }} />
          </div>

          {/* Enhanced circuit-like connections */}
          <div className="hidden sm:block absolute top-1/3 left-1/4 w-40 h-2 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-pulse rounded-full" />
          <div className="hidden sm:block absolute top-2/3 right-1/4 w-32 h-2 bg-gradient-to-l from-transparent via-yellow-400/35 to-transparent animate-pulse rounded-full" style={{ animationDelay: '1s' }} />

          {/* Enhanced floating orbs with stronger glow */}
          <div className="hidden sm:block absolute bottom-32 left-32 w-20 h-20 rounded-full bg-gradient-radial from-yellow-400/40 via-yellow-400/20 to-transparent animate-bounce backdrop-blur-sm border border-yellow-400/30" style={{ animationDelay: '2s' }} />
          <div className="hidden sm:block absolute bottom-40 right-20 w-24 h-24 rounded-full border-2 border-yellow-400/45 bg-gradient-radial from-yellow-400/25 to-transparent animate-pulse backdrop-blur-sm" style={{ animationDelay: '1s' }} />

          {/* Enhanced mobile elements */}
          <div className="sm:hidden absolute bottom-16 left-6 w-12 h-12 rounded-full bg-gradient-radial from-yellow-400/35 to-transparent animate-bounce border border-yellow-400/40" style={{ animationDelay: '1.5s' }} />

          {/* Additional tech elements for more prominence */}
          <div className="hidden lg:block absolute top-1/4 right-1/3 w-6 h-32 bg-gradient-to-b from-yellow-400/30 via-transparent to-yellow-400/30 animate-pulse transform rotate-12" style={{ animationDelay: '3s' }} />
          <div className="hidden lg:block absolute bottom-1/4 left-1/3 w-28 h-6 bg-gradient-to-r from-yellow-400/25 via-transparent to-yellow-400/25 animate-pulse transform -rotate-12" style={{ animationDelay: '4s' }} />
        </div>

        {/* Enhanced noise texture for more depth */}
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255, 193, 7, 0.2) 0%, transparent 60%),
              radial-gradient(circle at 80% 70%, rgba(255, 193, 7, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 60% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 70%)
            `
          }}
        />

        {/* Subtle animated shimmer effect */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"
            style={{
              animation: 'shimmer 4s ease-in-out infinite',
              width: '200%',
              left: '-50%'
            }}
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left side - Content */}
            <div className="text-center lg:text-left space-y-8 bg-white/10 rounded-2xl p-10">
              {/* Logo above title on mobile/tablet */}
              <div className="lg:hidden flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl" />
                  <Image
                    src="/logoCWT.webp"
                    alt="Carwash Technologies Logo"
                    width={200}
                    height={200}
                    className="rounded-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="hidden md:block font-friz text-5xl lg:text-7xl font-bold !text-black leading-tight">
                  CARWASH
                  <span className="block text-yellow-400">Technologies</span>
                </h1>
                <p className="text-sm lg:text-2xl text-gray-700 font-light max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  Premium Equipment  •  Expert Service  •  Quality Chemicals
                </p>
              </div>

              {/* Description */}
              <BlurText
                text="Transforming wash operations across the Midwest with over 50 years of combined expertise in equipment sales, service, and chemical programs."
                delay={0.0}
                duration={0.0}
                className="font-friz text-center lg:text-left text-xl md:text-xl text-black"
              />

                {/* CTA Buttons */}
                <div className="flex items-center flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contact" className="group bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1 flex items-center justify-center">
                  Get Started Today
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/about" className="group border-2 border-slate-900 text-black px-8 py-4 rounded-xl text-lg hover:bg-yellow-400/20 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (612) 408-9010
                  </span>
                </Link>
                </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700 justify-items-center">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">50+</div>
                  <div className="text-sm text-black">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">24/7</div>
                  <div className="text-sm text-black">Emergency Service</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-yellow-500 mb-1">100%</div>
                  <div className="text-sm text-black">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right side - Logo showcase (desktop only) */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-slate-500/15 to-yellow-500/10 rounded-3xl transform scale-110 blur overflow-hidden" />

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
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-yellow-400/25 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean professional transition */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
      </div>
    </section>
  );
}