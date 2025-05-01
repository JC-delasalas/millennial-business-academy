
import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Learn Business Skills',
      description: 'Build job-ready skills with award-winning courses and personalized, goal-oriented learning plans',
      imageSrc: '/lovable-uploads/a53f41f7-531e-413d-b47f-575f5bec78d6.png',
      imageAlt: 'Learn Business Skills illustration',
    },
    {
      title: 'Create Your Portfolio',
      description: 'Apply your skills to real projects and create a portfolio to showcase your work to peers and employers',
      imageSrc: '/lovable-uploads/099d3d03-404f-4ad6-8daa-5261bb79d17d.png',
      imageAlt: 'Create Portfolio illustration',
    },
    {
      title: 'Connect With Community',
      description: 'Join a diverse, global community of business professionals, and connect with top analysts from around the world',
      imageSrc: '/lovable-uploads/206284f6-fae1-4ed0-a2a6-48f43bf1b604.png',
      imageAlt: 'Connect With Community illustration',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-mba-teal/20 text-mba-teal px-4 py-1 rounded-full text-sm font-medium mb-4">WHY MBA?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-mba-dark">
            The Fastest Way To Launch or Accelerate Your Business Career
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            At Millennial Business Academy, we empower everyday people with life-changing business & AI skills. 
            We've helped thousands of students reach their goals, and we're just getting started.
          </p>
        </div>

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
