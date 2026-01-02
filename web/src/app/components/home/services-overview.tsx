import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import SafeLink from '../ui/SafeLink';

const ServicesSection = () => {
  return (
    <section className="relative z-10 py-20 bg-white">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionHeader
            title="Our Expertise"
            description="Let our experienced technicians help you make your wash more profitable or get you started with a new site."
            subtitle="With over 50 years of combined experience, our staff has the knowledge to overcome any hurdle."
            titleDelay={100}
            descriptionDelay={150}
            subtitleDelay={200}
            className="mb-8"
          />
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Equipment Sales Card */}
          <div className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200">
            <div className="border-b-2 border-gray-300 bg-gray-50 p-4 flex items-center justify-center">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Equipment Sales</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                Quality wash equipment from trusted manufacturers to get your operation running smoothly and efficiently.
              </p>
              <SafeLink 
                href="/equipment-sales" 
                className="inline-flex items-center px-5 py-2.5 bg-[#f0da11] text-gray-900 font-bold hover:bg-[#d0b211] transition-colors duration-200 uppercase text-sm tracking-wide"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Service & Maintenance Card */}
          <div className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200">
            <div className="border-b-2 border-gray-300 bg-gray-50 p-4 flex items-center justify-center">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Service & Maintenance</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                Professional maintenance and repair services to keep your wash equipment running at peak performance.
              </p>
              <SafeLink 
                href="/services" 
                className="inline-flex items-center px-5 py-2.5 bg-[#f0da11] text-gray-900 font-bold hover:bg-[#d0b211] transition-colors duration-200 uppercase text-sm tracking-wide"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Consulting Card */}
          <div className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200">
            <div className="border-b-2 border-gray-300 bg-gray-50 p-4 flex items-center justify-center">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Consulting</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                Expert consulting services to help you optimize operations, increase profitability, and plan new installations.
              </p>
              <SafeLink 
                href="/consulting" 
                className="inline-flex items-center px-5 py-2.5 bg-[#f0da11] text-gray-900 font-bold hover:bg-[#d0b211] transition-colors duration-200 uppercase text-sm tracking-wide"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;