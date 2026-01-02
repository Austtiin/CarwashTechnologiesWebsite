import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import SafeLink from '../ui/SafeLink';

interface ChemicalProgram {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

interface FlexibleChemicalProgramsProps {
  programs: ChemicalProgram[];
}

export default function FlexibleChemicalPrograms({ programs }: FlexibleChemicalProgramsProps) {
  return (
    <>
      {/* Bold Angular Divider */}
      <div className="relative h-16">
        <div className="absolute inset-0 bg-slate-900" style={{clipPath: 'polygon(0 0, 100% 100%, 0 100%)'}}></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f0da11]" style={{clipPath: 'polygon(30% 0, 100% 0, 100% 100%)'}}></div>
      </div>

      <section className="py-20 bg-gray-50 relative">
        {/* Decorative corner */}
        <div className="absolute bottom-0 left-0 w-40 h-40 border-b-4 border-l-4 border-slate-900 opacity-10"></div>
        <div className="container mx-auto px-4">
        
        <div className="w-full flex justify-center mb-16">
                  <SectionHeader
                    title="Flexible Chemical Programs"
                    description="Choose the program that works best for your operations"
                    titleDelay={0}
                    descriptionDelay={0}
                    textAlign="center"
                    maxWidth="max-w-4xl"
                  />
                </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className={`bg-white p-8 rounded-xl shadow-lg flex flex-col h-full ${
                program.popular 
                  ? 'border-2 border-[#f0da11] relative' 
                  : 'border border-gray-200'
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#f0da11] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-center ">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center mt-auto">
                <SafeLink 
                  href="/contact" 
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    program.popular
                      ? 'bg-[#f0da11] text-gray-900 hover:bg-[#d0b211]'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {program.cta}
                </SafeLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

