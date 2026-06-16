import { Metadata } from 'next';
import SegmentPage from '../components/segments/SegmentPage';
import { getSegment } from '../components/segments/segmentData';

const data = getSegment('dedicated-wash-business')!;

export const metadata: Metadata = {
  title: 'Express & Tunnel Carwash Builder Minnesota | Dedicated Wash Businesses',
  description:
    'Design-build, equipment, and service partner for express tunnel operators and multi-site carwash chains in MN, ND, SD, WI. High-throughput tunnels, multi-site standardization, and membership chemistry.',
  keywords:
    'express carwash builder Minnesota, tunnel carwash chain, dedicated carwash business, multi-site carwash equipment, unlimited wash membership chemistry, high throughput tunnel builder MN',
  alternates: { canonical: '/dedicated-wash-business' },
  openGraph: {
    title: 'Express & Tunnel Carwash Build Partner',
    description: 'High-throughput tunnel design, multi-site standardization, and membership-driving chemistry for wash-first operators.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/dedicated-wash-business',
  },
};

export default function Page() {
  return <SegmentPage data={data} />;
}
