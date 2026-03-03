'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden" ref={containerRef}>
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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ffffff] mb-4 font-mono">
            <span className="text-[#ff6b00]">&lt;</span>
            About Me
            <span className="text-[#ff6b00]">/&gt;</span>
          </h2>
          <p className="text-[#a3a3a3] font-mono">Get to know me better</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/40 to-[#ff8533]/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-[#1a1a1a] rounded-lg p-6 sm:p-8 border border-[#ff6b00]/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/15 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff6b00]/15 rounded-full blur-3xl transform -translate-x-16 translate-y-16" />

              {/* Terminal dots */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="relative z-10 mt-8">
                {/* Profile Photo */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#ff6b00]/20">
                    <Image
                      src="/images/about-profile.png"
                      alt="Sudarsan Pradhan"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#ffffff] font-mono">Sudarsan Pradhan</h3>
                    <div className="text-[#ff6b00] font-mono">
                      <p>AI/ML Developer Expert</p>
                    </div>
                  </div>
                </div>

                <div className="font-mono text-[#a3a3a3]">
                  <span className="text-[#ff6b00]">$</span> cat profile.txt
                </div>
                <div className="text-[#ffffff] font-mono space-y-4">
                  <TypeAnimation
                    sequence={[
                      "Hi, I'm Sudarsan Pradhan, an enthusiastic and results-driven AI/ML Developer with a passion for turning complex data into actionable insights and intelligent solutions.",
                      2000,
                      "I specialize in building and deploying machine learning and deep learning models for real-world applications, with experience across computer vision, natural language processing.",
                      2000,
                      "Skilled in Python, TensorFlow, Keras, OpenCV, and other core AI tools, I thrive on solving challenging problems and continuously learning new technologies.",
                      2000,
                      "My goal is to contribute to innovative projects that push the boundaries of what AI can do and make a real impact in the tech world.",
                      2000,
                    ]}
                    wrapper="p"
                    speed={50}
                    repeat={Infinity}
                    className="min-h-[60px] text-sm sm:text-base"
                  />
                </div>

                {/* Experience Section */}
                <div className="mt-6">
                  <div className="font-mono text-[#a3a3a3] mb-4">
                    <span className="text-[#ff6b00]">$</span> cat experience.txt
                  </div>
                  <div className="border-l-2 border-[#ff6b00] pl-4">
                    <div className="text-[#ff6b00] font-mono text-sm sm:text-base">
                      <TypeAnimation
                        sequence={[
                          "Intern, Java Full Stack – Pantech e Learning Pvt. Ltd., Chennai (July 2025 – September 2025)",
                          2000,
                          "",
                          0,
                          "MCA Student – GIET Baniatangi (2024 – Present)",
                          2000,
                          "",
                          0,
                          "Aspiring Software Developer – Java, Python, MySQL & React",
                          2000,
                          "",
                          0,
                          "Self-Improvement Seeker – Communication & Professional Skills",
                          2000,
                          "",
                          0,
                        ]}
                        wrapper="div"
                        speed={25}
                        repeat={Infinity}
                      />
                    </div>
                    <div className="text-[#ffffff] font-mono mt-2 text-sm sm:text-base">
                      <TypeAnimation
                        sequence={[
                          "",
                          2000,
                          "Worked as a Java Full Stack Intern at Pantech e Learning Pvt. Ltd., Chennai, gaining hands-on experience in full stack development",
                          2000,
                          "",
                          2000,
                          "Pursuing Master's degree in Computer Application and strengthening technical knowledge in software development",
                          2000,
                          "",
                          2000,
                          "Learning and working with Java, Python, MySQL, and React to build real-world software applications",
                          2000,
                          "",
                          2000,
                          "Actively improving English communication and professional skills to excel in the tech industry",
                          2000,
                          "",
                          2000,
                        ]}
                        wrapper="div"
                        speed={65}
                        repeat={Infinity}
                      />
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div className="mt-6">
                  <div className="font-mono text-[#a3a3a3] mb-4">
                    <span className="text-[#ff6b00]">$</span> cat education.txt
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-2 border-[#ff6b00] pl-4">
                      <h4 className="text-[#ffffff] font-mono text-sm sm:text-base">
                        <TypeAnimation
                          sequence={[
                            "MCA (Masters in Computer Application) (2024-2026)",
                            2000,
                            "GIET Baniatangi",
                            2000,
                          ]}
                          wrapper="span"
                          speed={50}
                          repeat={Infinity}
                        />
                      </h4>
                    </div>

                    <div className="border-l-2 border-[#ff6b00] pl-4">
                      <h4 className="text-[#ffffff] font-mono text-sm sm:text-base">
                        <TypeAnimation
                          sequence={[
                            "BSc (Bachelor of Science) (2021-2024)",
                            2000,
                            "Kalinga Degree College, Astaranga",
                            2000,
                          ]}
                          wrapper="span"
                          speed={50}
                          repeat={Infinity}
                        />
                      </h4>
                    </div>

                    <div className="border-l-2 border-[#ff6b00] pl-4">
                      <h4 className="text-[#ffffff] font-mono text-sm sm:text-base">
                        <TypeAnimation
                          sequence={[
                            "Higher Secondary Certificate (2019-2021)",
                            2000,
                            "Ratanpur Science H S School, Ratanpur",
                            2000,
                          ]}
                          wrapper="span"
                          speed={50}
                          repeat={Infinity}
                        />
                      </h4>
                    </div>

                    <div className="border-l-2 border-[#ff6b00] pl-4">
                      <h4 className="text-[#ffffff] font-mono text-sm sm:text-base">
                        <TypeAnimation
                          sequence={[
                            "Secondary School Certificate (2018-2019)",
                            2000,
                            "Panchayat High School, Kantapada",
                            2000,
                          ]}
                          wrapper="span"
                          speed={50}
                          repeat={Infinity}
                        />
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 mt-8 lg:mt-0"
          >
            {/* Right Side Developer Design with Glow and Complex Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center"
            >
              {/* Animated Background Orbs */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.25, scale: 1.1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-[#ff6b00] rounded-full blur-3xl transform translate-x-16 -translate-y-16"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.25, scale: 1.1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
                  className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-[#ff6b00] rounded-full blur-3xl transform -translate-x-16 translate-y-16"
                />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 w-full h-full">
                {/* Circular Element with Enhanced Glow */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-[#ff6b00]/30 shadow-[0_0_35px_rgba(255,107,0,0.25)] flex items-center justify-center relative flex-shrink-0 backdrop-blur-sm bg-[#1a1a1a]/10"
                >
                  {/* Content inside circle - more complex code fragment */}
                  <div className="text-[#ff6b00]/80 font-mono text-center">
                    <p className="text-sm sm:text-base">class TransformerModel:</p>
                    <p className="text-xs sm:text-sm">  def __init__(self, ...):</p>
                    <p className="text-xs">    # Attention mechanisms</p>
                    <p className="text-xs">    ...</p>
                  </div>
                </motion.div>

                {/* Complex Code Animation Block */}
                <div className="max-w-md w-full flex-grow">
                  <div className="font-mono text-[#a3a3a3] mb-4">
                    <span className="text-[#ff6b00]">$</span> train_model.py
                  </div>
                  <div className="text-[#a3a3a3] font-mono text-xs sm:text-sm whitespace-pre-wrap h-[200px] sm:h-[300px] overflow-hidden backdrop-blur-sm bg-[#1a1a1a]/20 rounded-lg p-4">
                    <TypeAnimation
                      sequence={[
                        "import tensorflow as tf\nfrom tensorflow.keras import layers\n\ndef build_transformer_model(...):\n  # Input layer\n  inputs = tf.keras.Input(shape=(...))\n\n  # Transformer blocks\n  x = layers.MultiHeadAttention(...)(...)\n  x = layers.Dropout(...)(x)\n  # ... more layers ...\n\n  # Output layer\n  outputs = layers.Dense(...)(...)\n\n  model = tf.keras.Model(inputs=inputs, outputs=outputs)\n  return model",
                        5000,
                        "\n\ndef train_transformer(model, dataset, epochs=10):\n  optimizer = tf.keras.optimizers.Adam(...)\n  loss_fn = tf.keras.losses.CategoricalCrossentropy(...)\n\n  model.compile(optimizer=optimizer, loss=loss_fn, metrics=['accuracy'])\n\n  history = model.fit(dataset, epochs=epochs)\n  return history",
                        5000,
                        "\n\n# Example Usage:\nif __name__ == \"__main__\":\n  # Prepare data\n  # Build model\n  model = build_transformer_model(...)\n\n  # Train model\n  train_transformer(model, data, labels)\n\n  print('Training complete. Model saved!')",
                        5000
                      ]}
                      wrapper="div"
                      speed={50}
                      repeat={Infinity}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 