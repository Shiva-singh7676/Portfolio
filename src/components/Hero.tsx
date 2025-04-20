import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-36">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Shiva Singh
            </span>
          </h1>
          <div className="h-20">
            <TypewriterText
              texts={[
                "Software Engineer",
                "Full-Stack Developer"  
              ]}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-200"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
          >
            Aspiring IT professional with a strong foundation in programming, data structures, and emerging
            technologies.
          </motion.p>
          <motion.a
            href="/shiva_singh_resume.pdf"
            download
            className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Download className="mr-2 relative z-10" size={20} />
            <span className="relative z-10">Download Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-20 blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/484434065_17883706317246273_6158535502423127334_n.webp.jpg"
                alt="Shiva Singh"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;