import React from 'react';
import BlurText from '../animations/BlurText';

export default function AboutStory() {
  return (
    <>
      {/* Angled Transition */}
      <div className="relative h-16 bg-gradient-to-b from-white via-gray-50 to-[#f6f6f6]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0da11]/5 to-transparent"></div>
      </div>

      <section className="py-20 bg-gradient-to-br from-[#f6f6f6] via-gray-100 to-[#f6f6f6] relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#f0da11]"></div>
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1f2937 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">        

            <BlurText
              text="Our Story"
              className="font-friz text-4xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6"
              delay={0.1}
              duration={0.1}
              
            />

            <BlurText
              text="Built on a foundation of expertise, innovation, and unwavering commitment to customer success"
              className="font-friz text-lg sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6"
              delay={0.2}
              duration={0.1}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Carwash Technologies, we&#39;ve been at the forefront of the wash industry for over two decades. 
                What started as a small operation has grown into a trusted partner for wash businesses across the Midwest.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began with a simple belief: every wash deserves equipment that works reliably, 
                chemicals that deliver consistent results, and support that&#39;s there when you need it most.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we continue to build on that foundation, combining decades of experience with the latest 
                innovations to help our customers thrive in an increasingly competitive market.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
              <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">25+</span>
                </div>
                <div>
                <h3 className="font-bold text-gray-900">Years of Experience</h3>
                <p className="text-gray-600">Serving the wash industry</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">99+</span>
                </div>
                <div>
                <h3 className="font-bold text-gray-900">Installations</h3>
                <p className="text-gray-600">Successful projects completed</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">4</span>
                </div>
                <div>
                <h3 className="font-bold text-gray-900">States Served</h3>
                <p className="text-gray-600">Minnesota, North Dakota, South Dakota & Wisconsin</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}