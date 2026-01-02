import React from 'react';
import GenericHero from '../components/ui/GenericHero';
import SDSDocumentGrid from '../components/sds/SDSDocumentGrid';
import CallToActionNew from '../components/ui/CallToActionNew';
// Import your PDF list from the JSON file
import pdfFileList from '../../data/pdf-list.json';

export const metadata = {
  title: 'Safety Data Sheets | Carwash Technologies',
  description:
    'Access comprehensive safety data sheets for all our chemical products. Download and view SDS documents for proper handling and safety compliance.',
  keywords: 'safety data sheets, SDS, chemical safety, MSDS, product safety, chemical handling, safety compliance',
  openGraph: {
    title: 'Safety Data Sheets | Carwash Technologies',
    description: 'Access comprehensive safety data sheets for all our chemical products',
    type: 'website',
  },
};

export interface SDSDocument {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  description: string;
  pdfUrl: string;
  lastUpdated: string;
  fileName: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  color: string;
}

export interface SDSStats {
  totalSheets: number;
  manufacturers: number;
  access: string;
  compliance: string;
}

async function getSDSData(): Promise<{
  sdsDocuments: SDSDocument[];
  manufacturers: Manufacturer[];
  categories: string[];
  stats: SDSStats;
}> {
  const manufacturers: Manufacturer[] = [
    { id: 'all', name: 'All Manufacturers', color: 'from-gray-400 to-gray-600' },
    { id: 'vertech', name: 'Vertech', color: 'from-green-400 to-green-600' },
    { id: 'cwt', name: 'Carwash Technologies', color: 'from-yellow-400 to-yellow-600' },
    { id: 'simoniz', name: 'Simoniz', color: 'from-red-400 to-red-600' },
  ];

  const categories = [
    'Pre-Treatment',
    'Wash Chemicals',
    'Finishing Products',
    'Specialty Solutions',
    'Equipment Cleaners',
    'Other',
  ];

  // Helper functions
  const getManufacturerFromFilename = (filename: string): string => {
    const firstChar = filename.charAt(0).toUpperCase();
    switch (firstChar) {
      case 'V':
        return 'vertech';
      case 'C':
        return 'cwt';
      case 'S':
        return 'simoniz';
      default:
        return 'cwt';
    }
  };

  const cleanProductName = (filename: string): string => {
    const cleaned = filename
      .replace(/^[VCS]_SDS_US_en_/, '')
      .replace(/^[VCS]_/, '')
      .replace(/\.pdf$/i, '')
      .replace(/_\d{4}-\d{2}-\d{2}$/, '')
      .replace(/_\d{2}-\d{5}/, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return cleaned;
  };

  const guessCategoryFromFilename = (filename: string): string => {
    const lower = filename.toLowerCase();

    if (lower.includes('presoak') || lower.includes('prep')) return 'Pre-Treatment';
    if (lower.includes('wash') || lower.includes('detergent') || lower.includes('soap') || lower.includes('suds'))
      return 'Wash Chemicals';
    if (
      lower.includes('wax') ||
      lower.includes('shine') ||
      lower.includes('polish') ||
      lower.includes('finish') ||
      lower.includes('seal') ||
      lower.includes('protect')
    )
      return 'Finishing Products';
    if (lower.includes('tire') || lower.includes('wheel') || lower.includes('foam') || lower.includes('triple'))
      return 'Specialty Solutions';
    if (lower.includes('clean') || lower.includes('degreaser') || lower.includes('strip')) return 'Equipment Cleaners';

    return 'Other';
  };

  // Process PDF files into SDS documents
  const sdsDocuments: SDSDocument[] = pdfFileList.map((filename: string, index: number) => {
    const manufacturer = getManufacturerFromFilename(filename);
    const cleanName = cleanProductName(filename);
    const category = guessCategoryFromFilename(filename);

    return {
      id: `sds-${index + 1}`,
      name: cleanName,
      category,
      manufacturer,
      description: `Safety data sheet for ${cleanName}. Contains important safety and handling information.`,
      // Use direct access to public folder with proper URL encoding
      pdfUrl: `/PDFs/${encodeURIComponent(filename)}`,
      lastUpdated: new Date().toISOString(),
      fileName: filename,
    };
  });

  const stats: SDSStats = {
    totalSheets: sdsDocuments.length,
    manufacturers: manufacturers.length - 1,
    access: '24/7',
    compliance: '100%',
  };

  console.log(`Generated ${sdsDocuments.length} SDS documents`);

  return {
    sdsDocuments,
    manufacturers,
    categories,
    stats,
  };
}

export default async function SafetyDataSheets() {
  const data = await getSDSData();

  return (
    <main className="min-h-screen">
      <GenericHero
        eyebrow="Safety First"
        title="Safety Data Sheets"
        highlightedWord="Safety"
        subtitle="Comprehensive Product Safety Information"
        description="Access complete safety data sheets for all our chemical products. Download detailed information about proper handling, storage, and emergency procedures to ensure workplace safety and regulatory compliance."
        stats={[
          { value: data.stats.totalSheets.toString(), label: 'SDS Documents' },
          { value: data.stats.manufacturers.toString(), label: 'Manufacturers' },
          { value: data.stats.access, label: 'Access' },
          { value: data.stats.compliance, label: 'Compliance' }
        ]}
        buttons={[
          {
            text: 'Browse All Documents',
            href: '#documents',
            variant: 'primary'
          },
          {
            text: 'Contact Safety Team',
            href: '/contact',
            variant: 'secondary'
          }
        ]}
        backgroundVariant="white"
        showPattern={true}
      />

      {/* Document browsing functionality */}
      <section id="documents">
        <SDSDocumentGrid 
          documents={data.sdsDocuments} 
          manufacturers={data.manufacturers} 
          categories={data.categories} 
        />
      </section>

      {/* Safety Notice */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 border-t border-yellow-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg border-l-4 border-[#f0da11] p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Safety Notice</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Safety Data Sheets (SDS)</strong> contain critical information about chemical products, including hazards, handling procedures, and emergency measures.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Always read the SDS before using any chemical product</li>
                    <li>Keep SDS readily accessible to all personnel</li>
                    <li>Follow all safety precautions and handling instructions</li>
                    <li>Ensure proper PPE is available and used</li>
                    <li>Contact us immediately if you have safety questions</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    For questions about any safety data sheet or chemical safety, contact our team at{' '}
                    <a href="tel:612-408-9010" className="text-[#f0da11] hover:underline font-semibold">
                      (612) 408-9010
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionNew
        title="Let's Build Something Great"
        description="Need help finding the right chemicals for your wash operation? Our team is here to help with product selection, safety information, and ongoing support."
        buttons={[
          {
            text: 'Get Expert Guidance',
            href: '/contact',
            variant: 'primary'
          },
          {
            text: 'View Chemical Sales',
            href: '/chemical-sales',
            variant: 'secondary'
          }
        ]}
        contactInfo={{
          phone: '(612) 408-9010',
          address: '322 19th St. SW<br />Forest Lake, MN 55025',
          showContactCard: true
        }}
      />
    </main>
  );
}
