
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're on the start.millennialbusinessacademy.net domain
    const hostname = window.location.hostname;
    const pathname = location.pathname;

    // We no longer need to redirect /checkout since we have a proper checkout page
    // Just log the 404 error for other paths

    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-6 gradient-text">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! Page not found</p>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            The page you're looking for might have been moved or doesn't exist.
            Let's get you back to learning!
          </p>
          <Button
            className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90 relative overflow-hidden group"
            size="lg"
            asChild
          >
            <a href="/">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50"></span>
              <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-full"></span>
              <span className="relative z-10">Return to Home</span>
            </a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
