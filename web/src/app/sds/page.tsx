'use client';

import React, { useState, useMemo, useEffect } from 'react';
import BlurText from '../components/animations/BlurText';
// Import the generated PDF list (change this line)
import pdfFileList from '../../data/pdf-list.json';

interface SDSDocument {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  description: string;
  pdfUrl: string;
  lastUpdated: string;
  fileName: string;
}

const manufacturers = [
  { id: 'all', name: 'All Manufacturers', color: 'from-gray-400 to-gray-600' },
  { id: 'vertech', name: 'Vertech', color: 'from-green-400 to-green-600' },
  { id: 'cwt', name: 'Carwash Technologies', color: 'from-blue-400 to-blue-600' },
  { id: 'simoniz', name: 'Simoniz', color: 'from-purple-400 to-purple-600' }
];

const categories = [
  'Pre-Treatment',
  'Wash Chemicals',
  'Finishing Products',
  'Specialty Solutions',
  'Equipment Cleaners',
  'Other'
];

// Helper function to determine manufacturer from filename
const getManufacturerFromFilename = (filename: string): string => {
  const firstChar = filename.charAt(0).toUpperCase();
  switch (firstChar) {
    case 'V': return 'vertech';
    case 'C': return 'cwt';
    case 'S': return 'simoniz';
    default: return 'other';
  }
};

// Helper function to clean up filename for display
const cleanProductName = (filename: string): string => {
  // Remove the prefix (V_, C_, S_) and file extension
  let cleaned = filename.replace(/^[VCS]_/, '').replace(/\.pdf$/i, '');
  
  // Replace hyphens and underscores with spaces
  cleaned = cleaned.replace(/[-_]/g, ' ');
  
  // Capitalize words
  cleaned = cleaned.replace(/\b\w/g, l => l.toUpperCase());
  
  return cleaned;
};

// Helper function to guess category from filename (basic implementation)
const guessCategoryFromFilename = (filename: string): string => {
  const lower = filename.toLowerCase();
  
  if (lower.includes('pre') || lower.includes('soak')) return 'Pre-Treatment';
  if (lower.includes('wash') || lower.includes('detergent')) return 'Wash Chemicals';
  if (lower.includes('wax') || lower.includes('shine') || lower.includes('finish')) return 'Finishing Products';
  if (lower.includes('clean')) return 'Equipment Cleaners';
  
  return 'Other';
};

