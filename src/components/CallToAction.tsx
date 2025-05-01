
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <div className="bg-mba-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section - For Individuals */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 text-white">
            <div className="text-center md:text-left">
              <span className="inline-block bg-mba-teal/20 text-mba-teal px-4 py-1 rounded-full text-sm font-medium mb-4">FOR INDIVIDUALS</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Launch Your Business Career
              </h3>
              <p className="text-gray-300 mb-6">
                Start learning for free, no credit card required
              </p>
              <Button className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90 w-full md:w-auto">
                Sign Up For Free
              </Button>
            </div>
          </div>
          
          {/* Right Section - For Companies */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 text-white">
            <div className="text-center md:text-left">
              <span className="inline-block bg-mba-teal/20 text-mba-teal px-4 py-1 rounded-full text-sm font-medium mb-4">FOR COMPANIES & TEAMS</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Train your Team Today
              </h3>
              <p className="text-gray-300 mb-6">
                Get started today or request a demo for a free team trial
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-mba-dark w-full md:w-auto">
                Explore team plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
