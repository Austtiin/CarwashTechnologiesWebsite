import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import CallToActionNew from '../../components/ui/CallToActionNew';

export const metadata: Metadata = {
  title: 'Belanger insta-KLEEN™ | Drive-Thru Fleet Car Wash System | Carwash Technologies MN',
  description:
    'Belanger insta-KLEEN™ fleet wash system - washes a car a minute. Authorized dealer in Minnesota. Ideal for car dealerships, rental agencies, and fleet operators. Bay from 35\' L × 12\' W × 14\' H. Modular, compact, low water usage (36 gal/cycle). Contact Carwash Technologies for installation.',
  keywords:
    'Belanger insta-KLEEN, Belanger Insta-Kleen dealer Minnesota, fleet car wash system Minnesota, car dealership car wash installation, drive-thru fleet wash MN, fleet wash system Minnesota, car wash for car dealership, Belanger dealer MN, fleet wash system dealer, car dealership wash system, automated fleet wash Minnesota, heavy duty fleet wash MN',
  alternates: { canonical: '/equipment-sales/belanger-insta-kleen' },
  openGraph: {
    title: 'Belanger insta-KLEEN™ | Drive-Thru Fleet Car Wash System | Carwash Technologies',
    description:
      'Authorized Belanger dealer in Minnesota. insta-KLEEN - a car a minute, 36 gallons per cycle, modular design for car dealerships and fleet operators.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/equipment-sales/belanger-insta-kleen',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Belanger insta-KLEEN Fleet Wash System',
  description:
    "Belanger's drive-thru fleet car wash system capable of washing a vehicle per minute. Available from Carwash Technologies, authorized Belanger dealer in Minnesota.",
  brand: { '@type': 'Brand', name: 'Belanger / OPW Vehicle Wash Solutions' },
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
    title: 'A Car a Minute - Real Drive-Thru Throughput',
    body: 'The insta-KLEEN is designed to wash one vehicle per minute. No waiting, no backup - perfect for high-volume operations like dealerships, rental agencies, and municipal fleets that need to turn vehicles quickly.',
  },
  {
    title: 'Modular Component System',
    body: 'The insta-KLEEN uses a modular building-block design. Start with the core system and add optional modules as your business grows - color foam, undercarriage wash, tire shine, high-pressure side wash, and more. No need to rebuild the bay.',
  },
  {
    title: 'Incredible Water Efficiency',
    body: 'Only 36 gallons total water per cycle - just 18 gallons of fresh water. With a reclaim system, fresh water drops to 16 gallons. Compared to 100–150 gal/cycle for older friction tunnels, the savings are significant over time.',
  },
  {
    title: 'Low Power - As Little as 4HP',
    body: 'Core insta-KLEEN operation requires as little as 4HP. Low energy consumption means lower operating costs, and the modular design lets you add power only when you add capabilities.',
  },
  {
    title: 'Quad Wave Mitter Cloth System',
    body: 'A four-wave mitter with lightly modified chemistry strips dirt from the vehicle surface with minimal contact pressure. Gentle enough for painted surfaces and vehicle graphics while still removing tough road grime and salt.',
  },
  {
    title: 'Gyro Wrap 360° Side Wash',
    body: 'The Gyro Wrap wraps the vehicle in multiple directions to reach all vertical and contoured surfaces. Combined with the Quad Wave Mitter, the system achieves consistent coverage across sedans, SUVs, and trucks.',
  },
  {
    title: 'Chameleon Presoak Arch',
    body: 'Multi-color presoak arch applies chemical coverage and creates a visual brand experience for the driver. The arch prepares the vehicle surface for the mitter and final rinse - cleaner results with less chemistry.',
  },
  {
    title: 'AirCannon™ High-Velocity Dryer',
    body: 'A 30HP AirCannon delivers high-velocity drying at the exit. Water is blown off the vehicle before it reaches the exit mat - customers drive away with a dry, finished vehicle.',
  },
];

const standardComponents = [
  'Quad Wave Mitter (4-wave cloth wash)',
  'Gyro Wrap 360° Side Wash System',
  'Chameleon Presoak Arch (multi-color)',
  'AirCannon 30HP High-Velocity Exit Dryer',
  'High-Pressure Top Rinse Bar',
  'Low-Flow Recirculated Rinse',
  'Chemical Application System',
  'Conveyor Drive System',
  'Stainless Steel Pump Station',
  'Controls & Variable Frequency Drives',
  'Entrance & Exit Guide Rails',
  'Safety Light Curtain',
  'Electrical Control Panels',
];

