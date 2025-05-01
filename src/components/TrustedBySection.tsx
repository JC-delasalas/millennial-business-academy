
import React from 'react';

const TrustedBySection = () => {
  return (
    <div className="bg-mba-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Trusted by top companies to
          </h2>
          <p className="text-3xl font-bold text-mba-teal">upskill their teams</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {/* Replace these with actual company logos */}
          <div className="h-16 w-32 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs">Company Logo</span>
          </div>
          <div className="h-16 w-32 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs">Company Logo</span>
          </div>
          <div className="h-16 w-32 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs">Company Logo</span>
          </div>
          <div className="h-16 w-32 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs">Company Logo</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-300 max-w-3xl mx-auto">
            Join the hundreds of top companies that use Millennial Business Academy
            to train, onboard, and upskill their teams.
          </p>
          <div className="mt-6">
            <button className="text-mba-teal border-b-2 border-mba-teal hover:border-mba-pink hover:text-mba-pink transition-all font-medium">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
