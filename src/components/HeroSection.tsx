
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-mba-dark/70 to-mba-dark/90"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
          <p className="text-mba-teal font-medium mb-4 text-lg">LEARN. CREATE. CONNECT</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Build Business Skills, <span className="gradient-text">Faster.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0">
            Learn new skills, create impressive projects, and connect with top business 
            experts, all in one place.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button size="lg" className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90 text-white font-medium text-lg px-8">
              Start Learning for Free
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-mba-dark">
              <span>Train My Team</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-gray-300 text-sm mt-4">No credit card required, start learning for free.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
