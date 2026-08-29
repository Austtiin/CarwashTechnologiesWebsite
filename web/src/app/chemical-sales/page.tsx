import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';
import TrustedChemicalPartners from '../components/chemical/TrustedChemicalPartners';
import StatsBand from '../components/ui/StatsBand';
import PageFAQ from '../components/ui/PageFAQ';

export const metadata: Metadata = {
  title: 'Car Wash Chemical Supplier | Delivery & Support Across MN, ND, SD, WI',
  description: 'Professional car wash chemical programs delivered across Minnesota, North Dakota, South Dakota, and Wisconsin. Full-line supplier for tunnel, in-bay, touchless, self-service, and heavy duty truck wash operations. Vertech Labs, ChemQuest, and Simoniz authorized dealer. No contracts - flexible ordering and scheduled delivery.',

  keywords: 'carwash chemicals Minnesota, car wash chemical supplier MN, carwash chemistry Minnesota, gas station carwash chemicals, convenience store wash chemicals, self service carwash chemicals Minnesota, self serve bay chemicals MN, express carwash chemicals Minnesota, tunnel wash chemistry MN, touchless carwash chemicals Minnesota, automatic carwash chemicals, in bay automatic chemicals, heavy duty carwash chemicals Minnesota, truck wash chemicals MN, fleet wash detergents Minnesota, semi truck wash chemistry, bus wash chemicals, RV wash solutions, commercial carwash chemicals MN, industrial wash chemistry, car dealership carwash chemicals, municipal fleet wash chemicals, car wash detergents Minnesota, pre treatment chemicals MN, wash solutions Minnesota, rinse aids, drying agents, tire shine, wheel cleaners, protectants, sealants, ceramic coating, carwash soap Minnesota, carwash shampoo MN, polish chemicals, wax solutions, carwash chemical programs Minnesota, chemical delivery service MN, bulk carwash chemicals, concentrated wash chemicals, environmentally friendly carwash chemicals, biodegradable wash solutions, Vertech Labs dealer Minnesota, Vertech Labs chemicals MN, ChemQuest dealer Minnesota, ChemQuest chemicals MN, Simoniz dealer Minnesota, Simoniz authorized dealer MN, Simoniz chemicals Minnesota',
  alternates: { canonical: '/chemical-sales' },
  openGraph: {
    title: 'Car Wash Chemical Supplier | Gas Station, Self-Service, Tunnel, Heavy Duty',
    description: 'Professional car wash chemical supplier: gas station chemicals, self-service bay chemistry, express tunnel solutions, touchless detergents, and truck wash chemistry.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/chemical-sales',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Wash Chemical Supplier Minnesota',
    description: 'Complete carwash chemistry for gas stations, self-service, tunnels, touchless, and heavy duty operations. Vertech, ChemQuest, Simoniz dealer.',
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
      { name: 'ChemQuest', logo: '/logos/ChemQuest-960w.webp', alt: 'ChemQuest' },
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
        ? '/imgs/chems/MixStir.webp'
        : category.id === 'wash-solutions'
          ? '/imgs/chems/VLabs-Tubs.webp'
          : category.id === 'finishing'
            ? '/imgs/SudzFL/IMG_20260101_213851.webp'
            : category.id === 'specialty'
              ? '/imgs/chems/THU100.webp'
              : undefined
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
        backgroundVariant="dark"
        showPattern={true}
        leftImage="/imgs/IMG_5384.webp"
        rightImage="/imgs/IMG_20260313_101859.webp"
        centerLane="strong"
        compact={true}
      />

      <StatsBand
        badge="Chemical Supply"
        heading="Professional-grade chemistry for every wash type."
        image="/imgs/chems/VLabs-Tubs.webp"
        stats={[
          { value: '3', label: 'Trusted Brands' },
          { value: '48hrs', label: 'Delivery Available' },
          { value: '4', label: 'States Served' },
          { value: 'No', label: 'Contracts Required' },
        ]}
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

      {/* Why Order From Us - compact benefits strip */}
      <section className="bg-white py-14 sm:py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Why Order From Us</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Simple Ordering. <span className="text-[#d0b211]">Flexible Programs.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              No contracts, no hassle - just reliable chemistry delivered when you need it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 p-4 rounded-lg border border-gray-100 bg-slate-50">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#f0da11] flex items-center justify-center">
                  <svg className="w-3 h-3 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Programs - 3-tier cards */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Ordering Options</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Chemical <span className="text-[#d0b211]">Programs</span>
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Pick the ordering structure that fits your operation - all programs include full product-line access.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {data.programs.map((program) => (
              <div
                key={program.id}
                className={`relative rounded-xl border-2 bg-white p-7 flex flex-col shadow-sm transition-shadow hover:shadow-md ${
                  program.popular ? 'border-[#f0da11]' : 'border-gray-200'
                }`}
              >
                {program.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f0da11] text-slate-900 text-xs font-bold uppercase tracking-widest px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{program.title}</h3>
                <p className="text-sm text-gray-500 mb-5 leading-snug">{program.description}</p>
                <ul className="space-y-2 mb-7 flex-1">
                  {program.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#d0b211] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block text-center text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors ${
                    program.popular
                      ? 'bg-[#f0da11] text-slate-900 hover:bg-[#d0b211]'
                      : 'bg-slate-100 text-gray-800 hover:bg-slate-200'
                  }`}
                >
                  {program.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ
        heading="Car Wash Chemical Questions, Answered"
        items={[
          {
            question: 'Are you a car wash chemical supplier near me?',
            answer: 'Yes. We are a professional car wash chemical supplier serving customers across Minnesota, North Dakota, South Dakota, and Wisconsin. We offer flexible ordering with scheduled delivery routes and will-call pickup at our Forest Lake, MN location. If you are searching for a car wash chemical supplier near me in the upper Midwest, we can most likely serve your site.',
          },
          {
            question: 'Which car wash chemical manufacturers do you carry?',
            answer: 'We are an authorized dealer for Vertech Labs, ChemQuest, and Simoniz - three of the top car wash chemical manufacturers in the industry. Each brand offers a full program of pre-soak, main wash, finishing, and specialty products formulated for tunnel, in-bay, touchless, self-service, and heavy duty wash applications.',
          },
          {
            question: 'Can you act as a car wash chemical distributor for my operation?',
            answer: 'Yes. We function as a full-service car wash chemical distributor, supplying both single locations and multi-site operations. We offer volume pricing, scheduled delivery, technical support, and custom program design. No contracts required - flexible ordering on your schedule.',
          },
          {
            question: 'Do you supply car wash chemicals for heavy duty and truck wash operations?',
            answer: 'Yes. We carry a complete line of heavy duty vehicle wash chemicals including high-alkaline presoaks, traffic film removers, truck wash detergents, and drying agents specifically formulated for semi trucks, buses, municipal fleets, and heavy equipment. We can design a full chemical program around your fleet wash operation.',
          },
          {
            question: 'Can you deliver car wash chemicals to Illinois or Chicago-area locations?',
            answer: 'We primarily serve Minnesota, North Dakota, South Dakota, and Wisconsin with our delivery routes. For locations in or near the Chicago area or Illinois, contact us to discuss options - we work with distribution partners and can arrange will-call or freight shipping for qualified orders.',
          },
        ]}
      />

      {/* Call to Action */}
      <CallToActionNew
        title="Ready to Transform Your Wash Business?"
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

