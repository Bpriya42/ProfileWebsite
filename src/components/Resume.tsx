import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Code2 } from 'lucide-react';

// Skills data
const categories = ['LANGUAGES', 'ML & AI', 'BACKEND', 'FRONTEND', 'CLOUD', 'DATA', 'IOT', 'TOOLS'] as const;
type Category = 'Programming Languages' | 'Machine Learning & AI' | 'Backend Development' | 'Frontend Development' | 'Cloud & DevOps' | 'Data & Database Management' | 'IoT & Embedded Systems' | 'Tools & Platforms';

const categoryMap: Record<typeof categories[number], Category> = {
  'LANGUAGES': 'Programming Languages',
  'ML & AI': 'Machine Learning & AI',
  'BACKEND': 'Backend Development',
  'FRONTEND': 'Frontend Development',
  'CLOUD': 'Cloud & DevOps',
  'DATA': 'Data & Database Management',
  'IOT': 'IoT & Embedded Systems',
  'TOOLS': 'Tools & Platforms'
};

const skillCategories = [
  {
    name: 'Programming Languages' as Category,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C#', level: 95 },
      { name: 'SQL', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'R', level: 75 }
    ]
  },
  {
    name: 'Machine Learning & AI' as Category,
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 85 },
      { name: 'Keras', level: 80 }
    ]
  },
  {
    name: 'Backend Development' as Category,
    skills: [
      { name: 'ASP.NET', level: 90 },
      { name: '.NET Framework', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'RESTful APIs', level: 90 }
    ]
  },
  {
    name: 'Frontend Development' as Category,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML5 and CSS3', level: 80 }
    ]
  },
  {
    name: 'Cloud & DevOps' as Category,
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'Kubernetes', level: 70 }
    ]
  },
  {
    name: 'Data & Database Management' as Category,
    skills: [
      { name: 'MySQL', level: 95 },
      { name: 'SQL Server', level: 95 },
      { name: 'Tableau', level: 80 }
    ]
  },
  {
    name: 'IoT & Embedded Systems' as Category,
    skills: [
      { name: 'PySerial', level: 85 },
      { name: 'paho-mqtt', level: 85 },
      { name: 'Firmware Development', level: 80 }
    ]
  },
  {
    name: 'Tools & Platforms' as Category,
    skills: [
      { name: 'Linux', level: 95 },
      { name: 'Git', level: 95 },
      { name: 'Postman', level: 95 },
      { name: 'Bash', level: 75 }
    ]
  }
];

const Resume = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Machine Learning & AI');
  
  const currentSkills = skillCategories.find(cat => cat.name === selectedCategory)?.skills || [];

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills and Resume
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Resume Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src='media/resume_preview.png'
                alt="Resume Preview"
                className="w-full h-full object-cover"
              />
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
            </div>
            
            <a
              href="media/Priya_resume_final.pdf"
              download
              className="group flex items-center justify-center gap-4 p-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all font-bebas text-xl mx-auto max-w-md"
            >
              <Download size={24} />
              DOWNLOAD RESUME
            </a>
          </motion.div>

          {/* Skills Section - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Category Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((shortCategory) => {
                const fullCategory = categoryMap[shortCategory];
                return (
                  <button
                    key={shortCategory}
                    onClick={() => setSelectedCategory(fullCategory)}
                    className={`px-4 py-2 rounded-full font-bebas text-sm whitespace-nowrap transition-all ${
                      selectedCategory === fullCategory
                        ? 'bg-red-600 text-white'
                        : 'bg-red-600/20 text-red-600 hover:bg-red-600/30'
                    }`}
                  >
                    {shortCategory}
                  </button>
                );
              })}
            </div>

            {/* Skills Display */}
            <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Code2 size={24} className="text-primary" />
                  <h3 className="font-bebas text-2xl uppercase">{selectedCategory}</h3>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {currentSkills.map((skill, index) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-lg">{skill.name}</span>
                      </div>
                      <div className="h-3 bg-background rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-red-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;