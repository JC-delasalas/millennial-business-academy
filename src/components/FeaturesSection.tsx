
import React from 'react';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Master Data Analysis',
      description: 'Build professional-level analytics skills with hands-on projects using Excel, SQL, Power BI, and Python to transform raw data into actionable insights',
      imageSrc: '/lovable-uploads/a53f41f7-531e-413d-b47f-575f5bec78d6.png',
      imageAlt: 'Data Analysis Skills illustration',
    },
    {
      title: 'Build Your Analytics Portfolio',
      description: 'Create impressive data visualization projects and dashboards that demonstrate your ability to solve real business problems to future employers',
      imageSrc: '/lovable-uploads/099d3d03-404f-4ad6-8daa-5261bb79d17d.png',
      imageAlt: 'Analytics Portfolio illustration',
    },
    {
      title: 'Join Data Community',
      description: 'Connect with a diverse network of data professionals, mentors, and hiring managers to accelerate your career in business intelligence and analytics',
      imageSrc: '/lovable-uploads/206284f6-fae1-4ed0-a2a6-48f43bf1b604.png',
      imageAlt: 'Data Community illustration',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block bg-mba-teal/20 text-mba-teal px-4 py-1 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            WHY MBA?
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-mba-dark"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            The Fastest Way to Launch Your Data Analytics Career
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            At Millennial Business Academy, we transform data novices into analytics professionals. Our bootcamp focuses on practical, in-demand skills that employers need right now. Join thousands of successful graduates who've landed jobs at top companies.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
