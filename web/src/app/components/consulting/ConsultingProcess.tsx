'use client';

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin with a comprehensive assessment of your current operation, challenges, and goals. Site visits and data analysis provide the foundation.',
    deliverables: ['Site audit report', 'Competitive analysis', 'Stakeholder interviews']
  },
  {
    number: '02',
    title: 'Analysis',
    description: 'Our team evaluates operational data, financial metrics, and market conditions to identify opportunities and pain points.',
    deliverables: ['Performance benchmarking', 'Cost-benefit analysis', 'Market research']
  },
  {
    number: '03',
    title: 'Strategy',
    description: 'We develop a customized roadmap with actionable recommendations tailored to your specific situation and objectives.',
    deliverables: ['Strategic plan', 'Implementation timeline', 'Budget projections']
  },
  {
    number: '04',
    title: 'Implementation',
    description: 'Hands-on support during execution, from equipment installation to staff training. We ensure smooth transitions and minimal disruption.',
    deliverables: ['Project management', 'Vendor coordination', 'Training programs']
  },
  {
    number: '05',
    title: 'Optimization',
    description: 'Ongoing monitoring and refinement to maximize results. We track KPIs and make adjustments to ensure sustained success.',
    deliverables: ['Performance tracking', 'Quarterly reviews', 'Continuous improvement']
  }
];

export default function ConsultingProcess() {
  return (
    <>
      <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #f0da11 0px, #f0da11 2px, transparent 2px, transparent 10px)`,
          }}></div>
        </div>

        {/* Accent Elements */}
        <div className="absolute top-0 right-0 w-64 h-2 bg-[#f0da11]"></div>
        <div className="absolute bottom-0 left-0 w-2 h-48 bg-[#f0da11]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="inline-block mb-4 px-6 py-2 border-2 border-[#f0da11] bg-slate-800/50">
                <span className="text-[#f0da11] font-bold uppercase tracking-wider text-sm">Our Methodology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
                Proven Consulting Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach that delivers measurable results at every stage
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-12 top-20 w-0.5 h-full bg-[#f0da11] opacity-30"></div>
                  )}

                  <div className="border-2 border-gray-700 bg-gray-800/50 hover:border-[#f0da11] transition-all group">
                    <div className="flex flex-col md:flex-row">
                      {/* Number Badge */}
                      <div className="bg-black border-r-2 border-b-2 md:border-b-0 border-[#f0da11] p-8 flex items-center justify-center min-w-[120px]">
                        <span className="text-5xl font-bold text-[#f0da11] group-hover:scale-110 transition-transform">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-8">
                        <h3 className="text-2xl font-bold uppercase mb-3 text-[#f0da11]">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        <div className="border-l-2 border-[#f0da11] pl-4">
                          <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">
                            Key Deliverables
                          </h4>
                          <ul className="space-y-1">
                            {step.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-center text-gray-300">
                                <svg className="w-4 h-4 mr-2 text-[#f0da11]" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Note */}
            <div className="mt-12 text-center">
              <div className="inline-block border-2 border-gray-700 bg-gray-800/50 px-8 py-4">
                <p className="text-gray-200">
                  <span className="text-[#f0da11] font-bold">Typical Engagement:</span> 6-12 weeks depending on scope and complexity
                </p>
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
