'use client';

import React from 'react';
import Link from 'next/link';
import BlurText from './components/animations/BlurText';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      {/* 404 Hero Section */}
      <section className="relative bg-gradient-to-br from-[#26231d] via-[#595646] to-[#4c6461] text-white py-24 min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#f0da11]/20 to-transparent rounded-full opacity-60 -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#d0b211]/30 to-transparent rounded-full opacity-50 translate-x-32 translate-y-32 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[#bfb986]/15 to-transparent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-[#f0da11]/10 to-transparent rounded-full opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
          
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #cecece 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* 404 Number with Animation */}
            <div className="mb-8">
              <div className="text-9xl md:text-[12rem] lg:text-[15rem] font-black mb-4 leading-none">
                <span className="bg-gradient-to-r from-[#cecece] via-[#f0da11] to-[#bfb986] bg-clip-text text-transparent animate-pulse">
                  404
                </span>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <BlurText
                text="Oops! This page went through the wash cycle and didn't come out."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              />
            </div>

            {/* Subtitle */}
            <div className="flex justify-center mb-12">
              <BlurText
                text="The page you're looking for doesn't exist, but don't worry - we'll help you get back on track!"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl !text-[#f0da11] max-w-3xl mx-auto leading-relaxed font-light"
              />
            </div>

            {/* Car Wash Themed Icon */}
            <div className="mb-12">
              <div className="w-32 h-32 bg-gradient-to-br from-[#f0da11]/20 to-[#bfb986]/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-[#f0da11]/30">
                <svg className="w-16 h-16 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="/" 
                className="bg-[#f0da11] text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Home
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="border-2 border-[#f0da11] text-[#f0da11] px-8 py-4 rounded-xl font-semibold hover:bg-[#f0da11] hover:text-gray-900 transition-all duration-300 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="absolute bottom-10 left-10 opacity-20">
          <div className="w-16 h-16 border-2 border-[#f0da11] rounded-full animate-spin"></div>
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <div className="w-12 h-12 border-2 border-[#bfb986] rounded-full animate-bounce"></div>
        </div>
        <div className="absolute bottom-20 right-1/4 opacity-20">
          <div className="w-8 h-8 bg-[#f0da11] rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Fun Error Message Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f0da11] to-[#bfb986] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lost in the Wash?</h2>
              <p className="text-gray-600 mb-6">
                Don't worry! Even the best car wash systems sometimes miss a spot. 
                Our team is here to help you find exactly what you're looking for.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call us: (612) 408-9010
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email: info@carwashtechnologies.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}