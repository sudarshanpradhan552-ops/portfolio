'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Brain Tumor detection using Deep Learning and Neural Network',
    description: ' Trained and developed a convolutional neural network model on 7000+ MRI images, achieving 94% accuracy in tumour detection of the model by the help of functionalities that is implemented are tensorflow, OpenCV, and also many frameworks that is used to developed this model.',
    tools: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
    link: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Breast Cancer Detection using SVM and Fine Needle Aspiration Technique ',
    description: 'Engineered an SVM classifier (Scikit-learn) using FNA datasets, boosting detection precision by 18% and accuracy by 93% ',
    tools: ['Python', 'SVM', 'FNA', 'Tensorflow'],
    link: 'https://github.com/yourusername/project2'
  },
  {
    title: 'Classification of various Medical Images using CNN Technique for Multi Cancer Detection',
    description: 'Trained and developed a convolutional neural network model on 103000+ different types of medical –images, achieving 96% accuracy in tumour detection of the model by the help of many frameworks that is used to developed this model. ',
    tools: ['Python', 'CNN', 'Neural Networks', 'Tensorflow'],
    link: 'https://github.com/yourusername/project3'
  }
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.1) 0%, transparent 50%)',
            opacity: useTransform(scrollYProgress, [0, 1], [0.5, 0])
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          style={{ y, opacity, scale }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#ffffff] mb-4 font-mono">
            <span className="text-[#ff6b00]">&lt;</span>
            Featured Projects
            <span className="text-[#ff6b00]">/&gt;</span>
          </h2>
          <p className="text-[#a3a3a3] font-mono">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/40 to-[#ff8533]/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-[#1a1a1a] rounded-lg p-8 border border-[#ff6b00]/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/15 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff6b00]/15 rounded-full blur-3xl transform -translate-x-16 translate-y-16" />

                {/* Terminal dots */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold text-[#ffffff] font-mono mb-4">
                    {project.title}
                  </h3>
                  <div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg border border-[#ff6b00]/20 mb-6 shadow-[0_0_15px_rgba(255,107,0,0.1)]">
                    <p className="text-[#a3a3a3] font-mono leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, toolIndex) => (
                      <motion.span
                        key={toolIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-[#ff6b00]/20 text-[#ff6b00] rounded-full text-sm font-mono hover:bg-[#ff6b00]/30 hover:shadow-[0_0_10px_rgba(255,107,0,0.3)] transition-all duration-300"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="text-center mt-12 relative z-50 h-16"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <AnimatePresence>
          {showButton && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              type="button"
              onClick={() => window.open('https://github.com/sudarshanpradhan552-ops', '_blank')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b00]/30 text-[#ff6b00] rounded-md hover:bg-[#ff6b00]/40 transition-all duration-300 font-mono font-medium cursor-pointer relative z-50 border border-[#ff6b00]/40"
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 40px rgba(255, 107, 0, 0.6)",
                backgroundColor: "rgba(255, 107, 0, 0.4)"
              }}
              whileTap={{
                scale: 0.9,
                boxShadow: "0 0 20px rgba(255, 107, 0, 0.4)"
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                mass: 1
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.div>
              Show More
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 