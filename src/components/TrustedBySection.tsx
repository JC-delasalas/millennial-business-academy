
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Users, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const TrustedBySection = () => {
  // Company logos would be replaced with actual images
  const companies = [
    { name: "Microsoft", industry: "Technology" },
    { name: "Amazon", industry: "E-commerce" },
    { name: "Deloitte", industry: "Consulting" },
    { name: "JP Morgan", industry: "Finance" },
    { name: "Salesforce", industry: "SaaS" },
    { name: "Adobe", industry: "Software" },
  ];

  // Stats to display
  const stats = [
    {
      icon: <Building2 className="h-6 w-6 text-mba-teal" />,
      value: "500+",
      label: "Companies"
    },
    {
      icon: <Users className="h-6 w-6 text-mba-pink" />,
      value: "15,000+",
      label: "Professionals"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-mba-accent" />,
      value: "92%",
      label: "Career Growth"
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      value: "4.9/5",
      label: "Satisfaction"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark-gradient"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-dots-pattern bg-dots-md opacity-10"></div>

      {/* Animated glow effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-glow-teal opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-glow-pink opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-white text-sm font-medium">TRUSTED BY INDUSTRY LEADERS</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Empowering Data-Driven <span className="gradient-text">Decision Making</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Join hundreds of forward-thinking companies that trust MBA to develop their teams' analytics capabilities
          </motion.p>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-dark rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company logos carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
          ref={sectionRef}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="py-4">
              {companies.map((company, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                  <motion.div
                    className="glass-dark h-20 rounded-xl flex flex-col items-center justify-center border border-white/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + (index * 0.05), duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 0 20px rgba(77, 207, 217, 0.3)",
                      borderColor: "rgba(77, 207, 217, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-white font-bold">{company.name}</span>
                    <span className="text-gray-400 text-xs mt-1">{company.industry}</span>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2" />
              <CarouselNext className="relative static right-0 left-auto translate-y-0" />
            </div>
          </Carousel>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Elevate your team's analytics skills with personalized coaching from JC De las Alas, helping your organization make data-driven decisions.
          </p>
          <Button
            className="btn-modern bg-gradient-to-r from-mba-teal to-mba-pink text-white rounded-full px-5 sm:px-8 py-3 sm:py-6 h-auto relative overflow-hidden group shadow-lg hover:shadow-xl animate-pulse-slow"
            asChild
          >
            <Link to="/coaching">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50"></span>
              <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-full"></span>
              <span className="absolute -inset-1 bg-gradient-to-r from-mba-teal/30 to-mba-pink/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="btn-modern-content relative z-10 text-sm sm:text-base">
                <span className="hidden sm:inline">Start Your Analytics Journey</span>
                <span className="sm:hidden">Start Now</span>
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBySection;
