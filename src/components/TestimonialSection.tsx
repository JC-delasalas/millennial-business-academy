
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-teal-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between p-8 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-left md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <motion.svg 
              className="h-12 w-12 text-mba-teal opacity-50 mb-4" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </motion.svg>
            <motion.p 
              className="text-xl md:text-2xl text-gray-800 font-medium mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              "After completing MBA's Data Analytics Bootcamp, I landed a job offer that doubled my previous salary. The hands-on projects with real business data made all the difference in my interviews. Worth every penny and minute invested!"
            </motion.p>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                {/* Placeholder for profile image */}
                <span className="text-gray-500 text-xs">Photo</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-mba-dark">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Senior Data Analyst at TechCorp</p>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-mba-dark/5 p-6 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center justify-center mb-4">
                <motion.div 
                  className="h-24 w-24 rounded-full border-4 border-mba-teal flex items-center justify-center bg-mba-dark/10"
                  animate={{ 
                    boxShadow: ["0px 0px 0px rgba(77, 207, 217, 0)", "0px 0px 20px rgba(77, 207, 217, 0.5)", "0px 0px 0px rgba(77, 207, 217, 0)"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <img 
                    src="/lovable-uploads/82d4984b-ddc0-4ad2-b0f6-bab8f2528134.png" 
                    alt="MBA Badge" 
                    className="h-16 w-16 object-contain" 
                  />
                </motion.div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-mba-dark">Advanced Data Analytics Certificate</h4>
                <p className="text-sm text-gray-500">Course Completed</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;
