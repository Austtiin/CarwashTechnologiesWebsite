import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export default function EmergencyService() {
  const emergencySteps = [
    {
      title: 'Immediate Response',
      description: 'Call our emergency hotline and speak directly with a technician within minutes.',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'Fast Dispatch',
      description: 'Our technicians are dispatched within 2 hours for critical equipment failures.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Quick Resolution',
      description: 'Most emergency repairs are completed on-site with parts from our mobile inventory.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <>
      {/* Bold Angular Divider */}
      <div className="relative h-16">
        <div className="absolute inset-0 bg-slate-900" style={{clipPath: 'polygon(0 0, 100% 100%, 0 100%)'}}></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-red-600" style={{clipPath: 'polygon(30% 0, 100% 0, 100% 100%)'}}></div>
      </div>

      <section className="py-20 bg-gray-50 relative">
        <div className="absolute bottom-0 left-0 w-40 h-40 border-b-4 border-l-4 border-red-500 opacity-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeader
            title="Emergency Service Available"
            description="When your wash goes down, every minute counts"
            titleDelay={50}
            descriptionDelay={100}
          />
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
            <div className="flex items-center justify-center text-white">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold">Emergency Hotline: (612) 408-9010</h3>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {emergencySteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg font-semibold text-red-900">Emergency Service Coverage</h4>
              </div>
              <p className="text-red-800 text-center">
                Emergency response available across Minnesota, North Dakota, South Dakota, and Wisconsin. 
                Emergency service charges apply for after-hours calls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}