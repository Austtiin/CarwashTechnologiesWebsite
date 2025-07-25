import React from 'react';
import { RecentProjects } from '../../../../carwash-technologies-website/src/components/home/recent-projects';
import { ChemicalsSection } from '../../../../carwash-technologies-website/src/components/home/chemicals-section';
import { Tabs } from '../../../../carwash-technologies-website/src/components/ui/tabs';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Recent Projects</h1>
      <p className="mb-4">
        At Carwash Technologies, we take pride in our successful implementations across various markets, including Minnesota, North Dakota, South Dakota, and Wisconsin. Here are some of our recent projects that showcase our expertise and commitment to quality.
      </p>
      
      <Tabs>
        <div label="Recent Projects">
          <RecentProjects />
        </div>
        <div label="Chemicals">
          <ChemicalsSection />
        </div>
      </Tabs>
    </div>
  );
};

export default ProjectsPage;