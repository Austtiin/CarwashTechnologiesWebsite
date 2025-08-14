import React from 'react';
import SectionHeader from '../ui/SectionHeader';

interface TimelineItem {
  week: string;
  title: string;
  description: string;
  duration: string;
}

interface InstallationTimelineProps {
  timeline: TimelineItem[];
}

export default function InstallationTimeline({ timeline }: InstallationTimelineProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeader
            title="Typical Installation Timeline"
            description="From planning to operation, here's what to expect during your installation"
            titleDelay={0}
            descriptionDelay={0}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#f0da11]"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#f0da11] rounded-full flex items-center justify-center relative z-10">
                    <span className="text-gray-900 font-bold">{index + 1}</span>
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Week {item.week}: {item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="text-sm text-gray-500">Duration: {item.duration}</div>
                  </div>
                </div>
              ))}
              
              {/* Grand Opening */}
              <div className="relative flex items-start">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Grand Opening</h3>
                  <p className="text-gray-600 mb-4">Your wash is ready for operation with full support and warranty coverage.</p>
                  <div className="text-sm text-green-600 font-semibold">Ready for Business!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

