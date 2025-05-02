import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarDays, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import BookingEmbed from '@/components/BookingEmbed';

const Coaching = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

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
              Accelerate Your Analytics <span className="gradient-text">Career Growth</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Work directly with JC De las Alas to master analytics tools and transform your career through personalized coaching and mentorship.
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
                Personalized Analytics Coaching
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're just starting your analytics journey or looking to advance to the next level, my personalized coaching program is designed to help you master the tools and techniques needed for success in today's data-driven world.
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

            {/* Right Column - GHL Embed and Pricing */}
            <div className="glass-dark rounded-xl p-8 text-white border border-white/10 relative overflow-hidden transition-all duration-500" style={{ minHeight: showBookingForm ? '700px' : 'auto' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-mba-teal/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-mba-pink/20 to-transparent rounded-tr-full"></div>

              <div className="relative z-10 h-full">
                <AnimatePresence mode="wait">
                  {!showBookingForm ? (
                    <motion.div
                      key="pricing-card"
                      initial={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="h-full"
                    >
                      <h3 className="text-2xl font-bold mb-6">Start Your Analytics Journey</h3>

                      {/* GHL Embed Placeholder - Replace with actual GHL embed code */}
                      <div className="bg-white/10 rounded-lg p-6 mb-6 text-center">
                        <CalendarDays className="h-12 w-12 mx-auto mb-4 text-mba-teal" />
                        <p className="text-white mb-4">
                          Ready to accelerate your analytics career? Schedule your coaching session now.
                        </p>
                        <Button
                          className="bg-gradient-to-r from-mba-teal to-mba-pink hover:opacity-90 w-full transition-all duration-300 relative overflow-hidden group"
                          onClick={() => setShowBookingForm(true)}
                        >
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50"></span>
                          <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-full"></span>
                          <span className="flex items-center justify-center relative z-10">
                            Start Your Journey
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        </Button>
                        <p className="text-xs text-gray-300 mt-4">
                          * This will open the booking form directly in this card
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-white/20">
                          <span>Single Session (90 min)</span>
                          <span className="font-bold">$199</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/20">
                          <span>4-Session Package</span>
                          <span className="font-bold">$699 <span className="text-xs line-through text-gray-400 ml-1">$796</span></span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/20">
                          <span>8-Session Package</span>
                          <span className="font-bold">$1299 <span className="text-xs line-through text-gray-400 ml-1">$1592</span></span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-300 mt-6">
                        All packages include personalized learning materials, project reviews, and email support between sessions.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="booking-form"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="h-full"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold">Book Your Session</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowBookingForm(false)}
                          className="text-white hover:bg-white/10"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="h-[600px] rounded-lg overflow-hidden">
                        <BookingEmbed className="h-full w-full" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              Hear from professionals who have transformed their careers through our coaching program
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
                "JC's coaching helped me transition from marketing to analytics in just 4 months. His personalized approach and real-world projects gave me the confidence to apply for analytics roles."
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
                "Working with JC transformed my career. I went from basic Excel to building complex Power BI dashboards that impressed my management team and led to a promotion."
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
                "JC's coaching program was exactly what I needed to advance my career. His guidance on SQL and data visualization helped me implement analytics solutions that saved my company thousands."
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
              <h3 className="font-bold text-mba-dark text-xl mb-2">How do the coaching sessions work?</h3>
              <p className="text-gray-600">
                Sessions are conducted via Zoom and last 90 minutes. We'll focus on your specific goals, review your progress, work through challenges, and set actionable next steps. All sessions are recorded for your reference.
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
                If you're not satisfied with your first session, I offer a 100% money-back guarantee. For packages, unused sessions can be refunded on a prorated basis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-mba-teal to-mba-pink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Analytics Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step toward mastering analytics tools and advancing your career.
          </p>
          <Button
            size="lg"
            className="bg-white text-mba-dark hover:bg-gray-100 rounded-full px-8 py-6 h-auto font-bold text-lg relative overflow-hidden group"
            onClick={() => {
              setShowBookingForm(true);
              // Scroll to the booking form section
              const element = document.querySelector('.glass-dark');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/5 to-transparent opacity-50"></span>
            <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-50 rounded-t-full"></span>
            <span className="relative z-10">Start Your Analytics Journey Now</span>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Coaching;
