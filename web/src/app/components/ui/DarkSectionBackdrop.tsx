import React from 'react';
import Image from 'next/image';

interface DarkSectionBackdropProps {
  /** Optional faint background photo (rendered at low opacity). */
  image?: string;
  /** Show the yellow hairline seam at the top of the band. Default true. */
  topSeam?: boolean;
  /** Image opacity (0-100 scale via Tailwind-style number). Default 8. */
  imageOpacity?: number;
}

/**
 * Shared backdrop for deep-slate sections. Renders the slate gradient base plus
 * a subtle grid texture, an optional faint carwash photo, and a soft radial
 * accent so dark bands read as deliberate — not flat empty blue.
 *
 * Place as the first child of a `relative` section; put real content in a
 * sibling with `relative z-10`.
 */
export default function DarkSectionBackdrop({
  image,
  topSeam = true,
  imageOpacity = 8,
}: DarkSectionBackdropProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Slate gradient base */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Faint photo */}
      {image && (
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ opacity: imageOpacity / 100 }}
        />
      )}

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Soft radial accent glow */}
      <div
        className="absolute -top-1/3 right-0 h-[60rem] w-[60rem] opacity-[0.10]"
        style={{
          background:
            'radial-gradient(circle, rgba(240,218,17,0.55) 0%, transparent 60%)',
        }}
      />

      {/* Yellow hairline seam */}
      {topSeam && <div className="absolute inset-x-0 top-0 h-1 bg-[#f0da11]" />}
    </div>
  );
}
