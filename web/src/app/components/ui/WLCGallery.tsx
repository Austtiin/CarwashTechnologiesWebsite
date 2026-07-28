'use client';

import React, { useState, useRef } from 'react';
import ProjectLightboxGallery, { type GalleryImage } from './ProjectLightboxGallery';

const PAGE_SIZE = 6;

export default function WLCGallery({ images }: { images: GalleryImage[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const firstNewRef = useRef<HTMLDivElement>(null);

  const shown = images.slice(0, visible);
  const remaining = images.length - visible;
  const hasMore = remaining > 0;

  const loadMore = () => {
    setVisible(v => Math.min(v + PAGE_SIZE, images.length));
    // Scroll to the first new image after render
    setTimeout(() => {
      firstNewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <>
      <ProjectLightboxGallery images={shown} />

      {/* Invisible anchor placed at the start of the last batch so we can scroll to it */}
      <div ref={firstNewRef} className="h-0" aria-hidden="true" />

      {hasMore && (
        <div className="flex flex-col items-center gap-3 mt-10">
          <button
            type="button"
            onClick={loadMore}
            className="cursor-pointer inline-flex items-center gap-3 bg-slate-900 hover:bg-[#f0da11] text-white hover:text-slate-900 font-bold text-sm uppercase tracking-widest px-8 py-4 border-2 border-slate-700 hover:border-[#f0da11] transition-all duration-200 group"
          >
            <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Load More Photos
            <span className="bg-[#f0da11] text-slate-900 group-hover:bg-slate-900 group-hover:text-[#f0da11] text-xs font-black px-2 py-0.5 transition-colors duration-200">
              {remaining}
            </span>
          </button>
          <p className="text-slate-500 text-xs">
            Showing {shown.length} of {images.length} photos
          </p>
        </div>
      )}

      {!hasMore && images.length > PAGE_SIZE && (
        <p className="text-center text-slate-500 text-sm mt-8">All {images.length} photos loaded</p>
      )}
    </>
  );
}
