'use client';

import React, { useEffect, useMemo, useState } from 'react';
import type { SDSDocument, Manufacturer } from '@/app/types/sds';
import SDSFilters from './SDSFilters';

interface SDSDocumentGridProps {
  documents: SDSDocument[];
  manufacturers: Manufacturer[];
  categories: string[];
}

const ITEMS_PER_PAGE = 10;

export default function SDSDocumentGrid({ documents, manufacturers, categories }: SDSDocumentGridProps) {
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [displayedCount, setDisplayedCount] = useState<number>(ITEMS_PER_PAGE);

  useEffect(() => {
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [selectedManufacturer, selectedCategory, searchTerm]);

  const filteredDocuments = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return documents.filter((doc) => {
      const matchesManufacturer = selectedManufacturer === 'all' || doc.manufacturer === selectedManufacturer;
      const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
      const matchesSearch =
        term === '' ||
        doc.name.toLowerCase().includes(term) ||
        doc.description.toLowerCase().includes(term) ||
        doc.fileName.toLowerCase().includes(term);
      return matchesManufacturer && matchesCategory && matchesSearch;
    });
  }, [documents, selectedManufacturer, selectedCategory, searchTerm]);

  const displayedDocuments = filteredDocuments.slice(0, displayedCount);
  const hasMoreDocuments = displayedCount < filteredDocuments.length;

  const handleLoadMore = () => setDisplayedCount((p) => p + ITEMS_PER_PAGE);

  const handleDownload = (pdfUrl: string, fileName: string) => {
    try {
      console.log('Downloading:', pdfUrl);
      
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = fileName;
      link.target = '_blank'; // Fallback if download doesn't work
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Download error:', error);
      // Fallback: open in new tab
      window.open(pdfUrl, '_blank');
    }
  };

  // Add this to your SDSDocumentGrid component for basic client-side validation
  const isValidPdfUrl = (url: string): boolean => {
    // Basic validation
    return url.startsWith('/PDFs/') && url.endsWith('.pdf');
  };

  const handleView = (pdfUrl: string) => {
    if (!isValidPdfUrl(pdfUrl)) {
      console.error('Invalid PDF URL');
      return;
    }
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <SDSFilters
        manufacturers={manufacturers}
        categories={categories}
        selectedManufacturer={selectedManufacturer}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onManufacturerChange={setSelectedManufacturer}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchTerm}
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {displayedDocuments.length} of {filteredDocuments.length} safety data sheet
              {filteredDocuments.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedDocuments.map((doc) => {
              const manufacturer = manufacturers.find((m) => m.id === doc.manufacturer);
              const gradient = manufacturer?.color ?? 'from-gray-400 to-gray-600';

              // format date safely
              const updatedText = (() => {
                const d = new Date(doc.lastUpdated);
                return isNaN(d.getTime()) ? 'Unknown' : d.toLocaleDateString();
              })();

              return (
                <article
                  key={doc.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${gradient} text-white`}>
                        {manufacturer?.name ?? 'Unknown'}
                      </div>
                      <span className="text-xs text-gray-500">Updated: {updatedText}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{doc.category}</p>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{doc.description}</p>
                    <p className="text-xs text-gray-500 mb-4">File: {doc.fileName}</p>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleView(doc.pdfUrl)}
                        className="flex-1 bg-[#f0da11] text-gray-900 px-4 py-2 rounded-lg hover:bg-[#d0b211] transition-colors duration-300 text-sm font-medium cursor-pointer"
                      >
                        View PDF
                      </button>
                      <button
                        onClick={() => handleDownload(doc.pdfUrl, doc.fileName)}
                        className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm font-medium cursor-pointer"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {hasMoreDocuments && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-[#f0da11] text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Load More ({filteredDocuments.length - displayedCount} remaining)
              </button>
            </div>
          )}

          {filteredDocuments.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">No Documents Found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
