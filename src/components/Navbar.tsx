
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-[110] transition-all duration-300 top-0 py-6`}>
      <div className="flex justify-center px-4 sm:px-6">
        <div className={`glass-dark backdrop-blur-md rounded-full px-5 md:px-8 py-4 md:py-5 flex items-center justify-between ${scrolled ? 'shadow-lg' : ''}`} style={{ maxWidth: '850px', width: windowWidth < 768 ? '90%' : 'auto' }}>
          {/* Logo - Visible on all devices */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="h-9 w-auto relative">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-mba-teal to-mba-pink rounded-full p-0.5 mr-2 md:mr-3 flex items-center justify-center" style={{ width: '36px', height: '36px', minWidth: '36px', overflow: 'hidden' }}>
                      <picture>
                        <source srcSet="/V1-PNG-MBA-optimized.webp" type="image/webp" />
                        <img
                          src="/V1-PNG-MBA-optimized.png"
                          alt="MBA Logo"
                          className="w-full h-full object-contain"
                          loading="eager"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 mx-4">
            <Link to="/courses" className="text-white hover:text-mba-teal transition-colors text-base font-medium">Courses</Link>
            <Link to="/learning-paths" className="text-white hover:text-mba-teal transition-colors text-base font-medium">Learning Paths</Link>
            <Link to="/meet-the-expert" className="text-white hover:text-mba-teal transition-colors text-base font-medium">Meet JC</Link>
            <Link to="/testimonials" className="text-white hover:text-mba-teal transition-colors text-base font-medium">Testimonials</Link>
          </nav>

          {/* Right side container for desktop and mobile */}
          <div className="flex items-center">
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://millennialbusinessacademy.net/login" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mba-teal transition-colors text-base font-medium">
                Login
              </a>
              <Link to="/courses" className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors relative overflow-hidden group shadow-lg hover:shadow-xl animate-pulse-slow">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50"></span>
                <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-full"></span>
                <span className="absolute -inset-1 bg-gradient-to-r from-mba-teal/30 to-mba-pink/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Explore Courses</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-1.5 text-white hover:text-mba-teal-light focus:outline-none focus:ring-2 focus:ring-mba-teal focus:ring-offset-2 focus:ring-offset-mba-dark transition-colors rounded-md"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="flex justify-center px-4 sm:px-6 md:hidden absolute left-0 right-0 top-[85px]">
            <motion.div
              id="mobile-menu"
              className="glass-dark backdrop-blur-md rounded-3xl mt-4 z-[120] w-[90%] overflow-hidden shadow-xl border border-white/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              {/* Mobile menu links */}
              <div className="px-6 pt-5 pb-6 space-y-0">
                <Link to="/courses" className="block px-4 py-3.5 text-white hover:bg-white/10 transition-colors border-b border-white/10">Courses</Link>
                <Link to="/learning-paths" className="block px-4 py-3.5 text-white hover:bg-white/10 transition-colors border-b border-white/10">Learning Paths</Link>
                <Link to="/meet-the-expert" className="block px-4 py-3.5 text-white hover:bg-white/10 transition-colors border-b border-white/10">Meet JC</Link>
                <Link to="/testimonials" className="block px-4 py-3.5 text-white hover:bg-white/10 transition-colors border-b border-white/10">Testimonials</Link>

                <div className="pt-6 pb-2 space-y-3">
                  <Link
                    to="/courses"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-mba-teal to-mba-pink text-white rounded-full font-medium transition-colors"
                  >
                    Explore Courses
                  </Link>
                  <a
                    href="https://millennialbusinessacademy.net/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors"
                  >
                    Login
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
