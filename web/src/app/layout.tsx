// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import SecurityWrapper from "@/app/components/SecurityWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carwash Technologies - Professional Car Wash Solutions",
  description: "Expert car wash construction, maintenance, and chemical supply services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        {/* Basic security meta tags */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden`}>
        <SecurityWrapper>
          <Navbar />
          <main className="flex-grow w-full">
            <div className="w-full max-w-none">
              {children}
            </div>
          </main>
          <Footer />
        </SecurityWrapper>
      </body>
    </html>
  );
}