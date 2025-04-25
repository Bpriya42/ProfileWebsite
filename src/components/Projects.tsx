import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, ChevronDown } from 'lucide-react';

const projects = [
  {
    title: 'AutoCareers',
    description: 'Built a scalable AI-powered job search platform that automates resume parsing, ATS scoring, and cover letter generation. Improved job search efficiency by 25% with LLM integration, intelligent filtering, and recruiter-user messaging.',
    longDescription: 'AutoCareers is a full-stack AI job search platform designed to reduce job-hunting friction for candidates and streamline hiring for recruiters. Developed with React (TypeScript), FastAPI, MongoDB, and AWS, it incorporates LLM agents for cover letter generation, accurate resume parsing, and job recommendations. It also features recruiter dashboards, user-role segregation, ATS scoring, intelligent filtering, and direct messaging. DevOps pipelines and robust backend APIs ensure production-grade reliability and scalability.y primary contribution was building the **machine learning model using PySpark MLlib** and optimizing it for efficiency. Additionally, I **conducted a comparative analysis of model runtime during both training and testing phases**, evaluating performance with and without parallel processing. This analysis provided insights into the computational advantages of distributed processing in large-scale stock price prediction.',
    image: 'media/autocareers.png',
    tags: ['React (TypeScript)', 'FastAPI', 'MongoDB', 'AWS', 'OpenAI / Together AI', 'GitHub Actions (CI/CD)', 'Pytest / Jest', 'Tailwind & Material UI'],
    github: 'https://github.com/RuchiGupta20/AutoCareers',
    features: [
      'LLM-powered cover letter generation',
      'ATS-based resume parsing with 95% accuracy',
      'Intelligent job filtering & recommendation',
      'Scalable recruiter and applicant portals',
      'Full CI/CD with Postman-tested APIs and production-grade deployment'
    ],
    expandable: true
  },
  {
    title: 'Fairness-Aware Facial Recognition Models',
    description: 'Implemented a fairness-aware facial recognition model using the Seldonian framework to reduce racial bias.',
    longDescription: 'Designed a constrained CNN model using PyTorch and scikit-learn, analyzing fairness metrics with the FairFace dataset. Achieved 95% compliance with fairness constraints while maintaining high accuracy and low constraint violation probability, outperforming baseline models like ResNet50 and VGG16.',
    image: 'media/facial_recog.jpeg',
    tags: ['PyTorch', 'Scikit-learn', 'CNN', 'Fairness-Aware AI'],
    github: 'https://github.com/Bpriya42/bias-reduction-facial-recognition',
    features: [
      'Reduces racial bias in facial recognition',
      'Constrained CNN model design',
      'FairFace dataset evaluation',
      'Outperforms ResNet50 and VGG16'
    ],
    expandable: true
  },
  {
    title: 'Stock Price Prediction with Parallel Processing',
    description: 'Implemented a stock price prediction model using PySpark MLlib with parallel processing for efficiency optimization.',
    longDescription: 'My primary contribution was building the **machine learning model using PySpark MLlib** and optimizing it for efficiency. Additionally, I **conducted a comparative analysis of model runtime during both training and testing phases**, evaluating performance with and without parallel processing. This analysis provided insights into the computational advantages of distributed processing in large-scale stock price prediction.',
    image: 'media/stock_price_prediction.jpeg',
    tags: ['PySpark', 'SQL', 'MLlib', 'Parallel Computing', 'Big Data'],
    github: 'https://github.com/ajc-617/532finalproject/tree/main',
    features: [
      'Data collection from Kaggle and preprocessing with PySpark',
      'Parallel data processing across multiple cores',
      'Stock price prediction using PySpark MLlib',
      'Runtime performance analysis for parallel vs sequential processing'
    ],
    expandable: true
  },
  {
    title: 'Indoor Air Quality Indicator with Mechanical Plant Avatar',
    description: 'Developed a machine learning-based air quality classifier with real-time IoT data streaming.',
    longDescription: 'Directed firmware development for an indoor air quality monitoring system using environmental sensors and BLE-based real-time IoT data streaming. Built a machine learning classifier achieving 80% accuracy in air quality condition classification.',
    image: 'media/air_quality.webp',
    tags: ['IoT', 'Machine Learning', 'BLE', 'Embedded Systems'],
    github: 'https://github.com/Bpriya42/Vidar-Blue/wiki/1.-Project-Overview',
    features: [
      'Real-time air quality monitoring',
      'BLE-based IoT data streaming',
      'ML-based air quality classification',
      '80% classification accuracy'
    ],
    expandable: true
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
                      <Film className="text-primary flex-shrink-0" />
                      <span className="text-left">{project.title}</span>
                    </h3>
                    <p className="text-text/80 mb-4 text-left">{isExpanded ? project.longDescription : project.description}</p>
                    
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
                        className="text-text hover:text-primary transition-colors"
                      >
                        <img
                          src="media/github-mark.png"
                          alt="GitHub Logo"
                          className="w-6 h-6 block dark:hidden"
                        />
                        <img
                          src="media/github-mark-white.png"
                          alt="GitHub Logo"
                          className="w-6 h-6 hidden dark:block"
                        />
                      </a>

                      {project.expandable && (
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : index)}
                          className="ml-auto text-primary hover:text-primary/80 transition-colors"
                        >
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={24} />
                          </motion.div>
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {isExpanded && project.expandable && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-primary/20">
                            <h4 className="font-bebas text-xl mb-2 text-left">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Film size={16} className="text-primary flex-shrink-0 mt-1" />
                                  <span className="text-left">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
