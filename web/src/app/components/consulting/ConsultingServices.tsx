'use client';

import React from 'react';

const services = [
  {
    title: 'Site Development',
    description: 'Strategic planning and design consultation for new wash facilities. We evaluate location viability, traffic patterns, and optimal equipment layouts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: 'Operational Optimization',
    description: 'Analyze and improve your current wash operations. Increase throughput, reduce costs, and enhance customer experience through data-driven strategies.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Equipment Selection',
    description: 'Expert guidance on choosing the right wash equipment for your operation. Evaluate options, compare ROI, and select systems that maximize efficiency.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Business Strategy',
    description: 'Develop growth strategies, pricing models, and market positioning. Navigate competitive landscapes and identify opportunities for expansion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'Training Programs',
    description: 'Comprehensive staff training on equipment operation, customer service, and maintenance best practices to ensure consistent quality.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Profitability Analysis',
    description: 'Deep dive into your financials to identify revenue opportunities and cost reduction areas. Benchmarking against industry standards.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function ConsultingServices() {
  return (
    <>
      <section id="services" className="py-20 bg-white relative">
        {/* Accent Bars */}
        <div className="absolute left-0 top-1/4 w-2 h-32 bg-[#f0da11]"></div>
        <div className="absolute right-0 top-2/3 w-2 h-24 bg-black"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <div className="border-l-4 border-[#f0da11] pl-6">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 uppercase">
                  Consulting Services
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive expertise to elevate every aspect of your carwash operation
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border-2 border-black bg-white hover:bg-gray-50 transition-all group"
                >
                  {/* Header Bar */}
                  <div className="bg-black text-white px-6 py-3 flex items-center justify-between border-b-2 border-[#f0da11]">
                    <h3 className="font-bold uppercase text-sm tracking-wider">{service.title}</h3>
                    <div className="text-[#f0da11] group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#f0da11] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-black text-white px-8 py-4 font-bold uppercase text-sm tracking-wide hover:bg-[#f0da11] hover:text-black transition-colors border-2 border-black"
              >
                Discuss Your Needs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Transition */}
      <div className="h-24 bg-white relative">
        <div
          className="absolute inset-0 bg-black"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)' }}
        ></div>
      </div>
    </>
  );
}
