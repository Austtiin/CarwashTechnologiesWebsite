'use client';

import React from 'react';
import BlurText from '../animations/BlurText';

export default function AboutMissionValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
            <BlurText
              text="Our Mission & Values"
              className="font-friz text-4xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6"
              delay={0.1}
              duration={0.1}

            />
            </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide innovative, reliable wash solutions that empower our customers to build successful,
                profitable businesses while delivering exceptional value and service that exceeds expectations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className=" w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the most trusted partner in the Midwest wash industry, known for our expertise,
                innovation, and unwavering commitment to customer success.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 text-center py-20">


            <BlurText
              text="Our Core Values"
              className="font-friz text-4xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6"
              delay={0.1}
              duration={0.1}

            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Integrity</h4>
                <p className="text-gray-600">We uphold the highest standards of honesty, transparency, and ethical business practices in everything we do.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h4>
                <p className="text-gray-600">Our customers&#39; success is our success. We listen, understand, and deliver solutions that exceed expectations.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
                <p className="text-gray-600">We continuously seek new ways to improve our services, products, and processes to stay ahead of industry trends.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
                <p className="text-gray-600">We strive for excellence in every interaction, installation, and service we provide to our valued customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}