const optionalComponents = [
  'High-Pressure Undercarriage Wash',
  'High-Pressure Side Blasters',
  'Spot-Free Rinse Module',
  'Color Foam Application System',
  'Triple Color Foam',
  'Tire Shine Applicator',
  'Wheel Cleaner Module',
  'Bug Prep Module',
  'Rain-X Application System',
  'Ceramic/Sealant Application Module',
  'Water Reclaim System',
  'LED Bay & Entrance Lighting',
  'Self-Service Entrance Pay Terminal',
  'Conveyor Extension Sections',
];

export default function BelangerInstaKleenPage() {
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
                  Belanger · OPW Vehicle Wash Solutions
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 leading-tight">
                insta-KLEEN<span className="text-[#f0da11]">™</span>
              </h1>
              <p className="text-lg text-slate-300 mb-2 font-medium">
                Drive-Thru Fleet Car Wash System
              </p>
              <p className="text-sm text-slate-400 mb-6">
                Available from Carwash Technologies - Authorized Belanger Dealer, MN · ND · SD · WI
              </p>
              <p className="text-base text-slate-300 leading-relaxed mb-8">
                The Belanger insta-KLEEN was purpose-built for car dealerships, rental agencies, and
                fleet operators who need to move volume - one vehicle per minute. A compact footprint,
                modular components, and as little as 36 gallons per cycle make it one of the most
                efficient fleet wash systems available.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#f0da11] text-slate-900 font-bold text-sm px-6 py-3 hover:bg-[#d0b211] transition-colors"
                >
                  Request a Quote
                </Link>
                <a
                  href="/PDFs/Equipment/belanger-insta-kleen-fleet-wash-system-brochure%20(2).pdf"
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
                Belanger insta-KLEEN is a product of OPW Vehicle Wash Solutions. Carwash Technologies is an approved installation contractor and preferred installer for Belanger equipment - not the manufacturer.{' '}
                <a href="https://www.opwvws.com/vehicle-wash-solutions/belanger-insta-kleen" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#f0da11] transition-colors">View on OPW VWS website</a>
              </p>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-112 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/imgs/BelangerTunnel.webp"
                alt="Belanger insta-KLEEN drive-thru fleet car wash system"
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
              { label: 'Throughput', value: '1 / min' },
              { label: 'Water/Cycle', value: '36 gal' },
              { label: 'Min Power', value: '4 HP' },
              { label: 'Bay Length', value: "35'" },
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
              The insta-KLEEN is purpose-built for:
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Car Dealerships', body: 'Clean every vehicle on the lot daily. A car a minute means your service lane keeps moving - inventory stays spotless for customers.' },
              { title: 'Rental Agencies', body: 'High-volume, no-wait cleaning for returned vehicles. Get cars returned, cleaned, and back on the lot the same day.' },
              { title: 'Government & Municipal Fleets', body: 'Structured cleaning schedules, low water usage, and a compact footprint make the insta-KLEEN a natural fit for city and county fleet operations.' },
              { title: 'Operators Upgrading to a Tunnel', body: "Start compact and grow. The insta-KLEEN's modular system lets you add services as your volume grows - no need to rebuild." },
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
            <p className="text-base text-slate-400">Drive-thru design - confirm site dimensions with Carwash Technologies</p>
          </div>

          {/* SVG Component Layout Diagram */}
          <div className="rounded-xl overflow-hidden mb-8 border border-slate-700">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 border-b border-slate-700">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <span className="ml-2 text-xs text-slate-500 font-mono tracking-wide">Belanger insta-KLEEN™ — System Layout Reference</span>
            </div>
            <div className="bg-[#081120] p-4 sm:p-6 overflow-x-auto">
              <svg viewBox="0 0 860 240" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[560px]" role="img" aria-label="Belanger insta-KLEEN drive-through system layout diagram showing component sequence and dimensions">
                <defs>
                  <marker id="bel-a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <polygon points="0,0 6,3 0,6" fill="#64748b" />
                  </marker>
                  <marker id="bel-ar" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto-start-reverse">
                    <polygon points="0,0 6,3 0,6" fill="#64748b" />
                  </marker>
                  <pattern id="bel-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0H0V40" fill="none" stroke="#0d2035" strokeWidth="0.6" />
                  </pattern>
                </defs>
                <rect width="860" height="240" fill="url(#bel-grid)" />

                {/* Ground / conveyor line */}
                <line x1="40" y1="178" x2="820" y2="178" stroke="#0f2744" strokeWidth="3" />
                {/* Conveyor track (orange rail) */}
                <line x1="40" y1="175" x2="820" y2="175" stroke="#c2410c" strokeWidth="2.5" strokeDasharray="12 4" />

                {/* ── ENTRY GUIDE ── */}
                <rect x="40" y="128" width="16" height="50" rx="2" fill="#0a1f3d" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="48" y="198" textAnchor="middle" fill="#334155" fontSize="7" fontFamily="monospace">ENTRY</text>

                {/* ── PRE-WET ARCH 1 ── */}
                <path d="M92 178 L92 120 Q92 90 112 88 Q132 90 132 120 L132 178" fill="#0a1f3d" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="112" y="105" textAnchor="middle" fill="#1e40af" fontSize="7" fontFamily="monospace">PRE</text>
                <text x="112" y="115" textAnchor="middle" fill="#1e40af" fontSize="6" fontFamily="monospace">WET</text>
                {/* nozzle dots */}
                {[93, 99, 105, 111, 117, 123, 129, 131].map((x, i) => (
                  <circle key={i} cx={x} cy={i < 4 ? 178 - (i * 6) : 130 + ((i - 4) * 8)} r="2" fill="#60a5fa" />
                ))}

                {/* ── BRUSH ARCH 1 ── */}
                <path d="M175 178 L175 105 Q175 68 210 65 Q245 68 245 105 L245 178" fill="#1a0505" stroke="#dc2626" strokeWidth="2" />
                {/* brush bristles - left side */}
                {[115, 125, 135, 145, 155, 165].map((y) => (
                  <line key={y} x1="175" y1={y} x2="163" y2={y + 4} stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                ))}
                {/* brush bristles - right side */}
                {[115, 125, 135, 145, 155, 165].map((y) => (
                  <line key={y} x1="245" y1={y} x2="257" y2={y + 4} stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                ))}
                {/* top brush */}
                <ellipse cx="210" cy="82" rx="26" ry="10" fill="#1a0505" stroke="#dc2626" strokeWidth="1.5" />
                {[185, 195, 205, 215, 225, 235].map((x) => (
                  <line key={x} x1={x} y1="92" x2={x} y2="108" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                ))}
                <text x="210" y="73" textAnchor="middle" fill="#7f1d1d" fontSize="7" fontFamily="monospace">BRUSHES</text>

                {/* ── RINSE ARCH ── */}
                <path d="M295 178 L295 125 Q295 94 312 92 Q329 94 329 125 L329 178" fill="#0a1f3d" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="312" y="108" textAnchor="middle" fill="#1e40af" fontSize="7" fontFamily="monospace">RINSE</text>

                {/* ── BRUSH ARCH 2 ── */}
                <path d="M375 178 L375 105 Q375 68 410 65 Q445 68 445 105 L445 178" fill="#1a0505" stroke="#dc2626" strokeWidth="2" />
                {[115, 125, 135, 145, 155, 165].map((y) => (
                  <line key={y} x1="375" y1={y} x2="363" y2={y + 4} stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                ))}
                {[115, 125, 135, 145, 155, 165].map((y) => (
                  <line key={y} x1="445" y1={y} x2="457" y2={y + 4} stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                ))}
                <ellipse cx="410" cy="82" rx="26" ry="10" fill="#1a0505" stroke="#dc2626" strokeWidth="1.5" />
                {[385, 395, 405, 415, 425, 435].map((x) => (
                  <line key={x} x1={x} y1="92" x2={x} y2="108" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                ))}

                {/* ── SPOT-FREE RINSE ── */}
                <path d="M498 178 L498 128 Q498 98 514 96 Q530 98 530 128 L530 178" fill="#0a1f3d" stroke="#06b6d4" strokeWidth="1.5" />
                <text x="514" y="112" textAnchor="middle" fill="#0e7490" fontSize="7" fontFamily="monospace">SPOT</text>
                <text x="514" y="122" textAnchor="middle" fill="#0e7490" fontSize="6" fontFamily="monospace">FREE</text>

                {/* ── BLOWER 1 ── */}
                <rect x="572" y="90" width="40" height="88" rx="4" fill="#0a1f3d" stroke="#3b82f6" strokeWidth="1.5" />
                <ellipse cx="592" cy="100" rx="14" ry="14" fill="#081120" stroke="#dc2626" strokeWidth="2" />
                {[0, 60, 120, 180, 240, 300].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  return <line key={deg} x1={592} y1={100} x2={592 + 11 * Math.cos(rad)} y2={100 + 11 * Math.sin(rad)} stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />;
                })}
                <text x="592" y="155" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="monospace">DRYER</text>
                <text x="592" y="165" textAnchor="middle" fill="#1e3a5f" fontSize="6" fontFamily="monospace">① </text>

                {/* ── BLOWER 2 ── */}
                <rect x="650" y="90" width="40" height="88" rx="4" fill="#0a1f3d" stroke="#3b82f6" strokeWidth="1.5" />
                <ellipse cx="670" cy="100" rx="14" ry="14" fill="#081120" stroke="#dc2626" strokeWidth="2" />
                {[0, 60, 120, 180, 240, 300].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  return <line key={deg} x1={670} y1={100} x2={670 + 11 * Math.cos(rad)} y2={100 + 11 * Math.sin(rad)} stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />;
                })}
                <text x="670" y="155" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="monospace">DRYER</text>
                <text x="670" y="165" textAnchor="middle" fill="#1e3a5f" fontSize="6" fontFamily="monospace">② </text>

                {/* ── EXIT ── */}
                <rect x="804" y="128" width="16" height="50" rx="2" fill="#0a1f3d" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="812" y="198" textAnchor="middle" fill="#334155" fontSize="7" fontFamily="monospace">EXIT</text>

                {/* ── Flow arrows ── */}
                {[60, 150, 270, 365, 480, 550].map((x) => (
                  <polygon key={x} points={`${x},172 ${x + 10},178 ${x},184`} fill="#1e3a5f" />
                ))}

                {/* ── Dim: Length ── */}
                <line x1="40" y1="210" x2="820" y2="210" stroke="#475569" strokeWidth="1" markerStart="url(#bel-ar)" markerEnd="url(#bel-a)" />
                <rect x="355" y="202" width="152" height="16" rx="2" fill="#081120" />
                <text x="431" y="214" textAnchor="middle" fill="#f0da11" fontSize="10" fontFamily="monospace" fontWeight="bold">Standard: 35&apos; · Min: 25&apos;</text>
                <text x="431" y="230" textAnchor="middle" fill="#334155" fontSize="8" fontFamily="monospace">Drive-Thru Bay Length</text>

                {/* ── Dim: Width (right side, vertical) ── */}
                <line x1="840" y1="128" x2="840" y2="178" stroke="#475569" strokeWidth="1" markerStart="url(#bel-ar)" markerEnd="url(#bel-a)" />
                <rect x="828" y="145" width="28" height="16" rx="2" fill="#081120" />
                <text x="842" y="157" textAnchor="middle" fill="#f0da11" fontSize="10" fontFamily="monospace" fontWeight="bold">12&apos;</text>
              </svg>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Standard Configuration</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-700">
                  {[
                    ['Bay Length', "35'"],
                    ['Bay Width', "12'"],
                    ['Bay Height', "14'"],
                  ].map(([label, val]) => (
                    <tr key={label} className="py-2">
                      <td className="text-slate-400 py-2">{label}</td>
                      <td className="font-bold text-white text-right py-2">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Minimum Configuration</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-700">
                  {[
                    ['Bay Length', "25'"],
                    ['Bay Width', "12'"],
                    ['Bay Height', "14'"],
                  ].map(([label, val]) => (
                    <tr key={label} className="py-2">
                      <td className="text-slate-400 py-2">{label}</td>
                      <td className="font-bold text-white text-right py-2">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-5">
            Additional space for pre-wash staging, queuing lane, and exit area recommended. Contact us to assess your specific site.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Key Features & Components</h2>
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
                Standard System Components
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
                Optional Modular Add-Ons
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

      {/* Comparison callout */}
      <section className="bg-slate-950 py-12 sm:py-14 border-t-4 border-[#f0da11]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Why the insta-KLEEN for Your Dealership?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Most dealerships wash 20–80 vehicles per day. A hand wash or detail takes 10–15 minutes per
            car. With the insta-KLEEN, that same volume takes 20–80 minutes. Less labor, less space,
            more throughput - and your lot always looks its best.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 text-left">
            {[
              { label: 'Speed', body: 'One vehicle per minute vs. 10-15 minutes for hand detailing. Daily inventory wash completed before opening.' },
              { label: 'Water Savings', body: '36 gallons per cycle vs. 100+ for traditional methods. With reclaim, as low as 16 gallons of fresh water.' },
              { label: 'Modular Growth', body: 'Start with the core system and add color foam, undercarriage, tire shine as your volume grows.' },
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
        title="Get a Quote on the Belanger insta-KLEEN™"
        description="Carwash Technologies is your authorized Belanger dealer serving MN, ND, SD, and WI. We handle equipment supply, site assessment, installation, and service - all in one relationship."
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
