import React from 'react';
import { Metadata } from 'next';
import GenericHero from '@/app/components/ui/GenericHero';
import GenericServicesGrid from '@/app/components/ui/GenericServicesGrid';
import CallToActionNew from '@/app/components/ui/CallToActionNew';

export const metadata: Metadata = {
  title: 'Consulting Services | Carwash Technologies',
  description: 'Expert carwash consulting services for site development, operational optimization, equipment selection, and business strategy. 50+ years of combined industry experience helping wash businesses succeed.',
  keywords: 'carwash consulting, wash business consulting, site development, operational optimization, equipment consulting, wash business strategy',
  openGraph: {
    title: 'Consulting Services | Carwash Technologies',
    description: 'Expert carwash consulting services with 50+ years of combined industry experience',
    type: 'website',
  },
};

export default function ConsultingPage() {
  const consultingServices = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Site Development',
      description: 'Expert site analysis, planning, and development for new wash locations. We help identify optimal locations and design efficient layouts.',
      backgroundImage: '/imgs/Existing.jpg'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Operational Optimization',
      description: 'Improve efficiency, reduce costs, and maximize profitability through process optimization and best practices implementation.',
      backgroundImage: '/imgs/car-wash.jpg'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
        </svg>
      ),
      title: 'Equipment Selection',
      description: 'Unbiased equipment recommendations tailored to your specific needs, budget, and business goals for optimal ROI.',
      backgroundImage: '/imgs/BelangerTunnel.jpg'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Business Strategy',
      description: 'Strategic planning and financial analysis to help you make informed decisions and achieve long-term success.',
      backgroundImage: '/imgs/Insta-KLEEN-fleet.webp'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Training Programs',
      description: 'Comprehensive staff training programs covering operations, maintenance, customer service, and safety protocols.',
      backgroundImage: '/imgs/AirCannon.jpg'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Efficiency Audits',
      description: 'Detailed assessments of your current operations with actionable recommendations for improvement and cost savings.',
      backgroundImage: '/imgs/CarWash Controller.jpg'
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '50+ Years Combined Experience',
      description: 'Deep industry knowledge and proven track record of successful projects',
      backgroundImage: '/imgs/Carwash1.jpg'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Personalized Approach',
      description: 'Custom solutions designed specifically for your unique business needs',
      backgroundImage: '/imgs/Existing.jpg'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Proven Results',
      description: 'Measurable improvements in efficiency, profitability, and customer satisfaction',
      backgroundImage: '/imgs/Insta-KLEEN-fleet.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <GenericHero
        eyebrow="Expert Consulting"
        title="Consulting Services"
        highlightedWord="Consulting"
        subtitle="Strategic Guidance & Expertise"
        description="Transform your car wash business with expert consulting services. From site development to operational optimization, we provide the strategic guidance you need to succeed."
        stats={[
          { value: '50+', label: 'Years Combined Experience' },
          { value: '500+', label: 'Projects Completed' },
          { value: '95%', label: 'Client Satisfaction' },
          { value: '4', label: 'States Served' }
        ]}
        buttons={[
          {
            text: "Schedule Consultation",
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

      <GenericServicesGrid
        eyebrow="Our Services"
        title="Consulting Solutions"
        highlightedWord="Solutions"
        description="Comprehensive consulting services to help you build, optimize, and grow your car wash business"
        items={consultingServices}
        columns={3}
        backgroundVariant="light-grey"
      />

      <GenericServicesGrid
        eyebrow="Why Choose Us"
        title="The Carwash Technologies Advantage"
        highlightedWord="Advantage"
        description="Partner with industry experts who are invested in your success"
        items={benefits}
        columns={3}
        backgroundVariant="white"
      />

      <CallToActionNew
        title="Let's Build Something Great"
        description="Schedule a consultation with our experts and discover how we can help you achieve your business goals."
        buttons={[
          {
            text: "Schedule Consultation",
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
