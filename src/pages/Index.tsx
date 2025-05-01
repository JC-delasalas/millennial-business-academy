
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
import TechStackSection from '@/components/TechStackSection';
import AnalyticsToolsCarousel from '@/components/AnalyticsToolsCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <HeroSection />
      <TrustedBySection />
      <TechStackSection />
      <AnalyticsToolsCarousel />
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