export default function SafetyDataSheets() {
  const [selectedManufacturer, setSelectedManufacturer] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sdsDocuments, setSdsDocuments] = useState<SDSDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load PDF files on component mount
  useEffect(() => {
    const loadPDFFiles = async () => {
      try {
        setLoading(true);
        
        // Use the imported PDF list
        const documents: SDSDocument[] = pdfFileList.map((filename: string, index: number) => {
          const manufacturer = getManufacturerFromFilename(filename);
          const cleanName = cleanProductName(filename);
          const category = guessCategoryFromFilename(filename);
          
          return {
            id: `${index + 1}`,
            name: cleanName,
            category: category,
            manufacturer: manufacturer,
            description: `Safety data sheet for ${cleanName}`,
            pdfUrl: `/PDFs/${filename}`,
            lastUpdated: '2024-01-15',
            fileName: filename
          };
        });
        
        setSdsDocuments(documents);
      } catch (err) {
        setError('Failed to load PDF files.');
        console.error('Error loading PDF files:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPDFFiles();
  }, []);

  const filteredDocuments = useMemo(() => {
    return sdsDocuments.filter(doc => {
      const matchesManufacturer = selectedManufacturer === 'all' || doc.manufacturer === selectedManufacturer;
      const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
      const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doc.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesManufacturer && matchesCategory && matchesSearch;
    });
  }, [selectedManufacturer, selectedCategory, searchTerm, sdsDocuments]);

  const handleDownload = (pdfUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  };

  const handleView = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Brand Colors */}
      <section className="relative bg-gradient-to-br from-[#26231d] via-[#595646] to-[#4c6461] text-white py-24 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient overlays using brand colors */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#f0da11]/20 to-transparent rounded-full opacity-60 -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#d0b211]/30 to-transparent rounded-full opacity-50 translate-x-32 translate-y-32 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[#bfb986]/15 to-transparent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #cecece 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Badge with Brand Colors */}
            <div className="inline-flex items-center bg-[#f0da11]/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-[#f0da11]/30">
            <svg className="w-5 h-5 mr-3 text-[#f0da11]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
              <span className="text-sm font-semibold text-[#f0da11] tracking-wide">SAFETY COMPLIANCE CENTER</span>
            </div>
            
            {/* Enhanced Title with Brand Colors */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#cecece] via-[#f0da11] to-[#bfb986] bg-clip-text text-transparent">
                  Safety Data Sheets
                </span>
                <br />
                
              </h1>
            </div>
          
            {/* Enhanced Subtitle */}
            <div className="flex justify-center mb-12">
              <BlurText
                text="Comprehensive safety information for all our chemical products"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl !text-[#f0da11] max-w-4xl mx-auto leading-relaxed font-light"
              />
            </div>
            
            {/* Stats Bar with Brand Colors */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#bfb986]/30">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f0da11] mb-2">{sdsDocuments.length}+</div>
                <div className="text-sm text-[#bfb986] font-medium uppercase tracking-wide">Safety Sheets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f0da11] mb-2">3</div>
                <div className="text-sm text-[#bfb986] font-medium uppercase tracking-wide">Manufacturers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f0da11] mb-2">24/7</div>
                <div className="text-sm text-[#bfb986] font-medium uppercase tracking-wide">Access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f0da11] mb-2">100%</div>
                <div className="text-sm text-[#bfb986] font-medium uppercase tracking-wide">Compliant</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Wave Transition with Brand Colors */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
            <svg
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-32 md:h-40"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f0da11" stopOpacity="0.18" />
                        <stop offset="40%" stopColor="#bfb986" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
                    </linearGradient>
                </defs>
                <path
                    d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                    fill="url(#waveGradient)"
                />
                <path
                    d="M0,90 C480,30 960,150 1440,90 L1440,120 L0,120 Z"
                    fill="#fff"
                    fillOpacity="0.8"
                />
            </svg>
        </div>
      </section>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          {/* Manufacturer Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Manufacturer</h3>
            <div className="flex flex-wrap gap-3">
              {manufacturers.map((manufacturer) => (
                <button
                  key={manufacturer.id}
                  onClick={() => setSelectedManufacturer(manufacturer.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedManufacturer === manufacturer.id
                      ? `bg-gradient-to-r ${manufacturer.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {manufacturer.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category and Search */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f0da11] focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Products
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search by product name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f0da11] focus:border-transparent"
                suppressHydrationWarning={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              {loading ? 'Loading PDF files...' : 
               `Showing ${filteredDocuments.length} safety data sheet${filteredDocuments.length !== 1 ? 's' : ''}`}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc) => {
                const manufacturer = manufacturers.find(m => m.id === doc.manufacturer);
                return (
                  <div key={doc.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${manufacturer?.color} text-white`}>
                          {manufacturer?.name}
                        </div>
                        <span className="text-xs text-gray-500">
                          Updated: {new Date(doc.lastUpdated).toLocaleDateString()}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{doc.category}</p>
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">{doc.description}</p>
                      <p className="text-xs text-gray-500 mb-4">File: {doc.fileName}</p>

                      <div className="flex gap-3">
                        <button
                          onClick={() => handleView(doc.pdfUrl)}
                          className="flex-1 bg-[#f0da11] text-gray-900 px-4 py-2 rounded-lg hover:bg-[#d0b211] transition-colors duration-300 text-sm font-medium"
                        >
                          View PDF
                        </button>
                        <button
                          onClick={() => handleDownload(doc.pdfUrl, doc.fileName)}
                          className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm font-medium"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!loading && filteredDocuments.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-blue-50 border-t">
        <div className="container mx-auto px-4">
          <div className="bg-blue-100 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Safety Information</h3>
                <p className="text-blue-800 leading-relaxed">
                  Always read and follow safety data sheet instructions before using any chemical products. 
                  If you cannot find the SDS for a specific product, please contact us immediately at{' '}
                  <a href="/contact" className="underline font-medium">our contact page</a> or call our safety hotline.
                  Keep safety data sheets readily available at your facility for emergency reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}