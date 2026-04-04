// src/app/layout.tsx
import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";import ConditionalAnalytics from "@/app/components/ConditionalAnalytics";

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
  title: "Carwash Technologies - Car Wash Equipment, Chemicals & Installation | Minnesota",
  description: "Carwash Technologies serves Minnesota, North Dakota, South Dakota, and Wisconsin with car wash equipment sales, installation, service, chemical supply, and consulting. New tunnel systems, automatic vehicle washes, semi truck washes, fleet wash systems, and carwash construction.",
  keywords: "car wash equipment Minnesota, carwash chemicals MN, carwash builder Minnesota, vehicle washing equipment, car wash installation MN, fleet wash systems, semi truck wash, tunnel wash systems, track wash, auto vehicle washing, car wash construction Minnesota, carwash equipment MN, Belanger dealer Minnesota, PECO car wash MN, PDQ car wash equipment, Sonny's car wash equipment, Vertech Labs chemicals, ChemQuest car wash, Simoniz car wash chemicals, Cat Pumps repair MN, General Pump service Minnesota, carwash chemicals Midwest, carwash equipment Midwest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={customFont.variable} data-scroll-behavior="smooth">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=5.0, user-scalable=yes" />
        {/* Basic security meta tags */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden`}>
        {/* Conditional Google Analytics - only loads with consent */}
        <ConditionalAnalytics />
        
        <Navbar />
        <main className="flex-grow w-full pt-14 sm:pt-16 lg:pt-[4.25rem]">
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