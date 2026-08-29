// AboutPage.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';
import StatsBand from '../components/ui/StatsBand';

export const metadata: Metadata = {
  title: 'About Carwash Technologies | Gas Station, Self-Service & Heavy Duty Carwash Builder',
  description: "Minnesota's trusted carwash builder, contractor, parts supplier, and equipment dealer specializing in gas station carwashes, self-service bays, heavy duty truck wash, express tunnels, and commercial systems. 50+ years combined expertise serving MN, ND, SD, and WI.",
  keywords: 'about Carwash Technologies, carwash builder Minnesota, carwash contractor MN, gas station carwash builder, self service carwash parts supplier Minnesota, heavy duty carwash builder, express carwash contractor MN, car wash equipment dealer Minnesota, carwash parts supplier MN, carwash company Minnesota, Midwest carwash company, carwash experts Minnesota, touchless carwash dealer, commercial carwash builder, industrial carwash contractor, authorized Belanger dealer Minnesota, authorized PECO dealer MN, PDQ dealer Minnesota, Sonnys dealer MN, Vertech Labs partner Minnesota, ChemQuest partner MN, Simoniz authorized dealer Minnesota, Cat Pumps dealer MN, General Pump dealer Minnesota, AVW dealer Minnesota, worlds longest carwash builder, record setting carwash project, largest carwash tunnel builder Midwest',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Carwash Technologies | Gas Station, Self-Service & Heavy Duty Builder',
    description: "Minnesota's trusted carwash builder specializing in gas station carwashes, self-service parts, heavy duty truck wash, and commercial systems.",
    type: 'website',
    url: 'https://www.carwashtechnologies.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Carwash Technologies Minnesota',
    description: 'Carwash builder, contractor, and parts supplier with 50+ years experience in gas station, self-service, and heavy duty systems.',
  },
};

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
      backgroundImage: '/imgs/Carwash1.webp'
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
      backgroundImage: '/imgs/BelangerTunnel.webp'
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
      backgroundImage: '/imgs/Existing.webp'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
        </svg>
      ),
      title: 'Complete Solutions',
      description: 'From initial consultation to ongoing support, we provide everything you need for a successful wash operation.',
      backgroundImage: '/imgs/COnvayer.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        <GenericHero
          eyebrow="About Our Company"
          title="Carwash Technologies"
          highlightedWord="Technologies"
          subtitle="Serving the Upper Midwest Wash Industry"
          description="Built on a foundation of expertise, innovation, and unwavering commitment to customer success across Minnesota, North Dakota, South Dakota, and Wisconsin. We are an authorized dealer for Belanger, PECO, PDQ, and Sonny's car wash equipment, and a trusted supplier of Vertech Labs, ChemQuest, and Simoniz chemicals."
          backgroundVariant="dark"
          showPattern={true}
          leftImage="/imgs/IMG_5386.webp"
          rightImage="/imgs/AirCannon.webp"
          compact={true}
          centerLane="strong"
        />

        <StatsBand
          badge="By the Numbers"
          heading="Experience that shows up on every job site."
          image="/imgs/IMG_5386.webp"
          stats={[
            { value: '50+', label: 'Years Combined Exp.' },
            { value: '99+', label: 'Installs Completed' },
            { value: '4', label: 'States Served' },
            { value: '5', label: 'Manufacturer Partners' },
          ]}
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

        {/* Company story - anchored to the WLC build */}
        <section className="bg-slate-950 py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/imgs/projects/WLC/Aug-2026/20260810_090658.webp"
                  alt="World's Longest Carwash interior under construction - Carwash Technologies flagship build"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute bottom-0 inset-x-0 px-5 py-4"
                  style={{ background: 'linear-gradient(to top, #020617 60%, transparent)' }}
                >
                  <p className="text-white text-sm font-semibold">World&apos;s Longest Carwash</p>
                  <p className="text-slate-400 text-xs mt-0.5">Now Under Construction · Our Flagship Build</p>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-[#f0da11]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#f0da11]">Our Story</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                  50+ Years Combined Experience.{' '}
                  <span className="inline-block bg-[#f0da11] text-slate-900 px-2 pb-0.5 -rotate-1">
                    This Is What It Looks Like.
                  </span>
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-4">
                  We started where every lasting company does - solving real problems for real operators.
                  Over the decades our team has installed, serviced, and optimized hundreds of wash
                  facilities across Minnesota, North Dakota, South Dakota, and Wisconsin.
                </p>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  That depth of experience is now going into the most ambitious project we&apos;ve ever
                  taken on: the World&apos;s Longest Carwash. A record-setting express tunnel currently
                  under construction, designed and built entirely in-house by our team. It&apos;s the
                  clearest proof of what 50+ years of doing this can deliver.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Authorized dealer: Belanger, PECO, PDQ, Sonny\'s, AVW',
                    'Chemical partners: Vertech Labs, ChemQuest, Simoniz',
                    'Equipment, installation, service, chemicals - all in one relationship',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#f0da11] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/projects/worlds-longest-carwash"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#f0da11] transition-colors group"
                >
                  See the build in progress
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

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
  );
}

