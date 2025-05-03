import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />



      {/* Hero Section */}
      <div className="bg-hero-pattern bg-cover bg-center relative pt-32 pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-mba-darker/75 to-mba-dark/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-mesh-pattern bg-cover opacity-40"></div>
        <div className="absolute inset-0 bg-dots-pattern bg-dots-md opacity-25"></div>

        {/* Animated glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-teal opacity-25 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-pink opacity-25 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Master Analytics <span className="gradient-text">With Our Courses</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Learn from JC De las Alas through our comprehensive analytics courses designed to help you build in-demand skills and advance your career.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Coaching Info */}
            <div>
              <h2 className="text-3xl font-bold text-mba-dark mb-6">
                Comprehensive Analytics Courses
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're just starting your analytics journey or looking to advance to the next level, our comprehensive courses are designed to help you master the tools and techniques needed for success in today's data-driven world.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-mba-teal mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-mba-dark text-lg">Personalized Learning Path</h3>
                    <p className="text-gray-600">Custom curriculum tailored to your specific goals and current skill level</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-mba-teal mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-mba-dark text-lg">Hands-on Project Guidance</h3>
                    <p className="text-gray-600">Work on real-world projects with direct feedback and guidance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-mba-teal mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-mba-dark text-lg">Career Strategy Sessions</h3>
                    <p className="text-gray-600">Get advice on job searching, interviewing, and positioning yourself for analytics roles</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-mba-teal mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-mba-dark text-lg">Ongoing Support</h3>
                    <p className="text-gray-600">Access to private communication channels for questions between sessions</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-8">
                <div className="h-16 w-16 rounded-full overflow-hidden mr-4 shadow-md flex-shrink-0">
                  <img src="/JCcloseup.jpg" alt="JC De las Alas" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-mba-dark font-bold">JC De las Alas</h3>
                  <p className="text-gray-600">Analytics Coach & Mentor</p>
                  <div className="text-mba-teal mt-1">
                    <span className="text-sm">★★★★★</span>
                    <span className="text-gray-600 text-sm ml-1">4.9/5 from 200+ students</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Pricing */}
            <div className="glass-dark rounded-xl p-8 text-white border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-mba-teal/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-mba-pink/20 to-transparent rounded-tr-full"></div>

              <div className="relative z-10 h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                      <h3 className="text-2xl font-bold mb-6">Featured Analytics Courses</h3>

                      {/* Course Highlight */}
                      <div className="bg-white/10 rounded-lg p-6 mb-6 text-center">
                        <BookOpen className="h-12 w-12 mx-auto mb-4 text-mba-teal" />
                        <p className="text-white mb-4">
                          Ready to accelerate your analytics career? Enroll in our most popular course.
                        </p>
                        <Button
                          className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90 w-full transition-all duration-300 relative overflow-hidden group"
                        >
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50"></span>
                          <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-full"></span>
                          <Link to="/courses" className="flex items-center justify-center relative z-10 w-full">
                            Enroll Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <p className="text-xs text-gray-300 mt-4">
                          * 30-day money-back guarantee
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-white/20">
                          <span>Data Analytics Fundamentals</span>
                          <span className="font-bold">$199</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/20">
                          <span>Power BI Masterclass</span>
                          <span className="font-bold">$249 <span className="text-xs line-through text-gray-400 ml-1">$299</span></span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/20">
                          <span>SQL for Data Analysis</span>
                          <span className="font-bold">$199 <span className="text-xs line-through text-gray-400 ml-1">$249</span></span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-300 mt-6">
                        All courses include lifetime access, project files, assignments, and community support.
                      </p>
                    </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mba-dark mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who have transformed their careers through our analytics courses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                  MJ
                </div>
                <div>
                  <h3 className="font-bold text-mba-dark">Michael Johnson</h3>
                  <p className="text-gray-500 text-sm">Marketing Manager → Data Analyst</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "JC's Data Analytics Fundamentals course helped me transition from marketing to analytics in just 4 months. The hands-on projects gave me the confidence to apply for analytics roles."
              </p>
              <div className="text-mba-teal">★★★★★</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                  RL
                </div>
                <div>
                  <h3 className="font-bold text-mba-dark">Rebecca Lee</h3>
                  <p className="text-gray-500 text-sm">Financial Analyst → BI Developer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The Power BI Masterclass transformed my career. I went from basic Excel to building complex dashboards that impressed my management team and led to a promotion."
              </p>
              <div className="text-mba-teal">★★★★★</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                  DP
                </div>
                <div>
                  <h3 className="font-bold text-mba-dark">David Patel</h3>
                  <p className="text-gray-500 text-sm">Operations Manager → Analytics Lead</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The SQL for Data Analysis course was exactly what I needed to advance my career. The skills I learned helped me implement analytics solutions that saved my company thousands of dollars."
              </p>
              <div className="text-mba-teal">★★★★★</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mba-dark mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-mba-dark text-xl mb-2">How do the courses work?</h3>
              <p className="text-gray-600">
                Our courses are self-paced and available online 24/7. Each course includes video lessons, downloadable resources, practical exercises, and projects. You'll have lifetime access to all course materials and updates.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-mba-dark text-xl mb-2">What tools and technologies do you cover?</h3>
              <p className="text-gray-600">
                I specialize in Power BI, SQL, Excel, and data visualization techniques. I can also provide guidance on Python, R, and AI tools for analytics depending on your needs and goals.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-mba-dark text-xl mb-2">Do I need prior experience in analytics?</h3>
              <p className="text-gray-600">
                No prior experience is required. I work with clients at all levels, from complete beginners to experienced analysts looking to advance their skills.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-mba-dark text-xl mb-2">What's your refund policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee on all our courses. If you're not satisfied with your purchase, simply contact our support team within 30 days for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-mba-teal to-mba-pink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Master Analytics Skills?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Enroll in our courses today and take the first step toward advancing your analytics career.
          </p>
          <Link to="/courses">
            <Button
              size="lg"
              className="bg-white text-mba-dark hover:bg-gray-100 rounded-full px-8 py-6 h-auto font-bold text-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/5 to-transparent opacity-50"></span>
              <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-50 rounded-t-full"></span>
              <span className="relative z-10">Enroll in Our Courses Now</span>
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
