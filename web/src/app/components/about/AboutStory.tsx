import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export default function AboutStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeader
              title="Our Story"
              description="Built on a foundation of expertise, innovation, and unwavering commitment to customer success"
              titleDelay={50}
              descriptionDelay={100}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Carwash Technologies, we've been at the forefront of the wash industry for over two decades. 
                What started as a small operation has grown into a trusted partner for wash businesses across the Midwest.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began with a simple belief: every wash deserves equipment that works reliably, 
                chemicals that deliver consistent results, and support that's there when you need it most.
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
  );
}