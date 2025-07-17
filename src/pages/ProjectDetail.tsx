import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Building2, MapPin, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { projects } from '../data/projectData';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary-700 hover:text-primary-800">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  const startDate = new Date(project.startDate).toLocaleDateString('en-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const endDate = new Date(project.endDate).toLocaleDateString('en-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <PageHeader 
        title={project.title}
        subtitle={`Client: ${project.client}`}
        backgroundImage={project.image}
      />

      <div className="container-custom py-12">
        <Link 
          to="/projects"
          className="inline-flex items-center text-primary-700 hover:text-primary-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Link>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <SectionTitle 
              title="Project Overview"
              subtitle="Comprehensive details about the project scope and implementation"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Building2 className="h-5 w-5 text-primary-700 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Client</h3>
                  <p className="text-gray-600">{project.client}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-700 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">{project.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-primary-700 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-gray-600">{startDate} - {endDate}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Scope of Work</h3>
              <ul className="space-y-2">
                {project.scope.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-700 mt-1 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.specifications && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                {project.specifications.loadCapacity && (
                  <p className="mb-2">
                    <strong>Load Capacity:</strong> {project.specifications.loadCapacity}
                  </p>
                )}
                {project.specifications.safetyFeatures && (
                  <div className="mb-4">
                    <strong>Safety Features:</strong>
                    <ul className="mt-2 space-y-1">
                      {project.specifications.safetyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary-700 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.specifications.certifications && (
                  <div>
                    <strong>Certifications:</strong>
                    <ul className="mt-2 space-y-1">
                      {project.specifications.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary-700 mr-2" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Challenges & Solutions */}
          <div className="lg:col-span-1">
            {(project.challenges || project.solutions) && (
              <div className="bg-gray-50 p-6 rounded-lg">
                {project.challenges && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-primary-700 mr-2" />
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-gray-600">• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.solutions && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Lightbulb className="h-5 w-5 text-primary-700 mr-2" />
                      Solutions
                    </h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="text-gray-600">• {solution}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-w-16 aspect-h-9"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="mb-12">
            <div className="bg-primary-50 p-8 rounded-lg">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{project.testimonial.author}</p>
                <p className="text-gray-600">{project.testimonial.position}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-primary-700 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Similar Solution?</h3>
          <p className="text-lg mb-6">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-700 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;