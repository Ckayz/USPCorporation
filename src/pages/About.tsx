import React from 'react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Award, 
  Users, 
  Globe, 
  Shield, 
  CheckCircle 
} from 'lucide-react';

const About: React.FC = () => {
  const [imgRef, imgInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <PageHeader 
        title="About USP Corporation" 
        subtitle="Malaysia's trusted provider of industrial solutions since 2002"
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Company Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="Established in 2002, USP Corporation has grown to become one of Malaysia's leading providers of industrial solutions."
              />
              
              <p className="text-gray-600 mb-6">
                For over two decades, we have been dedicated to delivering high-quality industrial equipment, safety compliance services, and construction solutions to businesses across Malaysia. Our commitment to excellence, safety, and customer satisfaction has established us as a trusted partner for companies in various industries.
              </p>
              
              <p className="text-gray-600 mb-6">
                What began as a small team focusing on industrial lifts has expanded to a comprehensive service provider offering a wide range of solutions from goods hoists and elevators to SHE compliance services, construction works, and due diligence consultation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-primary-700 font-bold text-4xl mb-2">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-primary-700 font-bold text-4xl mb-2">100+</div>
                  <div className="text-gray-600">Clients Served</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-primary-700 font-bold text-4xl mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-primary-700 font-bold text-4xl mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
            
            <div ref={imgRef} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={imgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="USP Corporation Team" 
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={imgInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-primary-700 text-white p-4 rounded-lg shadow-lg hidden md:block"
              >
                <p className="font-semibold text-lg">Industry Leaders Since 2002</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Vision & Mission" 
            subtitle="Guiding principles that drive our business forward"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-primary-700">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Our Vision</h3>
              <p className="text-gray-600">
                To be Malaysia's most reliable partner in safety-focused engineering solutions, recognized for excellence, innovation, and integrity in every project we undertake.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-primary-700">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Our Mission</h3>
              <p className="text-gray-600">
                To deliver high-quality industrial solutions that enhance safety, efficiency, and compliance while building long-term relationships with our clients through exceptional service and technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide our operations and customer relationships"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                We prioritize safety in every aspect of our operations, ensuring protection for our team, clients, and end-users.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our products, services, and processes to deliver exceptional results.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We are dedicated to understanding and meeting our clients' needs with tailored solutions and responsive service.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices in all our relationships.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                We continuously develop our knowledge and skills to provide industry-leading solutions and advice.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises and stand behind our work, building trust through consistent performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with USP Corporation</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join the many businesses across Malaysia who trust us with their industrial needs.
          </p>
          <a href="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
};

export default About;