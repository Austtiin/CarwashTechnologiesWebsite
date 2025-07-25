import React from 'react';
import { Card } from '../ui/card';

const recentProjectsData = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A state-of-the-art car wash facility in Minneapolis, MN.',
    imageUrl: '/images/project-alpha.jpg',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'An eco-friendly car wash solution in Fargo, ND.',
    imageUrl: '/images/project-beta.jpg',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A full-service car wash and detailing center in Sioux Falls, SD.',
    imageUrl: '/images/project-gamma.jpg',
  },
  {
    id: 4,
    title: 'Project Delta',
    description: 'A premium car wash service in Madison, WI.',
    imageUrl: '/images/project-delta.jpg',
  },
];

const RecentProjects = () => {
  return (
    <section className="recent-projects">
      <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recentProjectsData.map((project) => (
          <Card key={project.id} title={project.title} description={project.description} imageUrl={project.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;