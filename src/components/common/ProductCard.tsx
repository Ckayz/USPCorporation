import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, index }) => {
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
      className="card group h-full"
    >
      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;