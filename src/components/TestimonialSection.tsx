
import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-teal-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white rounded-xl shadow-lg">
          <div className="text-left md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <svg 
              className="h-12 w-12 text-mba-teal opacity-50 mb-4" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6">
              "I feel lucky and grateful to have found Millennial Business Academy 
              in the early stage of my career. These courses gave me 
              mind-blowing articulation of how to become a great 
              business analyst. Thank you!"
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                {/* Placeholder for profile image */}
                <span className="text-gray-500 text-xs">Photo</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-mba-dark">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Data Analyst at TechCorp</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-mba-dark/5 p-6 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="h-24 w-24 rounded-full border-4 border-mba-teal flex items-center justify-center bg-mba-dark/10">
                  <img 
                    src="/lovable-uploads/82d4984b-ddc0-4ad2-b0f6-bab8f2528134.png" 
                    alt="MBA Badge" 
                    className="h-16 w-16 object-contain" 
                  />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-mba-dark">Business Intelligence Analyst</h4>
                <p className="text-sm text-gray-500">Course Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
