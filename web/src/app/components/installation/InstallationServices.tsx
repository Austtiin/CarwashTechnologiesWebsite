import React from 'react';
import SectionHeader from '../ui/SectionHeader';

// Professional color mapping for service cards
const colorMap = {
  blue: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]', border: 'border-slate-600' },
  green: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]', border: 'border-slate-600' },
  purple: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]', border: 'border-slate-600' },
  orange: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]', border: 'border-slate-600' },
  red: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]', border: 'border-slate-600' },
  teal: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]', border: 'border-slate-600' },
};

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

interface InstallationServicesProps {
  services: Service[];
}

export default function InstallationServices({ services }: InstallationServicesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-center mb-16">
          <SectionHeader
            title="Installation Services"
            description="Complete installation services for all types of wash equipment"
            titleDelay={0}
            descriptionDelay={0}
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <div key={service.id} className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200">
                <div className="border-b-2 border-gray-300 bg-gray-50 p-4 flex items-center">
                  <div className={`w-10 h-10 bg-gradient-to-br ${colors.bg} flex items-center justify-center mr-4`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`w-1.5 h-1.5 ${colors.dot} mt-1.5 mr-3 flex-shrink-0`}></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

