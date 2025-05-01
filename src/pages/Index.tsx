
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ToolsSection from '@/components/ToolsSection';
import TrustedBySection from '@/components/TrustedBySection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/TestimonialSection';
import LearningStylesSection from '@/components/LearningStylesSection';
import GenAISection from '@/components/GenAISection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Special announcement banner */}
      <div className="bg-gradient-to-r from-mba-teal to-mba-pink text-white py-2 text-center relative pt-20">
        <p className="font-medium">SPRING SAVINGS SALE! Up to 50% off all courses and learning paths</p>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200">
          &#10005;
        </button>
      </div>
      
      <HeroSection />
      <ToolsSection />
      <TrustedBySection />
      <FeaturesSection />
      <TestimonialSection />
      <LearningStylesSection />
      <GenAISection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
