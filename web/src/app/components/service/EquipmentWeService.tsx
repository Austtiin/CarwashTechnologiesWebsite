import React from 'react';
import SectionHeader from '../ui/SectionHeader';

// Color mapping for equipment cards
const colorMap = {
  blue: { bg: 'from-blue-500 to-blue-700', dot: 'bg-blue-500' },
  green: { bg: 'from-green-500 to-green-700', dot: 'bg-green-500' },
  purple: { bg: 'from-purple-500 to-purple-700', dot: 'bg-purple-500' },
  orange: { bg: 'from-orange-500 to-orange-700', dot: 'bg-orange-500' },
  red: { bg: 'from-red-500 to-red-700', dot: 'bg-red-500' },
  teal: { bg: 'from-teal-500 to-teal-700', dot: 'bg-teal-500' },
};

interface EquipmentType {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  services: string[];
}

interface EquipmentWeServiceProps {
  equipment: EquipmentType[];
}

export default function EquipmentWeService({ equipment }: EquipmentWeServiceProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeader
            title="Equipment We Service"
            description="Our certified technicians are trained to service all major wash equipment brands and systems"
            titleDelay={50}
            descriptionDelay={100}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {equipment.map((item) => {
            const colors = colorMap[item.color as keyof typeof colorMap];
            return (
              <div key={item.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                <ul className="space-y-3 text-sm text-gray-600">
                  {item.services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className={`w-2 h-2 ${colors.dot} rounded-full mr-3`}></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-[#f0da11]/10 backdrop-blur-sm rounded-full px-8 py-4 border border-[#f0da11]/30">
            <svg className="w-6 h-6 mr-3 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg font-semibold text-gray-900">
              Trained technicians for all major brands including Belanger, PECO, AVW, PDQ and more.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}