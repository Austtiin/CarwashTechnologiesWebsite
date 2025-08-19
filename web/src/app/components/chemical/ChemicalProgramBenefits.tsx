import React from 'react';
import SectionHeader from '../ui/SectionHeader';

interface Stats {
  satisfaction: string;
  support: string;
  delivery: string;
  coverage: string;
}

interface ChemicalProgramBenefitsProps {
  benefits: string[];
  stats: Stats;
}

export default function ChemicalProgramBenefits({ benefits, stats }: ChemicalProgramBenefitsProps) {
  const whyChooseReasons = [
    {
      title: 'Superior Performance',
      description: 'Advanced formulations that deliver consistent, professional-quality results every time.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Environmentally Responsible',
      description: 'Eco-friendly formulations that meet environmental regulations while delivering excellent results.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Cost-Effective',
      description: 'Competitive pricing with excellent value and performance that helps reduce operational costs.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Program Benefits</h3>
              </div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-yellow-200">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Quick delivery across Minnesota, North Dakota, South Dakota & Wisconsin
                </div>
              </div>
            </div>
          </div>
          
          <div>
            
            <div className="w-full flex justify-center mb-16">
                              <SectionHeader
                                title="Why Choose Our Chemicals"
                                description="We supply a complete line of high-performance wash chemicals designed to deliver superior results while being environmentally responsible and cost-effective."
                                titleDelay={0}
                                descriptionDelay={0}
                                textAlign="center"
                                maxWidth="max-w-4xl"
                              />
                            </div>
                    
            <div className="space-y-6 mt-8">
              {whyChooseReasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-12 h-12 bg-gradient-to-br ${reason.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={reason.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.satisfaction}</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.support}</div>
                  <div className="text-sm text-gray-600">Chemical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

