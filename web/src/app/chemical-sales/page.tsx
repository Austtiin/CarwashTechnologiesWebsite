import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';
import TrustedChemicalPartners from '../components/chemical/TrustedChemicalPartners';

export const metadata: Metadata = {
  title: 'Chemical Sales | Carwash Technologies',
  description: 'High-performance wash chemicals for superior cleaning results. Professional-grade pre-treatment, wash solutions, finishing products, and specialty chemicals from trusted manufacturers.',
  keywords: 'car wash chemicals, wash detergents, pre-treatment chemicals, finishing products, chemical programs, wash solutions',
  openGraph: {
    title: 'Chemical Sales | Carwash Technologies',
    description: 'High-performance wash chemicals for superior cleaning results',
    type: 'website',
  },
};

// Server component data fetching
async function getChemicalData() {
  return {
    stats: {
      satisfaction: '99%',
      support: 'Full',
      delivery: '48hrs',
      coverage: '4 States'
    },
    manufacturers: [
      { name: 'Vertech', logo: '/logos/logoVertech.webp', alt: 'Vertech' },
      { name: 'CWT', logo: '/logos/logoCWT.webp', alt: 'CWT' },
      { name: 'Simoniz', logo: '/logos/logoSimo.webp', alt: 'Simoniz' }
    ],
    categories: [
      {
        id: 'pre-treatment',
        title: 'Pre-Treatment',
        description: 'Specialized chemicals for initial cleaning and preparation.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        color: 'blue',
        features: ['Bug & tar removers', 'Tire & wheel cleaners', 'Pre-soak solutions', 'Scent shots']
      },
      {
        id: 'wash-solutions',
        title: 'Wash Solutions',
        description: 'Primary cleaning chemicals for effective vehicle washing.',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
        color: 'green',
        features: ['Foaming detergents', 'High-pressure soaps', 'Touchless cleaners', 'Friction lubricants']
      },
      {
        id: 'finishing',
        title: 'Finishing Products',
        description: 'Final treatment chemicals for shine and protection.',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
        color: 'purple',
        features: ['Carnauba wax', 'Paint sealers', 'Spot-free rinse aids', 'Drying agents']
      },
      {
        id: 'specialty',
        title: 'Specialty Solutions',
        description: 'Custom and specialized chemical formulations.',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
        color: 'orange',
        features: ['Reclaim treatments', 'Anti-corrosion', 'Rust inhibitors', 'Custom programs']
      }
    ],
    programs: [
      {
        id: 'pay-as-go',
        title: 'Pay-As-You-Go',
        description: 'Perfect for small operations or seasonal businesses',
        features: ['No minimum orders', 'Flexible ordering', 'Full product line access', 'Monday to Friday Pickup'],
        cta: 'Get Pricing',
        popular: false
      },
      {
        id: 'regular-delivery',
        title: 'Regular Delivery',
        description: 'Scheduled deliveries for consistent operations',
        features: ['Scheduled deliveries', 'Volume discounts', 'Priority support', 'Custom formulations'],
        cta: 'Start Program',
        popular: true
      },
      {
        id: 'enterprise',
        title: 'Enterprise Program',
        description: 'For large operations and multi-location businesses',
        features: ['Maximum discounts', 'Dedicated account manager', 'Custom program design', 'Training programs'],
        cta: 'Contact Sales',
        popular: false
      }
    ],
    benefits: [
      'No Contracts Required',
      'Flexible Purchasing Options Available',
      'Consistent Quality Results',
      'Cost-Effective Solutions',
      'Environmental Compliance',
      'Regular Delivery & Support'
    ]
  };
}

export default async function ChemicalSales() {
  const data = await getChemicalData();

  // Transform categories for GenericServicesGrid
  const chemicalServices = data.categories.map(category => ({
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
      </svg>
    ),
    title: category.title,
    description: category.description,
    backgroundImage:
      category.id === 'pre-treatment'
        ? '/imgs/chems/MixStir.jpg'
        : category.id === 'wash-solutions'
          ? '/imgs/chems/VLabs-Tubs.jpg'
          : category.id === 'finishing'
            ? '/imgs/SudzFL/IMG_20260101_213851.jpg'
            : category.id === 'specialty'
              ? '/imgs/chems/THU100.webp'
              : undefined
  }));

  // Transform benefits into service items
  const benefitServices = data.benefits.map((benefit) => ({
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: benefit,
    description: "Expert chemical programs designed for your success",
    backgroundImage: '/imgs/chems/MixStir.jpg'
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <GenericHero
        eyebrow="High-Performance Chemicals"
        title="Chemical Sales"
        highlightedWord="Chemical"
        subtitle="Superior Cleaning Results"
        description="Professional-grade wash chemicals from trusted manufacturers. Complete chemical programs for pre-treatment, wash solutions, finishing products, and specialty applications."
        stats={[
          { value: data.stats.satisfaction, label: 'Satisfaction' },
          { value: data.stats.support, label: 'Support' },
          { value: data.stats.delivery, label: 'Delivery' },
          { value: data.stats.coverage, label: data.stats.coverage }
        ]}
        buttons={[
          {
            text: "Get Chemical Quote",
            href: "/contact",
            variant: "primary"
          },
          {
            text: "View SDS Sheets",
            href: "/sds",
            variant: "secondary"
          }
        ]}
        backgroundVariant="white"
        showPattern={true}
        leftImage="/imgs/BelangerTunnel.jpg"
        rightImage="/imgs/SpinLite.jpg"
      />

      {/* Trusted Chemical Manufacturers */}
      <TrustedChemicalPartners manufacturers={data.manufacturers} />

      {/* Chemical Categories */}
      <GenericServicesGrid
        eyebrow="Our Products"
        title="Chemical Categories"
        highlightedWord="Chemical"
        description="Complete range of wash chemical solutions for every stage of the wash process"
        items={chemicalServices}
        columns={4}
        backgroundVariant="light-grey"
      />

      {/* Chemical Benefits */}
      <GenericServicesGrid
        eyebrow="Why Choose Us"
        title="Program Benefits"
        highlightedWord="Benefits"
        description="Flexible chemical programs designed to meet your operation's unique needs"
        items={benefitServices}
        columns={3}
        backgroundVariant="white"
      />

      {/* Call to Action */}
      <CallToActionNew
        title="Ready to Transform Your Wash Business?"
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

