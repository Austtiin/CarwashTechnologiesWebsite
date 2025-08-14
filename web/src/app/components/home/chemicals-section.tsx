import React from 'react';
import Image from 'next/image';
import BlurText from '../animations/BlurText';
import SafeLink from '../ui/SafeLink';

const ChemicalsSection = () => {
  return (
    <section className="relative z-10 py-20 bg-yellow-50 backdrop-blur-sm overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Spinning squares with different colors and timing */}
        <div className="absolute top-1/4 right-1/5 w-15 h-15 border-2 border-[#f03e11]/28 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-11 h-11 border-2 border-[#bfb986]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-16 left-1/2 w-9 h-9 border-2 border-[#1132f0]/40 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '7s', animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-17 h-17 border-2 border-[#bf8686]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-16 w-8 h-8 border-2 border-[#7411d0]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s', animationDelay: '1.2s' }}></div>
        
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

      <div className="container mx-auto px-4 relative z-10 pt-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <BlurText
              text="Premium Wash Chemicals"
              delay={0.0}
              duration={0.1}
              className="font-friz text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6"
            />
            <p className="text-lg text-gray-700 mb-6">
              We supply high-quality wash chemicals that deliver superior cleaning results while being
              environmentally responsible. Our chemical programs are designed to maximize efficiency and minimize waste.
            </p>
            
            {/* Feature List */}
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-center">
                <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3"></span>
                Pre-soak and tire cleaners
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3"></span>
                Foaming detergents and soaps
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3"></span>
                Spot-free rinse aids and drying agents
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3"></span>
                Wax and protective coatings
              </li>
            </ul>
            
            {/* CTA Button */}
            <SafeLink 
              href="/chemical-sales" 
              className="bg-[#f0da11] text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Chemicals
            </SafeLink>
          </div>
          
          {/* Right Column - Quality Guarantee Card */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <div className="text-center">
              {/* Logos */}
              <div className="w-30 h-30 flex items-center justify-center mx-auto mb-5">
                <div className="mx-auto flex items-center justify-center p-1 gap-6">
                  <Image 
                    src="/logoSimo.webp" 
                    alt="Simoniz Logo" 
                    width={100} 
                    height={100} 
                    className="object-contain"
                  />
                  <Image 
                    src="/logoCWT.webp" 
                    alt="Carwash Technologies Logo" 
                    width={100} 
                    height={100} 
                    className="object-contain"
                  />
                  <Image 
                    src="/logoVertech.webp" 
                    alt="Vertech Logo" 
                    width={100} 
                    height={100} 
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Guarantee Content */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-600">
                All of our chemicals meet the highest industry standards for performance and environmental safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChemicalsSection;