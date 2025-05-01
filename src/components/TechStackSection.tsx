import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from '@iconify/react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Analytics tools with their logos and colors
  const analyticsTech: TechItem[] = [
    { name: "Power BI", icon: <Icon icon="simple-icons:powerbi" className="w-4 h-4" />, color: "bg-yellow-500" },
    { name: "SQL", icon: <Icon icon="simple-icons:mysql" className="w-4 h-4" />, color: "bg-blue-500" },
    { name: "Excel", icon: <Icon icon="simple-icons:microsoftexcel" className="w-4 h-4" />, color: "bg-green-500" },
    { name: "Python", icon: <Icon icon="simple-icons:python" className="w-4 h-4" />, color: "bg-blue-600" },
    { name: "Tableau", icon: <Icon icon="simple-icons:tableau" className="w-4 h-4" />, color: "bg-blue-400" },
    { name: "R", icon: <Icon icon="simple-icons:r" className="w-4 h-4" />, color: "bg-blue-700" },
  ];

  // Data visualization tools
  const visualizationTech: TechItem[] = [
    { name: "D3.js", icon: <Icon icon="simple-icons:d3dotjs" className="w-4 h-4" />, color: "bg-orange-500" },
    { name: "Matplotlib", icon: <Icon icon="simple-icons:python" className="w-4 h-4" />, color: "bg-purple-500" },
    { name: "Plotly", icon: <Icon icon="simple-icons:plotly" className="w-4 h-4" />, color: "bg-indigo-500" },
    { name: "Seaborn", icon: <Icon icon="simple-icons:python" className="w-4 h-4" />, color: "bg-teal-500" },
    { name: "ggplot2", icon: <Icon icon="simple-icons:r" className="w-4 h-4" />, color: "bg-pink-500" },
    { name: "Highcharts", icon: <Icon icon="simple-icons:javascript" className="w-4 h-4" />, color: "bg-cyan-500" },
  ];

  // AI and ML tools
  const aiTech: TechItem[] = [
    { name: "TensorFlow", icon: <Icon icon="simple-icons:tensorflow" className="w-4 h-4" />, color: "bg-orange-600" },
    { name: "PyTorch", icon: <Icon icon="simple-icons:pytorch" className="w-4 h-4" />, color: "bg-red-500" },
    { name: "scikit-learn", icon: <Icon icon="simple-icons:scikitlearn" className="w-4 h-4" />, color: "bg-blue-500" },
    { name: "ChatGPT", icon: <Icon icon="simple-icons:openai" className="w-4 h-4" />, color: "bg-green-600" },
    { name: "Hugging Face", icon: <Icon icon="simple-icons:huggingface" className="w-4 h-4" />, color: "bg-yellow-600" },
    { name: "Keras", icon: <Icon icon="simple-icons:keras" className="w-4 h-4" />, color: "bg-red-600" },
  ];

  // Render a tech item with icon
  const renderTechItem = (tech: TechItem, index: number) => {
    return (
      <motion.div
        key={tech.name}
        className="rounded-md px-3 py-1.5 flex items-center space-x-2 backdrop-blur-sm bg-black/30 border border-white/10 hover:bg-white/10 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 * index, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="flex items-center justify-center text-white">
          {tech.icon}
        </div>
        <span className="text-white font-medium text-sm">{tech.name}</span>
      </motion.div>
    );
  };

  return (
    <div className="py-24 bg-[#0f1118] relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-dots-pattern bg-dots-lg opacity-5"></div>

      {/* Animated glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-teal opacity-20 blur-3xl"
        style={{ y }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-pink opacity-20 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
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
            className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-white text-sm font-medium">ANALYTICS TOOLKIT</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Analytics <span className="text-mba-teal">Tools</span> & <span className="text-mba-pink">Libraries</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Learn to use these powerful analytics tools to transform raw data into actionable business insights
          </motion.p>
        </motion.div>

        {/* Tech stack grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Analytics Tools */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {analyticsTech.map((tech, index) => renderTechItem(tech, index))}
          </motion.div>

          {/* Data Visualization Tools */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {visualizationTech.map((tech, index) => renderTechItem(tech, index))}
          </motion.div>

          {/* AI and ML Tools */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {aiTech.map((tech, index) => renderTechItem(tech, index))}
          </motion.div>
        </div>

        {/* Floating elements that move with scroll */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 opacity-20"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]), opacity }}
        >
          <div className="w-full h-full bg-mba-teal rounded-full blur-3xl"></div>
        </motion.div>

        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 opacity-20"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]), opacity }}
        >
          <div className="w-full h-full bg-mba-pink rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackSection;
