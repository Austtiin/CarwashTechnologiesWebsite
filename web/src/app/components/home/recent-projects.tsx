import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import SafeLink from '../ui/SafeLink';

const ProjectsSection = () => {
  return (
    <section className="relative z-10 py-20 bg-yellow-50 backdrop-blur-sm overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Spinning squares with different colors and timing */}
        <div className="absolute top-12 left-12 w-16 h-16 border-2 border-[#f0da11]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/4 right-20 w-12 h-12 border-2 border-[#bfb986]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-[#d0b211]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-16 w-14 h-14 border-2 border-[#f0da11]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '7s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-10 h-10 border-2 border-[#bfb986]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '9s', animationDelay: '0.5s' }}></div>
        
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
        <div className="mb-16">
          <SectionHeader
            title="Recent Projects"
            description="See our latest installations and success stories across the Midwest"
            titleDelay={100}
            descriptionDelay={150}
            className="mb-16"
          />
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* SuperWash Express - St. Paul */}
          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">SuperWash Express - St. Paul</h3>
            <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
              Complete tunnel wash installation with state-of-the-art equipment and chemical systems.
            </p>
            <div className="text-center">
              <SafeLink 
                href="/projects" 
                className="inline-flex items-center text-[#f0da11] hover:text-[#d0b211] font-semibold transition-colors duration-300"
              >
                <span>View Details</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Quick Clean - Fargo */}
          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Quick Clean - Fargo</h3>
            <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
              Self-serve bay renovation with new high-pressure systems and modern payment solutions.
            </p>
            <div className="text-center">
              <SafeLink 
                href="/projects" 
                className="inline-flex items-center text-[#f0da11] hover:text-[#d0b211] font-semibold transition-colors duration-300"
              >
                <span>View Details</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Sparkle Auto Spa - Madison */}
          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>     
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Sparkle Auto Spa - Madison</h3>
            <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
              Full-service wash upgrade including new conveyor system and water reclaim.
            </p>
            <div className="text-center">
              <SafeLink 
                href="/projects" 
                className="inline-flex items-center text-[#f0da11] hover:text-[#d0b211] font-semibold transition-colors duration-300"
              >
                <span>View Details</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mb-20">
          <SafeLink 
            href="/projects" 
            className="bg-[#f0da11] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center"
          >
            View All Projects
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </SafeLink>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;