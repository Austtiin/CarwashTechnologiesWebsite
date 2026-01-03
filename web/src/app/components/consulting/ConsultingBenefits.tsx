'use client';

import React from 'react';

const benefits = [
  {
    title: 'Expert Guidance',
    description: 'Benefit from 50+ years of combined hands-on industry experience across all wash formats and operational scales.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Proven Methodologies',
    description: 'Systematic approaches tested across hundreds of successful projects, delivering consistent and measurable results.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'ROI Focused',
    description: 'Every recommendation is evaluated through the lens of return on investment and long-term profitability impact.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Vendor Neutral',
    description: 'Unbiased equipment and supplier recommendations based solely on what best serves your operation and budget.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    title: 'Ongoing Support',
    description: 'Post-implementation monitoring and optimization to ensure sustained success and continuous improvement.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'Industry Network',
    description: 'Access to our extensive network of trusted equipment vendors, suppliers, and service providers.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export default function ConsultingBenefits() {
  return (
    <>
      <section className="py-20 bg-white relative">
        {/* Accent Elements */}
        <div className="absolute top-0 right-0 w-2 h-40 bg-[#f0da11]"></div>
        <div className="absolute bottom-0 left-0 w-40 h-2 bg-black"></div>
        <div className="absolute top-1/3 left-20 w-24 h-24 border-4 border-gray-200 opacity-50"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <div className="inline-block mb-4 px-6 py-2 border-2 border-black bg-gray-50">
                <span className="text-black font-bold uppercase tracking-wider text-sm">Why Partner With Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 uppercase">
                The Consulting Advantage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Partnering with experienced consultants accelerates success and minimizes costly mistakes
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border-2 border-slate-900 bg-white hover:bg-gray-50 transition-all group relative"
                >
                  {/* Yellow Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[#f0da11] border-l-[32px] border-l-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Icon */}
                    <div className="text-[#f0da11] mb-4 group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom Stripe */}
                  <div className="h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-16 border-2 border-black bg-gradient-to-br from-black to-gray-900 text-white p-8 md:p-12 relative overflow-hidden">
              {/* Quote Mark */}
              <div className="absolute top-4 left-4 text-[#f0da11] opacity-20 text-8xl font-serif leading-none">
                &ldquo;
              </div>

              <div className="relative z-10">
                <p className="text-xl md:text-2xl italic mb-6 leading-relaxed">
                  Working with Carwash Technologies transformed our operation. Their expertise in equipment selection saved us over $50,000, and their operational strategies increased our throughput by 40%. The ROI from their consulting services was realized in less than 6 months.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 bg-[#f0da11]"></div>
                  <div>
                    <div className="font-bold text-[#f0da11]">Mike Peterson</div>
                    <div className="text-sm text-gray-400">Owner, Clean Streak Express Wash</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-12 text-center">
              <div className="inline-block border-2 border-black p-8 bg-gray-50">
                <h3 className="text-2xl font-bold text-black mb-4 uppercase">
                  Ready to Elevate Your Operation?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl">
                  Schedule a complimentary consultation to discuss your challenges and explore how our expertise can drive your success.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-[#f0da11] text-black px-8 py-4 font-bold uppercase text-sm tracking-wide hover:bg-black hover:text-[#f0da11] transition-colors border-2 border-black"
                >
                  Get Started Today
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Transition */}
      <div className="h-24 bg-white relative">
        <div
          className="absolute inset-0 bg-black"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)' }}
        ></div>
      </div>
    </>
  );
}
