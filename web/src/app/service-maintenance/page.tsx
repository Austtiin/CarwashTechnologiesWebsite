import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';
import StatsBand from '../components/ui/StatsBand';

export const metadata: Metadata = {
  title: 'Car Wash Service, Repair & Parts Minnesota | Priority Emergency Service',
  description: 'Professional car wash equipment service, repair, and parts in MN, ND, SD, WI. Priority emergency service, preventive maintenance, carwash parts supplier, certified technicians for gas station carwashes, self-service bays, express tunnels, automatic systems, truck wash, and all major brands.',
  keywords: 'car wash service Minnesota, carwash repair MN, carwash maintenance Minnesota, carwash parts supplier MN, priority carwash service Minnesota, emergency carwash repair MN, carwash technician Minnesota, carwash mechanic MN, gas station carwash service, self service carwash repair Minnesota, self serve bay maintenance MN, express carwash service Minnesota, tunnel carwash maintenance MN, automatic carwash repair Minnesota, touchless carwash service, in bay automatic repair MN, truck wash service Minnesota, fleet wash maintenance MN, heavy duty carwash repair, commercial carwash service Minnesota, industrial carwash maintenance, car dealership carwash service MN, preventive maintenance carwash Minnesota, carwash equipment repair MN, carwash parts warehouse Minnesota, carwash parts distributor MN, pump repair Minnesota, Cat Pumps repair MN, Cat Pumps service Minnesota, Cat Pumps parts MN, General Pump repair Minnesota, General Pump service MN, General Pump parts Minnesota, carwash pump repair MN, carwash motor repair Minnesota, carwash conveyor service, carwash gantry repair MN, Belanger service Minnesota, Belanger repair MN, PDQ service Minnesota, PDQ repair MN, PECO service Minnesota, PECO repair MN, Sonnys service Minnesota, Sonnys repair MN, AVW service Minnesota, carwash troubleshooting MN, carwash diagnostics Minnesota, carwash modernization service',
  alternates: { canonical: '/service-maintenance' },
  openGraph: {
    title: 'Car Wash Service, Repair & Parts | Priority Emergency Service',
    description: 'Professional car wash service, repair, and parts warehouse. Priority emergency service for gas station, self-service, express tunnel, and all carwash systems.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/service-maintenance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Wash Service, Repair & Parts | Priority Emergency',
    description: 'Priority carwash repair and parts supplier for all systems. Emergency service, preventive maintenance, and certified technicians in MN, ND, SD, WI.',
  },
};

// Server component data fetching
async function getServiceData() {
  return {
    stats: {
      serviceCalls: '1000+',
      satisfaction: '98%',
      responseTime: 'Fast Response',
      coverage: '4 States'
    },
    serviceCategories: [
      {
        id: 'preventive',
        title: 'Preventive Maintenance',
        description: 'Regular scheduled maintenance to prevent costly breakdowns and extend equipment life.',
        icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4',
        color: 'blue',
        features: ['Equipment inspections', 'Lubrication service', 'Filter replacements', 'Calibration checks']
      },
      {
        id: 'emergency',
        title: 'Emergency Repairs',
        description: 'Emergency service available to get your wash back up and running quickly.',
        icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        color: 'red',
        features: ['Rapid emergency response', 'Fast diagnostics', 'On-site repairs', 'Parts stocking program']
      },
      {
        id: 'electrical',
        title: 'Electrical Systems',
        description: 'Specialized electrical maintenance and troubleshooting for all wash systems.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        color: 'green',
        features: ['Electrical troubleshooting', 'Motor service', 'Control panel updates', 'Safety system checks']
      },
      {
        id: 'chemical',
        title: 'Chemical Systems',
        description: 'Chemical delivery system maintenance and calibration for optimal wash quality.',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
        color: 'purple',
        features: ['Dosing system calibration', 'Pump maintenance', 'Tank cleaning', 'Safety inspections']
      },
      {
        id: 'water',
        title: 'Water Systems',
        description: 'Complete water system maintenance including reclaim and treatment systems.',
        icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
        color: 'orange',
        features: ['Pump service', 'Filter replacements', 'Tank maintenance', 'System optimization']
      },
      {
        id: 'training',
        title: 'Training & Support',
        description: 'Staff training and ongoing support to help you maintain your equipment properly.',
        icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        color: 'teal',
        features: ['Staff training programs', 'Technical documentation', 'Phone support', 'Remote diagnostics']
      }
    ],
    equipmentTypes: [
      {
        id: 'tunnel',
        title: 'Tunnel Systems',
        description: 'Conveyor tunnels, brush systems, and automated wash equipment',
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
        color: 'blue',
        services: ['Conveyor systems & motors', 'Brush assemblies & drives', 'Wrap-around brushes', 'Top brushes & oscillators']
      },
      {
        id: 'self-serve',
        title: 'Self-Serve Bays',
        description: 'Self-service equipment, pressure washers, and coin operations',
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
        color: 'green',
        services: ['High-pressure pumps', 'Boom assemblies', 'Coin mechanisms', 'Timer systems']
      },
      {
        id: 'chemical-equip',
        title: 'Chemical Systems',
        description: 'Chemical injection, mixing, and delivery systems',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
        color: 'purple',
        services: ['Proportioning pumps', 'Chemical tanks & mixers', 'Injection systems', 'Dosing controllers']
      },
      {
        id: 'water-treatment',
        title: 'Water Treatment',
        description: 'Water reclaim, filtration, and treatment systems',
        icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
        color: 'orange',
        services: ['Reclaim systems', 'Filter assemblies', 'Clarifiers & separators', 'Holding tanks']
      },
      {
        id: 'electrical-equip',
        title: 'Electrical Controls',
        description: 'Control panels, PLCs, and electrical systems',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        color: 'red',
        services: ['PLC programming', 'Motor controls', 'Safety circuits', 'VFD drives']
      },
      {
        id: 'dryer',
        title: 'Dryer Systems',
        description: 'Air dryers, blowers, and drying equipment',
        icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
        color: 'teal',
        services: ['Blower assemblies', 'Air manifolds', 'Nozzle systems', 'Filter maintenance']
      }
    ]
  };
}

