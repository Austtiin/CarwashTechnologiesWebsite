import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';
import StatsBand from '../components/ui/StatsBand';
import PageFAQ from '../components/ui/PageFAQ';

export const metadata: Metadata = {
  title: 'Car Wash Equipment Installers & Contractors Minnesota | Carwash Technologies',
  description: 'Carwash Technologies - car wash equipment installers and contractors serving MN, ND, SD, WI. Car dealership car wash installation, gas station carwash construction, heavy duty truck wash installation, express tunnel builder, touchless systems, and complete turnkey design-build. 50+ years combined experience.',
  keywords: 'car wash equipment installers Minnesota, car wash installation companies MN, car wash equipment installers near me, carwash contractor MN, car dealership car wash installation, car dealership carwash installer Minnesota, automated car wash machine installation Minnesota, car wash automation equipment supplier minnesota, gas station carwash builder Minnesota, gas station carwash contractor, self service carwash builder Minnesota, heavy duty carwash builder, heavy duty wash contractor Minnesota, truck wash builder MN, express carwash builder Minnesota, express tunnel contractor, touchless carwash installation MN, convenience store carwash builder MN, commercial carwash builder Minnesota, industrial carwash contractor MN, municipal carwash builder, fleet wash builder Minnesota, tunnel carwash builder Minnesota, automatic carwash builder Minnesota, carwash construction Minnesota, turnkey carwash builder Minnesota, design build carwash contractor, carwash equipment installation Minnesota, semi truck wash builder MN, carwash modernization contractor, carwash retrofit builder Minnesota',
  alternates: { canonical: '/installation-setup' },
  openGraph: {
    title: 'Carwash Builder & Contractor | Gas Station, Self-Service, Heavy Duty',
    description: 'Premier carwash builder: gas station construction, self-service installation, heavy duty truck wash, express tunnels, touchless systems, and turnkey design-build.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/installation-setup',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carwash Builder & Contractor Minnesota',
    description: 'Gas station carwash builder, self-service contractor, heavy duty truck wash installation, and complete turnkey construction in MN, ND, SD, WI.',
  },
};

// Server component data fetching
async function getInstallationData() {
  return {
    stats: {
      installations: '99+',
      experience: '50+',
      satisfaction: '99%',
      support: 'Ongoing'
    },
    services: [
      {
        id: 'tunnel',
        title: 'Tunnel System Installation',
        description: 'Complete conveyor tunnel system installation including all wash arches, dryers, and control systems.',
        icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        color: 'blue',
        features: ['Conveyor installation', 'Equipment positioning', 'Control system setup', 'Safety system installation']
      },
      {
        id: 'electrical',
        title: 'Electrical & Plumbing',
        description: 'Professional electrical and plumbing installation to support all equipment operations.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        color: 'green',
        features: ['Power distribution', 'Water supply lines', 'Drainage systems', 'Chemical feed lines']
      },
      {
        id: 'chemical',
        title: 'Chemical System Setup',
        description: 'Precise chemical delivery system installation and calibration for optimal wash performance.',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
        color: 'purple',
        features: ['Chemical tanks installation', 'Dosing system calibration', 'Injection point setup', 'Safety system installation']
      },
      {
        id: 'payment',
        title: 'Payment System Integration',
        description: 'Complete payment system installation and integration with your wash operations.',
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        color: 'orange',
        features: ['POS system setup', 'Card reader installation', 'Network configuration', 'Software training']
      },
      {
        id: 'water-reclaim',
        title: 'Water Reclaim Systems',
        description: 'Environmental water reclaim and recycling system installation for sustainable operations.',
        icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
        color: 'red',
        features: ['Treatment tank installation', 'Filtration system setup', 'Pump system installation', 'Control automation']
      },
      {
        id: 'training',
        title: 'Staff Training & Support',
        description: 'Comprehensive training programs to ensure your team can operate equipment safely and efficiently.',
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
        color: 'teal',
        features: ['Equipment operation training', 'Safety procedures', 'Maintenance protocols', 'Troubleshooting guidance']
      }
    ],
    timeline: [
      {
        week: '1-2',
        title: 'Planning & Design',
        description: 'Site assessment, permit acquisition, and detailed design finalization.',
        duration: '1-2 weeks'
      },
      {
        week: '3-4',
        title: 'Site Preparation',
        description: 'Excavation, concrete work, and utility installation preparation.',
        duration: '1-2 weeks'
      },
      {
        week: '5-8',
        title: 'Equipment Installation',
        description: 'Main equipment installation, electrical work, and plumbing connections.',
        duration: '3-4 weeks'
      },
      {
        week: '9',
        title: 'Testing & Training',
        description: 'System testing, calibration, staff training, and final inspections.',
        duration: '1 week'
      }
    ]
  };
}

