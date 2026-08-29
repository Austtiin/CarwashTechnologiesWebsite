import React from 'react';
import GenericHero from '../ui/GenericHero';
import GenericServicesGrid from '../ui/GenericServicesGrid';
import StatsBand from '../ui/StatsBand';
import CallToActionNew from '../ui/CallToActionNew';
import PageFAQ, { type FAQItem } from '../ui/PageFAQ';

export interface SegmentStat {
  value: string;
  label: string;
}

export interface SegmentSolution {
  title: string;
  description: string;
  /** SVG path `d` string for the icon. */
  icon: string;
}

export interface SegmentData {
  slug: string;
  /** Hero eyebrow. */
  eyebrow: string;
  /** Hero H1; word in `highlight` gets the yellow accent. */
  title: string;
  highlight?: string;
  subtitle: string;
  description: string;
  heroImage: string;
  /** Intro section heading + body. */
  introHeading: string;
  introBody: string;
  /** "Challenges we solve for this segment" - bullet list. */
  challenges: string[];
  /** "What we deliver" - cards. */
  solutions: SegmentSolution[];
  statsBadge: string;
  statsHeading: string;
  stats: SegmentStat[];
  /** Optional FAQ items for the page-level FAQ section. */
  faqItems?: FAQItem[];
}

export default function SegmentPage({ data }: { data: SegmentData }) {
  const solutionItems = data.solutions.map((s) => ({
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
      </svg>
    ),
    title: s.title,
    description: s.description,
  }));

  return (
    <div className="min-h-screen">
      <GenericHero
        eyebrow={data.eyebrow}
        title={data.title}
        highlightedWord={data.highlight}
        subtitle={data.subtitle}
        description={data.description}
        buttons={[
          { text: 'Request a Consultation', href: '/contact', variant: 'primary' },
          { text: 'Flagship Project', href: '/projects/worlds-longest-carwash', variant: 'secondary' },
        ]}
        leftImage={data.heroImage}
        compact
      />

      <StatsBand
        badge={data.statsBadge}
        heading={data.statsHeading}
        image="/imgs/IMG_5380.webp"
        stats={data.stats}
      />

      {/* Intro + challenges */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#f0da11]" />
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Who We Serve</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{data.introHeading}</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{data.introBody}</p>
            </div>

            <div className="bg-slate-50 border border-gray-200 border-l-4 border-l-[#f0da11] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
                Challenges we solve
              </h3>
              <ul className="space-y-3">
                {data.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f0da11] text-black">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <GenericServicesGrid
        eyebrow="What We Deliver"
        title="Built for Your Operation"
        highlightedWord="Built"
        description="Equipment, chemistry, installation, and service tuned to how you actually run."
        items={solutionItems}
        columns={3}
        backgroundVariant="light-grey"
        showCTA={false}
      />

      {data.faqItems && data.faqItems.length > 0 && (
        <PageFAQ items={data.faqItems} />
      )}

      <CallToActionNew
        title="Let's Plan Your Wash"
        description="Tell us about your site, vehicles, and volume - we'll map out the right equipment, chemistry, and service plan."
        buttons={[
          { text: 'Get Started Today', href: '/contact', variant: 'primary' },
          { text: 'Who We Serve', href: '/who-we-serve', variant: 'secondary' },
        ]}
        contactInfo={{
          phone: '(612) 408-9010',
          address: '322 19th St. SW<br />Forest Lake, MN 55025',
          showContactCard: true,
        }}
      />
    </div>
  );
}
