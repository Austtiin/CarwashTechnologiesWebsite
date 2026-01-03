'use client';

import React from 'react';
import BlurText from '../animations/BlurText';

export default function ConsultingHero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #f0da11 1px, transparent 1px), linear-gradient(to bottom, #f0da11 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Accent Elements */}
      <div className="absolute top-0 left-0 w-2 h-64 bg-[#f0da11]"></div>
      <div className="absolute bottom-0 right-0 w-64 h-2 bg-[#f0da11]"></div>
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-[#f0da11] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-[#f0da11] bg-gray-800/50">
            <span className="text-[#f0da11] font-bold uppercase tracking-wider text-sm">Expert Guidance</span>
          </div>

          <BlurText
            text="Strategic Consulting for Wash Success"
            delay={0.1}
            duration={0.8}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          />

          <BlurText
            text="Leverage our 50+ years of combined industry expertise to maximize your wash operation's performance, profitability, and growth potential."
            delay={0.2}
            duration={0.8}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-[#f0da11] text-black px-8 py-4 font-bold uppercase text-sm tracking-wide hover:bg-[#d0b211] transition-colors inline-flex items-center border-2 border-[#f0da11]"
            >
              Schedule Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 font-bold uppercase text-sm tracking-wide hover:bg-white hover:text-black transition-colors inline-flex items-center"
            >
              Our Expertise
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-2 border-gray-700 bg-gray-800/50 p-6">
              <div className="text-4xl font-bold text-[#f0da11] mb-2">50+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Years Combined Experience</div>
            </div>
            <div className="border-2 border-gray-700 bg-gray-800/50 p-6">
              <div className="text-4xl font-bold text-[#f0da11] mb-2">500+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="border-2 border-gray-700 bg-gray-800/50 p-6">
              <div className="text-4xl font-bold text-[#f0da11] mb-2">100%</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Client Focused</div>
            </div>
            <div className="border-2 border-gray-700 bg-gray-800/50 p-6">
              <div className="text-4xl font-bold text-[#f0da11] mb-2">4</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">States Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,90 C480,30 960,150 1440,90 L1440,120 L0,120 Z" fill="#fff" fillOpacity="0.8" />
        </svg>
      </div>
    </section>
  );
}
