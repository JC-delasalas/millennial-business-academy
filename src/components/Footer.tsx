
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark-gradient"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>

      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-teal opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-glow-pink opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and mission */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-mba-teal to-mba-pink flex items-center justify-center text-white font-bold mr-3 shadow-glow-teal">
                  MBA
                </div>
                <span className="text-white font-bold text-xl">Millennial Business Academy</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Empowering everyday people with life-changing business skills.
            </p>

            {/* Newsletter subscription */}
            <div className="glass-dark backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-sm font-semibold mb-3 text-white">Subscribe to our newsletter</h4>
              <div className="flex flex-col sm:flex-row mt-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white/10 rounded-md sm:rounded-r-none border-0 px-4 py-2 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-mba-teal w-full mb-2 sm:mb-0"
                />
                <Button className="bg-gradient-to-r from-mba-teal to-mba-pink text-white sm:rounded-l-none hover:opacity-90 transition-all duration-300">
                  Subscribe
                </Button>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                No spam, just helpful tips & tricks delivered directly to your inbox
              </p>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {/* Learn column */}
            <div className="glass-dark backdrop-blur-sm p-5 rounded-xl border border-white/10 h-fit">
              <h4 className="font-bold text-white text-lg mb-4">LEARN</h4>
              <ul className="space-y-3">
                <li><Link to="/courses" className="text-gray-300 hover:text-mba-teal transition-colors">Self-Paced Courses</Link></li>
                <li><Link to="/learning-paths" className="text-gray-300 hover:text-mba-teal transition-colors">Learning Paths</Link></li>
                <li><Link to="/projects" className="text-gray-300 hover:text-mba-teal transition-colors">Guided Projects</Link></li>
                <li><Link to="/cohort" className="text-gray-300 hover:text-mba-teal transition-colors">Cohort Learning</Link></li>
                <li><Link to="/crash-courses" className="text-gray-300 hover:text-mba-teal transition-colors">Crash Courses</Link></li>
              </ul>
            </div>

            {/* Plans column */}
            <div className="glass-dark backdrop-blur-sm p-5 rounded-xl border border-white/10 h-fit">
              <h4 className="font-bold text-white text-lg mb-4">PLANS</h4>
              <ul className="space-y-3">
                <li><Link to="/pricing" className="text-gray-300 hover:text-mba-teal transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Resources column */}
            <div className="glass-dark backdrop-blur-sm p-5 rounded-xl border border-white/10 h-fit">
              <h4 className="font-bold text-white text-lg mb-4">RESOURCES</h4>
              <ul className="space-y-3">
                <li><Link to="/blog" className="text-gray-300 hover:text-mba-teal transition-colors">MBA Blog</Link></li>
                <li><Link to="/challenges" className="text-gray-300 hover:text-mba-teal transition-colors">Business Challenges</Link></li>
                <li><Link to="/playground" className="text-gray-300 hover:text-mba-teal transition-colors">Data Playground</Link></li>
                <li><Link to="/guides" className="text-gray-300 hover:text-mba-teal transition-colors">Guides & Reports</Link></li>
              </ul>
            </div>

            {/* Company column */}
            <div className="glass-dark backdrop-blur-sm p-5 rounded-xl border border-white/10 h-fit">
              <h4 className="font-bold text-white text-lg mb-4">COMPANY</h4>
              <ul className="space-y-3">
                <li><Link to="/about/team" className="text-gray-300 hover:text-mba-teal transition-colors">Meet The Team</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-mba-teal transition-colors">Contact</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-mba-teal transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-mba-teal transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Millennial Business Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <Link to="/contact" className="text-gray-300 hover:text-mba-teal transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-mba-teal transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-mba-teal transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
