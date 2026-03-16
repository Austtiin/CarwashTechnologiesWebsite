import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import CallToActionNew from '../components/ui/CallToActionNew';

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
      description:
        'High-efficiency, high-throughput conveyor tunnel systems designed to process a steady stream of vehicles. Ideal for busy retail sites and auto dealerships that need consistent, repeatable results.',
    },
    {
      title: 'Automatic Vehicle Washes',
      description:
        'Touchless and soft-touch in-bay automatic systems that fit into compact footprints. A great fit for auto dealers, c-stores, and small sites where space is limited but wash quality still matters.',
    },
    {
      title: 'Fleet & Large Vehicle Washes',
      description:
        'Drive-through and gantry style systems for trucks, buses, and heavy equipment. Well suited for municipalities, county garages, trucking companies, and large commercial fleets that need reliable, repeatable cleaning.',
    },
    {
      title: 'Parts & Machine Washes',
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
        stats={[
          { value: '4+', label: 'Core Wash Types' },
          { value: '50+', label: 'Years Experience' },
          { value: '500+', label: 'Installations' },
          { value: '4', label: 'States Served' },
        ]}
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
        backgroundVariant="white"
        showPattern={true}
        leftImage="/imgs/BelangerTunnel.jpg"
        rightImage="/imgs/SpinLite.jpg"
      />

      <section className="bg-[#f6f6f6] py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Wash Categories
            </h2>
            <p className="text-base text-gray-600">
              Each wash type can be tailored with the right equipment, chemistry, and controls. Use this quick list to see which option fits your vehicles, volume, and site.
            </p>
          </div>

          <ul className="max-w-3xl mx-auto space-y-6 text-left">
            {washTypes.map((type) => (
              <li key={type.title} className="text-gray-800">
                <span className="block font-semibold text-lg text-gray-900 mb-1">
                  {type.title}
                </span>
                <span className="block text-sm text-gray-700">
                  {type.description}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <span className="inline-block text-sm text-gray-600">
              Not sure which wash type fits? Our team can walk through options with you.
            </span>
          </div>
        </div>
      </section>

      <CallToActionNew
        title="Ready to Plan Your Next Wash?"
        description="Whether you are planning a new car wash, fleet wash, or parts wash, our team can help you evaluate wash types, site constraints, and ROI before you break ground."
        buttons={[
          {
            text: 'Discuss Wash Types',
            href: '/contact#contact-inquiry',
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
