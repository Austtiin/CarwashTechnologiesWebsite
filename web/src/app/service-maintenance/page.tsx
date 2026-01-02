import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';

export const metadata: Metadata = {
  title: 'Service & Maintenance | Carwash Technologies',
  description: 'Professional car wash equipment service and maintenance. 24/7 emergency service, preventive maintenance, certified technicians across Minnesota, North Dakota, South Dakota, and Wisconsin.',
  keywords: 'car wash service, equipment maintenance, emergency repair, preventive maintenance, wash equipment service',
  openGraph: {
    title: 'Service & Maintenance | Carwash Technologies',
    description: 'Professional car wash equipment service and maintenance with 24/7 emergency support',
    type: 'website',
  },
};

// Server component data fetching
async function getServiceData() {
  return {
    stats: {
      serviceCalls: '1000+',
      satisfaction: '98%',
      responseTime: '2 Hours',
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
        description: '24/7 emergency service to get your wash back up and running quickly.',
        icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        color: 'red',
        features: ['24/7 emergency response', 'Rapid diagnostics', 'On-site repairs', 'Parts stocking program']
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
    description: category.description + ' ' + category.features.join(', ')
  }));

  // Transform equipment types for GenericServicesGrid
  const equipmentItems = data.equipmentTypes.map(equipment => ({
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={equipment.icon} />
      </svg>
    ),
    title: equipment.title,
    description: equipment.description + ' ' + equipment.services.join(', ')
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GenericHero
        eyebrow="Professional Service"
        title="Service & Maintenance"
        highlightedWord="Service"
        subtitle="Keeping Your Wash Running Smoothly"
        description="Expert service and maintenance for all car wash equipment. 24/7 emergency service, preventive maintenance, and certified technicians across the Midwest."
        stats={[
          { value: data.stats.serviceCalls, label: 'Service Calls' },
          { value: data.stats.satisfaction, label: 'Satisfaction' },
          { value: data.stats.responseTime, label: 'Response Time' },
          { value: data.stats.coverage, label: data.stats.coverage }
        ]}
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
        backgroundVariant="white"
        showPattern={true}
      />

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
            href: "/contact",
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

