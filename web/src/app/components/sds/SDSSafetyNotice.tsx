import React from 'react';
import SafeLink from '../ui/SafeLink';

export default function SDSSafetyNotice() {
  return (
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
                <SafeLink href="/contact" className="underline font-medium text-blue-800 hover:text-blue-900">
                  our contact page
                </SafeLink> or call our safety hotline.
                Keep safety data sheets readily available at your facility for emergency reference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}