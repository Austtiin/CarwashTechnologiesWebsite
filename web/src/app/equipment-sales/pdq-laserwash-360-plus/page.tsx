import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import CallToActionNew from '../../components/ui/CallToActionNew';

export const metadata: Metadata = {
  title: 'PDQ LaserWash 360 Plus | Touchless In-Bay Automatic | Carwash Technologies MN',
  description:
    'PDQ LaserWash 360 Plus touchless in-bay automatic car wash system. Available from Carwash Technologies - authorized PDQ dealer in Minnesota. Smart 360 technology, open bay design, bay requirements from 28\'4" L × 13\'6" W × 10\'6" H. Ideal for gas stations, c-stores, and car dealerships.',
  keywords:
    'PDQ LaserWash 360 Plus, PDQ dealer Minnesota, touchless in-bay automatic Minnesota, PDQ car wash MN, LaserWash 360 Plus dealer, in-bay automatic car wash Minnesota, touchless car wash system MN, car wash equipment dealer Minnesota, PDQ distributor MN, automated car wash machine Minnesota, gas station car wash system, car dealership car wash installation, in-bay touchless system',
  alternates: { canonical: '/equipment-sales/pdq-laserwash-360-plus' },
  openGraph: {
    title: 'PDQ LaserWash 360 Plus | Touchless In-Bay Automatic | Carwash Technologies',
    description:
      'Authorized PDQ dealer in Minnesota. LaserWash 360 Plus - the industry-leading touchless in-bay automatic for gas stations, c-stores, and car dealerships.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/equipment-sales/pdq-laserwash-360-plus',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'PDQ LaserWash 360 Plus',
  description:
    "PDQ's touchless in-bay automatic car wash system with Smart 360 Technology. Available from Carwash Technologies, authorized PDQ dealer in Minnesota.",
  brand: { '@type': 'Brand', name: 'PDQ Manufacturing / OPW Vehicle Wash Solutions' },
  offers: {
    '@type': 'Offer',
    seller: {
      '@type': 'LocalBusiness',
      name: 'Carwash Technologies',
      url: 'https://www.carwashtechnologies.com',
      telephone: '+1-612-408-9010',
    },
    availability: 'https://schema.org/InStock',
    areaServed: ['Minnesota', 'North Dakota', 'South Dakota', 'Wisconsin'],
  },
};

const features = [
  {
    title: 'Smart 360 Cleaning System',
    body: 'Rounded arch corners, smart chemical timing, and tilting arch functions deliver better vehicle chemical coverage. Customize services and speeds in infinite combinations - store seasonal packages and favorites.',
  },
  {
    title: 'Smart 360 Arch Control',
    body: 'The arch rotates 360° while simultaneously moving around the vehicle. Three-axis motion provides rounded corner profiling so nozzles stay focused on the vehicle. Corner time reduced from 4 seconds to 1.5 seconds - every second in the bay is productive.',
  },
  {
    title: 'Smart 360 Drying (FlashDry)',
    body: 'FlashDry rinses and dries in a single 10-second pass - removing over 80% of water with no added cycle time. Options include integrated dryer, stand-alone MaxAir dryer, or drive-through exit drying.',
  },
  {
    title: 'Smart 360 Networking',
    body: 'Web browser interface - change wash packages, view performance reports, and monitor machine functions from any device. Secure remote access through the internet with email alerts and real-time monitoring.',
  },
  {
    title: 'LaserGlow Arch',
    body: 'Illuminated wash arm that helps customers load and unload faster, and attracts more customers from the street. Highly visible in daytime and night - a proven revenue driver.',
  },
  {
    title: 'BayGlow Illumination System',
    body: 'Multiple color combinations and patterns visible from the car in the bay, at the gas pump, and from the street. Seamlessly controlled by the LaserWash 360 Plus controller.',
  },
];

const standardComponents = [
  'Corrosion-Resistant Bridge & Trolley',
  'Smart 360 Technology (Networking, Dwell, Cleaning)',
  'Automatic Obstacle Guidance',
  'SST Wall Mounts',
  'Aircraft-Grade Anodized Aluminum Bridge & Rails',
  'Stainless Steel Pump Station',
  'General Pump (standard) or CAT 3535 (optional)',
  'Virtual Treadle (no floor tracks)',
  'Smart Arch Control & Smart Drying System',
  'Electrical Control Panels',
  'In-Bay Sign',
  'Ultimate Cover Package',
  'Advanced Arch Package',
  'Electric High Pressure Gatling Guns',
  'High Pressure Side Combo Blasters',
  'Fully Loaded E-Chain & Bulkhead Manifold',
];

const optionalComponents = [
  'CAT 3535 Pump',
  'Integrated Dryer',
  'MaxAir Stand-Alone Dryer',
  'SwingAir Synchronized Motion Drying',
  'LaserGlow Bridge Illumination',
  'BayGlow Bay Illumination',
  'High Pressure Undercarriage',
  '3× Color Foam',
  'OverGlow Hi-Gloss Application',
  'Spot Free Rinse',
  'Water Reclaim System',
  'Wash Activation Entry Terminals',
  'LED Entrance & Service Signs',
  'Dedicated Front Bug Prep Manifold',
  'Dedicated Super Sealant Manifold',
  'Rust Inhibitor',
  'Wheel Cleaner',
  'Water Heater',
];

export default function PDQLaserWash360PlusPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #f0da11 0, #f0da11 1px, transparent 0, transparent 50%)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#f0da11]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#f0da11]">
                  PDQ · OPW Vehicle Wash Solutions
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 leading-tight">
                LaserWash® <span className="text-[#f0da11]">360 Plus</span>
              </h1>
              <p className="text-lg text-slate-300 mb-2 font-medium">
                Touchless In-Bay Automatic Car Wash System
              </p>
              <p className="text-sm text-slate-400 mb-6">
                Available from Carwash Technologies - Authorized PDQ Dealer, MN · ND · SD · WI
              </p>
              <p className="text-base text-slate-300 leading-relaxed mb-8">
                With more than 10,000 LaserWashes shipped worldwide, the PDQ LaserWash 360 Plus is the
                industry standard for touchless in-bay automatic washes. Ideal for gas stations,
                c-stores, and car dealerships - an open bay, no floor tracks, and Smart 360 Technology
                that cleans every vehicle thoroughly and consistently.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#f0da11] text-slate-900 font-bold text-sm px-6 py-3 hover:bg-[#d0b211] transition-colors"
                >
                  Request a Quote
                </Link>
                <a
                  href="/PDFs/Equipment/pdq-laserwash-360-plus-touchless-automatic-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-slate-600 text-white font-semibold text-sm px-6 py-3 hover:border-[#f0da11] hover:text-[#f0da11] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure (PDF)
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                PDQ LaserWash 360 Plus is a product of OPW Vehicle Wash Solutions. Carwash Technologies is an approved installation contractor and preferred installer for PDQ equipment - not the manufacturer.{' '}
                <a href="https://www.opwvws.com/vehicle-wash-solutions/pdq-laserwash-360-plus" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#f0da11] transition-colors">View on OPW VWS website</a>
              </p>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-112 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/imgs/PDQ.webp"
                alt="PDQ LaserWash 360 Plus touchless in-bay automatic car wash system"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick-glance metrics */}
      <section className="bg-[#f0da11]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            {[
              { label: 'Wash Type', value: 'Touchless' },
              { label: 'Min Bay Length', value: "28'4\"" },
              { label: 'Min Bay Width', value: "13'6\"" },
              { label: 'Min Bay Height', value: "10'6\"" },
            ].map((m) => (
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
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Is This Right for Me?</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              The LaserWash 360 Plus is a strong fit for:
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Gas Stations & C-Stores', body: 'The open bay design and compact footprint fit tight lots. No floor tracks - your bay stays clean and customer-friendly.' },
              { title: 'Car Dealerships', body: 'Install a touchless wash in your service lane or detail bay. Washes customer vehicles and inventory without risk of contact damage.' },
              { title: 'Upgrading from Laser 4000', body: 'Reuse your existing wall mounts and undercarriage. Typically shut down Monday, washing again by the weekend.' },
              { title: 'Single-Bay Operators', body: 'One machine, no conveyor needed. Smart 360 networking lets you monitor and manage from any device, anywhere.' },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-gray-200 bg-slate-50 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bay Requirements */}
      <section className="relative bg-slate-950 py-14 sm:py-16 overflow-hidden">
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Equipment Layout</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Physical Bay Requirements</h2>
            <p className="text-base text-slate-400">Confirm dimensions with Carwash Technologies for your specific site</p>
          </div>

          {/* SVG Technical Diagram */}
          <div className="rounded-xl overflow-hidden mb-8 border border-slate-700">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 border-b border-slate-700">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <span className="ml-2 text-xs text-slate-500 font-mono tracking-wide">PDQ LaserWash® 360 Plus — Dimensional Reference</span>
            </div>
            <div className="bg-[#081120] p-4 sm:p-6 overflow-x-auto">
              <svg viewBox="0 0 800 230" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[480px]" role="img" aria-label="PDQ LaserWash 360 Plus dimensional diagram — side elevation and front section views">
                <defs>
                  <marker id="pdq-a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <polygon points="0,0 6,3 0,6" fill="#64748b" />
                  </marker>
                  <marker id="pdq-ar" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto-start-reverse">
                    <polygon points="0,0 6,3 0,6" fill="#64748b" />
                  </marker>
                  <pattern id="pdq-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0H0V40" fill="none" stroke="#0d2035" strokeWidth="0.6" />
                  </pattern>
                </defs>
                <rect width="800" height="230" fill="url(#pdq-grid)" />

                {/* Panel divider */}
                <line x1="508" y1="10" x2="508" y2="220" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5 4" />

                {/* Panel labels */}
                <text x="246" y="24" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="monospace" letterSpacing="2">SIDE ELEVATION</text>
                <text x="648" y="24" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="monospace" letterSpacing="2">FRONT SECTION</text>

                {/* ── SIDE ELEVATION ── */}
                {/* Ground line */}
                <line x1="30" y1="182" x2="480" y2="182" stroke="#1e3a5f" strokeWidth="1.5" strokeDasharray="8 4" />
                {/* Wall mount rail (upper horizontal beam) */}
                <rect x="58" y="68" width="388" height="9" rx="1" fill="#102040" stroke="#3b82f6" strokeWidth="1.5" />
                {/* Mounting brackets on wall */}
                {[95, 158, 221, 284, 347, 410].map((x) => (
                  <rect key={x} x={x - 5} y={56} width={10} height={12} rx="1" fill="#0a1f3d" stroke="#2563eb" strokeWidth="1" />
                ))}
                {/* Bridge body (trolley) */}
                <rect x="198" y="77" width="80" height="30" rx="2" fill="#0a1f3d" stroke="#60a5fa" strokeWidth="1.5" />
                <rect x="208" y="83" width="60" height="16" rx="1" fill="#081120" stroke="#3b82f6" strokeWidth="0.6" />
                {/* Motor/drive unit left end */}
                <rect x="58" y="62" width="22" height="30" rx="2" fill="#0a1f3d" stroke="#3b82f6" strokeWidth="1" />
                {/* Vertical legs of bridge */}
                <line x1="215" y1="107" x2="215" y2="182" stroke="#3b82f6" strokeWidth="2" />
                <line x1="261" y1="107" x2="261" y2="182" stroke="#3b82f6" strokeWidth="2" />
                {/* Cross foot */}
                <line x1="208" y1="182" x2="268" y2="182" stroke="#3b82f6" strokeWidth="2.5" />
                {/* HP gun arms */}
                <line x1="215" y1="128" x2="193" y2="174" stroke="#60a5fa" strokeWidth="1" />
                <circle cx="191" cy="176" r="4" fill="none" stroke="#60a5fa" strokeWidth="1" />
                <line x1="261" y1="128" x2="283" y2="174" stroke="#60a5fa" strokeWidth="1" />
                <circle cx="285" cy="176" r="4" fill="none" stroke="#60a5fa" strokeWidth="1" />

                {/* Dim: Length */}
                <line x1="58" y1="202" x2="446" y2="202" stroke="#475569" strokeWidth="1" markerStart="url(#pdq-ar)" markerEnd="url(#pdq-a)" />
                <rect x="180" y="194" width="116" height="16" rx="2" fill="#081120" />
                <text x="238" y="206" textAnchor="middle" fill="#f0da11" fontSize="10" fontFamily="monospace" fontWeight="bold">28&apos;4&quot; [8.64m]</text>
                <text x="252" y="222" textAnchor="middle" fill="#334155" fontSize="8" fontFamily="monospace">Wall Mount Length</text>

                {/* Dim: Rail height */}
                <line x1="36" y1="70" x2="36" y2="180" stroke="#475569" strokeWidth="1" markerStart="url(#pdq-ar)" markerEnd="url(#pdq-a)" />
                <rect x="22" y="117" width="38" height="16" rx="2" fill="#081120" />
                <text x="41" y="129" textAnchor="middle" fill="#f0da11" fontSize="10" fontFamily="monospace" fontWeight="bold">10&apos;6&quot;</text>

                {/* ── FRONT SECTION ── */}
                {/* Ground */}
                <line x1="528" y1="182" x2="780" y2="182" stroke="#1e3a5f" strokeWidth="1.5" strokeDasharray="8 4" />
                {/* Arch outer */}
                <path d="M570 182 L570 118 Q570 60 650 56 Q730 60 730 118 L730 182" fill="#0a1f3d" stroke="#3b82f6" strokeWidth="2" />
                {/* Arch inner (nozzle surface) */}
                <path d="M581 182 L581 120 Q581 74 650 71 Q719 74 719 120 L719 182" fill="#081120" stroke="#60a5fa" strokeWidth="0.8" strokeDasharray="4 3" />
                {/* Legs base pads */}
                <rect x="562" y="178" width="16" height="8" rx="1" fill="#0a1f3d" stroke="#2563eb" strokeWidth="1" />
                <rect x="722" y="178" width="16" height="8" rx="1" fill="#0a1f3d" stroke="#2563eb" strokeWidth="1" />
                {/* Label */}
                <text x="650" y="112" textAnchor="middle" fill="#2563eb" fontSize="7" fontFamily="monospace" letterSpacing="1.5">LASERWASH</text>
                <text x="650" y="124" textAnchor="middle" fill="#1e40af" fontSize="6" fontFamily="monospace" letterSpacing="1">360 PLUS</text>

                {/* Dim: Width */}
                <line x1="570" y1="42" x2="730" y2="42" stroke="#475569" strokeWidth="1" markerStart="url(#pdq-ar)" markerEnd="url(#pdq-a)" />
                <rect x="591" y="34" width="120" height="16" rx="2" fill="#081120" />
                <text x="651" y="46" textAnchor="middle" fill="#f0da11" fontSize="10" fontFamily="monospace" fontWeight="bold">13&apos;6&quot; [4.11-5.49m]</text>

                {/* Dim: Arch height (84") */}
                <line x1="748" y1="114" x2="748" y2="180" stroke="#475569" strokeWidth="1" markerStart="url(#pdq-ar)" markerEnd="url(#pdq-a)" />
                <rect x="755" y="140" width="36" height="16" rx="2" fill="#081120" />
                <text x="773" y="152" textAnchor="middle" fill="#f0da11" fontSize="10" fontFamily="monospace" fontWeight="bold">84&quot;</text>
                <text x="773" y="167" textAnchor="middle" fill="#334155" fontSize="7" fontFamily="monospace">[2.13m]</text>
              </svg>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Wall-Mounted Configuration</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-700">
                  {[
                    ['Minimum Bay Length', "28'4\""],
                    ['Minimum Bay Width', "13'6\""],
                    ['Minimum Bay Height', "10'6\""],
                  ].map(([label, val]) => (
                    <tr key={label} className="py-2">
                      <td className="text-slate-400 py-2">{label}</td>
                      <td className="font-bold text-white text-right py-2">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-slate-600 mt-3">*Does not include off-board dryers.</p>
            </div>
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Floor-Mounted Configuration</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-700">
                  {[
                    ['Minimum Bay Length', "29'7\""],
                    ['Minimum Bay Width', "13'6\""],
                    ['Minimum Bay Height', "10'8\""],
                  ].map(([label, val]) => (
                    <tr key={label} className="py-2">
                      <td className="text-slate-400 py-2">{label}</td>
                      <td className="font-bold text-white text-right py-2">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-slate-600 mt-3">*Does not include off-board dryers.</p>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-5">
            Recommended bay: 15&apos; wide × 11&apos; high × 28&apos;10&quot; long. Contact us for minimum dimensions for your site.
          </p>
        </div>
      </section>

      {/* Features accordion */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Technology</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Smart 360 Technology & Key Features</h2>
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

      {/* Standard + Optional components */}
      <section className="bg-slate-50 py-14 sm:py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Equipment List</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What&apos;s Included</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-7">
              <h3 className="font-bold text-gray-900 mb-5">
                Standard Base Unit
              </h3>
              <ul className="space-y-2">
                {standardComponents.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#d0b211] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-7">
              <h3 className="font-bold text-gray-900 mb-5">
                Optional Add-Ons
              </h3>
              <ul className="space-y-2">
                {optionalComponents.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI callout */}
      <section className="bg-slate-950 py-12 sm:py-14 border-t-4 border-[#f0da11]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Return on Investment You Can Count On
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Typical first-year impacts show car wash volume increases from faster speeds and shorter
            lines. Revenue increases through new service tiers. Costs decrease from chemical, water,
            and electricity savings - plus lower maintenance and attendant labor.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 text-left">
            {[
              { label: 'Revenue', body: 'New service tiers: color foam, sealant, ceramic, OverGlow. Package differentiation drives premium upsells.' },
              { label: 'Volume', body: 'Faster arch speeds and quicker lines. LaserGlow Arch attracts customers from the street and the pump.' },
              { label: 'Cost', body: 'Smart 360 reduces water, chemical, and electricity usage. Non-corrosive structure lowers long-term maintenance.' },
            ].map((item) => (
              <div key={item.label} className="bg-slate-900 rounded-xl p-5 border border-slate-700">
                <div className="font-bold text-[#f0da11] mb-1">{item.label}</div>
                <p className="text-sm text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionNew
        title="Get a Quote on the PDQ LaserWash 360 Plus"
        description="Carwash Technologies is your authorized PDQ dealer serving MN, ND, SD, and WI. Contact us for equipment pricing, site assessment, installation, and ongoing service."
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
