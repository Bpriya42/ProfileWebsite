import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Building2, ArrowRight, ChevronDown } from 'lucide-react';

const experiences = [
  {
    title: 'Master of Science - Computer Science',
    company: 'University of Massachusetts, Amherst, MA',
    period: 'Aug 2024 - May 2026',
    logo: './src/components/media/umass_logo.png',
    description: (
      <p>
        <strong>Relevant Courses:</strong> Statistics, Neural Networks, Systems for Data Science, Natural Language Processing, Computer Vision, Software Engineering, Optimization in Machine Learning.
        </p> 
    ),
    achievements: "",
    details: "",
    expandable: false
  },
  {
    title: 'Graduate Full-stack Software Developer',
    company: 'Deloitte Digital, Brisbane, Australia',
    period: 'Jul 2023 - May 2024',
    logo: './src/components/media/deloitte_logo.png',
    description: "Designed and implemented secure authentication systems, data migration solutions, and employee dashboards using Auth0, ASP.NET, and React.js, enhancing security, efficiency, and user experience for Australia's largest foreign exchange provider.",
    achievements: [
      <p><strong>Enhanced Security & User Authentication</strong> – Integrated <strong>Auth0 identity management</strong> and <strong>Multi-Factor Authentication (MFA)</strong>, securing access for <strong>100,000+ users</strong> and reducing authentication-related support issues by <strong>~70%</strong>.</p>,
      
      <p><strong>Optimized Data Migration</strong> – Automated migration of <strong>10,000+ user records</strong> from <strong>SQL Server to Auth0</strong> using <strong>C# encryption and decryption</strong>, reducing manual effort by <strong>90%</strong> and completing the process in minutes.</p>,
    
      <p><strong>Improved Operational Efficiency</strong> – Developed an <strong>internal dashboard application</strong> with <strong>ASP.NET and React.js (TypeScript)</strong>, enabling real-time monitoring of <strong>exchange rates and customer data management</strong>.</p>,
    
      <p><strong>Stakeholder Collaboration & Impact</strong> – Worked closely with <strong>business stakeholders</strong> to translate challenges into <strong>technical solutions</strong>, directly contributing to <strong>streamlined authentication and improved user experience</strong>.</p>
    ],
    details: (
      <p>
        <strong>Skills:</strong> Full-Stack Development, Auth0 Identity Management, 
        Multi-Factor Authentication (MFA), C# Encryption & Decryption, SQL Server, 
        ASP.NET, React.js, TypeScript, RESTful APIs, Data Migration, User Authentication.
      </p>
    ),
    expandable: true
  },
  {
    title: 'Summer Intern - Backend Software Developer',
    company: 'Deloitte Digital, Brisbane, Australia',
    period: 'Aug 2021 – Dec 2021',
    logo: '/media/deloitte_logo.png',
    description: 'Developed backend APIs and multi-currency payment features for Travel Money Oz using ASP.NET and C#, enhancing transaction efficiency, accuracy, and user satisfaction.',
    achievements: [
      <p><strong>Engineered Multi-Currency Payment System</strong> – Developed a <strong>multi-currency payment feature</strong> using <strong>ASP.NET and C#</strong>, enabling users to seamlessly add multiple currencies to travel cards, improving transaction efficiency by <strong>25%</strong> and enhancing customer satisfaction.</p>,
  
      <p><strong>Real-Time Currency Conversion APIs</strong> – Designed and implemented <strong>backend APIs</strong> for <strong>real-time currency conversion</strong> and secure payment processing, ensuring <strong>high accuracy</strong> and system scalability.</p>
    ],
    details: (
      <p>
        <strong>Skills:</strong> Backend Development, ASP.NET, C#, Multi-Currency Transactions, 
        Payment Processing, API Development, Real-Time Data Processing, System Scalability.
      </p>
    ),
    expandable: true
  },
  {
    title: 'Bachelor of Engineering Honors - Electrical and Computer Engineering',
    company: 'University of Queensland, Brisbane, Australia',
    period: 'Jul 2018 – Jun 2023',
    logo: './src/components/media/uq_logo.png',
    description: (
      <p>
        <strong>Relevant Courses:</strong> Data structures and Algorithms, Object Oriented Programming, Machine learning, Operating Systems, Computer Architecture and Organization, Web Design and Development.
        </p> 
    ),
    achievements: "",
    details: "",
    expandable: false
  }
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education & Experience
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2
            });

            const isExpanded = expandedId === index;

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={itemVariants}
                className={`relative ${index % 2 === 0 ? 'ml-0 md:ml-[50%]' : 'mr-0 md:mr-[50%]'}`}
              >
                <div className="absolute top-0 bottom-0 w-px bg-primary/20 left-4 md:left-1/2" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                
                <motion.div 
                  className="ml-12 md:ml-8 bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-xl cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    if (exp.expandable) {
                      setExpandedId(isExpanded ? null : index);
                    }
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bebas text-3xl text-primary">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <Building2 size={16} className="text-primary" />
                        <span className="font-semibold">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <Calendar size={16} className="text-primary" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    {exp.expandable && (
                        <motion.button
                        className="ml-auto"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        >
                        <ChevronDown size={24} className="text-primary" />
                        </motion.button>
                    )}
                  </div>
                  
                  <p className="mb-4 text-text/80">{exp.description}</p>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-primary/20">
                          <p className="mb-4 text-text/80">{exp.details}</p>
                          <h4 className="font-bebas text-xl mb-2">Key Achievements</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ArrowRight size={16} className="text-primary flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;