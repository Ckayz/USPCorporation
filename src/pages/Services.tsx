import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { services, serviceCategories } from '../data/serviceData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive industrial solutions tailored to your business needs"
        backgroundImage="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Professional Industrial Services" 
            subtitle="From safety compliance to equipment installation, we provide end-to-end solutions"
          />
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {serviceCategories.map(category => (
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
          
          {/* Services Accordion */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredServices.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  {expandedId === service.id ? (
                    <ChevronUp className="h-5 w-5 text-primary-700" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary-700" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 border-t border-gray-200">
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.items.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary-700 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose Our Services" 
            subtitle="Experience the USP Corporation difference"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Expert Team</h3>
              <p className="text-gray-600">
                Our services are delivered by certified professionals with years of industry experience, ensuring high-quality results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Comprehensive Solutions</h3>
              <p className="text-gray-600">
                From consultation to implementation, we provide end-to-end solutions tailored to your specific needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Regulatory Compliance</h3>
              <p className="text-gray-600">
                We ensure all services meet or exceed Malaysian regulatory standards and international best practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Ongoing Support</h3>
              <p className="text-gray-600">
                Our relationship doesn't end with project completion. We provide ongoing support and maintenance services.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your service needs and discover tailored solutions for your business.
          </p>
          <a href="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Request a Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;