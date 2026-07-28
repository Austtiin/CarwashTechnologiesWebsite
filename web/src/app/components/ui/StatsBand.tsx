import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatsBandProps {
  /** Optional headline shown on the left. */
  heading?: string;
  /** Optional small badge text (e.g. "Trusted Midwest Partner"). */
  badge?: string;
  stats: Stat[];
  /** Retained for API compatibility; not rendered in this layout. */
  image?: string;
}

/**
 * Light stats strip with yellow accent line and branded stat columns.
 * Provides visual breathing room between dark sections.
 */
export default function StatsBand({ heading, badge, stats }: StatsBandProps) {
  return (
    <section className="relative bg-white border-y border-gray-100 py-10 sm:py-12 overflow-hidden">
      {/* Yellow accent line at top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#f0da11]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {(heading || badge) && (
            <div className="max-w-md">
              {badge && (
                <span className="inline-flex items-center gap-2 bg-[#f0da11] text-black text-xs font-bold uppercase tracking-wider px-3 py-1">
                  <span className="w-2 h-2 rounded-full bg-black" />
                  {badge}
                </span>
              )}
              {heading && (
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  {heading}
                </h2>
              )}
            </div>
          )}
          <div
            className={`grid grid-cols-2 ${
              stats.length >= 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3'
            } gap-x-8 gap-y-6 lg:gap-x-10 ${!heading && !badge ? 'w-full' : ''}`}
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-[#f0da11] pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 leading-none">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
