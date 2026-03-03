'use client';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: 'Frontend Development',
      icon: <FaCode className="w-8 h-8" />,
      description: 'Building responsive and interactive user interfaces using modern frameworks like React and TailwindCSS. Creating seamless user experiences with attention to detail and performance optimization.',
      technologies: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend Development',
      icon: <FaServer className="w-8 h-8" />,
      description: 'Developing robust and scalable server-side applications. Implementing FastAPIs, database management, and server architecture using Flask and Django',
      technologies: ['Flask', 'Django', 'FastAPI', 'MySQL', 'Docker']
    },
    {
      title: 'AI/ML Development',
      icon: <FaBrain className="w-8 h-8" />,
      description: 'Creating intelligent applications using machine learning and artificial intelligence. Implementing predictive models, natural language processing, and computer vision solutions.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'OpenCV']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#ffffff] mb-4 font-mono">
            <span className="text-[#ff6b00]">&lt;</span>
            Services
            <span className="text-[#ff6b00]">/&gt;</span>
          </h2>
          <p className="text-[#a3a3a3] font-mono">What I can do for you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Enhanced glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/40 to-[#ff8533]/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00]/30 to-transparent rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b00]/30 to-transparent rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
              
              <div className="relative bg-[#1a1a1a]/90 backdrop-blur-sm rounded-lg p-8 border border-[#ff6b00]/30 group-hover:border-[#ff6b00]/60 transition-all duration-300">
                {/* Terminal dots */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                
                {/* Multiple glow orbs */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff6b00]/20 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:translate-x-20 group-hover:-translate-y-20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#ff6b00]/20 rounded-full blur-3xl transform -translate-x-16 translate-y-16 group-hover:-translate-x-20 group-hover:translate-y-20 transition-all duration-300" />
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#ff6b00]/15 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-all duration-300" />
                
                <div className="relative z-10 pt-8">
                  <div className="text-[#ff6b00] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#ffffff] mb-4 font-mono">
                    {service.title}
                  </h3>
                  <p className="text-[#a3a3a3] mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#333333]/80 backdrop-blur-sm text-[#ff6b00] rounded-full text-sm font-mono border border-[#ff6b00]/20 group-hover:border-[#ff6b00]/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 