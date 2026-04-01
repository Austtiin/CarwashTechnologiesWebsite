import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import CallToActionNew from '../components/ui/CallToActionNew';
import WhoWeServeSectionNew from '../components/home/sections/WhoWeServeSectionNew';

export const metadata: Metadata = {
  title: 'Types of Vehicle Washes | Carwash Technologies',
  description: 'Explore tunnel washes, automatic vehicle washes, parts and machine wash systems, and fleet / large commercial washes. See which vehicle wash type is right for auto dealerships, fleets, manufacturers, municipalities, and more.',
  keywords: 'types of car washes, tunnel wash systems, automatic vehicle washes, fleet washes, commercial vehicle washes, parts washer systems, high efficiency high throughput washes',
  openGraph: {
    title: 'Types of Vehicle Washes | Carwash Technologies',
    description: 'Compare tunnel, automatic, fleet, and parts wash systems and discover which wash type fits your operation.',
    type: 'website',
  },
};

export default function WashTypesPage() {
  const washTypes = [
    {
      title: 'Tunnel Washes',
      icon: 'M3 12h18M6 16h12M8 8h8',
      bestFor: 'Retail tunnel sites and high-volume dealerships',
      description:
        'High-efficiency, high-throughput conveyor tunnel systems designed to process a steady stream of vehicles. Ideal for busy retail sites and auto dealerships that need consistent, repeatable results.',
    },
    {
      title: 'Automatic Vehicle Washes',
      icon: 'M19 11H5m14 0a2 2 0 012 2v3H3v-3a2 2 0 012-2m14 0V9a2 2 0 00-2-2h-2M5 11V9a2 2 0 012-2h2m0 0h6',
      bestFor: 'Compact sites, c-stores, and dealer service lanes',
      description:
        'Touchless and soft-touch in-bay automatic systems that fit into compact footprints. A great fit for auto dealers, c-stores, and small sites where space is limited but wash quality still matters.',
    },
    {
      title: 'Fleet & Large Vehicle Washes',
      icon: 'M3 13h13l2 3h3v-4l-2-3h-2V6H3v7zm3 4a2 2 0 100-4 2 2 0 000 4zm11 0a2 2 0 100-4 2 2 0 000 4z',
      bestFor: 'Buses, municipal fleets, and heavy-duty operators',
      description:
        'Drive-through and gantry style systems for trucks, buses, and heavy equipment. Well suited for municipalities, county garages, trucking companies, and large commercial fleets that need reliable, repeatable cleaning.',
    },
    {
      title: 'Parts & Machine Washes',
      icon: 'M9.75 3a.75.75 0 01.75.75V5h3V3.75a.75.75 0 011.5 0V5h.75A2.25 2.25 0 0118 7.25v10.5A2.25 2.25 0 0115.75 20h-7.5A2.25 2.25 0 016 17.75V7.25A2.25 2.25 0 018.25 5H9V3.75A.75.75 0 019.75 3z',
      bestFor: 'Manufacturing parts, components, and process lines',
      description:
        'Specialized wash systems for parts, components, and manufacturing environments. Ideal for OEMs, industrial plants, and conveyorized production lines that require repeatable, process-focused cleaning.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <GenericHero
        eyebrow="Wash Concepts"
        title="Types of Vehicle Washes"
        highlightedWord="Washes"
        subtitle="Find the Right Wash System for Your Operation"
        description="From high-throughput tunnel washes to specialized parts washers, each wash type solves a different problem. Use this guide to match the right system to your location, volume, and customer base."
        buttons={[
          {
            text: 'Talk Through Wash Options',
            href: '/consulting',
            variant: 'primary',
          },
          {
            text: 'Get Installation Advice',
            href: '/installation-setup',
            variant: 'secondary',
          },
        ]}
        backgroundVariant="dark"
        showPattern={true}
        leftImage="/imgs/IMG_5387.webp"
        rightImage="/imgs/AirCannon.webp"
        centerLane="strong"
        compact={true}
      />

      <section className="relative bg-[#f6f6f6] py-16 sm:py-20 overflow-hidden">
        <div className="absolute -top-16 -left-10 w-48 h-48 rounded-full bg-[#f0da11]/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-12 w-56 h-56 rounded-full bg-blue-200/30 blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center relative z-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#f0da11]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-600 font-semibold">Compare Options</span>
              <span className="w-10 h-px bg-[#f0da11]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Wash Categories
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Each wash type can be tailored with the right equipment, chemistry, and controls. Use this quick list to see which option fits your vehicles, volume, and site.
            </p>
          </div>

          <ul className="grid gap-5 sm:gap-6 md:grid-cols-2 relative z-10">
            {washTypes.map((type) => (
              <li
                key={type.title}
                className="group rounded-2xl bg-white/90 backdrop-blur p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f0da11] to-[#d4c109] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={type.icon} />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-semibold text-lg text-gray-900 mb-1">
                      {type.title}
                    </span>
                    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                      Best for: {type.bestFor}
                    </span>
                  </div>
                </div>
                <span className="block text-sm text-gray-700 leading-relaxed">
                  {type.description}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center relative z-10">
            <span className="inline-block text-sm text-gray-700 bg-white/80 border border-gray-200 px-4 py-2 rounded-full">
              Not sure which wash type fits? Our team can walk through options with you.
            </span>
          </div>
        </div>
      </section>

      {/* Solutions for Every Operation */}
      <WhoWeServeSectionNew />

      <CallToActionNew
        title="Ready to Plan Your Next Wash?"
        description="Whether you are planning a new car wash, fleet wash, or parts wash, our team can help you evaluate wash types, site constraints, and ROI before you break ground."
        buttons={[
          {
            text: 'Discuss Wash Types',
            href: '/contact',
            variant: 'primary',
          },
          {
            text: 'Learn About Installation',
            href: '/installation-setup',
            variant: 'secondary',
          },
        ]}
        contactInfo={{
          phone: '(612) 408-9010',
          address: '322 19th St. SW<br />Forest Lake, MN 55025',
          showContactCard: true,
        }}
      />
    </div>
  );
}
