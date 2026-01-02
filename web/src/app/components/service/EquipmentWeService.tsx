import React from 'react';
import SectionHeader from '../ui/SectionHeader';

// Professional color mapping for equipment cards
const colorMap = {
  blue: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]' },
  green: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]' },
  purple: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]' },
  orange: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]' },
  red: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]' },
  teal: { bg: 'from-slate-700 to-slate-800', dot: 'bg-[#f0da11]' },
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
    <>
      {/* Angular Transition */}
      <div className="relative h-20 bg-gray-50">
        <div className="absolute inset-0 bg-white" style={{clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)'}}></div>
      </div>

      <section className="py-20 bg-white relative">
        <div className="absolute left-0 top-1/4 w-2 h-40 bg-slate-900"></div>
        <div className="absolute right-0 bottom-1/3 w-2 h-40 bg-[#f0da11]"></div>
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
    </>
  );
}