'use client';

import React from 'react';

const caseStudies = [
  {
    client: 'Regional Tunnel Operator',
    challenge: 'Declining throughput and increasing chemical costs were impacting profitability at their flagship location.',
    solution: 'Implemented equipment sequencing optimization, chemical dilution recalibration, and staff training programs.',
    results: [
      { metric: 'Throughput Increase', value: '+35%' },
      { metric: 'Chemical Cost Reduction', value: '-22%' },
      { metric: 'Customer Satisfaction', value: '+18%' }
    ],
    category: 'Operational Optimization'
  },
  {
    client: 'New Express Exterior Build',
    challenge: 'First-time wash owner needed guidance on site selection, equipment vendors, and operational planning for a subscription model.',
    solution: 'Comprehensive site feasibility analysis, equipment RFP management, and pre-opening staff training and systems setup.',
    results: [
      { metric: 'Members (First 90 Days)', value: '1,200+' },
      { metric: 'Daily Car Count Average', value: '350+' },
      { metric: 'Return on Investment', value: '18 months' }
    ],
    category: 'Site Development'
  },
  {
    client: 'Multi-Site Self-Serve Chain',
    challenge: 'Inconsistent performance across 8 locations with outdated equipment and pricing strategies.',
    solution: 'Standardized equipment upgrades, dynamic pricing implementation, and centralized monitoring system installation.',
    results: [
      { metric: 'Revenue Increase (Per Site)', value: '+42%' },
      { metric: 'Equipment Downtime', value: '-68%' },
      { metric: 'Operating Margin', value: '+15pts' }
    ],
    category: 'Business Strategy'
  }
];

export default function ConsultingCaseStudies() {
  return (
    <>
      <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f0da11] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f0da11] rounded-full blur-3xl"></div>
        </div>

        {/* Accent Bars */}
        <div className="absolute top-0 left-0 w-48 h-2 bg-[#f0da11]"></div>
        <div className="absolute bottom-0 right-0 w-2 h-48 bg-[#f0da11]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="inline-block mb-4 px-6 py-2 border-2 border-[#f0da11] bg-gray-800/50">
                <span className="text-[#f0da11] font-bold uppercase tracking-wider text-sm">Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real impact across diverse carwash operations and business challenges
              </p>
            </div>

            {/* Case Studies */}
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-700 bg-gray-800/50 hover:border-[#f0da11] transition-all group"
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Left: Challenge/Solution */}
                    <div className="md:col-span-2 p-8 border-b-2 md:border-b-0 md:border-r-2 border-gray-700">
                      {/* Category Badge */}
                      <div className="inline-block bg-[#f0da11] text-black px-4 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                        {study.category}
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-[#f0da11] uppercase">
                        {study.client}
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Challenge
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Solution
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Results */}
                    <div className="p-8 bg-black">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6 border-b-2 border-[#f0da11] pb-2">
                        Results
                      </h4>
                      <div className="space-y-6">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="border-l-2 border-[#f0da11] pl-4">
                            <div className="text-3xl font-bold text-[#f0da11] mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-400 uppercase tracking-wide">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <div className="border-2 border-gray-700 bg-gray-800/50 p-8 inline-block">
                <p className="text-gray-200 mb-4 text-lg">
                  Ready to achieve similar results for your operation?
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-[#f0da11] text-black px-8 py-4 font-bold uppercase text-sm tracking-wide hover:bg-white transition-colors border-2 border-[#f0da11]"
                >
                  Schedule Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-black via-[#f0da11] to-black"></div>
    </>
  );
}
