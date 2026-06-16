import { Metadata } from 'next';
import SegmentPage from '../components/segments/SegmentPage';
import { getSegment } from '../components/segments/segmentData';

const data = getSegment('specialized-wash')!;

export const metadata: Metadata = {
  title: 'Specialized & Custom Wash Systems Minnesota | Parts, Industrial & Process Wash',
  description:
    'Custom and specialized wash systems for manufacturing parts, process lines, rail, transit, and agricultural equipment in MN, ND, SD, WI. Engineered equipment, chemistry, and controls around your problem.',
  keywords:
    'parts washer Minnesota, industrial wash systems, custom carwash build, process line wash, agricultural equipment wash, rail transit wash systems, specialized wash equipment MN',
  alternates: { canonical: '/specialized-wash' },
  openGraph: {
    title: 'Specialized & Custom Wash Systems',
    description: 'Custom-engineered wash systems for parts, process lines, and one-off industrial builds.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/specialized-wash',
  },
};

export default function Page() {
  return <SegmentPage data={data} />;
}
