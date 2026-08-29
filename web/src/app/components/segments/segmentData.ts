import type { SegmentData } from './SegmentPage';

// Icon path helpers (Heroicons-style `d` strings)
const ICONS = {
  bolt: 'M13 10V3L4 14h7v7l9-11h-7z',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  truck: 'M3 13h13l2 3h3v-4l-2-3h-2V6H3v7zm3 4a2 2 0 100-4 2 2 0 000 4zm11 0a2 2 0 100-4 2 2 0 000 4z',
  building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  wrench: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  chip: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  beaker: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z',
  chart: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
};

export const segments: SegmentData[] = [
  {
    slug: 'retail-cstore-carwash',
    eyebrow: 'Retail · C-Store · Gas Station',
    title: 'Carwash Solutions for Retail & C-Stores',
    highlight: 'Retail',
    subtitle: 'Turn Traffic Into a Profit Center',
    description:
      'Gas stations, convenience stores, and retail chains rely on a fast, dependable wash to drive fuel volume, loyalty, and add-on revenue. We build and maintain wash systems that fit your footprint and keep cars moving.',
    heroImage: '/imgs/car-wash.webp',
    introHeading: 'A wash that pays for itself',
    introBody:
      'For c-stores and fuel retailers, the carwash is a margin engine - but only if it stays up and throughput is high. We design express tunnels and in-bay automatics sized to your lot, integrate payment and loyalty, and back it all with priority service so a down wash never costs you a weekend.',
    challenges: [
      'Limited lot space and tight site constraints',
      'Maximizing cars-per-hour during fuel rushes',
      'Integrating wash codes with POS and loyalty',
      'Keeping uptime high with minimal on-site staff',
    ],
    solutions: [
      { title: 'Express Tunnels & In-Bay', description: 'Right-sized tunnel and in-bay automatic systems engineered for your footprint and traffic.', icon: ICONS.bolt },
      { title: 'Payment & Loyalty Integration', description: 'Wash codes, unlimited plans, and POS/loyalty integration to lift attach rates.', icon: ICONS.chip },
      { title: 'Chemistry That Sells', description: 'Hot wax, ceramic, and shine packages that justify premium tiers and repeat visits.', icon: ICONS.beaker },
      { title: 'Priority Uptime', description: 'Preventive maintenance and fast-response repair so the wash is open when traffic peaks.', icon: ICONS.wrench },
    ],
    statsBadge: 'Retail Wash Experts',
    statsHeading: 'Built for high-traffic fuel & retail sites.',
    stats: [
      { value: '99+', label: 'Sites Equipped' },
      { value: '4', label: 'States Served' },
      { value: 'Express', label: 'Tunnel & In-Bay' },
      { value: 'Priority', label: 'Service' },
    ],
  },
  {
    slug: 'municipal-fleet-wash',
    eyebrow: 'Municipal · Government Fleets',
    title: 'Municipal & Government Fleet Wash',
    highlight: 'Municipal',
    subtitle: 'Clean Fleets, Compliant Sites',
    description:
      'City and county garages, DOT yards, transit authorities, and government fleets need durable wash systems that handle heavy use, protect equipment, and meet water-reclaim requirements.',
    heroImage: '/imgs/IMG_5380.webp',
    introHeading: 'Wash systems that stand up to public-sector duty',
    introBody:
      'Municipal fleets put unique demands on a wash: mixed vehicle sizes, year-round salt and grime, strict environmental compliance, and budgets that depend on uptime. We design drive-through and gantry systems with water reclaim, build to spec, and support procurement and bid processes.',
    challenges: [
      'Mixed fleet sizes - from pickups to plow trucks',
      'Water reclaim and environmental compliance',
      'Procurement, spec, and bid-process requirements',
      'Year-round reliability through harsh Midwest winters',
    ],
    solutions: [
      { title: 'Drive-Through & Gantry', description: 'Heavy-duty automatic systems that handle mixed municipal fleets at volume.', icon: ICONS.truck },
      { title: 'Water Reclaim Systems', description: 'Reclaim and treatment to meet discharge regulations and cut water costs.', icon: ICONS.shield },
      { title: 'Spec & Procurement Support', description: 'We help write specs, support bids, and deliver turnkey, compliant installations.', icon: ICONS.building },
      { title: 'Maintenance Contracts', description: 'Scheduled preventive maintenance keeps public-sector fleets moving.', icon: ICONS.wrench },
    ],
    statsBadge: 'Public-Sector Ready',
    statsHeading: 'Trusted by Midwest municipal fleets.',
    stats: [
      { value: 'Heavy-Duty', label: 'Built Tough' },
      { value: 'Reclaim', label: 'Water Systems' },
      { value: '4', label: 'States Served' },
      { value: 'Turnkey', label: 'Design-Build' },
    ],
    faqItems: [
      {
        question: 'Do you install government and municipal fleet wash systems?',
        answer: 'Yes. We build and install municipal and government fleet wash systems for city and county garages, DOT yards, transit authorities, and public-sector fleets across Minnesota, North Dakota, South Dakota, and Wisconsin. We support the procurement and bid process, write specs, and deliver turnkey, code-compliant installations.',
      },
      {
        question: 'Can you design a heavy duty vehicle wash for a government fleet?',
        answer: 'Yes. We design heavy duty vehicle wash systems specifically for government and municipal fleets. Our designs account for mixed vehicle sizes (pickups through plow trucks and heavy equipment), water reclaim requirements, environmental compliance, and year-round Midwest operating conditions. We provide drive-through gantry, in-bay, and combination wash configurations.',
      },
    ],
  },
  {
    slug: 'truck-wash',
    eyebrow: 'Heavy-Duty · Semi · Fleet',
    title: 'Heavy-Duty Vehicle Wash & Semi Truck Wash Systems',
    highlight: 'Truck',
    subtitle: 'Built for the Big Rigs',
    description:
      'Trucking companies, terminals, and large fleets need heavy duty vehicle wash systems engineered for semis, trailers, buses, and heavy equipment - high-volume, high-pressure, and durable enough for round-the-clock use.',
    heroImage: '/imgs/IMG_5389.webp',
    introHeading: 'Heavy duty vehicle wash solutions that move more trucks, faster',
    introBody:
      'Every minute a heavy duty vehicle spends being washed is a minute off the road. We build touchless gantry and drive-through heavy duty vehicle wash systems - from semi truck wash installations to bus wash and equipment wash builds - that clean thoroughly and consistently, with the pumps, chemistry, and reclaim to back it up.',
    challenges: [
      'Cleaning oversized vehicles and trailers consistently',
      'High throughput for busy terminals and yards',
      'Durability under constant, heavy-duty cycles',
      'Managing water usage and reclaim at volume',
    ],
    solutions: [
      { title: 'Touchless Gantry Systems', description: 'Automated gantry and drive-through systems sized for semis, trailers, and buses.', icon: ICONS.truck },
      { title: 'High-Pressure Pumps', description: 'Cat Pumps and General Pump systems built for heavy-duty, high-volume cleaning.', icon: ICONS.bolt },
      { title: 'Fleet Chemistry', description: 'Aggressive, surface-safe detergents and presoaks for road film, salt, and grime.', icon: ICONS.beaker },
      { title: 'Reclaim & Uptime', description: 'Water reclaim plus preventive maintenance to keep the line running.', icon: ICONS.wrench },
    ],
    statsBadge: 'Heavy-Duty Specialists',
    statsHeading: 'Semi, fleet & heavy-equipment wash builds.',
    stats: [
      { value: 'Semi', label: '& Trailer Wash' },
      { value: 'Gantry', label: 'Touchless' },
      { value: 'High-PSI', label: 'Pump Systems' },
      { value: '4', label: 'States Served' },
    ],
    faqItems: [
      {
        question: 'Do you build heavy duty vehicle wash systems in MN and ND?',
        answer: 'Yes. We build heavy duty vehicle wash systems across Minnesota (MN), North Dakota (ND), South Dakota (SD), and Wisconsin (WI). Our heavy duty vehicle wash projects include semi truck wash installations, bus wash systems, municipal fleet washes, and heavy equipment washes for trucking terminals, transit authorities, and government yards.',
      },
      {
        question: 'What is a heavy duty vehicle wash partner?',
        answer: 'A heavy duty vehicle wash partner handles every aspect of your fleet wash operation - designing the system, selecting the right gantry or drive-through equipment, providing fleet chemistry, installing the wash, and servicing it on an ongoing basis. Carwash Technologies acts as a complete heavy duty vehicle wash partner in MN, ND, SD, and WI, so you have one accountable team from build through daily operation.',
      },
      {
        question: 'What semi wash equipment do you supply in MN?',
        answer: 'We supply and install semi truck wash equipment including touchless gantry systems, high-pressure pump packages (Cat Pumps and General Pump), spray arches, reclaim systems, and chemistry programs specifically formulated for removing road film, mud, and salt from semi trucks, trailers, and heavy equipment. We cover MN and surrounding states.',
      },
      {
        question: 'Can you repair and maintain an existing heavy duty vehicle wash?',
        answer: 'Yes. We provide heavy duty vehicle wash repair and maintenance services across MN, ND, SD, and WI. Our technicians service all major brands of heavy duty wash equipment, stock common parts, and offer preventive maintenance contracts to minimize downtime at your terminal or fleet yard.',
      },
    ],
  },
  {
    slug: 'dedicated-wash-business',
    eyebrow: 'Express & Tunnel Operators',
    title: 'Dedicated Carwash Businesses',
    highlight: 'Dedicated',
    subtitle: 'Scale a Wash-First Brand',
    description:
      'Express tunnel operators and multi-site wash chains live and die by throughput, membership growth, and uptime. We are the design-build, equipment, and service partner that helps wash-first businesses scale.',
    heroImage: '/imgs/BelangerTunnel.webp',
    introHeading: 'A partner for wash-first operators',
    introBody:
      'When washing cars IS the business, the equipment and service partner matters more than anything. We help express and tunnel operators design high-throughput sites, standardize equipment across locations, dial in membership-driving chemistry, and keep every site running with priority service.',
    challenges: [
      'Maximizing cars-per-hour and membership conversion',
      'Standardizing equipment across multiple locations',
      'Consistent wash quality that drives unlimited plans',
      'Minimizing downtime across the portfolio',
    ],
    solutions: [
      { title: 'High-Throughput Tunnels', description: 'Conveyor tunnel design and equipment engineered for maximum cars-per-hour.', icon: ICONS.bolt },
      { title: 'Multi-Site Standardization', description: 'Consistent equipment, parts, and chemistry across every location you operate.', icon: ICONS.building },
      { title: 'Membership Chemistry', description: 'Premium shine, ceramic, and dry packages that drive unlimited-plan retention.', icon: ICONS.beaker },
      { title: 'Portfolio Service', description: 'Priority maintenance and parts so no site stays down for long.', icon: ICONS.chart },
    ],
    statsBadge: 'Wash-First Partner',
    statsHeading: 'Helping express & tunnel chains scale.',
    stats: [
      { value: 'Tunnel', label: 'Design-Build' },
      { value: 'Multi-Site', label: 'Standardization' },
      { value: 'Members', label: 'Plan Chemistry' },
      { value: 'Priority', label: 'Service' },
    ],
  },
  {
    slug: 'specialized-wash',
    eyebrow: 'Industrial · Parts · Custom',
    title: 'Specialized & Custom Wash Projects',
    highlight: 'Custom',
    subtitle: 'When Off-the-Shelf Won’t Cut It',
    description:
      'Manufacturing parts washers, rail and transit, agricultural equipment, and one-off custom builds - if it needs to be cleaned at scale, we engineer a wash system around the problem.',
    heroImage: '/imgs/AirCannon.webp',
    introHeading: 'Engineered around your exact problem',
    introBody:
      'Some wash needs do not fit a catalog. We take on specialized and custom projects - parts and component washers for manufacturing, process-line cleaning, agricultural and rail equipment, and unique site builds - engineering the equipment, chemistry, and controls around your specific requirement.',
    challenges: [
      'Non-standard vehicles, parts, or process requirements',
      'Custom footprints and integration with existing lines',
      'Specialized chemistry and controls',
      'Repeatable, process-focused cleaning results',
    ],
    solutions: [
      { title: 'Custom Engineering', description: 'We design wash systems around non-standard parts, vehicles, and process lines.', icon: ICONS.chip },
      { title: 'Process-Line Integration', description: 'Conveyorized and inline systems that fit into existing production environments.', icon: ICONS.building },
      { title: 'Specialized Chemistry', description: 'Targeted detergents and treatments for unique materials and contaminants.', icon: ICONS.beaker },
      { title: 'Controls & Automation', description: 'PLC controls and automation tuned for repeatable, hands-off operation.', icon: ICONS.chip },
    ],
    statsBadge: 'Custom Build Team',
    statsHeading: 'One-off and specialized wash systems.',
    stats: [
      { value: 'Custom', label: 'Engineering' },
      { value: 'Parts', label: '& Process Wash' },
      { value: 'Controls', label: 'Automation' },
      { value: '50+', label: 'Yrs Combined Exp.' },
    ],
  },
];

export const getSegment = (slug: string) => segments.find((s) => s.slug === slug);
