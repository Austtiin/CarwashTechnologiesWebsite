import React from 'react';
import SDSHero from '../components/sds/SDSHero';
import SDSDocumentGrid from '../components/sds/SDSDocumentGrid';
import SDSSafetyNotice from '../components/sds/SDSSafetyNotice';
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
    <main>
      <SDSHero stats={data.stats} />
      <SDSDocumentGrid documents={data.sdsDocuments} manufacturers={data.manufacturers} categories={data.categories} />
      <SDSSafetyNotice />
    </main>
  );
}