export default async function InstallationSetup() {
  const data = await getInstallationData();

  // Transform services for GenericServicesGrid
  const installationServices = data.services.map(service => ({
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
      </svg>
    ),
    title: service.title,
    description: service.description + ' ' + service.features.join(', '),
    backgroundImage:
      service.id === 'tunnel'
        ? '/imgs/BelangerTunnel.webp'
        : service.id === 'electrical'
          ? '/imgs/CarWash Controller.jpg'
          : service.id === 'chemical'
            ? '/imgs/chems/MixStir.webp'
            : service.id === 'payment'
              ? '/imgs/CarWash Controller.jpg'
              : service.id === 'water-reclaim'
                ? '/imgs/Insta-KLEEN-Fleet-Wash-Rendering-Belanger (1).webp'
                : service.id === 'training'
                  ? '/imgs/AirCannon.webp'
                  : undefined
  }));

  // Transform timeline into service items
  const timelineItems = data.timeline.map(phase => ({
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: `Week ${phase.week}: ${phase.title}`,
    description: `${phase.description} (${phase.duration})`,
    backgroundImage: '/imgs/Existing.webp'
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GenericHero
        eyebrow="Car Wash Equipment Installers"
        title="Installation & Setup"
        highlightedWord="Installation"
        subtitle="Turnkey Car Wash Construction, Start to Finish"
        description="One of the Midwest's most experienced car wash installation companies. We build gas station carwashes, car dealership wash systems, heavy duty vehicle washes, express tunnels, and self-service bays - site prep through startup, fully turnkey."
        buttons={[
          {
            text: "Plan Installation",
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
        leftImage="/imgs/IMG_5389.webp"
        rightImage="/imgs/IMG_5393.webp"
        centerLane="strong"
        compact={true}
      />

      <StatsBand
        badge="Midwest Installers"
        heading="Car wash equipment installers trusted from MN to WI."
        image="/imgs/IMG_5389.webp"
        stats={[
          { value: '50+', label: 'Yrs Combined Exp.' },
          { value: '99+', label: 'Installs Completed' },
          { value: '4', label: 'States Served' },
          { value: 'Turnkey', label: 'Design-Build' },
        ]}
      />

      {/* Who we install for */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#f0da11]" />
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Car Wash Equipment Installers</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Trusted car wash installation companies serving the Midwest
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
                From car dealership car wash installation to heavy duty fleet washes, we handle every phase of the project - civil groundwork, equipment setting, electrical, plumbing, chemical systems, payment integration, and startup training.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                As authorized installers for Belanger, PECO, PDQ, Sonny&apos;s, and AVW, we bring factory-certified expertise to every site. Whether you need an automated car wash machine for a car dealership, a touchless gantry for a municipal fleet, or an express tunnel for a convenience store chain, our crews have done it across MN, ND, SD, and WI.
              </p>
            </div>
            <div className="bg-slate-50 border border-gray-200 border-l-4 border-l-[#f0da11] p-6 sm:p-8">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Installations we specialize in
              </h3>
              <ul className="space-y-3">
                {[
                  'Car dealership car wash installation',
                  'Gas station & convenience store carwash',
                  'Express tunnel & conveyor systems',
                  'Automated in-bay & touchless systems',
                  'Heavy duty vehicle & semi truck wash',
                  'Municipal government fleet wash',
                  'Self-service bay construction',
                  'Water reclaim & recycle systems',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0da11] text-black">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GenericServicesGrid
        eyebrow="Our Services"
        title="Installation Services"
        highlightedWord="Installation"
        description="Complete installation services for all types of car wash equipment and systems"
        items={installationServices}
        columns={3}
        backgroundVariant="light-grey"
      />

      {/* Installation Timeline */}
      <GenericServicesGrid
        eyebrow="Project Timeline"
        title="Installation Process"
        highlightedWord="Process"
        description="Typical installation timeline from planning to completion for a standard car wash facility"
        items={timelineItems}
        columns={4}
        backgroundVariant="white"
      />

      <PageFAQ
        heading="Car Wash Installation Questions, Answered"
        items={[
          {
            question: 'Do you do car dealership car wash installation?',
            answer: 'Yes. Car dealership car wash installation is one of our core specialties. We install in-bay automatic systems, touchless gantry washes, and conveyor tunnel systems specifically sized for dealership service lanes and detail operations. We handle site planning, permits, equipment selection, and full startup across Minnesota, North Dakota, South Dakota, and Wisconsin.',
          },
          {
            question: 'What types of car wash equipment do you install?',
            answer: 'As one of the Midwest\'s leading car wash equipment installers, we install the full range: express conveyor tunnels, in-bay automatics (touchless and soft-touch), self-service bay systems, heavy duty gantry washes for fleets and semis, and automated car wash machines for gas stations, c-stores, and car dealerships. We are authorized installers for Belanger, PECO, PDQ, Sonny\'s, and AVW.',
          },
          {
            question: 'Are you one of the car wash installation companies that handles the entire project?',
            answer: 'Yes. We are a true turnkey car wash installation company - we manage civil groundwork, equipment setting, electrical, plumbing, chemical systems, payment integration, and startup training as a single accountable partner. You do not need to coordinate multiple contractors; we handle the project from breaking ground through opening day.',
          },
          {
            question: 'Can you install automated car wash machines in Minnesota?',
            answer: 'Yes. We install automated car wash machines across Minnesota and the upper Midwest, including in-bay automatics, touchless rollover systems, and full tunnel automation equipment. We supply and install automation equipment from Belanger, PECO, PDQ, and other leading manufacturers, and provide commissioning, training, and ongoing service after installation.',
          },
          {
            question: 'Do you build heavy duty vehicle wash systems?',
            answer: 'Yes. We build heavy duty vehicle wash systems for semi trucks, buses, municipal fleets, RVs, and heavy equipment. Our heavy duty installations include touchless gantry systems, drive-through wash bays, and high-pressure equipment designed for round-the-clock commercial use. We serve trucking terminals, fleet yards, government facilities, and transit authorities across MN, ND, SD, and WI.',
          },
        ]}
      />

      {/* Call to Action */}
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