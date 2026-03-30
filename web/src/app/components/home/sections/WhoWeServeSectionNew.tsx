'use client';

// Clean Tech Who We Serve Section
import React from 'react';
import Link from 'next/link';

export default function WhoWeServeSectionNew() {
  const segments = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'New Wash Owners',
      description: 'Complete turnkey solutions for entrepreneurs entering the car wash industry.',
      features: [
        'Site selection & planning',
        'Equipment procurement',
        'Installation & training',
        'Grand opening support'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Existing Wash Owners',
      description: 'Upgrade, expand, and optimize your current car wash operations.',
      features: [
        'Equipment upgrades',
        'Efficiency improvements',
        'Technology integration',
        'Priority service support'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Commercial Fleets & Large Vehicles',
      description: 'Heavy-duty wash systems for dealerships, commercial fleets, semi trucks, and large-scale operations.',
      features: [
        'Heavy-duty equipment',
        'Fleet & semi solutions',
        'Large vehicle capability',
        'Volume pricing'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Independent Operators',
      description: 'Scalable solutions for gas stations, convenience stores, and smaller operations.',
      features: [
        'Compact systems',
        'Flexible financing',
        'Quick installation',
        'Training included'
      ]
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-12 sm:py-14 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f0da11]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Our Customers</span>
            <div className="w-8 h-px bg-[#f0da11]"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Solutions for <span className="text-[#f0da11]">Every</span> Operation
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Whether you&apos;re starting fresh or scaling up, we have the expertise to help you succeed
          </p>
        </div>

        {/* Segments Grid - More compact */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group relative bg-white p-4 sm:p-5 hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#f0da11] overflow-hidden"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-gray-100 text-gray-900 flex items-center justify-center mb-4 group-hover:bg-[#f0da11] group-hover:text-black transition-all duration-200">
                  {segment.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f0da11] transition-colors">
                  {segment.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {segment.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5">
                  {segment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5 text-[#f0da11] mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 mb-4">
            Not sure which solution fits your needs? Let&apos;s talk.
          </p>
          <Link 
            href="/contact"
            className="inline-block border-2 border-black text-black font-semibold px-6 py-2.5 text-sm hover:bg-[#f0da11] hover:border-[#f0da11] transition-all duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
