import React from 'react';
import SectionHeader from '../ui/SectionHeader';

interface Stats {
  serviceCalls: string;
  satisfaction: string;
  responseTime: string;
  coverage: string;
}

interface WhyChooseServiceProps {
  stats: Stats;
}

export default function WhyChooseService({ stats }: WhyChooseServiceProps) {
  const benefits = [
    {
      title: 'Preventive Approach',
      description: 'We focus on preventing problems before they occur, saving you time and money.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'from-[#f0da11] to-[#d0b211]'
    },
    {
      title: 'Fast Response',
      description: 'Emergency service available 24/7 with rapid response times to minimize downtime.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'from-slate-700 to-slate-800'
    },
    {
      title: 'Quality Parts',
      description: 'We use only genuine OEM parts and high-quality replacements for lasting repairs.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'from-[#f0da11] to-[#d0b211]'
    }
  ];

  const guarantees = [
    '90-Day Service Warranty',
    '2-Hour Emergency Response',
    'Certified Factory Technicians',
    'Genuine OEM Parts',
    'Detailed Service Reports',
    'Preventive Maintenance Plans'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0da11]/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f0da11] to-[#d0b211] rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Service Guarantees</h3>
              </div>
              <ul className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">{guarantee}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="w-full flex justify-center mb-16">
              <SectionHeader
                title="Expert Service & Maintenance"
                description="Our certified technicians provide expert maintenance services to keep your wash equipment running smoothly and efficiently, minimizing downtime and maximizing profitability."
                titleDelay={0}
                descriptionDelay={0}
                textAlign="center"
                maxWidth="max-w-4xl"
              />
            </div>

            <div className="space-y-6 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.serviceCalls}</div>
                  <div className="text-sm text-gray-600">Service Calls Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.satisfaction}</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

