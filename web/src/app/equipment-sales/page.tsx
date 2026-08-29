import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';
import StatsBand from '../components/ui/StatsBand';
import PageFAQ from '../components/ui/PageFAQ';

export const metadata: Metadata = {
  title: 'Car Wash Equipment & Parts Sales Minnesota | Gas Station, Self-Service, Heavy Duty',
  description: 'Comprehensive car wash equipment and parts sales in MN, ND, SD, WI. Gas station carwash systems, self-service carwash parts, heavy duty truck wash equipment, touchless systems, express tunnel equipment, in-bay automatics, conveyor tunnel systems, carwash parts warehouse, pumps, motors, and accessories from industry-leading manufacturers.',
  keywords: 'car wash equipment Minnesota, carwash parts supplier MN, automated car wash machine Minnesota, car wash automation equipment supplier minnesota, car wash blowers Minnesota, self service carwash parts Minnesota, gas station carwash equipment, heavy duty carwash equipment, express carwash equipment MN, touchless carwash systems Minnesota, carwash equipment parts supplier, car wash parts distributor MN, carwash parts warehouse Minnesota, tunnel wash equipment, conveyor carwash systems, in bay automatic equipment, automatic carwash machines, self serve bay equipment, semi truck wash equipment MN, fleet wash equipment Minnesota, bus wash systems, RV wash equipment, heavy equipment wash, municipal carwash equipment, commercial carwash equipment, industrial wash systems, car dealership carwash equipment, convenience store carwash systems, retrofit carwash equipment, carwash modernization equipment, carwash pumps Minnesota, Cat Pumps dealer MN, Cat Pumps parts Minnesota, General Pump dealer MN, General Pump parts Minnesota, carwash motors, carwash nozzles, spray arches, carwash dryers, water reclaim systems, Belanger dealer Minnesota, PECO dealer Minnesota, PDQ dealer Minnesota, Sonnys dealer Minnesota, AVW equipment Minnesota, gantry systems, touchfree equipment, friction equipment',
  alternates: { canonical: '/equipment-sales' },
  openGraph: {
    title: 'Car Wash Equipment & Parts | Gas Station, Self-Service, Heavy Duty Systems',
    description: 'Comprehensive car wash equipment and parts: gas station carwash systems, self-service parts, heavy duty truck wash, touchless systems, tunnels, and all accessories.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/equipment-sales',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Wash Equipment & Parts | Gas Station, Self-Service, Heavy Duty',
    description: 'Gas station carwash equipment, self-service parts, heavy duty truck wash systems, and complete carwash parts warehouse in MN, ND, SD, WI.',
  },
};

