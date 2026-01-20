// AboutPage.tsx
'use client';

import React from 'react';
import SEOHead from '../components/ui/SEOHead';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';

export default function AboutPage() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Our Mission',
      description: 'To provide innovative, reliable wash solutions that empower our customers to build successful, profitable businesses while delivering exceptional value and service that exceeds expectations.',
      backgroundImage: '/imgs/Carwash1.jpg'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Our Vision',
      description: 'To be the most trusted partner in the Midwest wash industry, known for our expertise, innovation, and unwavering commitment to customer success.',
      backgroundImage: '/imgs/Insta-KLEEN-fleet.webp'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Local Expertise',
      description: 'Deep understanding of Midwest markets, weather conditions, and local business needs. We know what works in our region.',
      backgroundImage: '/imgs/Existing.jpg'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
        </svg>
      ),
      title: 'Complete Solutions',
      description: 'From initial consultation to ongoing support, we provide everything you need for a successful wash operation.',
      backgroundImage: '/imgs/COnvayer.jpg'
    }
  ];

  return (
    <>
      <SEOHead
        title="About Carwash Technologies - 50+ Years of Midwest Wash Solutions"
        description="Learn about Carwash Technologies' 50+ years of combined expertise serving Minnesota, North Dakota, South Dakota, and Wisconsin with professional wash equipment, service, and consulting."
        canonical="https://carwashtechnologies.com/about"
        ogType="website"
      />

      <div className="min-h-screen bg-white">
        <GenericHero
          eyebrow="About Our Company"
          title="Carwash Technologies"
          highlightedWord="Technologies"
          subtitle="50+ Years of Combined Excellence"
          description="Built on a foundation of expertise, innovation, and unwavering commitment to customer success across Minnesota, North Dakota, South Dakota, and Wisconsin."
          stats={[
            { value: '50+', label: 'Years Combined Experience' },
            { value: '500+', label: 'Installations' },
            { value: '4', label: 'States Served' },
            { value: '98%', label: 'Satisfaction' }
          ]}
          backgroundVariant="white"
          showPattern={true}
          leftImage="/imgs/AirCannon.jpg"
          rightImage="/imgs/Kondor_Flight.jpg"
        />

        <GenericServicesGrid
          eyebrow="Our Approach"
          title="Mission, Vision & Values"
          highlightedWord="Values"
          description="What drives us every day to deliver excellence"
          items={services}
          columns={4}
          backgroundVariant="light-grey"
        />

        <CallToActionNew
          title="Ready to Transform Your Wash Business?"
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
    </>
  );
}

