import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GenericHero from '../components/ui/GenericHero';
import CallToActionNew from '../components/ui/CallToActionNew';
import StatsBand from '../components/ui/StatsBand';

export const metadata: Metadata = {
  title: 'Car Wash Projects & Case Studies Minnesota | Carwash Technologies',
  description: 'See car wash projects completed by Carwash Technologies across Minnesota, North Dakota, South Dakota, and Wisconsin. Tunnel system builds, automatic vehicle wash installations, semi truck wash construction, fleet wash projects, and carwash remodels.',
  keywords: 'car wash projects Minnesota, carwash builder projects MN, car wash construction case studies, tunnel wash installation projects, semi truck wash projects, fleet wash builds, carwash remodel Minnesota, car wash installations North Dakota, car wash builds Wisconsin, worlds longest carwash, world record carwash tunnel, flagship carwash project, largest carwash build Midwest',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Car Wash Projects & Case Studies Minnesota | Carwash Technologies',
    description: 'Completed car wash projects across MN, ND, SD, WI — tunnel builds, truck washes, fleet washes, and remodels.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Wash Projects & Case Studies Minnesota | Carwash Technologies',
    description: 'Completed car wash projects across MN, ND, SD, WI — tunnel builds, truck washes, fleet washes, and remodels.',
  },
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <GenericHero
        eyebrow="Proven Results"
        title="Our Projects"
        highlightedWord="Projects"
        subtitle="Excellence in Every Installation"
        description="Transforming wash operations across the Midwest with proven expertise and quality installations. Our track record speaks for itself."
        buttons={[
          {
            text: 'Start Your Project',
            href: '/contact',
            variant: 'primary'
          },
          {
            text: 'View Services',
            href: '/services',
            variant: 'secondary'
          }
        ]}
        backgroundVariant="dark"
        showPattern={true}
        leftImage="/imgs/BelangerTunnel.webp"
        rightImage="/imgs/SpinLite.webp"
        centerLane="strong"
        compact={true}
      />

      <StatsBand
        badge="Proven Results"
        heading="Builds and installs across the Midwest."
        image="/imgs/IMG_5380.webp"
        stats={[
          { value: '99+', label: 'Projects Delivered' },
          { value: '25+', label: 'Years Experience' },
          { value: '4', label: 'States Served' },
          { value: 'Turnkey', label: 'Design-Build' },
        ]}
      />

      {/* Featured build — World's Longest Carwash */}
      <section className="bg-slate-950 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects/worlds-longest-carwash"
            className="group grid lg:grid-cols-2 gap-8 lg:gap-10 items-center bg-slate-900 border border-slate-800 hover:border-[#f0da11] transition-colors duration-300 overflow-hidden"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[260px]">
              <Image
                src="/imgs/projects/WLC/20260720_095018.jpg"
                alt="World's Longest Carwash flagship build under construction"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[#f0da11] text-slate-900 text-xs font-bold uppercase tracking-widest px-3 py-1.5">
                Now Building
              </span>
            </div>
            <div className="p-6 sm:p-8 lg:pr-12">
              <p className="text-sm font-semibold text-[#f0da11] uppercase tracking-wider mb-3">Flagship Project</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                The World&apos;s Longest Carwash
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-6">
                Our most ambitious build yet is under construction right now — a record-setting tunnel
                on a scale the industry hasn&apos;t seen. Take a first look at the build.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#f0da11] transition-colors">
                See the project
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Project types — replaces placeholder testimonials */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">What We Build</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              99+ Projects Across{' '}
              <span className="inline-block bg-[#f0da11] text-black px-2 pb-0.5 -rotate-1">Four States</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Tunnel builds, truck washes, fleet systems, remodels, and custom installs — delivered across MN, ND, SD, and WI.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Express Tunnel Builds', desc: 'New conveyor tunnel construction from civil work through equipment startup, including high-throughput express-format sites.' },
              { title: 'Heavy Duty Vehicle Washes', desc: 'Semi truck wash, bus wash, and heavy equipment wash systems for trucking terminals, municipalities, and large commercial fleets.' },
              { title: 'Automatic In-Bay Systems', desc: 'Touchless and soft-touch in-bay automatic installations for gas stations, c-stores, and car dealerships.' },
              { title: 'Self-Service Bay Builds', desc: 'New self-service bay construction and bay equipment upgrades including pumps, booms, timers, and payment systems.' },
              { title: 'Carwash Remodels & Retrofits', desc: 'Equipment modernization, control upgrades, and full remodels to bring aging washes up to current-generation performance.' },
              { title: 'Fleet & Municipal Wash Systems', desc: 'Drive-through and gantry fleet wash builds for city garages, county fleets, DOT yards, and transit authorities.' },
            ].map(item => (
              <div key={item.title} className="bg-white border border-gray-200 border-l-4 border-l-[#f0da11] p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            More case studies and project spotlights coming soon.
          </p>
        </div>
      </section>

      <CallToActionNew
        title="Let's Build Something Great"
        description="Ready to transform your wash operation? Our team is here to help you succeed with expert installation, quality equipment, and ongoing support."
        buttons={[
          {
            text: 'Get Started Today',
             href: '/contact#contact-inquiry',
            variant: 'primary'
          },
          {
            text: 'View Our Services',
            href: '/services',
            variant: 'secondary'
          }
        ]}
        contactInfo={{
          phone: '(612) 408-9010',
          address: '322 19th St. SW<br />Forest Lake, MN 55025',
          showContactCard: true
        }}
      />
    </div>
  );
};

export default ProjectsPage;
