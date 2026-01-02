// Server Component
import React from 'react';
import Image from 'next/image';
import BlurText from '../../animations/BlurText';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 min-h-[70vh] flex items-center py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left side - Content */}
            <div className="text-center lg:text-left space-y-8 bg-gray-900/40 border-2 border-gray-700 p-8 lg:p-10">
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
                <h1 className="hidden md:block font-friz text-4xl lg:text-6xl font-bold text-white leading-tight">
                  CARWASH
                  <span className="block text-[#f0da11]">Technologies</span>
                </h1>
                <p className="text-sm lg:text-2xl text-gray-200 font-light max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  Premium Equipment  •  Expert Service  •  Quality Chemicals
                </p>
              </div>

              {/* Description */}
              <BlurText
                text="Transforming wash operations across the Midwest with over 50 years of combined expertise in equipment sales, service, and chemical programs."
                delay={0.0}
                duration={0.0}
                className="text-center lg:text-left text-lg md:text-xl text-gray-200"
              />

                {/* CTA Buttons */}
                <div className="flex items-center flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contact" className="group bg-[#f0da11] text-black px-8 py-4 font-semibold text-lg hover:bg-[#d0b211] transition-colors duration-200 shadow-lg flex items-center justify-center">
                  Get Started Today
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/about" className="group border-2 border-gray-500 text-gray-100 px-8 py-4 text-lg hover:bg-gray-800/80 hover:border-gray-300 hover:text-white transition-colors duration-200 backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (612) 408-9010
                  </span>
                </Link>
                </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t-2 border-gray-700 justify-items-center">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#f0da11] mb-1">50+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#f0da11] mb-1">24/7</div>
                  <div className="text-sm text-gray-200">Emergency Service</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#f0da11] mb-1">100%</div>
                  <div className="text-sm text-gray-200">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right side - Logo showcase (desktop only) */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700/40 via-gray-900/60 to-gray-700/40 transform scale-110 blur overflow-hidden" />

                {/* Logo container */}
                <div className="relative backdrop-blur-sm p-12 border-2 border-gray-600 shadow-2xl bg-gray-900/60">
                  <Image
                    src="/logoCWT.webp"
                    alt="Carwash Technologies Logo"
                    width={300}
                    height={300}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}