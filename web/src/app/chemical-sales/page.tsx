import React from 'react';
import { Metadata } from 'next';
import ChemicalSalesHero from '../components/chemical/ChemicalSalesHero';
import TrustedChemicalPartners from '../components/chemical/TrustedChemicalPartners';
import ChemicalCategories from '../components/chemical/ChemicalCategories';
import ChemicalProgramBenefits from '../components/chemical/ChemicalProgramBenefits';
import FlexibleChemicalPrograms from '../components/chemical/FlexibleChemicalPrograms';
import CallToAction from '../components/ui/CallToAction';

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
      support: '24/7',
      delivery: '48hrs',
      coverage: '4 States'
    },
    manufacturers: [
      { name: 'CWT', logo: '/logoCWT.webp', alt: 'CWT' },
      { name: 'Simoniz', logo: '/logoSimo.webp', alt: 'Simoniz' },
      { name: 'Vertech', logo: '/logoVertech.webp', alt: 'Vertech' }
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
        features: ['No minimum orders', 'Flexible ordering', 'Full product line access'],
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

  return (
    <div className="min-h-screen">
      {/* Hero Section - Client Component for animations */}
      <ChemicalSalesHero />

      {/* Trusted Chemical Partners - Server Component */}
      <TrustedChemicalPartners manufacturers={data.manufacturers} />

      {/* Chemical Categories - Server Component */}
      <ChemicalCategories categories={data.categories} />

      {/* Chemical Program Benefits - Server Component */}
      <ChemicalProgramBenefits 
        benefits={data.benefits} 
        stats={data.stats} 
      />

      {/* Flexible Chemical Programs - Server Component */}
      <FlexibleChemicalPrograms programs={data.programs} />

      {/* Call to Action - Using your existing CTA component */}
      <CallToAction
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
          backgroundVariant="dark"
          showDecorations={true}
        />
    </div>
  );
}