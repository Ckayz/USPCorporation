import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import ProductCard from '../components/common/ProductCard';
import { products, productCategories } from '../data/productData';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      <PageHeader 
        title="Our Products" 
        subtitle="Comprehensive range of industrial lifting, handling, and safety equipment"
        backgroundImage="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Quality Industrial Solutions" 
            subtitle="Browse our wide range of industrial products designed for safety, efficiency, and reliability"
          />
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {productCategories.map(category => (
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
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                index={index}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team can help you find the right equipment for your specific industrial needs.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
};

export default Products;