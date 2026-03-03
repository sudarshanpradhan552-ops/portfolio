'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { TypeAnimation } from 'react-type-animation';

export default function Contact() {
  const containerRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('MsHxafdEwVKZGFfzt');
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) {
      toast.error('Form reference not found');
      setIsSubmitting(false);
      return;
    }

    try {
      // Add time to the form data
      const formDataWithTime = new FormData(formRef.current);
      formDataWithTime.append('time', new Date().toLocaleString());

      console.log('Sending form data:', Object.fromEntries(formDataWithTime));

      const result = await emailjs.sendForm(
        'service_bsm5a2f',
        'template_2a7qs3r',
        formRef.current,
        'MsHxafdEwVKZGFfzt'
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`Failed with status: ${result.status}`);
      }
    } catch (error) {
      console.error('Detailed error:', error);
      if (error instanceof Error) {
        toast.error(`Failed to send message: ${error.message}`);
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden" ref={containerRef}>
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
            Contact Me
            <span className="text-[#ff6b00]">/&gt;</span>
          </h2>
          <p className="text-[#a3a3a3] font-mono">Let&apos;s work together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/40 to-[#ff8533]/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-[#1a1a1a] rounded-lg p-8 border border-[#ff6b00]/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/15 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff6b00]/15 rounded-full blur-3xl transform -translate-x-16 translate-y-16" />

                <div className="relative z-10 space-y-6">
                  <div className="font-mono text-[#a3a3a3]">
                    <span className="text-[#ff6b00]">$</span> cat contact.txt
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <FaEnvelope className="w-6 h-6 text-[#ff6b00]" />
                      <div>
                        <p className="text-[#ffffff] font-mono">Email</p>
                        <p className="text-[#a3a3a3] font-mono">sudarshanpradhan552@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <FaMapMarkerAlt className="w-6 h-6 text-[#ff6b00]" />
                      <div>
                        <p className="text-[#ffffff] font-mono">Location</p>
                        <p className="text-[#a3a3a3] font-mono">Bhubaneswar, India</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <FaPhone className="w-6 h-6 text-[#ff6b00]" />
                      <div>
                        <p className="text-[#ffffff] font-mono">Phone</p>
                        <p className="text-[#a3a3a3] font-mono">+91 8658029967</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Transitions */}
            <TypeAnimation
              sequence={[
                'class MessageProcessor {',
                1000,
                'class MessageProcessor {\n  async processMessage(message) {',
                1000,
                'class MessageProcessor {\n  async processMessage(message) {\n    // Validating message...',
                1000,
                'class MessageProcessor {\n  async processMessage(message) {\n    // Validating message...\n    // Encrypting data...',
                1000,
                'class MessageProcessor {\n  async processMessage(message) {\n    // Validating message...\n    // Encrypting data...\n    // Sending to server...',
                1000,
                'class MessageProcessor {\n  async processMessage(message) {\n    // Validating message...\n    // Encrypting data...\n    // Sending to server...\n    return "Message sent successfully!";',
                1000,
                'class MessageProcessor {\n  async processMessage(message) {\n    // Validating message...\n    // Encrypting data...\n    // Sending to server...\n    return "Message sent successfully!";\n  }\n}',
                1000,
              ]}
              wrapper="div"
              speed={50}
              className="text-[#ffffff] whitespace-pre font-mono"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/40 to-[#ff8533]/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-[#1a1a1a] rounded-lg p-8 border border-[#ff6b00]/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/15 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff6b00]/15 rounded-full blur-3xl transform -translate-x-16 translate-y-16" />

              <h3 className="text-2xl font-bold text-[#ffffff] mb-6 font-mono">
                <span className="text-[#ff6b00]">#</span> Send Message
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#a3a3a3] font-mono mb-2">
                    <span className="text-[#ff6b00]">$</span> name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-[#ff6b00]/20 rounded-md px-4 py-2 text-[#ffffff] font-mono focus:outline-none focus:border-[#ff6b00]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#a3a3a3] font-mono mb-2">
                    <span className="text-[#ff6b00]">$</span> email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-[#ff6b00]/20 rounded-md px-4 py-2 text-[#ffffff] font-mono focus:outline-none focus:border-[#ff6b00]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#a3a3a3] font-mono mb-2">
                    <span className="text-[#ff6b00]">$</span> message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-[#1a1a1a] border border-[#ff6b00]/20 rounded-md px-4 py-2 text-[#ffffff] font-mono focus:outline-none focus:border-[#ff6b00]"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#ff6b00]/20 text-[#ff6b00] rounded-md hover:bg-[#ff6b00]/30 transition-colors font-mono font-medium disabled:opacity-50 disabled:cursor-not-allowed border border-[#ff6b00]/30"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 