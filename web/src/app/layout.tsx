// src/app/layout.tsx
import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import Script from 'next/script';
import "./globals.css";
import Navbar from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

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
  title: "Carwash Technologies - Professional Car Wash Solutions",
  description: "Expert new car wash and vehicle wash systems, construction, installation services, maintenance, chemical supply, and consulting across the Midwest.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={customFont.variable}>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=5.0, user-scalable=yes" />
        {/* Basic security meta tags */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JX2XMFTMJR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JX2XMFTMJR');
          `}
        </Script>
        
        <React.StrictMode>
          <Navbar />
          <main className="flex-grow w-full pt-14 sm:pt-16 lg:pt-[4.25rem]">
            <div className="w-full max-w-none">
              {children}
            </div>
          </main>
          <Footer />
        </React.StrictMode>
      </body>
    </html>
  );
}