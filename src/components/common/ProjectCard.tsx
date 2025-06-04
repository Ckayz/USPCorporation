import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  client: string;
  location: string;
  category: string;
  image: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id,
  title, 
  client, 
  location, 
  category, 
  image, 
  index 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group overflow-hidden h-full"
    >
      <Link to={`/projects/${id}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-primary-700 text-white text-sm px-3 py-1 rounded-full">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-700 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-3">Client: {client}</p>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;