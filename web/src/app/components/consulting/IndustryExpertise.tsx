'use client';

import React from 'react';

const expertise = [
  {
    title: 'Tunnel Systems',
    description: 'Express and full-service tunnel operations with conveyor systems. Expertise in throughput optimization, chemical application, and equipment sequencing.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stats: [
      { label: 'Cars/Hour', value: '200+' },
      { label: 'Systems Designed', value: '150+' }
    ]
  },
  {
    title: 'Self-Serve Bays',
    description: 'High-pressure self-service wash bays with timing systems. Optimizing layout, equipment selection, and customer flow for maximum revenue.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    stats: [
      { label: 'Bay Configurations', value: '300+' },
      { label: 'Equipment Vendors', value: '12+' }
    ]
  },
  {
    title: 'Express Exterior',
    description: 'High-volume exterior-only operations with subscription models. Strategic planning for rapid throughput and membership growth.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: [
      { label: 'Member Retention', value: '85%+' },
      { label: 'Sites Launched', value: '75+' }
    ]
  },
  {
    title: 'Full-Service Detail',
    description: 'Complete interior and exterior detailing services. Workflow optimization, quality control systems, and service package development.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    stats: [
      { label: 'Avg Ticket Increase', value: '40%+' },
      { label: 'Detail Centers', value: '50+' }
    ]
  }
];

export default function IndustryExpertise() {
  return (
    <>
      <section className="py-20 bg-white relative">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#f0da11] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-slate-900 opacity-30"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <div className="border-l-4 border-black pl-6">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 uppercase">
                  Industry Expertise
                </h2>
                <p className="text-xl text-gray-600">
                  Deep knowledge across all carwash formats and operational models
                </p>
              </div>
            </div>

            {/* Expertise Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-slate-900 bg-white hover:shadow-xl transition-all group relative overflow-hidden"
                >
                  {/* Yellow Accent Stripe */}
                  <div className="absolute left-0 top-0 w-2 h-full bg-[#f0da11] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>

                  {/* Icon Header */}
                  <div className="bg-slate-900 text-[#f0da11] p-6 flex items-center justify-center border-b-2 border-[#f0da11]">
                    <div className="group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-gray-200">
                      {item.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-[#f0da11] mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Industry Coverage */}
            <div className="mt-16 border-2 border-black bg-gray-50 p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2 uppercase">
                    Comprehensive Industry Coverage
                  </h3>
                  <p className="text-gray-700">
                    From single-location operators to multi-site enterprises, we have the experience to guide operations of any scale.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="bg-[#f0da11] text-black px-8 py-4 font-bold uppercase text-sm tracking-wide hover:bg-black hover:text-[#f0da11] transition-colors border-2 border-black whitespace-nowrap"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angular Transition */}
      <div className="h-24 bg-white relative">
        <div
          className="absolute inset-0 bg-black"
          style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}
        ></div>
      </div>
    </>
  );
}
