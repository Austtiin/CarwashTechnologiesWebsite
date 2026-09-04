import { Metadata } from 'next';
import SegmentPage from '../components/segments/SegmentPage';
import { getSegment } from '../components/segments/segmentData';

const data = getSegment('truck-wash')!;

export const metadata: Metadata = {
  title: 'Heavy-Duty Vehicle Wash Minnesota | Truck & Fleet Systems',
  description:
    'Heavy-duty vehicle wash systems for trucking companies, terminals, municipalities, and fleets in MN, ND, SD, WI. Touchless gantry and drive-through builds with high-pressure pumps and water reclaim.',
  keywords:
    'semi truck wash builder Minnesota, heavy duty truck wash systems, fleet wash builder MN, gantry truck wash, drive through truck wash, trailer wash systems, high pressure truck wash Minnesota',
  alternates: { canonical: '/truck-wash' },
  openGraph: {
    title: 'Heavy-Duty Vehicle Wash Systems',
    description: 'Touchless gantry and drive-through heavy-duty wash builds for semis, trailers, fleets, and heavy equipment.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/truck-wash',
  },
};

export default function Page() {
  return <SegmentPage data={data} />;
}
