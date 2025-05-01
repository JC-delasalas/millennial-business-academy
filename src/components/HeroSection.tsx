
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles, CalendarDays, Award, Users, Zap, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="bg-hero-pattern bg-cover bg-center relative min-h-screen flex items-center pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-mba-darker/75 to-mba-dark/90 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-mesh-pattern bg-cover opacity-40"></div>
      <div className="absolute inset-0 bg-dots-pattern bg-dots-md opacity-25"></div>

      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-teal opacity-25 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-pink opacity-25 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="text-left md:text-left text-center">
            <motion.div
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-4 w-4 text-mba-teal mr-2" />
              <span className="text-white text-sm font-medium">Analytics Mastery & Career Growth</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{ letterSpacing: '-0.02em' }}
            >
              Master <span className="gradient-text">Data Analytics</span> for Career Advancement & Success
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl md:mx-0 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Join analytics expert JC De las Alas and learn how to leverage Power BI, SQL, Excel, and AI tools to transform data into business insights and advance your career.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, staggerChildren: 0.1 }}
            >
              <motion.div
                className="flex md:items-start items-center md:justify-start justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="p-1.5 rounded-full bg-mba-teal/20 text-mba-teal">
                  <Award className="h-4 w-4" />
                </div>
                <div className="text-sm text-gray-300">Power BI & SQL mastery</div>
              </motion.div>

              <motion.div
                className="flex md:items-start items-center md:justify-start justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="p-1.5 rounded-full bg-mba-pink/20 text-mba-pink">
                  <Zap className="h-4 w-4" />
                </div>
                <div className="text-sm text-gray-300">Excel & data visualization</div>
              </motion.div>

              <motion.div
                className="flex md:items-start items-center md:justify-start justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="p-1.5 rounded-full bg-mba-accent/20 text-mba-accent">
                  <Users className="h-4 w-4" />
                </div>
                <div className="text-sm text-gray-300">AI tools for analytics</div>
              </motion.div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <div className="w-full sm:w-auto max-w-[280px] mx-auto sm:mx-0">
                <Button
                  size="lg"
                  className="btn-modern bg-gradient-to-r from-mba-teal to-mba-pink text-white font-medium text-base sm:text-lg px-6 sm:px-8 rounded-full h-12 sm:h-14 shadow-lg hover:shadow-xl relative overflow-hidden group animate-pulse-slow w-full"
                  asChild
                >
                  <Link to="/coaching">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50"></span>
                    <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-full"></span>
                    <span className="absolute -inset-1 bg-gradient-to-r from-mba-teal/30 to-mba-pink/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="btn-modern-content flex items-center justify-center relative z-10">
                      <span className="hidden sm:inline">Start Your Analytics Journey</span>
                      <span className="sm:hidden">Start Now</span>
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </span>
                  </Link>
                </Button>
              </div>

              <div className="w-full sm:w-auto max-w-[280px] mx-auto sm:mx-0">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass text-white border-white/30 hover:border-white hover:bg-white/10 rounded-full h-12 sm:h-14 flex items-center justify-center relative overflow-hidden group w-full"
                  asChild
                >
                  <Link to="/coaching">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-30"></span>
                    <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-30 rounded-t-full"></span>
                    <CalendarDays className="mr-2 h-5 w-5 text-mba-teal relative z-10" />
                    <span className="relative z-10 text-base">View Plans</span>
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-400 text-sm mt-6 md:text-left text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              Join 15,000+ professionals who've advanced their careers with data analytics skills
            </motion.p>
          </div>

          {/* Right column - Visual element */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main feature card - Flippable */}
              <div className="perspective-1000 relative z-20" style={{ perspective: '1000px' }}>
                <AnimatePresence initial={false} mode="wait">
                  {!isFlipped ? (
                    /* Front of card */
                    <motion.div
                      key="front"
                      className="glass-card p-6 rounded-xl relative cursor-pointer transform-style-3d backface-hidden max-w-md"
                      initial={{ rotateY: 180 }}
                      animate={{ rotateY: 0 }}
                      exit={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      onClick={handleCardFlip}
                      style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <div className="h-20 w-20 rounded-full overflow-hidden mr-4 shadow-glow-teal flex-shrink-0 border-2 border-mba-teal/30">
                          <img src="/JCcloseup.jpg" alt="JC De las Alas" className="w-full h-full object-cover object-top scale-150 transform translate-y-3" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold">JC De las Alas</h3>
                          <p className="text-gray-300 text-sm">Analytics Coach Expert</p>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-4">
                        <p className="text-white text-sm leading-relaxed">
                          "I've designed my analytics coaching and courses to be engaging and practical. You'll master Power BI, SQL, and Excel through hands-on projects that directly boost your career prospects."
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex">
                          <div className="text-mba-teal">
                            <span className="text-lg font-bold">4.9</span>
                            <span className="text-sm ml-1 text-white">★★★★★</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4" asChild>
                          <Link to="/meet-the-expert">Learn More</Link>
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 text-white/50 text-xs">
                        Click to flip
                      </div>
                    </motion.div>
                  ) : (
                    /* Back of card - Testimonial */
                    <motion.div
                      key="back"
                      className="glass-card p-6 rounded-xl relative cursor-pointer transform-style-3d backface-hidden max-w-md"
                      initial={{ rotateY: -180 }}
                      animate={{ rotateY: 0 }}
                      exit={{ rotateY: -180 }}
                      transition={{ duration: 0.6 }}
                      onClick={handleCardFlip}
                      style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-3">
                          <Quote className="h-5 w-5 text-mba-teal" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold">Client Testimonial</h3>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-4">
                        <p className="text-white text-sm italic leading-relaxed">
                          "JC's analytics courses transformed my career. I went from struggling with basic Excel to confidently using Power BI and SQL for data-driven decisions. His practical approach made complex analytics concepts accessible and immediately applicable."
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-300 text-sm">
                          <span className="font-medium">Sarah Johnson</span>
                          <span className="text-gray-400 text-xs ml-2">Data Analyst, Former Marketer</span>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 text-white/50 text-xs">
                        Click to flip
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating achievement card */}
              <motion.div
                className="absolute top-20 -right-8 glass-card p-4 rounded-xl shadow-lg z-10 max-w-[200px]"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-mba-accent flex items-center justify-center text-white mr-2">
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="text-white font-medium text-sm">Achievement Unlocked!</div>
                </div>
                <p className="text-gray-300 text-xs">Complete your first analytics project and earn certification</p>
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-10 -left-8 glass-card p-4 rounded-xl shadow-lg z-10"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-white font-medium mb-2">Your Progress</div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-mba-teal font-bold">12</div>
                    <div className="text-gray-400 text-xs">Lessons</div>
                  </div>
                  <div>
                    <div className="text-mba-pink font-bold">5</div>
                    <div className="text-gray-400 text-xs">Projects</div>
                  </div>
                  <div>
                    <div className="text-mba-accent font-bold">850</div>
                    <div className="text-gray-400 text-xs">Points</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
