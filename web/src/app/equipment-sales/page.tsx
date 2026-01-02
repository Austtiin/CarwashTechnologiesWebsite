import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';

export const metadata: Metadata = {
  title: 'Equipment Sales | Carwash Technologies',
  description: 'Premium car wash equipment from industry-leading manufacturers. Tunnel systems, automatic systems, self-serve bays, and more. Serving Minnesota, North Dakota, South Dakota, and Wisconsin.',
  keywords: 'car wash equipment, tunnel systems, automatic wash, self-serve equipment, wash equipment sales',
  openGraph: {
    title: 'Equipment Sales | Carwash Technologies',
    description: 'Premium car wash equipment from industry-leading manufacturers',
    type: 'website',
  },
};

// Server component data fetching
async function getEquipmentData() {
  return {
    manufacturers: [
      { name: 'PECO', logo: '/peco-logo.webp', alt: 'PECO' },
      { name: 'Sonnys', logo: '/logoSonnys.webp', alt: "Sonny's" },
      { name: 'PDQ', logo: '/logoPDQ.webp', alt: 'PDQ' },
      { name: 'Belanger', logo: '/logoBelanger.webp', alt: 'Belanger' },
      { name: 'AVW', logo: '/AVW-logo.webp', alt: 'AVW' },
    ],
    categories: [
      {
        id: 'tunnel',
        title: 'Tunnel Systems',
        description: 'Complete conveyor wash systems for high-volume operations with automated wash sequences.',
        icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        color: 'blue',
        features: ['Conveyor systems', 'Automated wash arches', 'Dryer systems', 'Control systems']
      },
      {
        id: 'self-serve',
        title: 'Self-Serve Bays',
        description: 'High-pressure wash systems and bay equipment for self-service operations.',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        color: 'green',
        features: ['High-pressure pumps', 'Wash guns & wands', 'Chemical injection systems', 'Payment systems']
      },
      {
        id: 'automatic',
        title: 'Automatic Systems',
        description: 'Touch and touchless automatic wash systems for gentle, effective cleaning.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
        color: 'purple',
        features: ['Touchless systems', 'Soft-touch systems', 'Rollover systems', 'In-bay automatics']
      },
      {
        id: 'water-recovery',
        title: 'Water Recovery',
        description: 'Water reclaim and recycling systems for environmental responsibility.',
        icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
        color: 'orange',
        features: ['Reclaim systems', 'Water treatment', 'Filtration systems', 'Storage tanks']
      },
      {
        id: 'dryer',
        title: 'Dryer Systems',
        description: 'High-performance dryer systems for spot-free vehicle drying.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        color: 'red',
        features: ['Blower systems', 'Follow-you dryers', 'Overhead dryers', 'Side dryers']
      },
      {
        id: 'payment',
        title: 'Payment Systems',
        description: 'Modern payment solutions for seamless customer transactions.',
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        color: 'teal',
        features: ['Credit card readers', 'Mobile payment', 'Token systems', 'Management software']
      }
    ],
    stats: {
      experience: '25+',
      installations: '500+',
      support: '24/7',
      states: '4'
    }
  };
}

// Professional color mapping for categories
const colorMap = {
  blue: { bg: 'from-gray-700 to-gray-800', dot: 'bg-[#f0da11]', border: 'border-gray-600' },
  green: { bg: 'from-gray-700 to-gray-800', dot: 'bg-[#f0da11]', border: 'border-gray-600' },
  purple: { bg: 'from-gray-700 to-gray-800', dot: 'bg-[#f0da11]', border: 'border-gray-600' },
  orange: { bg: 'from-gray-700 to-gray-800', dot: 'bg-[#f0da11]', border: 'border-gray-600' },
  red: { bg: 'from-gray-700 to-gray-800', dot: 'bg-[#f0da11]', border: 'border-gray-600' },
  teal: { bg: 'from-gray-700 to-gray-800', dot: 'bg-[#f0da11]', border: 'border-gray-600' },
};

export default async function EquipmentSales() {
  const data = await getEquipmentData();

  // Transform categories for GenericServicesGrid
  const equipmentServices = data.categories.map(category => ({
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
      </svg>
    ),
    title: category.title,
    description: category.description + ' ' + category.features.join(', ')
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GenericHero
        eyebrow="Premium Wash Equipment"
        title="Equipment Sales"
        highlightedWord="Equipment"
        subtitle="Industry-Leading Solutions"
        description="Premium car wash equipment from trusted manufacturers. Complete systems for tunnel, automatic, self-serve operations, and everything in between."
        stats={[
          { value: data.stats.experience, label: 'Years Experience' },
          { value: data.stats.installations, label: 'Installations' },
          { value: data.stats.support, label: 'Support' },
          { value: data.stats.states, label: 'States Served' }
        ]}
        buttons={[
          {
            text: "Get Equipment Quote",
            href: "/contact",
            variant: "primary"
          },
          {
            text: "View Our Services",
            href: "/services",
            variant: "secondary"
          }
        ]}
        backgroundVariant="white"
        showPattern={true}
      />

      {/* Trusted Partners Section */}
      <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="items-center container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-friz text-3xl md:text-4xl text-gray-900 mb-4">
              Trusted Equipment <span className="text-[#f0da11]">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with industry-leading manufacturers to provide you with the highest quality wash equipment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {data.manufacturers.map((manufacturer, index) => (
              <div key={manufacturer.name} className="bg-white border-l-4 border-[#f0da11] p-6 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={manufacturer.logo}
                  alt={manufacturer.alt}
                  width={120}
                  height={60}
                  className="h-16 w-auto object-contain"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <GenericServicesGrid
        eyebrow="Our Products"
        title="Equipment Categories"
        highlightedWord="Equipment"
        description="Complete range of wash equipment solutions for every operation type"
        items={equipmentServices}
        columns={3}
        backgroundVariant="light-grey"
      />

      {/* Call to Action */}
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

