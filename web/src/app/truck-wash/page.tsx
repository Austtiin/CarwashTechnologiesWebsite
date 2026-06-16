import { Metadata } from 'next';
import SegmentPage from '../components/segments/SegmentPage';
import { getSegment } from '../components/segments/segmentData';

const data = getSegment('truck-wash')!;

export const metadata: Metadata = {
  title: 'Semi & Heavy-Duty Truck Wash Builder Minnesota | Fleet Wash Systems',
  description:
    'Heavy-duty and semi truck wash systems for trucking companies, terminals, and fleets in MN, ND, SD, WI. Touchless gantry and drive-through builds with high-pressure pumps and water reclaim.',
  keywords:
    'semi truck wash builder Minnesota, heavy duty truck wash systems, fleet wash builder MN, gantry truck wash, drive through truck wash, trailer wash systems, high pressure truck wash Minnesota',
  alternates: { canonical: '/truck-wash' },
  openGraph: {
    title: 'Semi & Heavy-Duty Truck Wash Systems',
    description: 'Touchless gantry and drive-through truck wash builds for semis, trailers, and heavy equipment.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/truck-wash',
  },
};

export default function Page() {
  return <SegmentPage data={data} />;
}
