import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from '@iconify/react';

interface ToolItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const AnalyticsToolsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for parallax effect
  const leftX = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Analytics tools with their icons, descriptions, and colors
  const tools: ToolItem[] = [
    {
      name: "Power BI",
      icon: <Icon icon="simple-icons:powerbi" className="w-10 h-10 text-white" />,
      description: "Create interactive dashboards and reports",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "SQL",
      icon: <Icon icon="simple-icons:mysql" className="w-10 h-10 text-white" />,
      description: "Master database queries and data manipulation",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Excel",
      icon: <Icon icon="simple-icons:microsoftexcel" className="w-10 h-10 text-white" />,
      description: "Advanced spreadsheet analysis and modeling",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Tableau",
      icon: <Icon icon="simple-icons:tableau" className="w-10 h-10 text-white" />,
      description: "Powerful data visualization platform",
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "Python",
      icon: <Icon icon="simple-icons:python" className="w-10 h-10 text-white" />,
      description: "Data analysis and machine learning",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "R",
      icon: <Icon icon="simple-icons:r" className="w-10 h-10 text-white" />,
      description: "Statistical computing and graphics",
      color: "from-blue-600 to-blue-700"
    },
  ];

  return (
    <div className="py-24 bg-[#0f1118] relative overflow-hidden" ref={containerRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-dots-pattern bg-dots-lg opacity-5"></div>

      {/* Animated glow effects */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-glow-teal opacity-20 blur-3xl"
        style={{ x: leftX }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-glow-pink opacity-20 blur-3xl"
        style={{ x: rightX }}
      ></motion.div>

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

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Master Essential <span className="text-mba-teal">Analytics</span> <span className="text-mba-pink">Tools</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our interactive courses focus on in-demand analytics tools and skills that drive career growth and business insights
          </motion.p>
        </motion.div>

        {/* Tools display - first row moves left, second row moves right */}
        <div className="space-y-12">
          {/* First row - moves left on scroll */}
          <motion.div
            className="flex space-x-6 mb-8 overflow-hidden"
            style={{ x: leftX }}
          >
            {tools.slice(0, 3).map((tool, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 glass-card p-6 hover:shadow-xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-300">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second row - moves right on scroll */}
          <motion.div
            className="flex space-x-6 overflow-hidden"
            style={{ x: rightX }}
          >
            {tools.slice(3).map((tool, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 glass-card p-6 hover:shadow-xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-300">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsToolsCarousel;
