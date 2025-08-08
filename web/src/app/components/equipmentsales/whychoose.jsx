import React from 'react';
import BlurText from '../../components/animations/BlurText';
import SafeLink from '../../components/ui/SafeLink';

/**
 * @typedef {Object} Stats
 * @property {string} experience
 * @property {string} installations
 * @property {string} support
 * @property {string} states
 */

/**
 * @param {{ stats: Stats }} props
 */
export default function WhyChooseSection({ stats }) {
  const benefits = [
    {
      title: 'Industry-Leading Quality',
      description: 'Premium equipment from manufacturers with decades of experience and proven track records.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Professional Installation',
      description: 'Expert installation and setup by our experienced technicians for optimal performance.',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Ongoing Support',
      description: 'Comprehensive service and maintenance support to keep your equipment running smoothly.',
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <BlurText
              text="Why Choose Our Equipment"
              delay={50}
              animateBy="words"
              direction="top"
              className="md:!text-[2rem] !text-[2rem] font-extrabold text-gray-900 mb-6"
            />
            <p className="text-lg text-gray-600 mb-8">
              We provide only the highest quality equipment from trusted manufacturers, 
              ensuring reliability, performance, and longevity for your wash operation.
            </p>
            
            <div className="space-y-6">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Financing Available</h3>
              <p className="text-gray-600">Flexible financing options to help you get the equipment you need</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.experience}</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.installations}</div>
                <div className="text-sm text-gray-600">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.support}</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f0da11] mb-2">{stats.states}</div>
                <div className="text-sm text-gray-600">States Served</div>
              </div>
            </div>
            
            <div className="text-center">
              <SafeLink 
                href="/contact" 
                className="bg-[#f0da11] text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-[#d0b211] transition-colors duration-300 inline-flex items-center"
              >
                Get Equipment Quote
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