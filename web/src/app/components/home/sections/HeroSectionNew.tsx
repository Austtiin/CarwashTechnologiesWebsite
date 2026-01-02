// Server Component - Clean Tech in Motion Hero
'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSectionNew() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white pt-20 pb-24 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1f2937 1px, transparent 1px),
              linear-gradient(to bottom, #1f2937 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Diagonal Water Flow Lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06] overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-full h-2 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
        <div className="absolute top-32 right-0 w-full h-1 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
        <div className="absolute top-52 right-0 w-full h-2 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
        <div className="absolute top-72 right-0 w-full h-1 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
      </div>

      {/* Water Droplets - Animated */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full hidden lg:block"
           style={{ animation: 'dropFall 3s ease-in infinite' }} />
      <div className="absolute top-10 left-1/3 w-3 h-3 bg-blue-400/15 rounded-full hidden lg:block"
           style={{ animation: 'dropFall 4s ease-in infinite 1s' }} />
      <div className="absolute top-32 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full hidden lg:block"
           style={{ animation: 'dropFall 3.5s ease-in infinite 2s' }} />
      <div className="absolute top-16 right-1/3 w-3 h-3 bg-blue-400/15 rounded-full hidden lg:block"
           style={{ animation: 'dropFall 4.5s ease-in infinite 0.5s' }} />

      {/* Soap Bubbles - Rising */}
      <div className="absolute bottom-20 left-16 w-8 h-8 rounded-full border-2 border-blue-300/20 hidden lg:block"
           style={{ animation: 'bubbleRise 6s ease-in-out infinite' }} />
      <div className="absolute bottom-32 left-32 w-6 h-6 rounded-full border-2 border-blue-300/15 hidden lg:block"
           style={{ animation: 'bubbleRise 7s ease-in-out infinite 2s' }} />
      <div className="absolute bottom-40 right-24 w-10 h-10 rounded-full border-2 border-blue-300/10 hidden lg:block"
           style={{ animation: 'bubbleRise 8s ease-in-out infinite 1s' }} />
      <div className="absolute bottom-24 right-40 w-5 h-5 rounded-full border-2 border-blue-300/20 hidden lg:block"
           style={{ animation: 'bubbleRise 6.5s ease-in-out infinite 3s' }} />

      {/* Sparkle/Shine Effects */}
      <div className="absolute top-1/4 left-20 w-1 h-1 bg-[#f0da11] rounded-full hidden lg:block"
           style={{ animation: 'sparkle 2s ease-in-out infinite' }} />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-[#f0da11] rounded-full hidden lg:block"
           style={{ animation: 'sparkle 2s ease-in-out infinite 0.5s' }} />
      <div className="absolute top-2/3 left-32 w-1 h-1 bg-[#f0da11] rounded-full hidden lg:block"
           style={{ animation: 'sparkle 2s ease-in-out infinite 1s' }} />
      <div className="absolute top-1/2 right-28 w-1 h-1 bg-[#f0da11] rounded-full hidden lg:block"
           style={{ animation: 'sparkle 2s ease-in-out infinite 1.5s' }} />

      {/* Floating Geometric Elements */}
      <div className="absolute top-32 left-16 w-16 h-16 border-2 border-[#f0da11]/10 transform rotate-45 hidden lg:block"
           style={{ animation: 'float 6s ease-in-out infinite' }} />
      <div className="absolute bottom-32 right-32 w-20 h-20 border-2 border-gray-900/5 hidden lg:block"
           style={{ animation: 'float 8s ease-in-out infinite 2s' }} />
      <div className="absolute top-1/2 right-16 w-12 h-12 border-2 border-[#f0da11]/5 transform -rotate-12 hidden lg:block"
           style={{ animation: 'float 7s ease-in-out infinite 1s' }} />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16 fade-in-up">
            {/* Small eyebrow text */}
            <div className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-gray-600">
              <div className="w-8 h-[2px] bg-[#f0da11]" />
              <span>Professional Car Wash Solutions</span>
              <div className="w-8 h-[2px] bg-[#f0da11]" />
            </div>

            {/* Hero Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Smarter Car Wash Operations<br />
              <span className="text-[#f0da11]">Built with Technology</span> That Scales
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
              Premium equipment, expert service, and proven strategies for wash businesses across the Midwest
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#f0da11] text-black px-8 py-4 font-semibold text-lg hover:bg-[#d0ba11] transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                Get Started Today
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/about"
                className="group inline-flex items-center gap-2 bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-4 font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">50<span className="text-[#f0da11]">+</span></div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">500<span className="text-[#f0da11]">+</span></div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Installations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f0da11] mb-2">100%</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f0da11] mb-2">4</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">States Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle moving gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f0da11] to-transparent" />

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

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-20px) rotate(45deg);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes dropFall {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(400px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes bubbleRise {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          50% {
            transform: translateY(-200px) translateX(20px) scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-400px) translateX(-10px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
