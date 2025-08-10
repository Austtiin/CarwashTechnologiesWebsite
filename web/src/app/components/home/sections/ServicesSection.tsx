// Server Component
import React from 'react';
import SafeLink from '../../ui/SafeLink';
import BlurText from '../../animations/BlurText';

export default function ServicesSection() {
  return (
    <section className="relative z-10 py-20 bg-yellow-50 backdrop-blur-sm overflow-hidden">
      {/* Static decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-12 w-16 h-16 border-2 border-yellow-400/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/4 right-20 w-12 h-12 border-2 border-yellow-500/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-yellow-600/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-16 w-14 h-14 border-2 border-yellow-400/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/3 w-10 h-10 border-2 border-yellow-500/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '9s', animationDelay: '0.5s' }} />
        
        {/* Static dot pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px, #eab308 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* White background container for header content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 max-w-4xl mx-auto">
            <BlurText 
              text="Our Expertise"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              delay={0.1}
              duration={0.6}
            />
            <BlurText 
              text="Let our experienced technicians help you make your wash more profitable or get you started with a new site."
              className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto"
              delay={0.3}
              duration={0.8}
            />
            <BlurText 
              text="With over 50 years of combined experience, our staff has the knowledge to overcome any hurdle."
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              delay={0.1}
              duration={0.8}
            />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Equipment Sales Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 hover:bg-white/95 hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group h-full flex flex-col relative overflow-hidden">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg">
              <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center relative z-10">Equipment Sales</h3>
            <p className="text-gray-600 text-center mb-6 leading-relaxed flex-grow relative z-10">Quality wash equipment from trusted manufacturers to get your operation running smoothly and efficiently.</p>
            <div className="text-center relative z-10">
              <SafeLink href="/equipment-sales" className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Service & Maintenance Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 hover:bg-white/95 hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group h-full flex flex-col relative overflow-hidden">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center relative z-10">Service & Maintenance</h3>
            <p className="text-gray-600 text-center mb-6 leading-relaxed flex-grow relative z-10">Professional maintenance and emergency repair services to keep your wash operation running at peak performance.</p>
            <div className="text-center relative z-10">
              <SafeLink href="/service-maintenance" className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Chemical Programs Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 hover:bg-white/95 hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group h-full flex flex-col relative overflow-hidden">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center relative z-10">Chemical Programs</h3>
            <p className="text-gray-600 text-center mb-6 leading-relaxed flex-grow relative z-10">High-quality chemical solutions and custom programs designed to maximize wash performance and customer satisfaction.</p>
            <div className="text-center relative z-10">
              <SafeLink href="/chemical-programs" className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
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
}