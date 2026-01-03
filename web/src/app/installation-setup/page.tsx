import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';

export const metadata: Metadata = {
  title: 'Installation & Setup | Carwash Technologies',
  description: 'Professional car wash equipment installation and setup services. Expert technicians, certified installation, comprehensive training, and ongoing support across the Midwest.',
  keywords: 'car wash installation, equipment setup, professional installation, wash system setup, installation services',
  openGraph: {
    title: 'Installation & Setup | Carwash Technologies',
    description: 'Professional car wash equipment installation and setup services',
    type: 'website',
  },
};

// Server component data fetching
async function getInstallationData() {
  return {
    stats: {
      installations: '500+',
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
    description: service.description + ' ' + service.features.join(', ')
  }));

  // Transform timeline into service items
  const timelineItems = data.timeline.map(phase => ({
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: `Week ${phase.week}: ${phase.title}`,
    description: `${phase.description} (${phase.duration})`
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GenericHero
        eyebrow="Professional Installation"
        title="Installation & Setup"
        highlightedWord="Installation"
        subtitle="Expert Equipment Installation"
        description="Professional car wash equipment installation and setup services. Expert technicians, certified installation, comprehensive training, and ongoing support across the Midwest."
        stats={[
          { value: data.stats.installations, label: 'Installations' },
          { value: data.stats.experience, label: 'Years Combined Experience' },
          { value: data.stats.satisfaction, label: 'Satisfaction' },
          { value: data.stats.support, label: 'Support' }
        ]}
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
        backgroundVariant="white"
        showPattern={true}
        leftImage="/imgs/BelangerTunnel.jpg"
        rightImage="/imgs/SpinLite.jpg"
      />

      {/* Installation Services */}
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

      {/* Call to Action */}
      <CallToActionNew
        title="Let's Build Something Great"
        description="Join hundreds of satisfied customers across the Midwest who trust Carwash Technologies for their equipment, service, and chemical needs."
        buttons={[
          {
            text: "Get Started Today",
            href: "/contact",
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