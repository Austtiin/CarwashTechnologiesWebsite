'use client';

// Homepage Services Section — Complete Solutions
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    title: 'Self-Serve & In-Bay',
    description: 'Flexible self-serve and in-bay automatic solutions built for neighborhoods, fleets, and rural markets.',
    link: '/wash-types',
    image: '/imgs/Track.webp',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
    <section className="relative bg-slate-50 py-16 sm:py-20">
      {/* Yellow hairline seam to anchor the band */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#f0da11]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f0da11]" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">What We Offer</span>
            <div className="w-8 h-px bg-[#f0da11]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete Solutions for{' '}
            <span className="inline-block bg-[#f0da11] text-black px-2 pb-0.5 rounded-md -rotate-1">Modern</span>{' '}
            Wash Operations
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            From express tunnels to self-serve sites, we provide everything you need to run a modern, profitable wash.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Link
              href={service.link}
              key={service.title}
              className="group relative flex flex-col bg-white rounded-none overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#f0da11] transition-all duration-300"
            >
              {/* Image with gradient overlay — fixed aspect for uniform cards */}
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                {/* Icon badge — top-left, fully inside the image */}
                <div className="absolute top-3 left-3 w-11 h-11 bg-[#f0da11] text-black flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
                {/* Title overlaid on the image */}
                <h3 className="absolute bottom-3 left-3 right-3 text-lg font-bold text-white leading-tight drop-shadow-md">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <span className="mt-auto inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-[#d0b211] transition-colors">
                  Learn More
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
