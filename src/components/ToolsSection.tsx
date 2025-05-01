
import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3, Table, Sparkles, LineChart, BrainCircuit } from 'lucide-react';

const ToolsSection = () => {
  const skills = [
    {
      name: "SQL",
      icon: <Database className="h-8 w-8 text-white" />,
      color: "from-blue-500 to-blue-600",
      description: "Master database queries and data manipulation"
    },
    {
      name: "Power BI",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      color: "from-purple-500 to-purple-600",
      description: "Create interactive dashboards and reports"
    },
    {
      name: "Excel",
      icon: <Table className="h-8 w-8 text-white" />,
      color: "from-mba-teal to-teal-600",
      description: "Advanced spreadsheet analysis and modeling"
    },
    {
      name: "Data Visualization",
      icon: <LineChart className="h-8 w-8 text-white" />,
      color: "from-green-500 to-green-600",
      description: "Transform complex data into clear insights"
    },
    {
      name: "AI for Analytics",
      icon: <BrainCircuit className="h-8 w-8 text-white" />,
      color: "from-amber-500 to-amber-600",
      description: "Leverage ChatGPT and AI tools for data analysis"
    },
    {
      name: "Career Transition",
      icon: <Sparkles className="h-8 w-8 text-white" />,
      color: "from-mba-pink to-pink-600",
      description: "Shift to analytics roles from any background"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-dots-pattern bg-dots-lg opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-1 rounded-full bg-mba-teal/10 text-mba-teal mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium">ANALYTICS TOOLS</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-mba-dark mb-4">
            Master Essential <span className="gradient-text">Analytics Tools</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our interactive courses focus on in-demand analytics tools and skills that drive career growth and business insights
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass-card hover:shadow-xl group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-mba-dark mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">JD</div>
                        <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">KL</div>
                        <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">+3</div>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">1,240 enrolled</span>
                    </div>
                    <div className="text-mba-teal text-sm font-medium">Learn More →</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsSection;
