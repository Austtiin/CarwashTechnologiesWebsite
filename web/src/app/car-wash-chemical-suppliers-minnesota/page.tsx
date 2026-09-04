import type { Metadata } from 'next';
import SupportingLandingPage from '@/app/components/seo/SupportingLandingPage';

export const metadata: Metadata = {
  title: 'Car Wash Chemical Suppliers Minnesota | Midwest Delivery',
  description:
    'Car wash chemical suppliers in Minnesota providing tunnel, touchless, self-serve, fleet, and truck wash chemistry. Vertech, ChemQuest, and Simoniz programs with delivery and technical support.',
  keywords:
    'car wash chemical suppliers Minnesota, car wash chemical manufacturers, car wash chemicals supplier, car wash chemical distributors, car wash chemical sales, truck wash chemicals Minnesota, tunnel wash chemistry MN',
  alternates: { canonical: '/car-wash-chemical-suppliers-minnesota' },
  openGraph: {
    title: 'Car Wash Chemical Suppliers Minnesota | Midwest Delivery',
    description:
      'Midwest chemical supply programs for in-bay, tunnel, self-serve, fleet, and truck wash operations.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/car-wash-chemical-suppliers-minnesota',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Wash Chemical Suppliers Minnesota',
    description: 'Chemical programs, delivery, tuning, and wash-performance support across the upper Midwest.',
  },
};

export default function Page() {
  return (
    <SupportingLandingPage
      eyebrow="Car Wash Chemical Suppliers"
      title="Car Wash Chemical Suppliers Minnesota"
      highlightedWord="Chemical"
      subtitle="Manufacturer-backed chemistry with delivery and tuning support"
      description="Carwash Technologies supplies car wash chemicals for tunnels, in-bay automatics, touchless systems, self-serve bays, fleets, and heavy-duty wash operations. We pair manufacturer-backed products with ordering flexibility, site-level tuning, and Midwest delivery coverage."
      heroImage="/imgs/chems/VLabs-Tubs.webp"
      schemaName="Car Wash Chemical Suppliers Minnesota"
      serviceTypes={[
        'Car wash chemical supply',
        'Tunnel and in-bay chemical programs',
        'Truck and fleet wash chemistry',
        'Chemical delivery and wash tuning',
      ]}
      stats={[
        { value: '3', label: 'Trusted Chemical Brands' },
        { value: '48hrs', label: 'Delivery Available' },
        { value: '4', label: 'States Covered' },
        { value: 'No', label: 'Contracts Required' },
      ]}
      sections={[
        {
          title: 'Top chemical manufacturers, one local supplier',
          description:
            'Many operators search for car wash chemical manufacturers when they really need a responsive local supplier that can source the right products and keep the program performing. We supply Vertech, ChemQuest, and Simoniz with local support.',
          bullets: [
            'Pre-soaks, detergents, drying agents, waxes, sealants, and protectants',
            'Touchless and friction chemistry matched to your wash type',
            'Self-serve, fleet, and heavy-duty formulations available',
            'SDS access and product support from a Midwest-based team',
          ],
        },
        {
          title: 'Programs built around wash performance',
          description:
            'Buying chemicals by the pail is not enough if the site is inconsistent. We help operators dial in dilution, application, and sequencing so the chemistry actually improves wash quality and revenue.',
          bullets: [
            'Chemical recommendations based on site volume and wash format',
            'Delivery schedules for single-site and multi-site operators',
            'Performance tuning for foam, cleaning power, shine, and drying',
            'Support for premium menu upgrades and add-on packages',
          ],
        },
        {
          title: 'Midwest coverage without inflated promises',
          description:
            'We focus on the territory we actually serve well: Minnesota, North Dakota, South Dakota, and Wisconsin. That is a stronger search and service match than trying to pretend we are a national supplier everywhere.',
          bullets: [
            'Minnesota service base with upper Midwest delivery reach',
            'Support for gas station, tunnel, dealership, and truck wash sites',
            'Flexible ordering for seasonal and year-round operators',
            'Integrated chemical, equipment, and repair support when needed',
          ],
        },
      ]}
      faqHeading="Car Wash Chemical Supply Questions, Answered"
      faqItems={[
        {
          question: 'Which car wash chemical manufacturers do you supply?',
          answer:
            'We supply Vertech, ChemQuest, and Simoniz programs. Those manufacturers cover the full range from pre-treatment and main wash chemistry to finishing products, specialty treatments, and fleet wash formulations.',
        },
        {
          question: 'Do I need a long-term chemical contract?',
          answer:
            'No. We support flexible purchasing as well as scheduled delivery programs. Some operators want steady recurring shipments, while others need a local supplier they can call when volumes change or a program needs to be adjusted.',
        },
        {
          question: 'Can you improve the performance of my current chemical setup?',
          answer:
            'Yes. We regularly help operators troubleshoot poor cleaning, weak foam, spotty drying, or low perceived value on premium packages. The fix is often a combination of chemistry selection, dilution, application, and equipment calibration.',
        },
        {
          question: 'Do you handle truck and fleet wash chemistry too?',
          answer:
            'Yes. We supply heavy-duty and fleet wash chemistry for trucking terminals, municipal yards, bus fleets, and industrial equipment wash sites. That includes detergents, specialty cleaners, and support for reclaim-compatible programs.',
        },
      ]}
      relatedLinks={[
        {
          href: '/chemical-sales',
          title: 'Chemical sales',
          description: 'Browse the full chemical program and ordering options.',
        },
        {
          href: '/sds',
          title: 'Safety data sheets',
          description: 'Access product SDS documentation for supported chemical lines.',
        },
        {
          href: '/service-maintenance',
          title: 'Service and maintenance',
          description: 'Keep pumps, injectors, and chemical systems calibrated and reliable.',
        },
        {
          href: '/truck-wash',
          title: 'Truck and fleet wash systems',
          description: 'See heavy-duty wash formats that depend on strong chemical programs.',
        },
        {
          href: '/contact',
          title: 'Request chemical pricing',
          description: 'Tell us your wash type and current volume so we can recommend a program.',
        },
      ]}
      ctaTitle="Get a chemical program that fits your wash"
      ctaDescription="If you need a better local supplier, stronger chemistry, or more reliable delivery, we can map a program around your wash type and volume."
    />
  );
}