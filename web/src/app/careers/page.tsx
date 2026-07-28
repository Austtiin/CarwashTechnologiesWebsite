import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import CareersForm from '../components/careers/CareersForm';
import StatsBand from '../components/ui/StatsBand';

export const metadata: Metadata = {
  title: 'Careers | Carwash Technologies Jobs in Minnesota',
  description:
    'Join the Carwash Technologies team. We are hiring service technicians, installation crew, chemical delivery, and equipment sales roles across Minnesota, North Dakota, South Dakota, and Wisconsin. Apply online with your resume.',
  keywords:
    'carwash technician jobs Minnesota, car wash installer jobs MN, carwash service tech careers, equipment installer jobs Minnesota, chemical delivery driver jobs, carwash company careers Midwest',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers | Carwash Technologies',
    description:
      'Hiring service technicians, installation crew, and more across MN, ND, SD, and WI. Apply online with your resume.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/careers',
  },
};

const benefits = [
  {
    num: '01',
    title: 'Hands-On, Skilled Work',
    description: 'Build, install, and service real carwash equipment for operators across the Midwest — no two days the same.',
  },
  {
    num: '02',
    title: 'Grow Your Career',
    description: 'On-the-job training and room to advance from technician to lead, from delivery to sales.',
  },
  {
    num: '03',
    title: 'Local & Stable',
    description: 'A Forest Lake, MN based team serving MN, ND, SD, and WI with steady, year-round work.',
  },
];

const stats = [
  { value: '4', label: 'States Served' },
  { value: '50+', label: 'Years in the Trade' },
  { value: '99+', label: 'Installs & Counting' },
  { value: 'Year-Round', label: 'Steady Work' },
];

const requirements = [
  'A valid driver’s license (required for most roles)',
  'Reliable, safety-minded, and willing to learn',
  'Comfortable with hands-on mechanical and field work',
  'Potentially work on sites across MN, ND, SD, and WI (Mainly Metro area)',
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <GenericHero
        eyebrow="Join Our Team"
        title="Careers at Carwash Technologies"
        highlightedWord="Careers"
        subtitle="Build It. Maintain It. Grow It — With Us."
        description="We're always looking for dependable, hands-on people to help us build, install, and service car washes across the Midwest. Apply below and tell us where you'd fit."
        buttons={[{ text: 'Apply Now', href: '#apply', variant: 'primary' }]}
        leftImage="/imgs/IMG_5389.webp"
        compact
      />

      {/* Stats / now-hiring band */}
      <StatsBand
        badge="Now Hiring"
        heading="Skilled trades, real equipment, steady work."
        stats={stats}
        image="/imgs/IMG_5380.webp"
      />

      {/* About working here */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Why Work With Us</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              A Crew That{' '}
              <span className="inline-block bg-[#f0da11] text-black px-2 pb-0.5 -rotate-1">Builds Things</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Carwash Technologies is a Midwest carwash builder, equipment supplier, and service team.
              We value reliability, craftsmanship, and taking care of our customers and each other.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <article
                key={b.title}
                className="group relative bg-white border border-gray-200 border-l-4 border-l-[#f0da11] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl font-bold text-gray-200 group-hover:text-[#f0da11]/40 transition-colors">{b.num}</span>
                <h3 className="mt-2 text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{b.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements — framed checklist */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="relative bg-white border border-gray-200 p-8 sm:p-10 shadow-sm">
            {/* corner brackets */}
            <span className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-[#f0da11]" />
            <span className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-[#f0da11]" />
            <span className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-[#f0da11]" />
            <span className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-[#f0da11]" />

            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What We Look For</h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0da11] text-black">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="bg-white py-14 sm:py-16 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Apply Today</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Ready to Get to Work?
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Fill out the form below and attach your resume. We&apos;ll be in touch.
            </p>
          </div>
          <CareersForm />
        </div>
      </section>
    </div>
  );
}
