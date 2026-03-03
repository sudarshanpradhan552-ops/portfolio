import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiGit, SiDocker, SiJest } from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    icon: <FaReact className="w-6 h-6" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    icon: <FaNodeJs className="w-6 h-6" />,
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL']
  },
  {
    category: 'Database',
    icon: <FaDatabase className="w-6 h-6" />,
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma']
  },
  {
    category: 'Tools',
    icon: <FaTools className="w-6 h-6" />,
    items: ['Git', 'Docker', 'Jest', 'CI/CD']
  }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const trainVariants = {
  initial: { x: '-100%' },
  animate: {
    x: '100%',
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-3 relative">
                {skill.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    className="flex items-center relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent"
                      initial="initial"
                      animate="animate"
                      variants={trainVariants}
                      style={{
                        width: '200%',
                        height: '100%',
                        opacity: 0.5
                      }}
                    />
                    <span className="text-gray-700 relative z-10">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 