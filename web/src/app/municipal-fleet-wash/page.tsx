import { Metadata } from 'next';
import SegmentPage from '../components/segments/SegmentPage';
import { getSegment } from '../components/segments/segmentData';

const data = getSegment('municipal-fleet-wash')!;

export const metadata: Metadata = {
  title: 'Municipal & Government Fleet Wash Systems Minnesota | Carwash Technologies',
  description:
    'Heavy-duty fleet wash systems for cities, counties, DOT yards, and transit authorities in MN, ND, SD, WI. Drive-through and gantry systems with water reclaim, spec & procurement support.',
  keywords:
    'municipal fleet wash Minnesota, government fleet wash systems, city garage carwash, county fleet wash, DOT yard wash, transit bus wash, water reclaim fleet wash MN',
  alternates: { canonical: '/municipal-fleet-wash' },
  openGraph: {
    title: 'Municipal & Government Fleet Wash Systems',
    description: 'Durable drive-through and gantry fleet wash with water reclaim and procurement support.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/municipal-fleet-wash',
  },
};

export default function Page() {
  return <SegmentPage data={data} />;
}
