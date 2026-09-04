import Link from 'next/link';
import GenericHero from '@/app/components/ui/GenericHero';
import CallToActionNew from '@/app/components/ui/CallToActionNew';
import PageFAQ, { FAQItem } from '@/app/components/ui/PageFAQ';

interface SupportingStat {
  value: string;
  label: string;
}

interface SupportingSection {
  title: string;
  description: string;
  bullets: string[];
}

interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

interface SupportingLandingPageProps {
  eyebrow: string;
  title: string;
  highlightedWord?: string;
  subtitle: string;
  description: string;
  heroImage: string;
  schemaName: string;
  serviceTypes: string[];
  stats: SupportingStat[];
  sections: SupportingSection[];
  faqHeading: string;
  faqItems: FAQItem[];
  relatedLinks: RelatedLink[];
  ctaTitle: string;
  ctaDescription: string;
}

export default function SupportingLandingPage({
  eyebrow,
  title,
  highlightedWord,
  subtitle,
  description,
  heroImage,
  schemaName,
  serviceTypes,
  stats,
  sections,
  faqHeading,
  faqItems,
  relatedLinks,
  ctaTitle,
  ctaDescription,
}: SupportingLandingPageProps) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: schemaName,
    description,
    areaServed: ['Minnesota', 'North Dakota', 'South Dakota', 'Wisconsin'],
    provider: {
      '@type': 'LocalBusiness',
      name: 'Carwash Technologies',
      url: 'https://www.carwashtechnologies.com',
      telephone: '+1-612-408-9010',
    },
    serviceType: serviceTypes,
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <GenericHero
        eyebrow={eyebrow}
        title={title}
        highlightedWord={highlightedWord}
        subtitle={subtitle}
        description={description}
        buttons={[
          {
            text: 'Request a Quote',
            href: '/contact',
            variant: 'primary',
          },
          {
            text: 'See All Services',
            href: '/services',
            variant: 'secondary',
          },
        ]}
        backgroundVariant="dark"
        leftImage={heroImage}
        centerLane="strong"
        compact={true}
      />

      <section className="bg-slate-950 py-10 sm:py-12 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-slate-800 bg-slate-900 px-5 py-5">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">What We Handle</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Focused support for this search intent
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              These pages exist to answer specific buying and service questions with real scope, coverage, and next steps.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="border border-gray-200 bg-slate-50 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-5">{section.description}</p>
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#f0da11]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-[#f0da11]" />
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Related Pages</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Explore the next step</h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-gray-700 hover:text-[#d0b211] transition-colors">
              View complete services
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group border border-gray-200 bg-white p-5 transition-colors hover:border-[#f0da11]"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#d0b211] transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ heading={faqHeading} items={faqItems} />

      <CallToActionNew
        title={ctaTitle}
        description={ctaDescription}
        buttons={[
          {
            text: 'Talk to Our Team',
            href: '/contact#contact-inquiry',
            variant: 'primary',
          },
          {
            text: 'Call (612) 408-9010',
            href: 'tel:+16124089010',
            variant: 'secondary',
          },
        ]}
        contactInfo={{
          phone: '(612) 408-9010',
          showContactCard: true,
        }}
      />
    </div>
  );
}