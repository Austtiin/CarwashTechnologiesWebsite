import React from 'react';
import BlurText from '../animations/BlurText';
import SafeLink from '../ui/SafeLink';

const WhoWeServeSection = () => {
  return (
    <section className="relative z-10 py-20 bg-yellow-50 backdrop-blur-sm overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Spinning squares with different colors and timing */}
        <div className="absolute top-20 right-24 w-20 h-20 border-2 border-[#f0da11]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-16 left-20 w-16 h-16 border-2 border-[#bfb986]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-14 h-14 border-2 border-[#d0b211]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-[#f0da11]/40 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-18 h-18 border-2 border-[#bfb986]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '14s', animationDelay: '0.5s' }}></div>
        
        {/* Yellow dot grid pattern */}
        <div className="absolute inset-0 opacity-10 sm:opacity-20 pointer-events-none z-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px, #9b9000 1px, transparent 1px)`,
              backgroundSize: '16px 16px'
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto bg-white/75 backdrop-blur-sm rounded-xl p-8 border border-gray-200/40 shadow-md mb-12">
          <div className="text-center">
            <BlurText
              text="Who We Serve"
              delay={0.0}
              duration={0.1}
              className="font-friz text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6"
            />
            <BlurText
              text="From new entrepreneurs to established businesses, we provide tailored solutions for every wash operation"
              delay={0.0}
              duration={0.1}
              className="text-lg md:text-xl text-gray-700"
            />
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* New Wash Owners */}
          <SafeLink 
            href="/services" 
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">New Wash Owners</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Complete turnkey solutions for entrepreneurs starting their first wash business. From site planning to grand opening.
            </p>
          </SafeLink>

          {/* Existing Wash Owners */}
          <SafeLink 
            href="/services" 
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Existing Wash Owners</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Upgrades, retrofits, and maintenance services to improve efficiency and increase profitability of your current operation.
            </p>
          </SafeLink>

          {/* Auto Dealerships */}
          <SafeLink 
            href="/services" 
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Auto Dealerships</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Professional wash systems designed for high-volume dealership operations. Keep your inventory looking showroom-ready.
            </p>
          </SafeLink>

          {/* Small Businesses */}
          <SafeLink 
            href="/services" 
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Small Businesses</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Equipment and solutions for detailers, fleet services, and other small businesses requiring professional vehicle cleaning.
            </p>
          </SafeLink>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;