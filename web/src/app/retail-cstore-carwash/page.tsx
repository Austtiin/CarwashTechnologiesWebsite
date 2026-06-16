import { Metadata } from 'next';
import SegmentPage from '../components/segments/SegmentPage';
import { getSegment } from '../components/segments/segmentData';

const data = getSegment('retail-cstore-carwash')!;

export const metadata: Metadata = {
  title: 'Gas Station & C-Store Carwash Builder Minnesota | Retail Wash Systems',
  description:
    'Carwash systems for gas stations, convenience stores, and retail chains in MN, ND, SD, WI. Express tunnels and in-bay automatics sized to your lot, with payment/loyalty integration and priority service.',
  keywords:
    'gas station carwash builder Minnesota, convenience store carwash, c-store wash systems, retail carwash chain, express tunnel for gas station, in-bay automatic c-store, fuel retailer carwash MN',
  alternates: { canonical: '/retail-cstore-carwash' },
  openGraph: {
    title: 'Gas Station & C-Store Carwash Systems',
    description: 'Express tunnels and in-bay automatics for fuel and retail sites, with payment integration and priority service.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/retail-cstore-carwash',
  },
};

export default function Page() {
  return <SegmentPage data={data} />;
}
