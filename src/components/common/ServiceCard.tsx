import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="card p-6 h-full flex flex-col"
    >
      <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <div className="text-primary-700">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a href="#" className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </motion.div>
  );
};

export default ServiceCard;