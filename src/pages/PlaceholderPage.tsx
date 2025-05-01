import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title, 
  description, 
  comingSoon = true 
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-mba-dark">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative overflow-hidden py-32">
        {/* Background effects */}
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-dots-pattern bg-dots-md opacity-10"></div>
        
        {/* Animated glow effects */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-glow-teal opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-glow-pink opacity-20 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-dark backdrop-blur-md rounded-xl p-8 border border-white/10"
          >
            {comingSoon && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <span className="text-white text-sm font-medium">COMING SOON</span>
              </motion.div>
            )}
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90 relative overflow-hidden group animate-pulse-slow"
                size="lg"
                asChild
              >
                <Link to="/">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50"></span>
                  <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-full"></span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-mba-teal/30 to-mba-pink/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="flex items-center relative z-10">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlaceholderPage;
