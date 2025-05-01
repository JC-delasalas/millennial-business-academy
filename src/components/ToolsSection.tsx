
import React from 'react';

const ToolsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-mba-dark mb-4">
            Become an expert with the most in-demand data & GenAI tools
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center">
          {/* These would ideally be real logos, using generic placeholders for now */}
          <div className="h-12 flex items-center justify-center">
            <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-sm font-semibold text-gray-600">Power BI</div>
          </div>
          <div className="h-12 flex items-center justify-center">
            <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-sm font-semibold text-gray-600">Tableau</div>
          </div>
          <div className="h-12 flex items-center justify-center">
            <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-sm font-semibold text-gray-600">Excel</div>
          </div>
          <div className="h-12 flex items-center justify-center">
            <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-sm font-semibold text-gray-600">ChatGPT</div>
          </div>
          <div className="h-12 flex items-center justify-center">
            <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-sm font-semibold text-gray-600">Python</div>
          </div>
          <div className="h-12 flex items-center justify-center">
            <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-sm font-semibold text-gray-600">SQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
