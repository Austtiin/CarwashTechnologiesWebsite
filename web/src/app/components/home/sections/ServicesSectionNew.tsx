'use client';

// Clean Tech Services Section
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesSectionNew() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
        </svg>
      ),
      title: 'Express Tunnel Systems',
      description: 'High-throughput tunnel designs that maximize cars per hour while delivering a consistent, premium finish.',
      link: '/wash-types'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Self-Serve & In-Bay',
      description: 'Flexible self-serve and in-bay automatic solutions built for neighborhoods, fleets, and rural markets.',
      link: '/wash-types'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Chemicals & Equipment Supply',
      description: 'Premium wash chemistry, parts, and equipment supply programs that keep your site stocked and performing.',
      link: '/chemical-sales'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Maintenance & Repairs',
      description: 'Responsive field service, scheduled maintenance, and emergency repairs to protect uptime and revenue.',
      link: '/consulting'
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#f6f6f6] via-gray-100 to-[#f6f6f6] py-16 sm:py-20 overflow-hidden">
      {/* Background Elements - grid pattern removed */}

      {/* Water Droplets */}
      <div className="absolute top-12 left-1/4 w-2 h-2 bg-blue-400/15 rounded-full hidden md:block"
           style={{ animation: 'dropFall 3.5s ease-in infinite' }} />
      <div className="absolute top-20 right-1/3 w-2 h-2 bg-blue-400/15 rounded-full hidden md:block"
           style={{ animation: 'dropFall 4s ease-in infinite 1.5s' }} />

      {/* Floating Bubbles */}
      <div className="absolute bottom-16 left-20 w-6 h-6 rounded-full border border-blue-300/15 hidden md:block"
           style={{ animation: 'bubbleRise 7s ease-in-out infinite' }} />
      <div className="absolute bottom-24 right-24 w-8 h-8 rounded-full border border-blue-300/10 hidden md:block"
           style={{ animation: 'bubbleRise 6s ease-in-out infinite 2s' }} />

      {/* Flowing Lines Accent */}
      <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0da11]/20 to-transparent" />
      <div className="absolute bottom-20 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0da11]/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f0da11]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">What We Offer</span>
            <div className="w-8 h-px bg-[#f0da11]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Complete Solutions for <span className="text-[#f0da11]">Modern</span> Wash Operations
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            From express tunnels to self-serve sites, we provide everything you need to run a modern, profitable wash.
          </p>
        </div>

        {/* Services Grid - four columns with tall cards, image on top, then text and Learn More */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {services.map((service, index) => (
            <Link 
              href={service.link}
              key={index}
              className="group relative bg-white rounded-2xl shadow-[0_18px_50px_-18px_rgba(15,23,42,0.35)] hover:shadow-[0_24px_70px_-20px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-2 border border-gray-200/80 overflow-hidden flex flex-col min-h-[320px]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              {/* Image area */}
              {index === 0 && (
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src="/imgs/IMG_0070.webp"
                    alt="Express tunnel systems"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {index === 1 && (
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src="/imgs/Track.webp"
                    alt="Self-serve and in-bay systems"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {index === 2 && (
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src="/imgs/chems/MixStir.jpg"
                    alt="Chemicals and equipment supply"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {index === 3 && (
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src="/imgs/IMG_5386.webp"
                    alt="Maintenance and repairs"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 flex flex-col p-5">
                <div className="w-10 h-10 bg-gray-100 text-gray-900 flex items-center justify-center mb-4 group-hover:bg-[#f0da11] group-hover:text-black group-hover:scale-110 transition-all duration-200">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#f0da11] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="mt-auto inline-flex items-center text-sm font-semibold text-[#f0da11] group-hover:text-[#d0ba11]">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#f0da11] transition-colors group"
          >
            View All Services
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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
      `}</style>
    </section>
  );
}
