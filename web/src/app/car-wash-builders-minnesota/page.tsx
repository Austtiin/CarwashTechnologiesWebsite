import type { Metadata } from 'next';
import SupportingLandingPage from '@/app/components/seo/SupportingLandingPage';

export const metadata: Metadata = {
  title: 'Car Wash Builders Minnesota | Design-Build & Installation',
  description:
    'Car wash builders in Minnesota for gas stations, c-stores, dealerships, fleets, and self-serve sites. Design-build, equipment selection, installation, startup, and Midwest support from one team.',
  keywords:
    'car wash builders Minnesota, car wash installation companies, carwash builder MN, car wash construction Minnesota, turnkey carwash builder, car wash contractor Minnesota, car wash systems MN, automated car wash builder',
  alternates: { canonical: '/car-wash-builders-minnesota' },
  openGraph: {
    title: 'Car Wash Builders Minnesota | Design-Build & Installation',
    description:
      'Turnkey car wash builders for new construction, retrofits, and Midwest installations across multiple wash formats.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/car-wash-builders-minnesota',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Wash Builders Minnesota',
    description: 'Design-build, installation, startup, and ongoing support for Midwest car wash owners.',
  },
};

export default function Page() {
  return (
    <SupportingLandingPage
      eyebrow="Car Wash Builders Minnesota"
      title="Car Wash Builders Minnesota"
      highlightedWord="Builders"
      subtitle="Design-build support for owners who need one accountable team"
      description="Carwash Technologies helps owners plan, build, install, and launch profitable wash sites across Minnesota and the upper Midwest. We support gas station washes, c-store upgrades, self-serve bays, dealership installs, fleet wash systems, and modern tunnel projects."
      heroImage="/imgs/BelangerTunnel.webp"
      schemaName="Car Wash Builders Minnesota"
      serviceTypes={[
        'Car wash design-build',
        'Car wash construction and installation',
        'Equipment selection and startup',
        'Midwest car wash contractor services',
      ]}
      stats={[
        { value: '50+', label: 'Years Combined Experience' },
        { value: '99+', label: 'Projects Delivered' },
        { value: '4', label: 'States Served' },
        { value: 'Turnkey', label: 'Design To Startup' },
      ]}
      sections={[
        {
          title: 'New builds, expansions, and rebuilds',
          description:
            'Owners searching for car wash builders usually need more than equipment. They need layout guidance, project coordination, and a team that can carry the job from concept through commissioning.',
          bullets: [
            'Ground-up support for new wash sites and site additions',
            'Retrofit planning for aging or underperforming equipment',
            'Utility, electrical, plumbing, and startup coordination',
            'Single-source accountability instead of managing multiple vendors',
          ],
        },
        {
          title: 'Systems matched to your business model',
          description:
            'We do not force one format on every location. We help you choose the right wash type for your footprint, traffic, labor model, and revenue target.',
          bullets: [
            'Gas station and convenience store in-bay automatic systems',
            'Express and conveyor tunnel planning for high-volume sites',
            'Self-serve bay builds and upgrades with parts support',
            'Fleet, truck, and heavy-duty vehicle wash installations',
          ],
        },
        {
          title: 'What makes a strong builder partner',
          description:
            'The best builder is the one who can still support you after opening day. Our model combines equipment, installation, chemicals, repair, and consulting so the site keeps performing after the build is done.',
          bullets: [
            'Authorized access to leading equipment brands',
            'Startup training and chemistry setup',
            'Ongoing repair and preventive maintenance programs',
            'Midwest coverage across Minnesota, North Dakota, South Dakota, and Wisconsin',
          ],
        },
      ]}
      faqHeading="Car Wash Builder Questions, Answered"
      faqItems={[
        {
          question: 'What does a car wash builder handle?',
          answer:
            'A car wash builder should handle site planning, equipment selection, installation coordination, startup, and the follow-on support needed to keep the wash profitable. Carwash Technologies combines those services so owners can move from planning to opening with one accountable team.',
        },
        {
          question: 'Do you build more than one type of car wash?',
          answer:
            'Yes. We build and install gas station washes, c-store washes, self-serve bays, in-bay automatics, conveyor tunnels, dealership washes, and heavy-duty fleet systems. The right format depends on your traffic, site size, labor model, and budget.',
        },
        {
          question: 'Do you only work in Minnesota?',
          answer:
            'Minnesota is our home base, but we also serve North Dakota, South Dakota, and Wisconsin. Many owners looking for car wash builders in Minnesota also need a partner that can support multi-state operations, and we are set up for that footprint.',
        },
        {
          question: 'Can you support the wash after construction?',
          answer:
            'Yes. We provide chemical programs, repair, preventive maintenance, and replacement parts after the project is complete. That ongoing support is a major reason owners choose us over a builder that disappears after startup.',
        },
      ]}
      relatedLinks={[
        {
          href: '/installation-setup',
          title: 'Installation and setup',
          description: 'See our turnkey installation process for new builds and rebuilds.',
        },
        {
          href: '/consulting',
          title: 'Car wash consulting',
          description: 'Feasibility, layout, ROI, and planning support before the build starts.',
        },
        {
          href: '/equipment-sales',
          title: 'Equipment sales',
          description: 'Automatic systems, conveyors, self-serve equipment, dryers, and controls.',
        },
        {
          href: '/projects',
          title: 'Recent projects',
          description: 'Review examples of installations and larger Midwest wash builds.',
        },
        {
          href: '/truck-wash',
          title: 'Heavy-duty vehicle wash',
          description: 'Fleet and semi truck wash systems for terminals, yards, and municipalities.',
        },
      ]}
      ctaTitle="Talk with a Midwest car wash builder"
      ctaDescription="Share your location, wash type, and timeline. We can help you decide whether a new build, retrofit, or phased upgrade makes the most sense."
    />
  );
}