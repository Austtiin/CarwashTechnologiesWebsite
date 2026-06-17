import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
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
  const testimonials = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      ),
      title: 'SuperWash Express',
      description: '"Carwash Technologies transformed our outdated facility into a modern, efficient operation. Our customer satisfaction and revenue have both increased significantly since the upgrade." - Mike Johnson',
      backgroundImage: '/imgs/Carwash1.webp'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      ),
      title: 'Quick Clean Car Wash',
      description: '"The team\'s expertise and attention to detail were outstanding. They delivered on time and within budget, and the results exceeded our expectations." - Sarah Chen',
      backgroundImage: '/imgs/Existing.webp'
    }
  ];

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
          { value: '500+', label: 'Projects Delivered' },
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
                src="/imgs/WLC/4763be2a-a176-492d-a14b-948bd849b563.webp"
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

      <GenericServicesGrid
        eyebrow="Client Success"
        title="What Our Clients Say"
        highlightedWord="Clients"
        description="Hear from wash operators who have trusted us with their business transformations."
        items={testimonials}
        columns={2}
        backgroundVariant="light-grey"
      />

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
