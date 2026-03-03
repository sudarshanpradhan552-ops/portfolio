'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaGithub, FaLinux } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiOpencv, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiJavascript, SiMongodb, SiPostgresql, SiDocker, SiTailwindcss, SiVsco, SiSpring, SiMysql, SiApachemaven } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'SQL', icon: FaDatabase, color: '#336791' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Keras', icon: SiKeras, color: '#D00000' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243' },
  { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624' },
  { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Maven', icon: SiApachemaven, color: '#C71A36' },
];

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section id="skills" className="py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00]/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          style={{ y, opacity, scale }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ffffff] mb-4 font-mono">
            <span className="text-[#ff6b00]">&lt;</span>
            Skills
            <span className="text-[#ff6b00]">/&gt;</span>
          </h2>
          <p className="text-[#a3a3a3] font-mono">My technical expertise</p>
        </motion.div>

        {/* Marquee Skills Section */}
        <div className="relative overflow-hidden py-4 sm:py-8">
          <motion.div
            className="flex space-x-6 sm:space-x-12"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center min-w-[100px] sm:min-w-[140px]"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/20 to-[#64ffda]/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative z-10 p-3 sm:p-4">
                    <skill.icon
                      className="w-8 h-8 sm:w-12 sm:h-12"
                      style={{ color: skill.color }}
                    />
                  </div>
                </div>
                <span className="text-[#ccd6f6] font-mono text-xs sm:text-sm mt-2">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 sm:mt-16 relative group"
        >
          {/* Enhanced glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/30 to-[#ff8533]/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00]/20 to-transparent rounded-lg blur-lg opacity-50 group-hover:opacity-70 transition-all duration-300" />

          {/* Content */}
          <div className="relative bg-[#1a1a1a]/90 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-[#ff6b00]/30 overflow-hidden shadow-[0_0_15px_rgba(255,107,0,0.1)] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] transition-all duration-300">
            {/* Dynamic glow elements */}
            <div className="absolute top-0 right-0 w-20 sm:w-40 h-20 sm:h-40 bg-[#ff6b00]/10 rounded-full blur-3xl transform translate-x-8 sm:translate-x-16 -translate-y-8 sm:-translate-y-16 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-20 sm:w-40 h-20 sm:h-40 bg-[#ff6b00]/10 rounded-full blur-3xl transform -translate-x-8 sm:-translate-x-16 translate-y-8 sm:translate-y-16 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-1/2 left-1/2 w-16 sm:w-32 h-16 sm:h-32 bg-[#ff6b00]/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-500" />

            <h3 className="text-xl sm:text-2xl font-bold text-[#ffffff] mb-4 sm:mb-6 font-mono relative z-10">
              <span className="text-[#ff6b00]">#</span> Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8 relative z-10">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[#ff6b00] font-mono text-sm sm:text-base">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript'].map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 sm:px-3 py-1 bg-[#ff6b00]/10 text-[#ff6b00] rounded-full text-xs sm:text-sm font-mono hover:bg-[#ff6b00]/20 hover:shadow-[0_0_10px_rgba(255,107,0,0.2)] transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[#ff6b00] font-mono text-sm sm:text-base">Java Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'JDBC', 'Servlets', 'JSP', 'Maven'].map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 sm:px-3 py-1 bg-[#ff6b00]/10 text-[#ff6b00] rounded-full text-xs sm:text-sm font-mono hover:bg-[#ff6b00]/20 hover:shadow-[0_0_10px_rgba(255,107,0,0.2)] transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[#ff6b00] font-mono text-sm sm:text-base">Database</h4>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'MongoDB', 'PostgreSQL', 'SQL'].map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 sm:px-3 py-1 bg-[#ff6b00]/10 text-[#ff6b00] rounded-full text-xs sm:text-sm font-mono hover:bg-[#ff6b00]/20 hover:shadow-[0_0_10px_rgba(255,107,0,0.2)] transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[#ff6b00] font-mono text-sm sm:text-base">AI/ML & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Git', 'Linux'].map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 sm:px-3 py-1 bg-[#ff6b00]/10 text-[#ff6b00] rounded-full text-xs sm:text-sm font-mono hover:bg-[#ff6b00]/20 hover:shadow-[0_0_10px_rgba(255,107,0,0.2)] transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[#ff6b00] font-mono text-sm sm:text-base">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Touch Typing', 'Communication', 'Problem Solving', 'Team Work', 'Self Learning'].map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 sm:px-3 py-1 bg-[#ff6b00]/10 text-[#ff6b00] rounded-full text-xs sm:text-sm font-mono hover:bg-[#ff6b00]/20 hover:shadow-[0_0_10px_rgba(255,107,0,0.2)] transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 