export default async function ServiceMaintenance() {
  const data = await getServiceData();

  // Transform service categories for GenericServicesGrid
  const serviceItems = data.serviceCategories.map(category => ({
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
      </svg>
    ),
    title: category.title,
    description: category.description + ' ' + category.features.join(', '),
    backgroundImage:
      category.id === 'preventive'
        ? '/imgs/car-wash.webp'
        : category.id === 'emergency'
          ? '/imgs/Carwash1.webp'
          : category.id === 'electrical'
            ? '/imgs/CarWash Controller.jpg'
            : category.id === 'chemical'
              ? '/imgs/chems/MixStir.webp'
              : category.id === 'water'
                ? '/imgs/Insta-KLEEN-Fleet-Wash-Rendering-Belanger (1).webp'
                : category.id === 'training'
                  ? '/imgs/AirCannon.webp'
                  : undefined
  }));

  // Transform equipment types for GenericServicesGrid
  const equipmentItems = data.equipmentTypes.map(equipment => ({
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={equipment.icon} />
      </svg>
    ),
    title: equipment.title,
    description: equipment.description + ' ' + equipment.services.join(', '),
    backgroundImage:
      equipment.id === 'tunnel'
        ? '/imgs/BelangerTunnel.webp'
        : equipment.id === 'self-serve'
          ? '/imgs/car-wash.webp'
          : equipment.id === 'chemical-equip'
            ? '/imgs/chems/VLabs-Tubs.webp'
            : equipment.id === 'water-treatment'
              ? '/imgs/Insta-KLEEN-fleet.webp'
              : equipment.id === 'electrical-equip'
                ? '/imgs/CarWash Controller.jpg'
                : equipment.id === 'dryer'
                  ? '/imgs/SpinLite.webp'
                  : undefined
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GenericHero
        eyebrow="Professional Service"
        title="Service & Maintenance"
        highlightedWord="Service"
        subtitle="Keeping Your Wash Running Smoothly"
        description="Expert service and maintenance for all car wash equipment. Emergency service available, preventive maintenance, and certified technicians across the Midwest."
        buttons={[
          {
            text: "Schedule Service",
            href: "/contact",
            variant: "primary"
          },
          {
            text: "Emergency Service",
            href: "tel:+16124089010",
            variant: "secondary"
          }
        ]}
        backgroundVariant="dark"
        showPattern={true}
        leftImage="/imgs/IMG_5380.webp"
        rightImage="/imgs/IMG_20260313_124500.webp"
        centerLane="strong"
        compact={true}
      />

      {/* Stats band */}
      <StatsBand
        badge="Proven Track Record"
        heading="Keeping Midwest washes open for business."
        image="/imgs/IMG_5380.webp"
        stats={[
          { value: data.stats.serviceCalls, label: 'Service Calls' },
          { value: data.stats.satisfaction, label: 'Satisfaction' },
          { value: data.stats.responseTime, label: 'Response' },
          { value: data.stats.coverage, label: 'Coverage' },
        ]}
      />

      {/* Emergency / priority service strip */}
      <section className="bg-[#f0da11]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-black text-[#f0da11]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <p className="text-lg sm:text-xl font-bold text-black leading-tight">Equipment down? We respond fast.</p>
                <p className="text-sm text-black/70">Priority emergency repair across MN, ND, SD &amp; WI.</p>
              </div>
            </div>
            <a
              href="tel:+16124089010"
              className="inline-flex items-center gap-2 bg-black text-white font-bold px-6 py-3.5 hover:bg-slate-800 transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              Call (612) 408-9010
            </a>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <GenericServicesGrid
        eyebrow="Our Services"
        title="Service Categories"
        highlightedWord="Service"
        description="Comprehensive service solutions to keep your car wash equipment running at peak performance"
        items={serviceItems}
        columns={3}
        backgroundVariant="light-grey"
      />

      {/* Equipment We Service */}
      <GenericServicesGrid
        eyebrow="Equipment Expertise"
        title="Equipment We Service"
        highlightedWord="Equipment"
        description="Experienced technicians servicing all major car wash equipment types and manufacturers"
        items={equipmentItems}
        columns={3}
        backgroundVariant="white"
      />

      <CallToActionNew
        title="Let's Build Something Great"
        description="Join hundreds of satisfied customers across the Midwest who trust Carwash Technologies for their equipment, service, and chemical needs."
        buttons={[
          {
            text: "Get Started Today",
             href: "/contact#contact-inquiry",
            variant: "primary"
          },
          {
            text: "View Our Services", 
            href: "/services",
            variant: "secondary"
          }
        ]}
        contactInfo={{
          phone: "(612) 408-9010",
          address: "322 19th St. SW<br />Forest Lake, MN 55025",
          showContactCard: true
        }}
      />
    </div>
  );
}

