import type { Metadata } from 'next';
import SupportingLandingPage from '@/app/components/seo/SupportingLandingPage';

export const metadata: Metadata = {
  title: 'Automated Car Wash Equipment Minnesota | Systems & Parts',
  description:
    'Automated car wash equipment in Minnesota from PDQ, Belanger, PECO, Sonny\'s, and AVW. In-bay automatics, touchless systems, conveyors, dryers, controls, and Midwest installation support.',
  keywords:
    'automated car wash machine Minnesota, car wash automation equipment supplier Minnesota, car wash blowers near me, automated car wash equipment, in bay automatic car wash Minnesota, car wash systems MN',
  alternates: { canonical: '/automated-car-wash-equipment-minnesota' },
  openGraph: {
    title: 'Automated Car Wash Equipment Minnesota | Systems & Parts',
    description:
      'Automatic wash systems, dryers, blowers, parts, and controls with local Midwest support.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/automated-car-wash-equipment-minnesota',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated Car Wash Equipment Minnesota',
    description: 'In-bay automatics, touchless systems, conveyors, dryers, and parts from one Midwest supplier.',
  },
};

export default function Page() {
  return (
    <SupportingLandingPage
      eyebrow="Automated Car Wash Equipment"
      title="Automated Car Wash Equipment Minnesota"
      highlightedWord="Equipment"
      subtitle="Automatic systems, blowers, parts, and support for Midwest operators"
      description="Carwash Technologies supplies automated car wash equipment for new builds, replacements, and phased upgrades. We help operators source the right machine, dryer, blower, controls, and supporting parts for the wash format they run today and the throughput they want tomorrow."
      heroImage="/imgs/IMG_5386.webp"
      schemaName="Automated Car Wash Equipment Minnesota"
      serviceTypes={[
        'Automated car wash equipment supply',
        'In-bay automatic systems',
        'Dryers, blowers, and replacement parts',
        'Equipment selection and installation support',
      ]}
      stats={[
        { value: '5', label: 'Core Equipment Brands' },
        { value: '99+', label: 'Installations Supported' },
        { value: '4', label: 'States Served' },
        { value: 'Full', label: 'Parts And Service Backup' },
      ]}
      sections={[
        {
          title: 'Automatic equipment for multiple wash formats',
          description:
            'Operators searching for automated car wash machines are often choosing among very different business models. We help match the equipment to the site instead of selling every owner the same package.',
          bullets: [
            'Touchless and soft-touch in-bay automatic systems',
            'Conveyor and tunnel equipment for higher-volume sites',
            'Self-serve support equipment, pumps, and controls',
            'Fleet and heavy-duty equipment where durability matters most',
          ],
        },
        {
          title: 'More than the machine itself',
          description:
            'Searches like car wash blowers near me usually signal a parts or upgrade need, not a brand-new site. We support both full equipment packages and individual replacement components.',
          bullets: [
            'Dryer and blower systems for better final presentation',
            'Controls, pumps, motors, arches, and replacement parts',
            'Upgrade paths for aging automatic wash equipment',
            'Manufacturer-backed recommendations instead of generic substitutions',
          ],
        },
        {
          title: 'Local support after the equipment arrives',
          description:
            'Equipment selection goes better when the same team can also install, service, and troubleshoot the system. That is especially important for Minnesota operators who need regional support and winter-ready reliability.',
          bullets: [
            'Authorized dealer relationships with major wash equipment brands',
            'Installation coordination and startup support',
            'Preventive maintenance and repair availability',
            'Guidance for retrofits, modernizations, and component swaps',
          ],
        },
      ]}
      faqHeading="Automated Equipment Questions, Answered"
      faqItems={[
        {
          question: 'Do you sell automated car wash machines in Minnesota?',
          answer:
            'Yes. We supply automated car wash equipment across Minnesota and the upper Midwest, including touchless in-bay automatics, soft-touch systems, tunnel equipment, dryers, controls, and supporting components.',
        },
        {
          question: 'Can you help with dryers and blowers only?',
          answer:
            'Yes. Many operators contact us for specific components such as blowers, dryers, pumps, motors, arches, or control upgrades. We can help identify the right replacement or improvement based on the current system and site goals.',
        },
        {
          question: 'Which brands do you support?',
          answer:
            'We work with leading equipment lines including PDQ, Belanger, PECO, Sonny\'s, and AVW, along with key supporting components such as Cat Pumps and General Pump systems. The best fit depends on wash format, footprint, and performance goals.',
        },
        {
          question: 'Can the same team install and service the equipment?',
          answer:
            'Yes. We can support equipment selection, installation, startup, service, and replacement parts. That continuity reduces the handoff problems that often appear when different vendors are involved at each stage.',
        },
      ]}
      relatedLinks={[
        {
          href: '/equipment-sales',
          title: 'All equipment sales',
          description: 'See the broader equipment catalog and supported categories.',
        },
        {
          href: '/equipment-sales/pdq-laserwash-360-plus',
          title: 'PDQ LaserWash 360 Plus',
          description: 'Review one of the best-known touchless in-bay systems we supply.',
        },
        {
          href: '/equipment-sales/belanger-insta-kleen',
          title: 'Belanger insta-KLEEN',
          description: 'Explore drive-through fleet wash equipment for heavier-duty applications.',
        },
        {
          href: '/installation-setup',
          title: 'Installation support',
          description: 'Pair equipment selection with turnkey install and startup services.',
        },
        {
          href: '/service-maintenance',
          title: 'Repair and maintenance',
          description: 'Keep automated equipment reliable with service and parts backup.',
        },
      ]}
      ctaTitle="Source the right automatic wash equipment"
      ctaDescription="Tell us your wash format, bay size, and whether you need a full system or a targeted replacement. We can narrow the options quickly."
    />
  );
}