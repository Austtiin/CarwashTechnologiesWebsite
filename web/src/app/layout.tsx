// src/app/layout.tsx
import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";
import ConditionalAnalytics from "@/app/components/ConditionalAnalytics";

const inter = Inter({ subsets: ["latin"] });

const customFont = localFont({
  src: [
    {
      path: './fonts/Friz Quadrata Bold.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Friz Quadrata Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.carwashtechnologies.com'),
  title: {
    default: 'Carwash Technologies | Midwest Carwash Builder, Chemicals, Parts & Repair',
    template: '%s | Carwash Technologies',
  },
  description: 'Carwash Technologies helps owners build, maintain, and grow profitable carwash sites across Minnesota, North Dakota, South Dakota, and Wisconsin. Gas station carwash builder, self-service carwash parts, heavy duty carwash contractor, equipment sales, chemicals, installation, and repair services.',
  keywords: "gas station carwash builder Minnesota, self service carwash parts MN, heavy duty carwash builder, car wash equipment Minnesota, carwash contractor Minnesota, carwash builder MN, car dealership carwash installation, touchless carwash systems, express carwash builder Minnesota, self serve car wash parts supplier, carwash equipment parts MN, automatic carwash builder, tunnel carwash contractor Minnesota, in bay automatic carwash builder, carwash modernization Minnesota, carwash retrofit services, commercial carwash builder MN, industrial carwash contractor, municipal fleet wash builder, convenience store carwash installation, car wash construction Minnesota, vehicle washing equipment, fleet wash systems, semi truck wash builder, truck wash contractor Minnesota, bus wash systems, RV wash equipment, heavy equipment wash systems, carwash site planning, carwash design build Minnesota, turnkey carwash installation, carwash equipment distributor MN, carwash parts warehouse, pump parts supplier Minnesota, Cat Pumps parts MN, General Pump parts Minnesota, car wash chemical supplier, Belanger dealer Minnesota, PECO dealer MN, PDQ dealer Minnesota, Sonny's dealer MN, Vertech Labs chemicals, ChemQuest dealer, Simoniz dealer Minnesota, automatic carwash repair Minnesota, carwash maintenance contractor, priority carwash service MN, carwash technician Minnesota, carwash equipment North Dakota, carwash builder South Dakota, carwash contractor Wisconsin, carwash services Midwest",
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Carwash Technologies',
  url: 'https://www.carwashtechnologies.com',
  telephone: '+1-612-408-9010',
  image: 'https://www.carwashtechnologies.com/logos/logoCWT.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '322 19th St. SW',
    addressLocality: 'Forest Lake',
    addressRegion: 'MN',
    postalCode: '55025',
    addressCountry: 'US',
  },
  areaServed: ['Minnesota', 'North Dakota', 'South Dakota', 'Wisconsin'],
  serviceType: [
    'Gas station carwash builder and contractor',
    'Self-service carwash parts and installation',
    'Heavy duty truck wash construction',
    'Express carwash tunnel builder',
    'Touchless carwash systems',
    'Car dealership carwash installation',
    'Convenience store carwash builder',
    'Commercial and industrial carwash contractor',
    'Municipal fleet wash systems',
    'Carwash construction and installation',
    'Turnkey carwash design-build services',
    'Car wash equipment and parts sales',
    'Car wash chemical supply and programs',
    'Automatic car wash repair and maintenance',
    'Emergency carwash service',
    'Carwash modernization and retrofit',
    'Fleet and semi truck wash systems',
    'In-bay automatic carwash systems',
    'Conveyor tunnel carwash systems',
    'Carwash parts warehouse and distribution',
    'Flagship and large-scale carwash tunnel construction',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={customFont.variable} data-scroll-behavior="smooth">
      <body className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Conditional Google Analytics - only loads with consent */}
        <ConditionalAnalytics />
        
        <Navbar />
        <main className="grow w-full pt-14 sm:pt-16 lg:pt-17">
          <div className="w-full max-w-none">
            {children}
          </div>
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}