// Server component data fetching
async function getEquipmentData() {
  return {
    manufacturers: [
      { name: 'PECO', logo: '/logos/peco-logo.webp', alt: 'PECO' },
      { name: 'Sonnys', logo: '/logos/Sonnys_Logo-RGB.webp', alt: "Sonny's" },
      { name: 'PDQ', logo: '/logos/logoPDQ.webp', alt: 'PDQ' },
      { name: 'Belanger', logo: '/logos/logoBelanger.webp', alt: 'Belanger' },
      { name: 'AVW', logo: '/logos/AVW-logo.webp', alt: 'AVW' },
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
      experience: '50+',
      installations: '99+',
      support: 'Comprehensive',
      states: '4'
    }
  };
}

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
    description: category.description + ' ' + category.features.join(', '),
    backgroundImage:
      category.id === 'tunnel'
        ? '/imgs/BelangerTunnel.webp'
        : category.id === 'self-serve'
          ? '/imgs/car-wash.webp'
          : category.id === 'automatic'
            ? '/imgs/PDQ.webp'
            : category.id === 'water-recovery'
              ? '/imgs/Insta-KLEEN-fleet.webp'
              : category.id === 'dryer'
                ? '/imgs/SpinLite.webp'
                : category.id === 'payment'
                  ? '/imgs/CarWash Controller.jpg'
                  : undefined
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GenericHero
        eyebrow="Premium Wash Equipment"
        title="Equipment Sales"
        highlightedWord="Equipment"
        subtitle="Industry-Leading Solutions"
        description="Authorized dealer for Belanger, PECO, PDQ, Sonny's, and AVW car wash systems. Complete tunnel wash, automatic vehicle wash, self-serve, fleet wash, and semi truck wash equipment serving Minnesota, North Dakota, South Dakota, and Wisconsin."
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
        backgroundVariant="dark"
        showPattern={true}
        leftImage="/imgs/IMG_5386.webp"
        rightImage="/imgs/IMG_5380.webp"
        centerLane="strong"
        compact={true}
      />

      {/* Stats band */}
      <StatsBand
        badge="Authorized Dealer"
        heading="Equipment operators across the Midwest rely on."
        image="/imgs/IMG_5380.webp"
        stats={[
          { value: data.stats.experience, label: 'Years Experience' },
          { value: data.stats.installations, label: 'Installations' },
          { value: data.stats.support, label: 'Support' },
          { value: data.stats.states, label: 'States Served' },
        ]}
      />

      {/* Trusted Partners Section */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Our Partners</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Trusted Equipment <span className="text-[#f0da11]">Partners</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Authorized dealer for Belanger, PECO, PDQ, Sonny&apos;s, and AVW &mdash; industry-leading car wash equipment manufacturers trusted across the Midwest. We also supply Cat Pumps and General Pump systems for self-serve and fleet wash operations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {data.manufacturers.map((manufacturer, index) => (
              <div
                key={manufacturer.name}
                className="flex items-center justify-center py-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={manufacturer.logo}
                  alt={manufacturer.alt}
                  width={130}
                  height={64}
                  className="max-h-12 sm:max-h-14 max-w-full w-auto object-contain"
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

      {/* Featured Equipment Showcase */}
      <section className="py-14 sm:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Equipment Guides</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Explore Featured <span className="text-[#f0da11]">Equipment</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
              Specs, bay requirements, features, and brochures for our most popular systems.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* PDQ Card */}
            <div className="group relative bg-slate-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/imgs/PDQ.webp"
                  alt="PDQ LaserWash 360 Plus touchless in-bay automatic car wash"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#f0da11] text-slate-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                    In-Bay Automatic
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-7">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">PDQ · OPW</div>
                <h3 className="text-xl font-bold text-white mb-2">LaserWash® 360 Plus</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
                  Touchless in-bay automatic with Smart 360 Technology. Open bay, no floor tracks. Ideal for gas
                  stations, c-stores, and car dealerships. Bay from 28&apos;4&quot; L × 13&apos;6&quot; W × 10&apos;6&quot; H.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Touchless', 'Smart 360', 'FlashDry', 'Networked'].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="/equipment-sales/pdq-laserwash-360-plus"
                    className="flex-1 text-center bg-[#f0da11] text-slate-900 font-bold text-sm px-4 py-3 hover:bg-[#d0b211] transition-colors rounded"
                  >
                    View Details & Specs
                  </a>
                  <a
                    href="/PDFs/Equipment/pdq-laserwash-360-plus-touchless-automatic-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-slate-600 text-slate-300 text-sm px-4 py-3 hover:border-[#f0da11] hover:text-[#f0da11] transition-colors rounded"
                    title="Download PDQ LaserWash 360 Plus Brochure"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    PDF
                  </a>
                </div>
              </div>
            </div>

            {/* Belanger Insta-KLEEN Card */}
            <div className="group relative bg-slate-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/imgs/BelangerTunnel.webp"
                  alt="Belanger insta-KLEEN drive-thru fleet car wash system"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#f0da11] text-slate-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                    Fleet Wash System
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-7">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Belanger · OPW</div>
                <h3 className="text-xl font-bold text-white mb-2">insta-KLEEN™</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
                  Drive-thru fleet wash capable of one vehicle per minute. Only 36 gal/cycle, as little as 4HP,
                  modular design. Ideal for car dealerships, rental agencies, and municipal fleets.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['1 car/min', '36 gal/cycle', 'Modular', 'Fleet Ready'].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="/equipment-sales/belanger-insta-kleen"
                    className="flex-1 text-center bg-[#f0da11] text-slate-900 font-bold text-sm px-4 py-3 hover:bg-[#d0b211] transition-colors rounded"
                  >
                    View Details & Specs
                  </a>
                  <a
                    href="/PDFs/Equipment/belanger-insta-kleen-fleet-wash-system-brochure%20(2).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-slate-600 text-slate-300 text-sm px-4 py-3 hover:border-[#f0da11] hover:text-[#f0da11] transition-colors rounded"
                    title="Download Belanger insta-KLEEN Brochure"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <PageFAQ
        heading="Car Wash Equipment Questions, Answered"
        items={[
          {
            question: 'Do you sell automated car wash machines in Minnesota?',
            answer: 'Yes. We are a leading car wash automation equipment supplier in Minnesota and the upper Midwest. We sell and install automated car wash machines from Belanger, PECO, PDQ, Sonny\'s, and AVW - including in-bay automatics, touchless rollover systems, and full express conveyor tunnels. We serve customers across MN, ND, SD, and WI.',
          },
          {
            question: 'Do you carry car wash blowers and dryer systems?',
            answer: 'Yes. We supply car wash blower systems and complete dryer packages including follow-you dryers, overhead blowers, and side dryers from leading manufacturers. Whether you need a replacement car wash blower near you or a full dryer system for a new tunnel, we stock parts and complete units for quick turnaround.',
          },
          {
            question: 'Are you a car wash automation equipment supplier in Minnesota?',
            answer: 'Yes. Carwash Technologies is an authorized car wash automation equipment supplier serving Minnesota and the surrounding Midwest states. We supply the full range of automated wash systems, controls, payment equipment, and automation components from top manufacturers, backed by installation and ongoing service support.',
          },
          {
            question: 'Can you supply self-service carwash parts and equipment?',
            answer: 'Yes. We are a full-service self-service carwash parts supplier providing bay equipment, pumps, motors, nozzles, hoses, guns, and all accessories needed for self-serve operations. We stock Cat Pumps, General Pump, and components for all major self-serve bay manufacturers and can usually ship same or next day.',
          },
          {
            question: 'Do you supply equipment for car dealership car washes?',
            answer: 'Yes. We supply automated car wash machines specifically suited for car dealership detail operations and service lane washes. We can recommend the right in-bay automatic or conveyor system for your dealership\'s volume, install it, and service it on an ongoing basis.',
          },
        ]}
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

