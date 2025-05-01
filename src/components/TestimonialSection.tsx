
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

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
              "After completing MBA's Data Analytics Program, I transitioned from marketing to a data analyst role that doubled my previous salary. The hands-on projects with Power BI and SQL made all the difference in my interviews. The ROI on this investment has been incredible!"
            </motion.p>
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                  alt="Sarah Johnson"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-mba-dark">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Data Analyst, Former Marketing Specialist</p>
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
              className="glass-card p-6 rounded-lg"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-mba-teal to-mba-pink flex items-center justify-center">
                  <Award className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-mba-dark">Data Analytics Certificate</h4>
                <p className="text-sm text-gray-500">Course Completed</p>
                <div className="mt-4 flex justify-center">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">5.0 (128 reviews)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;
