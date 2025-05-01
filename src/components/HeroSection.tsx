
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-mba-dark/70 to-mba-dark/90"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
          <motion.p 
            className="text-mba-teal font-medium mb-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            DATA SKILLS. REAL PROJECTS. CAREER SUCCESS.
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Transform Your Career With <span className="gradient-text">Data Analytics</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Master in-demand analytics tools like SQL, Excel, Power BI, and Python. 
            Build a portfolio that gets you hired. Connect with industry experts who've been there.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90 text-white font-medium text-lg px-8">
                Start Learning for Free
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-mba-dark">
                <span>Explore Our Courses</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.p 
            className="text-gray-300 text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Join 20,000+ data professionals who've launched their careers with MBA.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
