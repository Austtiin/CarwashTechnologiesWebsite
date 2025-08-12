import React from 'react';
import BlurText from '../animations/BlurText';

export default function AboutServiceAreas() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <BlurText
              text="Serving the Midwest"
              className="font-friz text-4xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6"
              delay={0.1}
              duration={0.1}

            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Minnesota</h3>
              <p className="text-gray-600">Twin Cities metro and greater Minnesota markets</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">North Dakota</h3>
              <p className="text-gray-600">Fargo-Moorhead area and statewide coverage</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">South Dakota</h3>
              <p className="text-gray-600">Sioux Falls region and statewide service</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wisconsin</h3>
              <p className="text-gray-600">Milwaukee area and throughout Wisconsin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}