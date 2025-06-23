import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';

// Lazy load pages for better code splitting
const Index = lazy(() => import("./pages/Index"));
const Courses = lazy(() => import("./pages/Courses"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage"));

const queryClient = new QueryClient();

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-mba-dark">
    <div
      className="animate-spin rounded-full h-12 w-12 border-b-2 border-mba-teal"
      role="status"
      aria-label="Loading page content"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-mba-teal text-white px-4 py-2 rounded-md z-50 focus:z-[9999]"
        >
          Skip to main content
        </a>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/checkout" element={<Checkout />} />

          {/* Navbar Links */}
          <Route path="/learning-paths" element={<PlaceholderPage title="Learning Paths" description="Follow structured learning paths tailored to your career goals. From beginner to advanced, our curated paths guide you through the essential skills needed for analytics success." />} />
          <Route path="/meet-the-expert" element={<PlaceholderPage title="Meet JC De las Alas" description="Learn more about JC De las Alas, an analytics coach expert with years of experience helping professionals transform their careers through data analytics mastery." />} />
          <Route path="/testimonials" element={<PlaceholderPage title="Testimonials & FAQs" description="Read success stories from our students and find answers to frequently asked questions about our analytics coaching and courses." />} />
          {/* Login route redirects to external URL via the Navbar component */}

          {/* Footer Links */}
          <Route path="/projects" element={<PlaceholderPage title="Guided Projects" description="Build your portfolio with real-world analytics projects. Our guided projects provide hands-on experience solving business problems with data." />} />
          <Route path="/cohort" element={<PlaceholderPage title="Cohort Learning" description="Join a cohort of like-minded professionals for a structured, community-based learning experience. Learn together, share insights, and grow your network." />} />
          <Route path="/crash-courses" element={<PlaceholderPage title="Crash Courses" description="Quick, intensive courses designed to get you up to speed on specific analytics tools and techniques in the shortest time possible." />} />
          <Route path="/pricing" element={<PlaceholderPage title="Pricing Plans" description="Explore our flexible pricing options designed to fit your budget and learning goals. From individual courses to comprehensive packages." />} />
          <Route path="/blog" element={<PlaceholderPage title="MBA Blog" description="Stay updated with the latest trends, tips, and insights in the world of business analytics. Our blog features expert articles, tutorials, and success stories." />} />
          <Route path="/challenges" element={<PlaceholderPage title="Business Challenges" description="Test your analytics skills with our business challenges. Solve real-world problems, compete with peers, and showcase your expertise." />} />
          <Route path="/playground" element={<PlaceholderPage title="Data Playground" description="Experiment with interactive data sets in our analytics playground. Practice your skills, test new techniques, and learn by doing." />} />
          <Route path="/guides" element={<PlaceholderPage title="Guides & Reports" description="Access comprehensive guides, industry reports, and resources to deepen your understanding of data analytics and its business applications." />} />

          {/* Company Links */}
          <Route path="/about/team" element={<PlaceholderPage title="Meet The Team" description="Get to know the experts behind MBA. Our team of analytics professionals is dedicated to helping you succeed in your data journey." />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Have questions or need assistance? Reach out to our team for support with your analytics learning journey." comingSoon={false} />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" description="Please read these terms carefully before using our platform. By accessing or using MBA services, you agree to be bound by these terms and conditions." comingSoon={false} />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="At MBA, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our services." comingSoon={false} />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
