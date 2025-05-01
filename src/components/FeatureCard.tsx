
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="mb-6 h-48 w-full"
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="h-full w-full object-contain"
        />
      </motion.div>
      <motion.h3 
        className="text-xl font-bold mb-2 text-mba-dark"
        animate={isHovered ? { color: "#4DCFD9" } : { color: "#1A1F2C" }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        variant="outline" 
        className="mt-auto border-mba-dark text-mba-dark hover:bg-mba-dark hover:text-white group"
      >
        <span>Learn more</span>
        <motion.svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
          initial={{ x: 0 }}
          animate={isHovered ? { x: 3 } : { x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <path 
            d="M6 12L10 8L6 4" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </motion.svg>
      </Button>
    </motion.div>
  );
};

export default FeatureCard;
