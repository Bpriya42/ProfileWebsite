import React from 'react';
import { motion } from 'framer-motion';
import { Film, Download } from 'lucide-react';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const bioLines = [
    "Master of Science in Computer Science,",
    "University of Massachusetts Amherst",
    "Machine Learning & AI Specialization,",
    "Full-Stack Software Developer."
  ];

  return (
    <section className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      <div className="film-grain"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl mb-4">
              <span className="text-primary">Hi!</span>
              <br />
              I'm Priya
            </h1>
            
            <div className="space-y-2 mb-8">
              {bioLines.map((line, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textVariants}
                  className="text-lg md:text-xl opacity-80 font-lora"
                  style={{ fontFamily: "'Courier Prime', monospace" }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-primary text-background font-bebas text-xl rounded hover:bg-primary/90 transition-colors"
              >
                <Film className="mr-2" />
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-bebas text-xl rounded hover:bg-primary/10 transition-colors group"
              >
                <Download className="mr-2 transition-transform group-hover:translate-y-1" />
                Download CV
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <img
                src="./src/components/Profile_pic.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 border-4 border-primary rounded-full opacity-20 transform scale-110"></div>
            <motion.div
              className="absolute inset-0 border-4 border-primary rounded-full opacity-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;