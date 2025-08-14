import React from 'react';
import SectionHeader from '../ui/SectionHeader';

// Color mapping for service cards
const colorMap = {
  blue: { bg: 'from-blue-400 to-blue-600', dot: 'bg-blue-500' },
  green: { bg: 'from-green-400 to-green-600', dot: 'bg-green-500' },
  purple: { bg: 'from-purple-400 to-purple-600', dot: 'bg-purple-500' },
  orange: { bg: 'from-orange-400 to-orange-600', dot: 'bg-orange-500' },
  red: { bg: 'from-red-400 to-red-600', dot: 'bg-red-500' },
  teal: { bg: 'from-teal-400 to-teal-600', dot: 'bg-teal-500' },
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className={`w-2 h-2 ${colors.dot} rounded-full mr-3`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

