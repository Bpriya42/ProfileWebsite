import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Database, Palette, Cog, GitBranch, Film, Monitor } from 'lucide-react';

// Use shorter category names for mobile display
const categories = ['All', 'Languages', 'ML & AI', 'Backend', 'Frontend', 'Cloud', 'Data', 'IoT', 'Tools'] as const;
type Category = 'All' | 'Programming Languages' | 'Machine Learning & AI' | 'Backend Development' | 'Frontend Development' | 'Cloud & DevOps' | 'Data & Database Management' | 'IoT & Embedded Systems' | 'Tools & Platforms';

// Map short names to full category names
const categoryMap: Record<typeof categories[number], Category> = {
  'All': 'All',
  'Languages': 'Programming Languages',
  'ML & AI': 'Machine Learning & AI',
  'Backend': 'Backend Development',
  'Frontend': 'Frontend Development',
  'Cloud': 'Cloud & DevOps',
  'Data': 'Data & Database Management',
  'IoT': 'IoT & Embedded Systems',
  'Tools': 'Tools & Platforms'
};

const skillCategories = [
  {
    name: 'Programming Languages' as Category,
    icon: Monitor,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C#', level: 95 },
      { name: 'SQL', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'Objective-C', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'R', level: 75 },
      { name: 'Matlab', level: 70 }
    ]
  },
  {
    name: 'Machine Learning & AI' as Category,
    icon: Code2,
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
    icon: Database,
    skills: [
      { name: 'ASP.NET', level: 90 },
      { name: '.NET Framework', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'RESTful APIs', level: 90 },
    ]
  },
  {
    name: 'Frontend Development' as Category,
    icon: Palette,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML5 and CSS3', level: 80 }
    ]
  },
  {
    name: 'Cloud & DevOps' as Category,
    icon: GitBranch,
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'Kubernetes', level: 70 },
    ]
  },
  {
    name: 'Data & Database Management' as Category,
    icon: Globe,
    skills: [
      { name: 'MySQL', level: 95 },
      { name: 'SQL Server', level: 95 },
      { name: 'Tableau', level: 80 }
    ]
  },
  {
    name: 'IoT & Embedded Systems' as Category,
    icon: Film,
    skills: [
      { name: 'PySerial', level: 85 },
      { name: 'paho-mqtt', level: 85 },
      { name: 'Firmware Development', level: 80 },
      { name: 'Environmental Sensor Integration', level: 80 }
    ]
  },
  {
    name: 'Tools & Platforms' as Category,
    icon: Cog,
    skills: [
      { name: 'Linux', level: 95 },
      { name: 'Git', level: 95 },
      { name: 'Postman', level: 95 },
      { name: 'Bash', level: 75 }
    ]
  }
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredCategories = selectedCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.name === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((shortCategory) => {
            const fullCategory = categoryMap[shortCategory];
            return (
              <button
                key={shortCategory}
                onClick={() => setSelectedCategory(fullCategory)}
                className={`px-3 py-2 rounded-full font-bebas text-sm sm:text-lg whitespace-nowrap transition-all ${
                  selectedCategory === fullCategory
                    ? 'bg-primary text-background'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {shortCategory}
              </button>
            );
          })}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              
              return (
                <motion.div
                  key={category.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bebas text-2xl">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-primary opacity-0 group-hover/skill:opacity-100 transition-opacity">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 group-hover:opacity-20"
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;