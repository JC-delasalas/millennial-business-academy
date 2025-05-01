
import React from 'react';
import { Button } from '@/components/ui/button';

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
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-6 h-48 w-full">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        variant="outline" 
        className="mt-auto border-mba-dark text-mba-dark hover:bg-mba-dark hover:text-white"
      >
        Learn more
      </Button>
    </div>
  );
};

export default FeatureCard;
