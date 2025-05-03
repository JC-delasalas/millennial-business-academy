
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Users, Rocket, CalendarDays, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark-gradient"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>

      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-teal opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-glow-pink opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section - For Individuals */}
          <motion.div
            className="glass-dark rounded-xl p-8 text-white border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-mba-teal/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-mba-pink/20 to-transparent rounded-tr-full"></div>

            <div className="text-center md:text-left relative z-10">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-mba-teal to-mba-teal/70 flex items-center justify-center shadow-glow-teal">
                  <CalendarDays className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">ONE-ON-ONE COACHING</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Personalized Analytics Coaching
              </h3>
              <p className="text-gray-300 mb-6">
                Work directly with JC to accelerate your analytics career with personalized guidance, hands-on projects, and expert feedback.
              </p>
              <Button
                className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90 w-full md:w-auto group transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-xl animate-pulse-slow py-2 hero-cta-button h-auto"
                asChild
              >
                <Link to="/courses">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50"></span>
                  <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-full"></span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-mba-teal/30 to-mba-pink/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="flex items-center relative z-10 text-sm sm:text-base px-2">
                    <span className="hidden sm:inline">Start Your Analytics Journey</span>
                    <span className="sm:hidden">Start Now</span>
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Section - For Group Coaching */}
          <motion.div
            className="glass-dark rounded-xl p-8 text-white border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-mba-pink/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-mba-teal/20 to-transparent rounded-tr-full"></div>

            <div className="text-center md:text-left relative z-10">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-mba-pink to-mba-pink/70 flex items-center justify-center shadow-glow-pink">
                  <Star className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">PREMIUM COACHING PACKAGE</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Analytics Career Accelerator
              </h3>
              <p className="text-gray-300 mb-6">
                Our most comprehensive coaching package includes 8 sessions, unlimited email support, personalized projects, and career strategy planning.
              </p>
              <Button
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-mba-dark w-full md:w-auto group transition-all duration-300 relative overflow-hidden py-2 hero-cta-button h-auto"
                asChild
              >
                <Link to="/courses">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-30"></span>
                  <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-30 rounded-t-full"></span>
                  <span className="flex items-center relative z-10 text-sm sm:text-base px-2">
                    <span className="hidden sm:inline">View Premium Package</span>
                    <span className="sm:hidden">View Premium</span>
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
