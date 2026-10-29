import React from 'react';
import { Metadata } from 'next';
import PartnerProductLayout from '../../components/ui/PartnerProductLayout';

const VENDOR_URL = 'https://dscarwash.com/self-serve-wash-systems/iq-self-wash/';

export const metadata: Metadata = {
  title: 'D&S IQ Self Wash System | Self-Serve Car Wash Equipment | Carwash Technologies MN',
  description:
    'D&S Car Wash Supply IQ Self Wash - smart, scalable self-serve car wash system for up to 6 bays. Sold, installed, and serviced by Carwash Technologies across Minnesota, North Dakota, South Dakota, and Wisconsin.',
  keywords:
    'D&S IQ Self Wash, D&S Car Wash Supply Minnesota, D&S car wash dealer MN, self serve car wash equipment Minnesota, self-service car wash system, self serve bay equipment MN, self serve pump stand, self serve car wash installation Minnesota, c-store self serve car wash, truck stop self serve wash, fleet self serve wash bay, cold weather self serve car wash',
  alternates: { canonical: '/equipment-sales/ds-iq-self-wash' },
  openGraph: {
    title: 'D&S IQ Self Wash | Self-Serve Car Wash Systems | Carwash Technologies',
    description:
      'Smart, low-labor self-serve car wash system for up to 6 bays - sold, installed, and serviced across MN, ND, SD, and WI.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/equipment-sales/ds-iq-self-wash',
    images: [{ url: 'https://www.carwashtechnologies.com/imgs/partners/ds-iq-self-serve-bays.webp' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'D&S IQ Self Wash',
  description:
    'Scalable self-serve car wash system from D&S Car Wash Supply supporting up to six bays with multi-function high- and low-pressure services, smart payment, and cold weather protection. Available from Carwash Technologies.',
  brand: { '@type': 'Brand', name: 'D&S Car Wash Supply' },
  image: 'https://www.carwashtechnologies.com/imgs/partners/ds-iq-self-serve-bays.webp',
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

export default function DSIQSelfWashPage() {
  return (
    <PartnerProductLayout
      schema={productSchema}
      brandEyebrow="D&S Car Wash Supply · Self-Serve Wash Systems"
      logo={{ src: '/logos/ds-carwash-logo-white.svg', alt: 'D&S Car Wash Supply', width: 300, height: 125 }}
      title="IQ"
      highlight="Self Wash"
      subtitle="Smart, Scalable Self-Serve Car Wash System"
      intro="The IQ Self Wash brings intelligent controls and a modern customer experience to the self-serve bay. Multi-function high- and low-pressure services, smart payment, and built-in efficiency keep labor low and revenue high - whether you run one bay or six."
      heroImage={{ src: '/imgs/partners/ds-iq-self-serve-bays.webp', alt: 'D&S IQ Self Wash self-serve car wash bays' }}
      metrics={[
        { label: 'Wash Type', value: 'Self-Serve' },
        { label: 'Bays Supported', value: 'Up to 6' },
        { label: 'Menu Options', value: 'Up to 11' },
        { label: 'Labor', value: 'Low' },
      ]}
      fitHeading="The IQ Self Wash is a strong fit for:"
      fitCards={[
        { title: 'Self-Serve Operators', body: 'Modernize tired bays with better menus, smart payment, and usage reporting that shows what is actually earning.' },
        { title: 'C-Stores & Gas Stations', body: 'Add a low-labor wash revenue stream next to the pumps without staffing a full-time attendant.' },
        { title: 'Dealerships & Fleets', body: 'Give lot porters and fleet drivers a reliable, controlled bay for daily vehicle cleaning.' },
        { title: 'Truck Stops', body: 'Scalable bays and high-pressure services for drivers who need a quick, thorough self-serve clean.' },
      ]}
      gallery={[
        { src: '/imgs/partners/ds-iq-self-wash-rinse.webp', alt: 'Customer rinsing a vehicle in a D&S IQ Self Wash bay', caption: 'High-pressure rinse in an IQ bay' },
        { src: '/imgs/partners/ds-iq-pump-stand.webp', alt: 'D&S IQ Self Wash equipment room pump stand', caption: 'Advanced pump stand' },
        { src: '/imgs/partners/ds-pay-station.webp', alt: 'D&S self-serve car wash pay station', caption: 'Smart control & payment' },
      ]}
      featuresEyebrow="Technology"
      featuresHeading="Key Features & Upgrades"
      features={[
        { title: 'Multi-Function Bay Services', body: 'High- and low-pressure services from a single system with up to 11 menu options - pre-soak, soaps, foam brush, tri-color foam, tire cleaner, rinses, and clear coat.' },
        { title: 'Advanced Pump Stand', body: 'A clean, serviceable equipment room layout built for reliability and fast maintenance - fewer service calls and less downtime.' },
        { title: 'Smart Control & Payment', body: 'Digital payment acceptance, count-up or count-down timers, and usage reporting so you can see what customers buy and price accordingly.' },
        { title: 'Water & Chemical Efficiency', body: 'Precise chemical delivery and controlled water use help keep cost per car down while improving wash results.' },
        { title: 'Cold Weather Protection', body: 'Freeze protection and automatic shutdown features designed for harsh winters - a must for Minnesota and Dakota sites.' },
        { title: 'Scalable Bays', body: 'Start with the bays you need today and expand up to six as your site grows.' },
      ]}
      tiersHeading="Choose Your IQ Package"
      tiers={[
        {
          name: 'Base',
          tagline: 'Everything a great self-serve bay needs.',
          items: ['LP Pre-Soak', 'HP Soap', 'LP Foam Brush', 'HP Rinse', 'Clear Coat', 'LP Tire Clean'],
        },
        {
          name: 'Expert',
          tagline: 'Adds a high-visibility upsell.',
          items: ['Everything in Base', 'Tri-Color Foam'],
          featured: true,
        },
        {
          name: 'Genius',
          tagline: 'The most complete bay menu.',
          items: ['Everything in Expert', 'Tire Scrub', 'Additional LP Option'],
        },
      ]}
      options={[
        { heading: 'Bay & Equipment', items: ['Multi-function HP/LP services', 'Up to 11 menu options', 'Advanced pump stand', 'Scalable to 6 bays'] },
        { heading: 'Controls & Payment', items: ['Digital payment acceptance', 'Count-up / count-down timers', 'Usage reporting', 'Pay station options'] },
        { heading: 'Efficiency & Climate', items: ['Water & chemical efficiency', 'Freeze protection', 'Automatic shutdown', 'Cold weather packages'] },
      ]}
      howWeHelp={[
        { title: 'Plan & Quote', body: 'Bay count, package selection, utilities, and payment - sized to your site and traffic.' },
        { title: 'Install & Commission', body: 'Our crews install the pump stand, bay equipment, and controls, then dial in chemicals and pricing.' },
        { title: 'Service & Parts', body: 'Preventive maintenance, emergency service, and stocked self-serve parts across MN, ND, SD, and WI.' },
      ]}
      disclaimer="IQ Self Wash is a product of D&S Car Wash Supply. Carwash Technologies sells, installs, and services D&S equipment - we are not the manufacturer. Package contents and options may vary; confirm specifications with our team."
      vendorUrl={VENDOR_URL}
      vendorLinkText="View on D&S Website"
      faqHeading="D&S IQ Self Wash Questions"
      faq={[
        { question: 'How many bays can the IQ Self Wash support?', answer: 'The IQ Self Wash system supports up to six self-serve bays, so you can start smaller and expand as demand grows.' },
        { question: 'Will it hold up to Minnesota winters?', answer: 'Yes. IQ Self Wash offers cold weather protection including freeze protection and automatic shutdown features. We also design heat, drainage, and bay layout with Upper Midwest winters in mind.' },
        { question: 'Can I upgrade my existing self-serve bays to IQ?', answer: 'In many cases, yes. We assess your equipment room, plumbing, electrical, and bay layout and recommend a retrofit or full replacement plan.' },
        { question: 'Do you install and service D&S equipment?', answer: 'Yes. Carwash Technologies sells, installs, and services D&S self-serve systems across Minnesota, North Dakota, South Dakota, and Wisconsin, and stocks common self-serve parts.' },
      ]}
      ctaTitle="Get a Quote on the D&S IQ Self Wash"
      ctaDescription="Planning new self-serve bays or upgrading old ones? Carwash Technologies will size, install, and service an IQ Self Wash system for your site anywhere in MN, ND, SD, or WI."
    />
  );
}
