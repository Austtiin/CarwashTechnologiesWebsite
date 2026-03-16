import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import ContactSelector from '../components/contact/components/ContactSelector';
import CallToActionNew from '../components/ui/CallToActionNew';
import { contactOptions } from './data/contactOptions';

export const metadata: Metadata = {
  title: 'Contact Us | Carwash Technologies',
  description: 'Get in touch with our experts about new wash systems, new car wash projects, automatic vehicle washes, installation services, and vehicle wash consulting. Quick response guaranteed.',
  keywords: 'contact, carwash, new wash systems, new car wash, new vehicle washes, automatic vehicle washes, carwash installation services, vehicle wash consulting, chemicals, service, equipment, sales, maintenance',
  openGraph: {
    title: 'Contact Us | Carwash Technologies',
    description: 'Connect with our specialists for all your carwash needs',
    type: 'website',
  },
};

// Server Component - handles initial page structure
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <GenericHero
        eyebrow="Let's Connect"
        title="Contact Us"
        highlightedWord="Contact"
        subtitle="Expert Support for Your Wash Business"
        description="Ready to transform your wash operation? Let's discuss your specific needs and create a customized solution that drives results. Our team is here to help with equipment, chemicals, service, and expert guidance."
        buttons={[
          {
            text: 'Call Us Now',
            href: 'tel:612-408-9010',
            variant: 'primary'
          },
          {
            text: 'View Services',
            href: '/services',
            variant: 'secondary'
          }
        ]}
        backgroundVariant="white"
        showPattern={true}
        leftImage="/imgs/BelangerTunnel.jpg"
        rightImage="/imgs/SpinLite.jpg"
      />

      {/* Interactive Contact Selection & Form */}
      <ContactSelector contactOptions={contactOptions} />

      <CallToActionNew
        title="Let's Build Something Great"
        description="Join hundreds of satisfied customers across the Midwest who trust Carwash Technologies for their equipment, service, and chemical needs."
        buttons={[
          {
            text: "Get Started Today",
            href: "#contact-inquiry",
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
    </main>
  );
}

