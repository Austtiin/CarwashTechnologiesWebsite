import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navigation"; // Corrected import
import Footer from "../components/Footer"; // Corrected import
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Carwash Technologies - Professional Car Wash Solutions",
    template: "%s | Carwash Technologies",
  },
  description:
    "Expert car wash construction, maintenance, and chemical supply services. Building successful car wash businesses with quality design and ongoing support.",
  keywords: [
    "car wash",
    "construction",
    "maintenance",
    "chemicals",
    "car wash equipment",
    "car wash design",
  ],
  authors: [{ name: "Carwash Technologies" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          <Navbar />
          {/* Changed pt-16 to pt-20 to match the new taller navbar */}
          <main>{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}