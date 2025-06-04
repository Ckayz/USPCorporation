import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/common/ProjectCard';
import { projects, projectCategories } from '../data/projectData';

const PastProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <PageHeader 
        title="Past Projects" 
        subtitle="Explore our successful implementations across Malaysia"
        backgroundImage="https://images.pexels.com/photos/1427577/pexels-photo-1427577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Our Portfolio" 
            subtitle="Browse through our diverse range of successful projects"
          />
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {projectCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary-700 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                client={project.client}
                location={project.location}
                category={project.category}
                image={project.image}
                index={index}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <SectionTitle 
            title="Client Testimonials" 
            subtitle="What our clients say about our projects"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">
                "USP Corporation delivered our factory hoist installation with exceptional professionalism and attention to safety standards. The project was completed on time and has significantly improved our operational efficiency."
              </p>
              <div>
                <p className="font-semibold">Ahmad Zakaria</p>
                <p className="text-sm text-gray-500">Operations Director, Malaysian Manufacturing Co.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">
                "The SHE compliance upgrade provided by USP Corporation was comprehensive and tailored to our specific industry needs. Their team's expertise ensured we met all regulatory requirements with minimal disruption to our operations."
              </p>
              <div>
                <p className="font-semibold">Sarah Tan</p>
                <p className="text-sm text-gray-500">EHS Manager, Electro Solutions Bhd</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your industrial goals with our expertise and experience.
          </p>
          <a href="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default PastProjects;