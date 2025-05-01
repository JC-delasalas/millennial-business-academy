
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-mba-dark/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-auto">
                <img 
                  src="/lovable-uploads/b4ef4e0e-32f9-47ab-9009-1e9db232d40e.png" 
                  alt="Millennial Business Academy" 
                  className="h-10"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-mba-teal transition-colors text-sm font-medium">Home</Link>
            <Link to="/courses" className="text-white hover:text-mba-teal transition-colors text-sm font-medium">Courses</Link>
            <Link to="/learning-paths" className="text-white hover:text-mba-teal transition-colors text-sm font-medium">Learning Paths</Link>
            <Link to="/testimonials" className="text-white hover:text-mba-teal transition-colors text-sm font-medium">Testimonials</Link>
            <Link to="/pricing" className="text-white hover:text-mba-teal transition-colors text-sm font-medium">Pricing</Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-mba-dark">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90">
              Sign Up
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-mba-teal focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-mba-dark/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-white hover:text-mba-teal">Home</Link>
            <Link to="/courses" className="block px-3 py-2 text-white hover:text-mba-teal">Courses</Link>
            <Link to="/learning-paths" className="block px-3 py-2 text-white hover:text-mba-teal">Learning Paths</Link>
            <Link to="/testimonials" className="block px-3 py-2 text-white hover:text-mba-teal">Testimonials</Link>
            <Link to="/pricing" className="block px-3 py-2 text-white hover:text-mba-teal">Pricing</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5 space-x-3">
              <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-mba-dark">
                Log In
              </Button>
              <Button className="w-full bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
