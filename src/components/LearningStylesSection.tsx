
import React from 'react';

const LearningStylesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-mba-teal/20 text-mba-teal px-4 py-1 rounded-full text-sm font-medium mb-4">LEARNING STYLES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-mba-dark mb-4">
            Learn On Your Terms
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600">
            Everyone learns their own way. That's why we offer everything from bite-sized 
            projects to self-paced courses, paths, and immersive learning experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Course Styles */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-mba-dark mb-3">Online Self-Paced Courses</h3>
            <p className="text-gray-600 mb-6">
              Project-based courses led by expert instructors to help you
              build job-ready business and AI skills
            </p>
            <div className="flex">
              <a href="#" className="text-mba-dark font-semibold flex items-center group">
                Learn more 
                <svg 
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-mba-dark mb-3">Curated Learning Paths</h3>
            <p className="text-gray-600 mb-6">
              Collections of courses and projects to help you master in-demand
              tools and earn top industry certifications
            </p>
            <div className="flex">
              <a href="#" className="text-mba-dark font-semibold flex items-center group">
                Learn more 
                <svg 
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-mba-dark mb-3">Real-World Guided Projects</h3>
            <p className="text-gray-600 mb-6">
              Bite-sized projects to help you sharpen your problem-solving
              skills and build your portfolio
            </p>
            <div className="flex">
              <a href="#" className="text-mba-dark font-semibold flex items-center group">
                Learn more 
                <svg 
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-mba-dark mb-3">Immersive Cohort Programs</h3>
            <p className="text-gray-600 mb-6">
              10-week programs designed to keep you on track with weekly
              live sessions and a dedicated learning guide
            </p>
            <div className="flex">
              <a href="#" className="text-mba-dark font-semibold flex items-center group">
                Learn more 
                <svg 
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningStylesSection;
