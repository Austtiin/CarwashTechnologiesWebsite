import React from 'react';
import { Metadata } from 'next';
import PartnerProductLayout from '../../components/ui/PartnerProductLayout';

const VENDOR_URL = 'https://www.eurovac.com/industries/carwash/';

export const metadata: Metadata = {
  title: 'Eurovac Car Wash Vacuum Systems | Central Vacuums, Arches & Canopies | Carwash Technologies MN',
  description:
    'Eurovac central vacuum systems for car washes - vacuum arches, canopies, stanchions, and industrial vacuum producers. Designed, installed, and serviced by Carwash Technologies across MN, ND, SD, and WI.',
  keywords:
    'Eurovac car wash vacuum, Eurovac dealer Minnesota, car wash central vacuum system, car wash vacuum arches, car wash vacuum canopy, free vacuum express car wash, car wash vacuum stanchions, car wash vacuum producer, indoor vacuum hall, car wash vacuum installation Minnesota, express wash vacuum lot',
  alternates: { canonical: '/equipment-sales/eurovac-vacuum-systems' },
  openGraph: {
    title: 'Eurovac Car Wash Vacuum Systems | Carwash Technologies',
    description:
      'Central vacuum arches, canopies, and producers for express car washes - designed, installed, and serviced across MN, ND, SD, and WI.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/equipment-sales/eurovac-vacuum-systems',
    images: [{ url: 'https://www.carwashtechnologies.com/imgs/partners/eurovac-vacuum-canopy-aerial.webp' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Eurovac Car Wash Central Vacuum System',
  description:
    'Central vacuum systems for car washes from Eurovac, including vacuum arches, canopies, stanchions, and industrial vacuum producers. Available from Carwash Technologies.',
  brand: { '@type': 'Brand', name: 'Eurovac' },
  image: 'https://www.carwashtechnologies.com/imgs/partners/eurovac-vacuum-canopy-aerial.webp',
  offers: {
    '@type': 'Offer',
    seller: {
      '@type': 'LocalBusiness',
      name: 'Carwash Technologies',
      url: 'https://www.carwashtechnologies.com',
      telephone: '+1-612-408-9010',
    },
    availability: 'https://schema.org/InStock',
    areaServed: ['Minnesota', 'North Dakota', 'South Dakota', 'Wisconsin'],
  },
};

export default function EurovacVacuumSystemsPage() {
  return (
    <PartnerProductLayout
      schema={productSchema}
      brandEyebrow="Eurovac · Car Wash Vacuum Systems"
      logo={{ src: '/logos/eurovac-logo-white.png', alt: 'Eurovac', width: 473, height: 87 }}
      title="Central Vacuum"
      highlight="Systems"
      subtitle="Vacuum Arches, Canopies & Industrial Producers for Car Washes"
      intro="Free vacuums are one of the biggest reasons members choose an express wash. Eurovac central vacuum systems put strong, consistent suction at every stall from a single industrial producer - with arches, canopies, and stanchions finished in your brand colors."
      heroImage={{ src: '/imgs/partners/eurovac-vacuum-canopy-aerial.webp', alt: 'Aerial view of a car wash vacuum lot with Eurovac canopies' }}
      metrics={[
        { label: 'System Type', value: 'Central' },
        { label: 'Hose Drops', value: 'Every Door' },
        { label: 'Structures', value: 'Arch · Canopy' },
        { label: 'Finish', value: 'Your Colors' },
      ]}
      fitHeading="Eurovac vacuum systems are a strong fit for:"
      fitCards={[
        { title: 'Express Tunnels', body: 'Free-vacuum lots that move members through quickly and keep the lot looking clean and on-brand.' },
        { title: 'New Builds', body: 'Plan vacuum layout, piping, and producer room early so the site flows from the tunnel exit to the stalls.' },
        { title: 'Vacuum Upgrades', body: 'Replace individual stand-alone units with a central system that is quieter, stronger, and easier to maintain.' },
        { title: 'Indoor Vacuum Halls', body: 'Central producers and hose drops suited to climate-controlled indoor vacuum and detailing areas.' },
      ]}
      gallery={[
        { src: '/imgs/partners/eurovac-vacuum-arches.webp', alt: 'Eurovac vacuum arches over car wash stalls', caption: 'Vacuum arches in custom colors' },
        { src: '/imgs/partners/eurovac-central-vacuum-producer.webp', alt: 'Eurovac industrial central vacuum producer', caption: 'Industrial central vacuum producer' },
        { src: '/imgs/partners/eurovac-vacuums-night.webp', alt: 'Illuminated Eurovac vacuum canopy at night', caption: 'Built to sell after dark' },
        { src: '/imgs/partners/eurovac-vacuum-stall.webp', alt: 'Eurovac vacuum hose drop at a car wash stall', caption: 'Hose drops at every door' },
        { src: '/imgs/partners/eurovac-vacuum-stanchions.webp', alt: 'Eurovac vacuum stanchions at a car wash', caption: 'Stanchion configuration' },
        { src: '/imgs/partners/eurovac-canopy-vacuum-lot.webp', alt: 'Car wash vacuum lot under Eurovac canopies', caption: 'Full canopy vacuum lot' },
      ]}
      featuresEyebrow="System Design"
      featuresHeading="Why a Central Vacuum System"
      features={[
        { title: 'Arches, Canopies & Stanchions', body: 'Choose vacuum arches, full canopies, or stanchions, painted to match your site colors so the vacuum lot reinforces your brand from the street.' },
        { title: 'Hose Drops at Every Car Door', body: 'Hose drops positioned at each door let customers clean the whole interior without dragging hoses around the vehicle.' },
        { title: 'Industrial Central Vacuum Producers', body: 'A single industrial producer powers the full lot, delivering consistent suction at every stall and simplifying maintenance to one location.' },
        { title: 'Layout Design & Material Take-Off', body: 'Eurovac supports layout design and material take-off; Carwash Technologies coordinates it with your site plan, utilities, and tunnel exit.' },
        { title: 'Installation & Commissioning', body: 'Our crews install structures, piping, and producers, then commission the system so it is balanced and ready on opening day.' },
      ]}
      options={[
        { heading: 'Structures', items: ['Vacuum arches', 'Vacuum canopies', 'Vacuum stanchions', 'Custom site colors'] },
        { heading: 'Stall Accessories', items: ['Mat racks', 'Garbage cans', 'Towel shelves', 'Compressed air', 'Chemical dispensing'] },
        { heading: 'System', items: ['Industrial central vacuum producers', 'Hose drops at each door', 'Layout design & material take-off', 'Installation & commissioning'] },
      ]}
      howWeHelp={[
        { title: 'Design', body: 'Stall count, structure style, and producer sizing coordinated with your site plan and traffic flow.' },
        { title: 'Install', body: 'Structures, piping, producers, and accessories installed and commissioned by our own crews.' },
        { title: 'Service', body: 'Preventive maintenance, filter and hose service, and parts support across MN, ND, SD, and WI.' },
      ]}
      disclaimer="Eurovac vacuum systems are manufactured by Eurovac. Carwash Technologies sells, installs, and services Eurovac car wash vacuum systems - we are not the manufacturer. Available options may vary by project."
      vendorUrl={VENDOR_URL}
      vendorLinkText="View on Eurovac Website"
      faqHeading="Car Wash Vacuum System Questions"
      faq={[
        { question: 'What is the advantage of a central vacuum system?', answer: 'A central system uses one industrial producer to power every stall, which typically means stronger and more consistent suction, less noise at the stall, a cleaner-looking lot, and a single place to maintain instead of many individual units.' },
        { question: 'Can the vacuum arches and canopies match our brand?', answer: 'Yes. Eurovac arches, canopies, and stanchions can be painted to match your site colors.' },
        { question: 'Can you add vacuums to an existing car wash?', answer: 'Yes. We evaluate your lot, utilities, and traffic pattern and design a vacuum layout that fits - from a few stalls to a full free-vacuum lot.' },
        { question: 'What accessories are available at each stall?', answer: 'Options include mat racks, garbage cans, towel shelves, compressed air, and chemical dispensing.' },
      ]}
      ctaTitle="Plan Your Vacuum Lot"
      ctaDescription="From a handful of stalls to a full free-vacuum lot or indoor vacuum hall, Carwash Technologies will design, install, and service a Eurovac system for your wash."
    />
  );
}
