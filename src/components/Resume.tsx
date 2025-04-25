import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src= 'media/resume_preview.png'
              alt="Resume Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" />
            <motion.div
              className="absolute inset-0 border-2 border-primary rounded-lg opacity-20"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 mx-auto text-center md:text-left md:mx-0 max-w-md"
          >
            <div className="prose prose-lg mx-auto md:mx-0">
              <h3 className="font-bebas text-3xl mb-4">Download Options</h3>
              <p className="text-text/80">
                Choose your preferred format to view or download my complete resume, including detailed work history, skills, and achievements.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="media/Priya_resume_final.pdf"
                download
                className="group flex items-center gap-4 p-4 card-bg backdrop-blur-sm rounded-lg border card-border hover:border-primary transition-all"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <FileText size={24} className="text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bebas text-xl">Download PDF</h4>
                  <p className="text-sm text-text/80">High-quality print-ready version</p>
                </div>
                <Download 
                  size={24} 
                  className="text-primary transition-transform group-hover:translate-y-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;