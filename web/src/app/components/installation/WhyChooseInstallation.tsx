import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import SafeLink from '../ui/SafeLink';

interface Stats {
  installations: string;
  experience: string;
  satisfaction: string;
  support: string;
}

interface WhyChooseInstallationProps {
  stats: Stats;
}

export default function WhyChooseInstallation({ stats }: WhyChooseInstallationProps) {
  const benefits = [
    {
      title: 'Certified Technicians',
      description: 'Factory-trained and certified installation technicians with years of experience in wash equipment.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'On-Time Completion',
      description: 'We stick to our installation schedules and timelines to get your wash operational as quickly as possible.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks ensure all systems operate at peak performance before handover.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Ongoing Support',
      description: 'Comprehensive support after installation including warranty service and maintenance programs.',
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Why Choose Our Installation Services"
              description="Our experienced installation team ensures your wash equipment is installed correctly, safely, and efficiently, minimizing downtime and maximizing performance."
              titleDelay={50}
              descriptionDelay={100}
            />
            
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
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Installation Guarantee</h3>
              <p className="text-gray-600">We stand behind our work with comprehensive warranties and support</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.installations}</div>
                <div className="text-sm text-gray-600">Successful Installations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.experience}</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.satisfaction}</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.support}</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                1-Year Installation Warranty
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Free 30-Day Follow-up Service
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Comprehensive Staff Training
              </div>
            </div>
            
            <div className="text-center">
              <SafeLink 
                href="/contact" 
                className="bg-[#f0da11] text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-[#d0b211] transition-colors duration-300 inline-flex items-center"
              >
                Schedule Installation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}