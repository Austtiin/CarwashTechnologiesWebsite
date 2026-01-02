import React from 'react';
import Image from 'next/image';
import BlurText from '../animations/BlurText';
import SafeLink from '../ui/SafeLink';

const ChemicalsSection = () => {
  return (
    <section className="relative z-10 py-20 bg-white">

      <div className="container mx-auto px-4 relative z-10 pt-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <BlurText
              text="Premium Wash Chemicals"
              delay={0.0}
              duration={0.1}
              className="font-friz text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-6"
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
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
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