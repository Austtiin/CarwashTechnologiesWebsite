import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CallToActionNew from './CallToActionNew';
import PageFAQ, { FAQItem } from './PageFAQ';
import HeroImage from './HeroImage';

export interface PartnerProductLayoutProps {
  schema: Record<string, unknown>;
  brandEyebrow: string;
  logo: { src: string; alt: string; width: number; height: number };
  title: string;
  highlight: string;
  subtitle: string;
  intro: string;
  heroImage: { src: string; alt: string };
  metrics: { label: string; value: string }[];
  fitHeading: string;
  fitCards: { title: string; body: string }[];
  featuresEyebrow: string;
  featuresHeading: string;
  features: { title: string; body: string }[];
  tiers?: { name: string; tagline: string; items: string[]; featured?: boolean }[];
  tiersHeading?: string;
  options: { heading: string; items: string[] }[];
  gallery: { src: string; alt: string; caption: string }[];
  howWeHelp: { title: string; body: string }[];
  disclaimer: string;
  vendorUrl: string;
  vendorLinkText: string;
  faqHeading: string;
  faq: FAQItem[];
  ctaTitle: string;
  ctaDescription: string;
}

function SectionEyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3 mb-3">
      <div className="w-8 h-px bg-[#f0da11]" />
      <span className={`text-sm font-semibold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-gray-500'}`}>
        {children}
      </span>
      <div className="w-8 h-px bg-[#f0da11]" />
    </div>
  );
}

export default function PartnerProductLayout(props: PartnerProductLayoutProps) {
  const {
    schema, brandEyebrow, logo, title, highlight, subtitle, intro, heroImage, metrics,
    fitHeading, fitCards, featuresEyebrow, featuresHeading, features, tiers, tiersHeading,
    options, gallery, howWeHelp, disclaimer, vendorUrl, vendorLinkText, faqHeading, faq,
    ctaTitle, ctaDescription,
  } = props;

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #f0da11 0, #f0da11 1px, transparent 0, transparent 50%)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center bg-white/5 border border-white/10 px-4 py-3 mb-5">
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-8 w-auto" priority />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#f0da11]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#f0da11]">{brandEyebrow}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 leading-tight">
                {title} <span className="text-[#f0da11]">{highlight}</span>
              </h1>
              <p className="text-lg text-slate-300 mb-2 font-medium">{subtitle}</p>
              <p className="text-sm text-slate-400 mb-6">
                Available from Carwash Technologies &middot; Sales, Installation &amp; Service in MN &middot; ND &middot; SD &middot; WI
              </p>
              <p className="text-base text-slate-300 leading-relaxed mb-8">{intro}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#f0da11] text-slate-900 font-bold text-sm px-6 py-3 hover:bg-[#d0b211] transition-colors"
                >
                  Request a Quote
                </Link>
                <a
                  href={vendorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-slate-600 text-white font-semibold text-sm px-6 py-3 hover:border-[#f0da11] hover:text-[#f0da11] transition-colors"
                >
                  {vendorLinkText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8m9 0v9" />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">{disclaimer}</p>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-112 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <HeroImage src={heroImage.src} alt={heroImage.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Quick-glance metrics */}
      <section className="bg-[#f0da11]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-700">{m.label}</dt>
                <dd className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <SectionEyebrow>Is This Right for Me?</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{fitHeading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fitCards.map((card) => (
              <div key={card.title} className="rounded-xl border border-gray-200 bg-slate-50 p-6 border-t-4 border-t-[#f0da11]">
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-slate-950 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <SectionEyebrow dark>In the Field</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">See It in Action</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <figure
                key={img.src}
                className={`group relative overflow-hidden rounded-xl ring-1 ring-white/10 ${i === 0 ? 'sm:col-span-2 lg:row-span-2 h-64 sm:h-80 lg:h-full min-h-64' : 'h-56 sm:h-64'}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={i === 0 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 640px) 100vw, 33vw'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                <figcaption className="absolute left-4 right-4 bottom-4 text-sm font-semibold text-white">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <SectionEyebrow>{featuresEyebrow}</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{featuresHeading}</h2>
          </div>
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {features.map((f) => (
              <details key={f.title} className="group py-5 cursor-pointer">
                <summary className="flex items-center justify-between gap-4 font-semibold text-gray-900 text-base sm:text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  {f.title}
                  <svg className="w-5 h-5 shrink-0 text-[#d0b211] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed pr-8">{f.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Packages / tiers */}
      {tiers && tiers.length > 0 && (
        <section className="bg-slate-50 py-14 sm:py-16 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <SectionEyebrow>Packages</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{tiersHeading}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-xl p-7 flex flex-col ${tier.featured ? 'bg-slate-950 text-white ring-2 ring-[#f0da11] shadow-xl' : 'bg-white border border-gray-200'}`}
                >
                  {tier.featured && (
                    <span className="self-start mb-3 bg-[#f0da11] text-slate-900 text-xs font-bold uppercase tracking-wider px-2.5 py-1">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold mb-1 ${tier.featured ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
                  <p className={`text-sm mb-5 ${tier.featured ? 'text-slate-300' : 'text-gray-500'}`}>{tier.tagline}</p>
                  <ul className="space-y-2">
                    {tier.items.map((item) => (
                      <li key={item} className={`flex items-start gap-2 text-sm ${tier.featured ? 'text-slate-200' : 'text-gray-700'}`}>
                        <svg className="w-4 h-4 text-[#d0b211] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Options */}
      <section className={`py-14 sm:py-16 border-t border-gray-200 ${tiers && tiers.length > 0 ? 'bg-white' : 'bg-slate-50'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <SectionEyebrow>Options &amp; Upgrades</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Configure It for Your Site</h2>
          </div>
          <div className={`grid gap-6 ${options.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {options.map((group) => (
              <div key={group.heading} className="bg-white rounded-xl border border-gray-200 p-7">
                <h3 className="font-bold text-gray-900 mb-5">{group.heading}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Carwash Technologies helps */}
      <section className="bg-slate-950 py-12 sm:py-14 border-t-4 border-[#f0da11]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Sold, Installed &amp; Serviced Locally</h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            One Midwest team from first sketch to final commissioning - and every service call after that.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 text-left">
            {howWeHelp.map((item) => (
              <div key={item.title} className="bg-slate-900 rounded-xl p-5 border border-slate-700">
                <div className="font-bold text-[#f0da11] mb-1">{item.title}</div>
                <p className="text-sm text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ heading={faqHeading} items={faq} />

      <CallToActionNew
        title={ctaTitle}
        description={ctaDescription}
        buttons={[
          { text: 'Request a Quote', href: '/contact', variant: 'primary' },
          { text: 'View All Equipment', href: '/equipment-sales', variant: 'secondary' },
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
