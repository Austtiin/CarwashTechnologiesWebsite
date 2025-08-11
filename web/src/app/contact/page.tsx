import React from 'react';
import { Metadata } from 'next';
import ContactHero from '../components/contact/components/ContactHero';
import ContactSelector from '../components/contact/components/ContactSelector';
import CallToAction from '../components/ui/CallToAction';
import { contactOptions } from './data/contactOptions';

export const metadata: Metadata = {
  title: 'Contact Us | Carwash Technologies',
  description: 'Get in touch with our experts for chemical sales, service & maintenance, or equipment sales. Quick response guaranteed.',
  keywords: 'contact, carwash, chemicals, service, equipment, sales, maintenance',
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
      {/* Static Hero Section */}
      <ContactHero />

      {/* Interactive Contact Selection & Form */}
      <ContactSelector contactOptions={contactOptions} />

      <CallToAction
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
        backgroundVariant="dark"
        showDecorations={true}
      />
    </main>
  );
}

