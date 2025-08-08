import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import SafeLink from '../ui/SafeLink';

const ServicesSection = () => {
  return (
    <section className="relative z-10 py-20 bg-yellow-50 backdrop-blur-sm overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main spinning squares */}
        <div className="absolute top-12 left-12 w-16 h-16 border-2 border-[#f0da11]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/4 right-20 w-12 h-12 border-2 border-[#bfb986]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-[#d0b211]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-16 w-14 h-14 border-2 border-[#f0da11]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '7s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-10 h-10 border-2 border-[#bfb986]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '9s', animationDelay: '0.5s' }}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-10 left-10 w-10 h-10 border-2 border-[#f011b8]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/3 right-24 w-8 h-8 border-2 border-[#86bf8b]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-24 left-1/4 w-12 h-12 border-2 border-[#d01151]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-9 h-9 border-2 border-[#f011cb]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '5s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-20 right-20 w-12 h-12 border-2 border-[#114cf0]/15 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-32 left-16 w-8 h-8 bg-[#9586bf]/15 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Yellow dot grid pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px, #9b9000 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          ></div>
        </div>
      </div>

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
        <div className="grid md:grid-cols-3 gap-8">
          {/* Equipment Sales Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-gray-200/30 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Equipment Sales</h3>
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              Quality wash equipment from trusted manufacturers to get your operation running smoothly and efficiently.
            </p>
            <div className="text-center">
              <SafeLink 
                href="/equipment-sales" 
                className="inline-flex items-center px-6 py-3 bg-[#f0da11] text-gray-900 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Service & Maintenance Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-gray-200/30 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Service & Maintenance</h3>
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              Professional maintenance and repair services to keep your wash equipment running at peak performance.
            </p>
            <div className="text-center">
              <SafeLink 
                href="/services" 
                className="inline-flex items-center px-6 py-3 bg-[#f0da11] text-gray-900 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Consulting Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-gray-200/30 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Consulting</h3>
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              Expert consulting services to help you optimize operations, increase profitability, and plan new installations.
            </p>
            <div className="text-center">
              <SafeLink 
                href="/consulting" 
                className="inline-flex items-center px-6 py-3 bg-[#f0da11] text-gray-900 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
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