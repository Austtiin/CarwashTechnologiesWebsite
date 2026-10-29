'use client';

// Homepage Services Section - Complete Solutions
import React from 'react';
import Link from 'next/link';
import HeroImage from '../../ui/HeroImage';

const services = [
  {
    title: 'Express Tunnel Systems',
    description: 'High-throughput tunnel designs that maximize cars per hour while delivering a consistent, premium finish.',
    link: '/wash-types',
    image: '/imgs/IMG_0070.webp',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Chemicals & Equipment Supply',
    description: 'Premium wash chemistry, parts, and equipment supply programs that keep your site stocked and performing.',
    link: '/chemical-sales',
    image: '/imgs/Carwash1.webp',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Self-Serve & In-Bay',
    description: 'Flexible self-serve and in-bay automatic solutions built for neighborhoods, fleets, and rural markets.',
    link: '/wash-types',
    image: '/imgs/partners/ds-iq-self-wash-rinse.webp',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Repairs',
    description: 'Responsive field service, scheduled maintenance, and emergency repairs to protect uptime and revenue.',
    link: '/service-maintenance',
    image: '/imgs/IMG_5386.webp',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function ServicesSectionNew() {
  return (
    <section className="relative bg-slate-50 py-16 sm:py-24 overflow-hidden">
      {/* Yellow hairline seam to anchor the band */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#f0da11]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Complete Solutions for{' '}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-1 h-3 bg-[#f0da11]/70" aria-hidden="true" />
                <span className="relative">Modern Wash Operations</span>
              </span>
            </h2>
          </div>
          <div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              One team. Every stage of your wash. From the first site plan to the next service call,
              we bring the equipment, chemistry, and hands-on expertise that keep your business moving.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Build with confidence', 'Protect your uptime', 'Deliver a better clean'].map((point, index) => (
                <span key={point} className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700">
                  <span className="text-[#8a7b00]">0{index + 1}</span>{point}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-5 mb-10">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={service.title}
              className={`group relative overflow-hidden border border-gray-200 hover:border-[#d0b211] shadow-sm hover:shadow-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 ${
                index === 0 ? 'lg:row-span-3 min-h-96 bg-slate-950 flex flex-col justify-end' : 'grid grid-cols-[0.85fr_1.15fr] bg-white'
              }`}
            >
              <div className={index === 0 ? 'absolute inset-0 overflow-hidden' : 'relative min-h-44 overflow-hidden'}>
                <HeroImage
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes={index === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 45vw, 25vw'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 ${index === 0 ? 'bg-linear-to-t from-slate-950 via-slate-950/60 to-slate-950/10' : 'bg-slate-950/10'}`} />
                {/* Icon badge - top-left, fully inside the image */}
                <div className="absolute top-3 left-3 w-11 h-11 bg-[#f0da11] text-black flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className={`relative flex flex-col ${index === 0 ? 'p-7 sm:p-9 pt-48' : 'p-4 sm:p-5'}`}>
                {index === 0 && <span className="text-[#f0da11] text-xs font-bold uppercase tracking-widest mb-3">From concept to conveyor</span>}
                <h3 className={`font-bold leading-tight mb-3 ${index === 0 ? 'text-3xl sm:text-4xl text-white' : 'text-lg text-slate-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${index === 0 ? 'text-slate-200 max-w-md' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <span className={`mt-auto inline-flex items-center text-sm font-semibold ${index === 0 ? 'text-[#f0da11]' : 'text-slate-900'} transition-colors`}>
                  {index === 0 ? 'Explore tunnel solutions' : 'Explore solutions'}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-none hover:bg-slate-800 transition-colors group"
          >
            View All Services
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
