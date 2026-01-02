import React from 'react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

interface Manufacturer {
  name: string;
  logo: string;
  alt: string;
}

interface TrustedChemicalPartnersProps {
  manufacturers: Manufacturer[];
}

export default function TrustedChemicalPartners({ manufacturers }: TrustedChemicalPartnersProps) {
  return (
    <>
      {/* Angled Transition from Hero */}
      <div className="relative h-16 bg-white">
        <div className="absolute inset-0 bg-slate-900" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'}}></div>
      </div>

      <section className="py-20 bg-white relative overflow-hidden">
        {/* Accent stripe */}
        <div className="absolute top-0 left-0 w-1 h-full bg-[#f0da11]"></div>
      {/* Decorative Logos */}
      <Image
        src="/THU100.webp"
        alt="Decoration"
        width={180}
        height={180}
        className="pointer-events-none select-none absolute top-20 left-40 opacity-50 z-0"
        aria-hidden="true"
      />
      <Image
        src="/VLabs-Tubs.jpg"
        alt="Decoration"
        width={220}
        height={120}
        className="pointer-events-none select-none absolute bottom-2 right-30 opacity-50 z-0 rounded-2xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full flex justify-center mb-16">
          <SectionHeader
            title="Trusted Chemical Partners"
            description="We partner with leading chemical manufacturers to provide you with the highest quality wash solutions"
            titleDelay={0}
            descriptionDelay={0}
            textAlign="center"
            maxWidth="max-w-4xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {manufacturers.map((manufacturer, index) => (
            <div key={manufacturer.name} className="group hover:scale-110 transition-transform duration-300">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <Image
                  src={manufacturer.logo}
                  alt={manufacturer.alt}
                  width={150}
                  height={80}
                  className="h-30 w-auto object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

