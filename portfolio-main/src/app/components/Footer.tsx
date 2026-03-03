'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-t border-[#ff6b00]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-[#a3a3a3] font-mono">
            Copyright © {currentYear} By Sudarsan Pradhan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 