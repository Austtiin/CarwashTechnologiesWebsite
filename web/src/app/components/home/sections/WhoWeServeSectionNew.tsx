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
    <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-24 overflow-hidden">
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
              <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="#1f2937" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Subtle Geometric Accent */}
      <div className="absolute top-1/4 right-10 w-24 h-24 border border-[#f0da11]/10 transform rotate-45 hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f0da11]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Our Customers</span>
            <div className="w-8 h-px bg-[#f0da11]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solutions for <span className="text-[#f0da11]">Every</span> Operation
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you&apos;re starting fresh or scaling up, we have the expertise to help you succeed
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 hover:shadow-lg transition-all duration-500 border-l-4 border-transparent hover:border-[#f0da11] overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              {/* Background Image Transitions - Slides in on Load */}
              {index === 0 && (
                <>
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ 
                      backgroundImage: 'url(/imgs/PDQ.jpg)', 
                      opacity: 0.65,
                      animation: `slideInFromRight 0.8s ease-out ${index * 0.1 + 0.3}s forwards`,
                      transform: 'translateX(100%)'
                    }}
                  />
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white via-white/90 to-white/60 transition-transform duration-700 ease-out" 
                    style={{
                      animation: `slideInFromRight 0.8s ease-out ${index * 0.1 + 0.3}s forwards`,
                      transform: 'translateX(100%)'
                    }}
                  />
                </>
              )}
              {index === 1 && (
                <>
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ 
                      backgroundImage: 'url(/imgs/Existing.jpg)', 
                      opacity: 0.65,
                      animation: `slideInFromRight 0.8s ease-out ${index * 0.1 + 0.3}s forwards`,
                      transform: 'translateX(100%)'
                    }}
                  />
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white via-white/90 to-white/60 transition-transform duration-700 ease-out" 
                    style={{
                      animation: `slideInFromRight 0.8s ease-out ${index * 0.1 + 0.3}s forwards`,
                      transform: 'translateX(100%)'
                    }}
                  />
                </>
              )}
              {index === 2 && (
                <>
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ 
                      backgroundImage: 'url(/imgs/car-wash.jpg)', 
                      opacity: 0.65,
                      animation: `slideInFromRight 0.8s ease-out ${index * 0.1 + 0.3}s forwards`,
                      transform: 'translateX(100%)'
                    }}
                  />
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white via-white/90 to-white/60 transition-transform duration-700 ease-out" 
                    style={{
                      animation: `slideInFromRight 0.8s ease-out ${index * 0.1 + 0.3}s forwards`,
                      transform: 'translateX(100%)'
                    }}
                  />
                </>
              )}
              {index === 3 && (
                <>
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ 
                      backgroundImage: 'url(/imgs/Carwash1.jpg)', 
                      opacity: 0.65,
                      animation: `slideInFromRight 0.8s ease-out ${index * 0.1 + 0.3}s forwards`,
                      transform: 'translateX(100%)'
                    }}
                  />
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white via-white/90 to-white/60 transition-transform duration-700 ease-out" 
                    style={{
                      animation: `slideInFromRight 0.8s ease-out ${index * 0.1 + 0.3}s forwards`,
                      transform: 'translateX(100%)'
                    }}
                  />
                </>
              )}
              
              {/* Icon */}
              <div className="relative w-16 h-16 bg-gray-100 text-gray-900 flex items-center justify-center mb-6 group-hover:bg-[#f0da11] group-hover:text-black transition-all duration-200">
                {segment.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#f0da11] transition-colors">
                {segment.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed mb-6">
                {segment.description}
              </p>

              {/* Features List */}
              <ul className="relative space-y-2">
                {segment.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    <svg className="w-5 h-5 text-[#f0da11] mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Not sure which solution fits your needs? Let&apos;s talk.
          </p>
          <Link 
            href="/contact"
            className="inline-block border-2 border-black text-black font-semibold px-8 py-3.5 hover:bg-[#f0da11] hover:border-[#f0da11] transition-all duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

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

        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
