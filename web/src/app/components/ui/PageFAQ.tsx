import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQProps {
  heading?: string;
  items: FAQItem[];
}

/** Inline FAQ accordion + JSON-LD FAQPage schema injected in the same component. */
export default function PageFAQ({ heading = 'Frequently Asked Questions', items }: PageFAQProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <section className="bg-white py-14 sm:py-16 border-t border-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f0da11]" />
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">FAQ</span>
            <div className="w-8 h-px bg-[#f0da11]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{heading}</h2>
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {items.map((item) => (
            <details key={item.question} className="group py-5 cursor-pointer list-none">
              <summary className="flex items-center justify-between gap-4 font-semibold text-gray-900 text-base sm:text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <svg
                  className="w-5 h-5 flex-shrink-0 text-[#d0b211] transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed pr-8">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
