import type { Metadata } from 'next';
import SupportingLandingPage from '@/app/components/seo/SupportingLandingPage';

export const metadata: Metadata = {
  title: 'Car Dealership Car Wash Installation | Minnesota Midwest',
  description:
    'Car dealership car wash installation for service lanes, recon departments, and dealer groups in Minnesota and the Midwest. Turnkey in-bay, touchless, and fleet-friendly systems with startup support.',
  keywords:
    'car dealership car wash installation, dealership wash system, automated car wash machine dealership, dealer wash installation Minnesota, touchless car wash for car dealership, in bay automatic dealership wash',
  alternates: { canonical: '/car-dealership-car-wash-installation' },
  openGraph: {
    title: 'Car Dealership Car Wash Installation | Minnesota Midwest',
    description:
      'Turnkey wash installation for dealerships, recon departments, and service-lane wash programs.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/car-dealership-car-wash-installation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Dealership Car Wash Installation',
    description: 'In-bay, touchless, and dealer-focused wash systems installed across the Midwest.',
  },
};

export default function Page() {
  return (
    <SupportingLandingPage
      eyebrow="Dealership Wash Installation"
      title="Car Dealership Car Wash Installation"
      highlightedWord="Installation"
      subtitle="Built for fixed-ops throughput, recon quality, and dealership uptime"
      description="Dealership wash systems need to work for service-lane customers, detail departments, used inventory, and seasonal volume swings. Carwash Technologies installs dealership wash equipment that fits the site, staff workflow, and expected vehicle count without overbuilding the solution."
      heroImage="/imgs/PDQ.webp"
      schemaName="Car Dealership Car Wash Installation"
      serviceTypes={[
        'Dealership wash installation',
        'In-bay automatic wash systems',
        'Touchless wash installation for dealerships',
        'Dealership startup and service support',
      ]}
      stats={[
        { value: 'Turnkey', label: 'Planning Through Startup' },
        { value: '50+', label: 'Years Combined Experience' },
        { value: '4', label: 'Midwest States Served' },
        { value: 'Ongoing', label: 'Post-Install Support' },
      ]}
      sections={[
        {
          title: 'Sized for dealership use cases',
          description:
            'A dealership wash is different from a retail express site. Throughput, site footprint, staffing, and vehicle mix matter more than buzzwords. We help you choose equipment that supports your actual fixed-ops workflow.',
          bullets: [
            'Service-lane wash options for quick customer turnarounds',
            'Recon-focused setups for used-car presentation and detail work',
            'Touchless, soft-touch, and in-bay automatic configurations',
            'Layout planning for constrained dealership sites and existing bays',
          ],
        },
        {
          title: 'Installation that respects existing operations',
          description:
            'Dealerships cannot afford open-ended disruptions. We coordinate installs so the project fits around existing service schedules and the realities of active dealer operations.',
          bullets: [
            'Retrofit planning for existing wash bays and utility conditions',
            'Electrical, plumbing, controls, and chemical setup',
            'Startup testing and operator training before handoff',
            'Service support after the install is complete',
          ],
        },
        {
          title: 'One partner after the sale',
          description:
            'The best dealership installation is the one that keeps working after launch. We stay involved with parts, chemistry, maintenance, and troubleshooting so the wash remains a reliable customer-service asset.',
          bullets: [
            'Ongoing repair and preventive maintenance availability',
            'Chemical programs that improve final vehicle presentation',
            'Replacement parts and component upgrades as needs change',
            'Support for dealership groups adding multiple locations over time',
          ],
        },
      ]}
      faqHeading="Dealership Installation Questions, Answered"
      faqItems={[
        {
          question: 'What kind of car wash is best for a dealership?',
          answer:
            'That depends on bay space, daily volume, staffing, and whether the wash is mainly for service customers, reconditioning, or both. Many dealerships choose in-bay automatic or touchless systems because they fit tighter footprints and support consistent wash quality with limited labor.',
        },
        {
          question: 'Can you retrofit an existing dealership wash bay?',
          answer:
            'Yes. We regularly assess existing bays, utilities, and drainage to determine whether a retrofit makes sense or whether a broader rebuild will deliver better long-term performance. We can then install the new system with minimal disruption to dealership operations.',
        },
        {
          question: 'Do you service the equipment after installation?',
          answer:
            'Yes. We provide ongoing maintenance, repair, parts, and chemical support after the dealership wash goes live. That support matters because a wash that is down too often becomes a liability instead of a customer-retention tool.',
        },
        {
          question: 'Can you help multi-location dealer groups?',
          answer:
            'Yes. We support dealership groups that need consistent equipment selection, installation standards, and follow-on service across multiple Midwest locations. That is often more efficient than treating each site as a completely separate project.',
        },
      ]}
      relatedLinks={[
        {
          href: '/installation-setup',
          title: 'Turnkey installation',
          description: 'See the broader installation process for wash projects of all sizes.',
        },
        {
          href: '/equipment-sales/pdq-laserwash-360-plus',
          title: 'PDQ LaserWash 360 Plus',
          description: 'Popular touchless in-bay option for gas stations and dealership sites.',
        },
        {
          href: '/equipment-sales',
          title: 'Equipment options',
          description: 'Compare automatic systems, dryers, controls, and supporting equipment.',
        },
        {
          href: '/service-maintenance',
          title: 'Post-install service',
          description: 'Protect dealership uptime with maintenance and repair support.',
        },
        {
          href: '/consulting',
          title: 'Upfront planning',
          description: 'Assess ROI, traffic, and layout before committing to a build.',
        },
      ]}
      ctaTitle="Plan the right dealership wash system"
      ctaDescription="If you are comparing retrofit versus replacement, or touchless versus soft-touch, we can help you evaluate the site and recommend the right path."
    />
  );
}