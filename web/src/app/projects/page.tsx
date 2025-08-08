import React from 'react';

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">What our clients say about working with us</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-lg text-gray-700 mb-4">
                &quot;Carwash Technologies transformed our outdated facility into a modern, efficient operation. 
                Our customer satisfaction and revenue have both increased significantly since the upgrade.&quot;
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900">- Mike Johnson, SuperWash Express</cite>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-lg text-gray-700 mb-4">
                &quot;The team&apos;s expertise and attention to detail were outstanding. They delivered on time 
                and within budget, and the results exceeded our expectations.&quot;
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900">- Sarah Chen, Quick Clean Car Wash</cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
