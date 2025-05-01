
import React from 'react';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Master Power BI & SQL',
      description: 'Learn how to extract, transform, and analyze data using industry-standard tools like Power BI, SQL, and Excel to uncover valuable insights and make data-driven decisions',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Data analytics dashboard',
    },
    {
      title: 'Personalized Analytics Coaching',
      description: 'Get tailored guidance from JC to accelerate your learning and overcome challenges with one-on-one coaching sessions focused on your specific career goals',
      imageSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Analytics coaching session',
    },
    {
      title: 'Analytics Career Advancement',
      description: 'Successfully shift from any background to in-demand analytics roles with proven career transition strategies, portfolio development, and job-ready skills training',
      imageSrc: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Career transition success',
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
            The Fastest Way to Launch Your <span className="gradient-text">Analytics Career</span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            At Millennial Business Analytics, we transform professionals from any background into data analytics experts through personalized coaching and specialized courses. JC's coaching programs focus on practical, in-demand tools like Power BI, SQL, and Excel that employers value today. Join thousands of successful graduates who've advanced their analytics careers with JC's expert guidance.
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
