import type { Metadata } from 'next';
import SupportingLandingPage from '@/app/components/seo/SupportingLandingPage';

export const metadata: Metadata = {
  title: 'Automatic Car Wash Repair Minnesota | Service & Maintenance',
  description:
    'Automatic car wash repair in Minnesota with emergency service, preventive maintenance, troubleshooting, and parts support for in-bay, tunnel, self-serve, and fleet wash systems.',
  keywords:
    'automatic car wash repair Minnesota, car wash repair company near me, car wash repair service near me, car wash maintenance companies, car wash maintenance Minnesota, heavy duty vehicle wash repair MN',
  alternates: { canonical: '/automatic-car-wash-repair-minnesota' },
  openGraph: {
    title: 'Automatic Car Wash Repair Minnesota | Service & Maintenance',
    description:
      'Emergency repair, troubleshooting, preventive maintenance, and parts support across the upper Midwest.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/automatic-car-wash-repair-minnesota',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatic Car Wash Repair Minnesota',
    description: 'Fast-response repair and preventive maintenance for in-bay, tunnel, self-serve, and fleet wash systems.',
  },
};

export default function Page() {
  return (
    <SupportingLandingPage
      eyebrow="Automatic Car Wash Repair"
      title="Automatic Car Wash Repair Minnesota"
      highlightedWord="Repair"
      subtitle="Emergency response, maintenance planning, and parts support"
      description="When operators search for a car wash repair company near them, they usually need fast diagnostics, real parts support, and technicians who understand the system already in place. Carwash Technologies services automatic, tunnel, self-serve, fleet, and heavy-duty wash equipment across Minnesota and the upper Midwest."
      heroImage="/imgs/IMG_5380.webp"
      schemaName="Automatic Car Wash Repair Minnesota"
      serviceTypes={[
        'Automatic car wash repair',
        'Preventive maintenance for wash equipment',
        'Emergency service and troubleshooting',
        'Parts and component replacement',
      ]}
      stats={[
        { value: '1000+', label: 'Service Calls Supported' },
        { value: 'Fast', label: 'Emergency Response' },
        { value: '4', label: 'States Covered' },
        { value: 'All Major', label: 'Brands Serviced' },
      ]}
      sections={[
        {
          title: 'Repair support for the systems operators actually run',
          description:
            'Repair needs vary widely across in-bay automatics, conveyor tunnels, self-serve bays, and heavy-duty wash systems. We service those categories because reliable troubleshooting starts with system familiarity.',
          bullets: [
            'In-bay automatic and touchless wash troubleshooting',
            'Tunnel equipment, conveyor, dryer, and controls repair',
            'Self-serve bay pumps, booms, and payment system service',
            'Fleet and heavy-duty vehicle wash repair and maintenance',
          ],
        },
        {
          title: 'Maintenance that reduces downtime',
          description:
            'The best repair plan is usually a strong maintenance plan. We help sites move from reactive breakdowns to preventive service intervals that protect uptime and wash quality.',
          bullets: [
            'Preventive inspections and calibration checks',
            'Parts stocking guidance for common failure points',
            'Chemical system, pump, and motor maintenance',
            'Seasonal readiness for Midwest weather and operating conditions',
          ],
        },
        {
          title: 'A repair partner that can do more than patch problems',
          description:
            'Some service companies only fix the immediate failure. We can also recommend upgrades, replacement parts, or modernization steps when the root issue is a weak component or aging system.',
          bullets: [
            'Authorized equipment knowledge and replacement pathways',
            'Support for parts, chemistry, and long-term service plans',
            'Upgrade recommendations when repair alone is not enough',
            'Coverage for Minnesota, North Dakota, South Dakota, and Wisconsin',
          ],
        },
      ]}
      faqHeading="Repair And Maintenance Questions, Answered"
      faqItems={[
        {
          question: 'Do you provide emergency car wash repair in Minnesota?',
          answer:
            'Yes. We provide fast-response repair support for operators across Minnesota and the surrounding Midwest territory. Emergency needs often involve automatic equipment, controls, pumps, dryers, or chemical systems that have taken a wash offline.',
        },
        {
          question: 'What kinds of car wash systems do you repair?',
          answer:
            'We service in-bay automatic systems, tunnels, self-serve bays, fleet wash systems, and heavy-duty vehicle wash equipment. That includes mechanical, electrical, control, chemical, pump, dryer, and water-system issues.',
        },
        {
          question: 'Can you maintain an existing heavy-duty vehicle wash?',
          answer:
            'Yes. We support heavy-duty vehicle wash repair and maintenance for truck terminals, fleet yards, bus operations, and municipal facilities. That includes ongoing preventive maintenance as well as urgent breakdown response.',
        },
        {
          question: 'Do you help with parts replacement too?',
          answer:
            'Yes. We can source and replace many common wear items and critical components, including pumps, motors, blowers, controls, and chemical-delivery parts. Where a repeated failure points to a broader modernization need, we can outline the next step as well.',
        },
      ]}
      relatedLinks={[
        {
          href: '/service-maintenance',
          title: 'Full service and maintenance',
          description: 'See the broader repair, maintenance, and parts-support offering.',
        },
        {
          href: '/equipment-sales',
          title: 'Replacement equipment and parts',
          description: 'Upgrade aging components or replace failed equipment with supported lines.',
        },
        {
          href: '/truck-wash',
          title: 'Heavy-duty vehicle wash systems',
          description: 'See the fleet and truck wash systems we also support after installation.',
        },
        {
          href: '/chemical-sales',
          title: 'Chemical system support',
          description: 'Pair mechanical service with stronger chemistry and calibrated delivery.',
        },
        {
          href: '/contact',
          title: 'Request service',
          description: 'Tell us the system type, brand, and symptoms so we can respond faster.',
        },
      ]}
      ctaTitle="Get repair help before downtime gets worse"
      ctaDescription="If the site is down or repeatedly failing, send us the system type, brand, and symptom. We can help determine whether you need repair, parts, or a larger upgrade."
    />
  );
}