
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const GenAISection = () => {
  return (
    <div className="py-16 bg-mba-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <span className="inline-block bg-mba-teal/20 text-mba-teal px-4 py-1 rounded-full text-sm font-medium mb-4">LEARN</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay sharp with the latest <span className="gradient-text">GenAI skills</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Learn how to work smarter, think faster, and make AI
              your competitive advantage with tools like ChatGPT,
              Gemini and Copilot.
            </p>
            <Button className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90 transition-all duration-300 group">
              <span className="flex items-center">
                Explore GenAI Courses
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          <div className="relative">
            <div className="glass-dark backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/10">
              <img
                src="/ai-conversation-interface-fixed.svg"
                alt="AI Conversation Interface"
                className="w-full rounded-md shadow-lg"
              />
              <div className="mt-6">
                <div className="flex space-x-4 items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-mba-teal flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold">ChatGPT for Business</h4>
                    <p className="text-gray-400 text-sm">Learn to leverage AI in your workflow</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-300 text-sm">4 hours</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-300 text-sm">Beginner</span>
                  </div>
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-mba-dark transition-all duration-300">
                    View Course
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-mba-teal to-mba-pink p-1 rounded-full">
              <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                <span className="text-mba-dark font-bold text-sm">New</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAISection;
