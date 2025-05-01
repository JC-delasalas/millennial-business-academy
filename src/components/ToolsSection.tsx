
import React from 'react';
import { motion } from 'framer-motion';

const ToolsSection = () => {
  const tools = [
    { name: "Power BI", color: "#F2C811" },
    { name: "Tableau", color: "#E97627" },
    { name: "Excel", color: "#217346" },
    { name: "Python", color: "#3776AB" },
    { name: "SQL", color: "#336791" },
    { name: "R", color: "#276DC3" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-mba-dark mb-4">
            Master the Most In-Demand Analytics Tools
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our curriculum is built around the tools that top employers are hiring for right now
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.div 
              key={index} 
              className="h-16 flex items-center justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className="h-12 w-36 rounded-md flex items-center justify-center text-white font-semibold shadow-md"
                style={{ backgroundColor: tool.color }}
              >
                {tool.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsSection;
