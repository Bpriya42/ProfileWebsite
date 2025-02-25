import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Film, ChevronDown } from 'lucide-react';

const projects = [
  {
    title: 'Fairness-Aware Facial Recognition Models',
    description: 'Implemented a fairness-aware facial recognition model using the Seldonian framework to reduce racial bias.',
    longDescription: 'Designed a constrained CNN model using PyTorch and scikit-learn, analyzing fairness metrics with the FairFace dataset. Achieved 95% compliance with fairness constraints while maintaining high accuracy and low constraint violation probability, outperforming baseline models like ResNet50 and VGG16.',
    image: 'src/components/facial_recog.jpeg',
    tags: ['PyTorch', 'Scikit-learn', 'CNN', 'Fairness-Aware AI'],
    github: 'https://github.com/Bpriya42/bias-reduction-facial-recognition',
    features: [
      'Reduces racial bias in facial recognition',
      'Constrained CNN model design',
      'FairFace dataset evaluation',
      'Outperforms ResNet50 and VGG16'
    ]
  },
  {
    title: 'Indoor Air Quality Indicator with Mechanical Plant Avatar',
    description: 'Developed a machine learning-based air quality classifier with real-time IoT data streaming.',
    longDescription: 'Directed firmware development for an indoor air quality monitoring system using environmental sensors and BLE-based real-time IoT data streaming. Built a machine learning classifier achieving 80% accuracy in air quality condition classification.',
    image: 'src/components/air_quality.webp',
    tags: ['IoT', 'Machine Learning', 'BLE', 'Embedded Systems'],
    github: 'https://github.com/Bpriya42/Vidar-Blue/wiki/1.-Project-Overview',
    features: [
      'Real-time air quality monitoring',
      'BLE-based IoT data streaming',
      'ML-based air quality classification',
      '80% classification accuracy'
    ]
  }
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedId === index;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`group relative card-bg rounded-lg border card-border shadow-xl overflow-hidden ${
                  isExpanded ? 'md:col-span-2 lg:col-span-3 transition-all duration-500' : ''
                }`}
              >
                <div className={`${isExpanded ? 'md:grid md:grid-cols-2 gap-6' : ''}`}>
                  <div className={`aspect-video overflow-hidden ${isExpanded ? 'md:aspect-auto md:h-full' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bebas text-2xl mb-2 flex items-center gap-2">
                      <Film className="text-primary" />
                      {project.title}
                    </h3>
                    <p className="text-text/80 mb-4">{isExpanded ? project.longDescription : project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-sm bg-primary/10 text-primary rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Demo</span>
                      </a>
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : index)}
                        className="ml-auto flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        <span>{isExpanded ? 'Less' : 'More'}</span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-primary/20">
                            <h4 className="font-bebas text-xl mb-2">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <Film size={16} className="text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 border-2 border-primary/20 rounded-lg opacity-0 group-hover:opacity-20"
                  animate={{
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;