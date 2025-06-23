import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingEmbed from '@/components/BookingEmbed';
import CheckoutMobileStyles from '@/components/CheckoutMobileStyles';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white checkout-page overflow-x-hidden w-full max-w-[100vw]">
      <CheckoutMobileStyles />
      <Navbar />

      {/* Hero Section */}
      <div className="bg-hero-pattern bg-cover bg-center relative pt-32 pb-20 hero-section">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-mba-darker/75 to-mba-dark/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-mesh-pattern bg-cover opacity-40"></div>
        <div className="absolute inset-0 bg-dots-pattern bg-dots-md opacity-25"></div>

        {/* Animated glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-teal opacity-25 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-pink opacity-25 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 content-container">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Complete Your <span className="gradient-text">Course Enrollment</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              You're just one step away from starting your analytics journey with JC De las Alas.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 content-container">
        <div className="mb-8">
          <Button
            variant="ghost"
            className="text-mba-dark hover:text-mba-teal flex items-center gap-2"
            asChild
          >
            <a href="/courses">
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-full overflow-x-hidden">
          {/* Left Column - Information */}
          <div className="glass-dark rounded-xl p-8 text-white border border-white/10 relative overflow-hidden flex flex-col md:min-h-[800px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-mba-teal/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-mba-pink/20 to-transparent rounded-tr-full"></div>

            <div className="relative z-10 flex flex-col flex-grow">
              <h2 className="text-3xl font-bold mb-6">Start Your Analytics Journey</h2>

              <div className="space-y-10 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-mba-teal flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Personalized Learning Path</h3>
                    <p className="text-gray-300 text-lg">Custom curriculum tailored to your specific goals and current skill level</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-mba-teal flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Hands-on Project Guidance</h3>
                    <p className="text-gray-300 text-lg">Work on real-world projects with direct feedback and guidance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-mba-teal flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Career Strategy Sessions</h3>
                    <p className="text-gray-300 text-lg">Get advice on job searching, interviewing, and positioning yourself for analytics roles</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-mba-teal flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                    <p className="text-gray-300 text-lg">Access to private communication channels for questions between sessions</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <picture>
                    <source srcSet="/JCcloseup-optimized.webp" type="image/webp" />
                    <img
                      src="/JCcloseup-optimized.jpg"
                      alt="JC De las Alas, Analytics Coach and Mentor"
                      className="h-20 w-20 rounded-full object-cover border-2 border-mba-teal"
                      loading="lazy"
                    />
                  </picture>
                  <div>
                    <h4 className="font-bold text-lg">JC De las Alas</h4>
                    <p className="text-gray-300">Analytics Coach & Mentor</p>
                    <div className="text-yellow-400 text-sm mt-1">★★★★★ <span className="text-gray-300">4.9/5 from 200+ students</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/95 rounded-xl p-8 text-mba-dark border border-mba-teal/20 relative overflow-hidden shadow-xl md:min-h-[800px] flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-mba-teal/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-mba-pink/10 to-transparent rounded-tr-full"></div>

            <div className="relative z-10 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-4 text-center">Complete Your Registration</h3>
              <p className="text-sm text-center mb-6">Fill out the form below to enroll in our analytics course.</p>
              <div className="flex-grow rounded-lg overflow-hidden">
                <BookingEmbed className="h-full w-full" isMobile={isMobile} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
