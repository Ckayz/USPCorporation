// src/pages/Home.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Briefcase, Shield, Building, Award, Clock, Users } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/common/ServiceCard';
import { projects } from '../data/projectData';
import ProjectCard from '../components/common/ProjectCard';
import ParallaxSection from '../components/ParallaxSection';
import VantaHaloBackground from '../components/common/VantaHaloBackground';

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <VantaHaloBackground />
      {/* Hero Section with Parallax */}
      <ParallaxSection bgUrl="/path/to/your-image.jpg">
        <section 
          ref={heroRef}
          className="min-h-screen flex items-center justify-center bg-black/50"
        >
          <div className="container-custom text-center py-20 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Good Hoist Malaysia Supplier.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            >
              Malaysia's trusted provider of industrial lifts, SHE compliance, and construction since 2002.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn-secondary">
                Request a Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Services Pillar Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Services" 
            subtitle="Comprehensive industrial solutions to meet your business needs"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Lifting & Handling Systems"
              description="Complete range of elevators, hoists, and lifting equipment for industrial and commercial applications."
              icon={<Briefcase size={24} />}
              delay={0}
            />
            <ServiceCard 
              title="SHE Compliance & Safety Testing"
              description="Ensure workplace safety and regulatory compliance with our comprehensive SHE consulting services."
              icon={<Shield size={24} />}
              delay={1}
            />
            <ServiceCard 
              title="Construction & Electrical Works"
              description="Professional construction, renovation, and electrical services for industrial and commercial properties."
              icon={<Building size={24} />}
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary-700 text-white">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose Us" 
            subtitle="Partner with USP Corporation for reliable, safe, and quality industrial solutions"
            center
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
               icon: <Clock size={32} />,
               title: '20+ Years Experience',
               text: 'Two decades of industry expertise delivering trusted solutions across Malaysia.'
             },{
               icon: <Award size={32} />,
               title: 'ISO & DOSH Certified',
               text: 'Fully certified operations ensuring the highest standards of quality and safety.'
             },{
               icon: <Users size={32} />,
               title: '100+ Satisfied Clients',
               text: 'A proven track record of successful projects and satisfied clients across industries.'
            }].map((item, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-lg text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Explore some of our recent work across Malaysia"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <ProjectCard key={project.id} index={idx} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage:
            'linear-gradient(rgba(0,51,161,0.9), rgba(0,51,161,0.9)), url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg)'
        }}
      >
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to elevate your industrial operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your project needs and discover how USP Corporation can help you achieve your goals.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
