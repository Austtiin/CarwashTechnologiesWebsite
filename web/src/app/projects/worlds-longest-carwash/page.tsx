import React from 'react';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import GenericHero from '../../components/ui/GenericHero';
import CallToActionNew from '../../components/ui/CallToActionNew';
import StatsBand from '../../components/ui/StatsBand';
import PageFAQ from '../../components/ui/PageFAQ';
import WLCGallery from '../../components/ui/WLCGallery';
import { type GalleryImage } from '../../components/ui/ProjectLightboxGallery';

export const metadata: Metadata = {
  title: "Planned World's Longest Carwash | Flagship Build In Progress | Carwash Technologies",
  description:
    "Carwash Technologies is building what is planned to be the World's Longest Carwash - a 300+ foot express tunnel with a 30+ stall indoor vacuum hall at Sota Shine One-Six-Nine in Brooklyn Park, MN. Opening planned just after Labor Day 2026. See job site photos.",
  keywords:
    "world's longest carwash, worlds longest car wash, longest car wash tunnel, longest carwash in the world, world record carwash, largest carwash tunnel, biggest car wash, flagship carwash build, record carwash tunnel, carwash construction project Minnesota, longest tunnel wash, record setting car wash, flagship tunnel wash project, Sota Shine One-Six-Nine, Sota Shine Brooklyn Park, Brooklyn Park car wash, indoor vacuum car wash Minnesota, carwash world record 2026, carwash technologies world record, Midwest carwash builder",
  alternates: { canonical: '/projects/worlds-longest-carwash' },
  openGraph: {
    title: "Planned World's Longest Carwash | Flagship Build In Progress",
    description:
      "A planned 300+ foot record-setting tunnel in Brooklyn Park, MN - currently under construction. Job site photos from Carwash Technologies.",
    type: 'website',
    url: 'https://www.carwashtechnologies.com/projects/worlds-longest-carwash',
    images: [
      {
        url: 'https://www.carwashtechnologies.com/imgs/projects/WLC/July-2026/20260720_095018.webp',
        width: 1600,
        height: 1200,
        alt: "World's Longest Carwash - job site construction photo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Planned World's Longest Carwash | Job Site Photos",
    description: "A planned record-setting tunnel build under construction by Carwash Technologies. First look inside.",
    images: ['https://www.carwashtechnologies.com/imgs/projects/WLC/July-2026/20260720_095018.webp'],
  },
};

const WLC_BASE = '/imgs/projects/WLC';

type GallerySection = { folder: string; label: string; images: GalleryImage[] };

// Friendly display names for each date subfolder
const FOLDER_LABELS: Record<string, string> = {
  'April-2026': 'April 2026',
  'July-2026': 'July 2026',
  'Aug-2026': 'August 2026',
};

// Explicit chronological order — alphabetical would put Aug before July
const FOLDER_ORDER = ['April-2026', 'July-2026', 'Aug-2026'];

function loadGallerySections(): GallerySection[] {
  try {
    const wlcDir = path.join(process.cwd(), 'public/imgs/projects/WLC');
    return fs
      .readdirSync(wlcDir, { withFileTypes: true })
      .filter(e => e.isDirectory())
      .sort((a, b) => {
        const ai = FOLDER_ORDER.indexOf(a.name);
        const bi = FOLDER_ORDER.indexOf(b.name);
        if (ai !== -1 && bi !== -1) return ai - bi;
        if (ai !== -1) return -1;
        if (bi !== -1) return 1;
        return a.name.localeCompare(b.name);
      })
      .map(dir => {
        const images = fs
          .readdirSync(path.join(wlcDir, dir.name))
          .filter(f => /\.webp$/i.test(f))
          .sort()
          .map(file => ({
            src: `${WLC_BASE}/${dir.name}/${file}`,
            alt: `World's Longest Carwash construction - ${FOLDER_LABELS[dir.name] ?? dir.name}`,
          }));
        return { folder: dir.name, label: FOLDER_LABELS[dir.name] ?? dir.name, images };
      })
      .filter(s => s.images.length > 0);
  } catch {
    return [];
  }
}

const gallerySections = loadGallerySections();
const allImages = gallerySections.flatMap(s => s.images);

type Milestone = {
  date: string;
  title: string;
  body: string;
  status: 'Complete' | 'In Progress' | 'Upcoming';
  image?: string;
  alt?: string;
};

const milestones: Milestone[] = [
  {
    date: 'Spring 2026',
    title: 'Foundations & Conveyor Pit',
    body: 'Excavation, under-slab plumbing, and forming the 300+ foot conveyor trench that anchors the tunnel.',
    status: 'Complete',
    image: `${WLC_BASE}/April-2026/7c1fca3d-3ba1-48c9-98d1-abb6f172b6c7.webp`,
    alt: 'Conveyor trench excavation and forming inside the tunnel building',
  },
  {
    date: 'Summer 2026',
    title: 'Building Enclosed & Site Paved',
    body: 'Building shell complete, interior open and lit, parking lot paved, and site signage installed.',
    status: 'Complete',
    image: `${WLC_BASE}/July-2026/20260720_095300.webp`,
    alt: 'Exterior of the completed tunnel building with fresh paving',
  },
  {
    date: 'August 2026',
    title: 'Tunnel Equipment Install',
    body: 'Conveyor, wash arches, brushes, water treatment, chemical storage, and electrical going in down the length of the tunnel.',
    status: 'In Progress',
    image: `${WLC_BASE}/Aug-2026/20260810_090742.webp`,
    alt: 'Wash equipment being installed along the conveyor inside the tunnel',
  },
  {
    date: 'After Labor Day 2026',
    title: 'Commissioning & Grand Opening',
    body: 'Equipment startup, chemical tuning, staff training, and doors open to the public (planned).',
    status: 'Upcoming',
  },
];

const buildHighlights = [
  {
    title: 'Conveyor & Wash Arches',
    body: 'Stainless frames and wash components set along the conveyor, running the full length of the tunnel.',
    image: `${WLC_BASE}/Aug-2026/20260810_090838.webp`,
    alt: 'Stainless wash arch frames along the conveyor',
  },
  {
    title: 'Friction Wash Equipment',
    body: 'Brush drive motors and mounting frames set in place ahead of brush installation and commissioning.',
    image: `${WLC_BASE}/Aug-2026/20260810_092708.webp`,
    alt: 'Friction wash brushes mounted in the tunnel',
  },
  {
    title: 'Water Treatment',
    body: 'Water softeners and treatment plumbing in the equipment room for consistent wash and rinse quality.',
    image: `${WLC_BASE}/Aug-2026/20260810_090941.webp`,
    alt: 'Water softener tanks in the equipment room',
  },
  {
    title: 'Storage Tanks',
    body: 'Large-capacity tanks staged in the equipment corridor to support high-volume operation.',
    image: `${WLC_BASE}/Aug-2026/20260810_090949.webp`,
    alt: 'Large storage tanks along the tunnel wall',
  },
  {
    title: 'Controls & Electrical',
    body: 'Panels and conduit runs feeding equipment down the length of the tunnel.',
    image: `${WLC_BASE}/Aug-2026/20260810_090908.webp`,
    alt: 'Electrical control panel with conduit runs',
  },
  {
    title: 'Down the Conveyor',
    body: 'Looking along the conveyor toward the open tunnel door, with arches framed overhead.',
    image: `${WLC_BASE}/Aug-2026/20260810_090856.webp`,
    alt: 'View down the tunnel conveyor toward the exit door',
  },
];

export default function WorldsLongestCarwashPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              name: "World's Longest Carwash",
              description:
                "A planned record-setting tunnel carwash currently under construction by Carwash Technologies - the company’s flagship design-build project in the Midwest.",
              url: 'https://www.carwashtechnologies.com/projects/worlds-longest-carwash',
              image: 'https://www.carwashtechnologies.com/imgs/projects/WLC/July-2026/20260720_095018.webp',
              creator: {
                '@type': 'LocalBusiness',
                name: 'Carwash Technologies',
                url: 'https://www.carwashtechnologies.com',
                telephone: '+1-612-408-9010',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ImageGallery',
              name: "World's Longest Carwash - Job Site Photos",
              description: 'Construction photos from the planned record-setting tunnel carwash build by Carwash Technologies.',
              url: 'https://www.carwashtechnologies.com/projects/worlds-longest-carwash',
              image: allImages.slice(0, 8).map(img => ({
                '@type': 'ImageObject',
                contentUrl: `https://www.carwashtechnologies.com${img.src}`,
                name: img.alt,
              })),
              author: {
                '@type': 'LocalBusiness',
                name: 'Carwash Technologies',
                url: 'https://www.carwashtechnologies.com',
              },
            },
          ]),
        }}
      />

      <GenericHero
        eyebrow="Flagship Project · Now Building"
        title="The World's Longest Carwash*"
        highlightedWord="Longest"
        subtitle="A Planned Record-Setting Tunnel, Under Construction"
        description="Our most ambitious build yet is taking shape right now. We're engineering a tunnel wash on a scale the industry hasn't seen, and we're sharing the first photos as it comes together."
        buttons={[
          { text: 'Get Project Updates', href: '/contact', variant: 'primary' },
          { text: 'See Build Progress', href: '#gallery', variant: 'secondary' },
        ]}
        backgroundVariant="dark"
        showPattern
        leftImage="/imgs/projects/WLC/July-2026/20260720_095018.webp"
        compact
      />

      <section className="bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <p className="text-sm sm:text-base text-amber-950 leading-relaxed">
            <span className="font-bold">Project claim disclaimer:</span> &nbsp;
            &quot;World&apos;s Longest Carwash&quot; is used here as a planned project-positioning claim based on the current design target and construction scope.
            Final completed length, operating configuration, and any comparative or record status remain subject to completion, field measurement, and opening conditions.
          </p>
        </div>
      </section>

      {/* Under-construction banner */}
      <section className="relative overflow-hidden bg-slate-900 border-y-4 border-[#f0da11]">
        <div
          className="absolute inset-x-0 top-0 h-2 opacity-90"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #f0da11 0, #f0da11 16px, #0f172a 16px, #0f172a 32px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-2 opacity-90"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #f0da11 0, #f0da11 16px, #0f172a 16px, #0f172a 32px)',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <span className="inline-flex items-center gap-2 bg-[#f0da11] text-slate-900 text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            Active Construction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Site Work Is <span className="text-[#f0da11]">Underway</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tunnel equipment is going in now at Sota Shine One-Six-Nine in Brooklyn Park, MN, with
            opening planned for just after Labor Day 2026. We&apos;ll keep adding photos through
            commissioning and grand opening.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center border border-gray-200 p-6 sm:p-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#f0da11]" />
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Project Backlink</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Sota Shine One Six Nine
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Follow the public-facing project page for this flagship build at Sota Shine One Six Nine. We&apos;ve also included the site address below for reference.
              </p>
              <p className="text-sm sm:text-base font-medium text-gray-900 mb-5">
                8201 108th Court North, Brooklyn Park, MN 55445
              </p>
              <a
                href="https://sotashine.com/sota-shine-one-six-nine/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-[#f0da11] hover:text-slate-900 transition-colors"
              >
                Visit Sota Shine Project Page
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8m9 0v9" />
                </svg>
              </a>
            </div>
            <div className="bg-slate-50 border border-gray-200 p-5 sm:p-6">
              <p className="text-xs font-semibold text-[#d0b211] uppercase tracking-[0.22em] mb-3">What To Expect</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 bg-[#f0da11]" />
                  <span>Public project branding tied to the Sota Shine One Six Nine site.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 bg-[#f0da11]" />
                  <span>Flagship express-tunnel positioning supported by active construction photos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 bg-[#f0da11]" />
                  <span>Claim language kept with an explicit disclaimer until final measurement is complete.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StatsBand
        badge="The Build"
        heading="A project on a scale of its own."
        image="/imgs/projects/WLC/July-2026/20260720_100438.webp"
        stats={[
          { value: '300+ ft', label: 'Planned Tunnel' },
          { value: '30+', label: 'Indoor Vacuum Stalls' },
          { value: `${allImages.length}`, label: 'Job Site Photos' },
          { value: 'Fall 2026', label: 'Planned Opening' },
        ]}
      />

      {/* Build timeline */}
      <section className="bg-slate-950 py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Build Timeline</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              From Dirt to <span className="text-[#f0da11]">Drive-Through</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Key milestones on the way to opening day. Dates for upcoming phases are planned and may shift.
            </p>
          </div>

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <li key={m.title} className="relative flex flex-col bg-slate-900 border border-slate-800 overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  {m.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.image} alt={m.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-slate-800"
                      style={{
                        backgroundImage:
                          'repeating-linear-gradient(45deg, rgba(240,218,17,0.08) 0, rgba(240,218,17,0.08) 12px, transparent 12px, transparent 24px)',
                      }}
                    >
                      <svg className="w-8 h-8 text-[#f0da11] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">Photos coming soon</span>
                    </div>
                  )}
                  <span
                    className={`absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 ${
                      m.status === 'Complete'
                        ? 'bg-emerald-500 text-white'
                        : m.status === 'In Progress'
                          ? 'bg-[#f0da11] text-slate-900'
                          : 'bg-slate-700 text-slate-200'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <div className="flex-1 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#f0da11] mb-1">
                    Phase {i + 1} · {m.date}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Teaser specs */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">What&apos;s Being Built</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              The Scale of{' '}
              <span className="inline-block bg-[#f0da11] text-black px-2 pb-0.5 -rotate-1">
                What&apos;s Coming
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              More specs drop at grand opening. Here&apos;s what we can share right now.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                title: 'Record-Setting Tunnel Length',
                body: 'A planned tunnel length of more than 300 feet - more wash equipment than any commercial conveyor tunnel we have seen constructed. The kind of project that redefines what a flagship wash looks like.',
              },
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'Express-Format Throughput',
                body: 'Designed from the start for high-volume, high-speed operation. Every bay, every arch, every dryer positioned to move cars at a scale nobody else has attempted.',
              },
              {
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
                title: 'Design-Built by Our Team',
                body: 'Planning, civil, equipment, installation, startup. This is what 50+ years of combined experience looks like at full scale.',
              },
            ].map(card => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 p-6 sm:p-7"
              >
                <div className="w-11 h-11 bg-slate-900 text-white flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indoor vacuum showcase */}
      <section className="bg-slate-900 py-14 sm:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text side */}
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#f0da11]" />
                <span className="text-sm font-semibold text-[#f0da11] uppercase tracking-wider">Indoor Vacuum Hall</span>
                <div className="w-8 h-px bg-[#f0da11]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Vacuum Space on a{' '}
                <span className="inline-block bg-[#f0da11] text-black px-2 pb-0.5 -rotate-1">
                  Massive Scale
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
                Minnesota winters are brutal. Rain, snow, freezing temps - nobody wants to vacuum their car in the elements. That&apos;s why this build includes a fully enclosed, 100% climate-controlled indoor vacuum hall with more than 30 vacuum stalls.
              </p>
              <p className="text-base text-slate-400 mb-8 leading-relaxed">
                The room you&apos;re looking at is enormous - high ceilings, open floor, built to accommodate serious capacity. Customers drive in, vacuum in total comfort, and leave with a clean car no matter what&apos;s happening outside.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', text: '30+ vacuum stalls in a 100% climate-controlled room' },
                  { icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z', text: 'Beats Minnesota snow, wind, and freezing temps' },
                  { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', text: 'Mat washers and compressed air at the stalls' },
                  { icon: 'M5 13l4 4L19 7', text: 'Detail carts with towels, all-purpose cleaner, and glass cleaner' },
                ].map(item => (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="mt-0.5 w-9 h-9 shrink-0 bg-[#f0da11] flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo side */}
            <div className="relative">
              <div className="absolute -inset-2 bg-[#f0da11] opacity-10 rounded-sm" aria-hidden="true" />
              <div className="relative border-2 border-[#f0da11]/30 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/imgs/projects/WLC/Aug-2026/20260810_090718.webp"
                  alt="Massive indoor vacuum hall under construction - World's Longest Carwash"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-slate-900/90 to-transparent px-5 py-4">
                  <p className="text-white text-sm font-semibold">Indoor Vacuum Hall - August 2026</p>
                  <p className="text-slate-300 text-xs mt-0.5">World&apos;s Longest Carwash · Under Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the tunnel / equipment showcase */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Inside The Build</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              What Goes Into a 300+ Foot Tunnel
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              A look at the systems coming together behind the walls - from the conveyor to the equipment room.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {buildHighlights.map(item => (
              <figure key={item.title} className="group border border-gray-200 bg-white overflow-hidden hover:border-[#f0da11] hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-4/3 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Full photo gallery */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div id="gallery" className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">From The Job Site</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Construction Progress
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              {allImages.length} photos across {gallerySections.length} phases. Click any photo to view full size.
            </p>
          </div>

          {gallerySections.map((section, idx) => (
            <div key={section.folder} className={idx > 0 ? 'mt-14 pt-14 border-t border-gray-200' : ''}>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-[#f0da11]" aria-hidden="true" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{section.label}</h3>
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  {section.images.length} photo{section.images.length !== 1 ? 's' : ''}
                </span>
              </div>
              <WLCGallery images={section.images} />
            </div>
          ))}

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-dashed border-gray-300 bg-white p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d0b211] mb-1">Next Update</p>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Commissioning &amp; Grand Opening Photos</h3>
              <p className="text-sm text-gray-600 mt-1">
                We&apos;ll add new photos here as equipment is commissioned and the wash opens to the public.
              </p>
            </div>
            <a
              href="https://sotashine.com/sota-shine-one-six-nine/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-[#f0da11] hover:text-slate-900 transition-colors"
            >
              Opening Info at Sota Shine
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8m9 0v9" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <PageFAQ
        heading="World's Longest Carwash: Common Questions"
        items={[
          {
            question: "Where is the World's Longest Carwash being built?",
            answer: 'At Sota Shine One-Six-Nine, 8201 108th Court North in Brooklyn Park, MN - just off Highway 169 and 109th Avenue North, serving Brooklyn Park, Champlin, Osseo, and Maple Grove.',
          },
          {
            question: 'When does it open?',
            answer: "Sota Shine has announced an opening planned for just after Labor Day 2026. Opening timing is set by the site owner and may change - check the Sota Shine project page for the latest.",
          },
          {
            question: 'How long is the tunnel?',
            answer: 'The tunnel is planned at more than 300 feet. Final completed length and any record status remain subject to completion and field measurement.',
          },
          {
            question: 'What is the indoor vacuum hall?',
            answer: 'A fully enclosed, climate-controlled room with more than 30 vacuum stalls, plus mat washers, compressed air, and detail carts with towels, all-purpose cleaner, and glass cleaner - so customers can clean their interiors comfortably year-round.',
          },
          {
            question: 'Can Carwash Technologies build a project like this for me?',
            answer: 'Yes. We design, build, install, and service express tunnels, vacuum systems, and complete wash sites across Minnesota, North Dakota, South Dakota, and Wisconsin. Reach out and we will talk through your site, volume, and goals.',
          },
        ]}
      />

      <CallToActionNew
        title="Want to Follow This Build?"
        description="Reach out and we'll keep you in the loop on this planned record-setting flagship build and talk through what a project at that scale could look like for your operation."
        buttons={[
          { text: 'Get Project Updates', href: '/contact', variant: 'primary' },
          { text: 'See Applications', href: '/who-we-serve', variant: 'secondary' },
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


