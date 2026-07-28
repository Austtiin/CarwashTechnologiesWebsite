'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
}

export default function ProjectLightboxGallery({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openAt = (i: number) => {
    setCurrent(i);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    },
    [open, prev, next],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => openAt(i)}
            className="group relative aspect-[4/3] overflow-hidden border border-gray-200 hover:border-[#f0da11] hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0da11]"
            aria-label={`View photo ${i + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Hover overlay */}
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </span>
            {/* Index badge */}
            <span className="absolute bottom-1.5 right-1.5 text-[10px] font-semibold text-white bg-black/50 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {i + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Image container — click inside doesn't close */}
          <div
            className="relative w-full max-w-5xl mx-4 sm:mx-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ maxHeight: '85vh', aspectRatio: '4/3' }}>
              <Image
                src={images[current].src}
                alt={images[current].alt}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white bg-black/60 hover:bg-[#f0da11] hover:text-black rounded-full p-2.5 transition-colors duration-150"
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-[#f0da11] hover:text-black rounded-full p-3 transition-colors duration-150"
              aria-label="Previous photo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-[#f0da11] hover:text-black rounded-full p-3 transition-colors duration-150"
              aria-label="Next photo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/60 px-4 py-1.5 rounded-full select-none">
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
