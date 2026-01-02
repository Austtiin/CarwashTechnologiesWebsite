import React from 'react';
import SafeLink from '../ui/SafeLink';
import BlurText from '../animations/BlurText';

const ProjectsSection = () => {
  return (
    <>
      {/* Bold Divider */}
      <div className="h-2 bg-gradient-to-r from-slate-900 via-[#f0da11] to-slate-900"></div>

      <section className="relative z-10 py-12 sm:py-16 lg:py-20 bg-yellow-50 backdrop-blur-sm overflow-hidden">
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-slate-900 opacity-10 z-20"></div>
      {/* Animated Background Elements - Reduced for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Spinning squares with responsive sizes */}
        <div className="absolute top-8 sm:top-12 left-4 sm:left-12 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border-2 border-[#f0da11]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/4 right-8 sm:right-20 w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 border-2 border-[#bfb986]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-12 sm:bottom-20 left-1/4 w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 border-2 border-[#d0b211]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-6 sm:right-16 w-8 sm:w-12 lg:w-14 h-8 sm:h-12 lg:h-14 border-2 border-[#f0da11]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '7s', animationDelay: '1.5s' }}></div>
        
        {/* Yellow dot grid pattern - Responsive size */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
       <div className="max-w-4xl mx-auto bg-white/75 backdrop-blur-sm rounded-xl p-8 border border-gray-200/40 shadow-md mb-12">
          <div className="text-center">
            <BlurText
              text="Recent Projects"
              delay={0.1}
              duration={0.1}
              className="font-friz text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6"
            />
            <BlurText
              text="From new entrepreneurs to established businesses, we provide tailored solutions for every wash operation"
              delay={0.1}
              duration={0.1}
              className="text-lg md:text-xl text-gray-700"
            />
          </div>
        </div>

        {/* Project Cards Grid - Improved mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* SuperWash Express - St. Paul */}
          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/40 hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center leading-tight">SuperWash Express - St. Paul</h3>
            <p className="text-gray-600 text-center mb-3 sm:mb-4 text-sm leading-relaxed">
              Complete tunnel wash installation with state-of-the-art equipment and chemical systems.
            </p>
            <div className="text-center">
              <SafeLink 
                href="/projects" 
                className="inline-flex items-center text-[#f0da11] hover:text-[#d0b211] font-semibold transition-colors duration-300 text-sm sm:text-base"
              >
                <span>View Details</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Quick Clean - Fargo */}
          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/40 hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center leading-tight">Quick Clean - Fargo</h3>
            <p className="text-gray-600 text-center mb-3 sm:mb-4 text-sm leading-relaxed">
              Self-serve bay renovation with new high-pressure systems and modern payment solutions.
            </p>
            <div className="text-center">
              <SafeLink 
                href="/projects" 
                className="inline-flex items-center text-[#f0da11] hover:text-[#d0b211] font-semibold transition-colors duration-300 text-sm sm:text-base"
              >
                <span>View Details</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Sparkle Auto Spa - Madison */}
          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/40 hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>     
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center leading-tight">Sparkle Auto Spa - Madison</h3>
            <p className="text-gray-600 text-center mb-3 sm:mb-4 text-sm leading-relaxed">
              Full-service wash upgrade including new conveyor system and water reclaim.
            </p>
            <div className="text-center">
              <SafeLink 
                href="/projects" 
                className="inline-flex items-center text-[#f0da11] hover:text-[#d0b211] font-semibold transition-colors duration-300 text-sm sm:text-base"
              >
                <span>View Details</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <SafeLink 
            href="/projects" 
            className="bg-[#f0da11] text-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center text-sm sm:text-base"
          >
            View All Projects
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </SafeLink>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProjectsSection;
