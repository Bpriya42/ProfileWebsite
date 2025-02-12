import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Section } from './components/Section';
import { Timeline } from './components/Timeline';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillCard } from './components/SkillCard';
import { timelineData } from './data/timeline';
import { projectsData } from './data/projects';
import { experienceData } from './data/experience';
import { skillsData } from './data/skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-10 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Priya</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="#timeline" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Timeline</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
              <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Experience</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              <button className="bg-primary-600 dark:bg-primary-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-primary-700 dark:hover:bg-primary-600 transition">
                <Download size={18} />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="#timeline" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Timeline</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Experience</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
              <button className="w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center space-x-2">
                <Download size={18} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-10 md:pt-32 md:pb-20 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Machine Learning Engineer <br />& Software Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Master's student in Computer Science specializing in Machine Learning and AI, with experience in full-stack development and a passion for building impactful solutions.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#contact" className="bg-primary-600 dark:bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-700 dark:hover:bg-primary-600 transition">
                Get in Touch
              </a>
              <a href="#projects" className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="priya-profile.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Hi, I'm Priya—a Master's student in Computer Science at the University of Massachusetts Amherst, specializing in Machine Learning and Artificial Intelligence. I have a solid foundation in Electrical and Computer Engineering from the University of Queensland, where my journey into technology and innovation began.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I'm passionate about building impactful, user-centric solutions. My professional experience includes working as a Graduate Consultant at Deloitte, where I developed scalable APIs and enhanced front-end functionality. I thrive on solving complex problems and collaborating with cross-functional teams to deliver robust software systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Beyond the professional world, I've co-authored a publication on leveraging virtual reality for mental health, blending technology with human-centric challenges. My global perspective stems from diverse experiences—working on transformer manufacturing processes during my internship at Voltamp Oman, pursuing undergraduate studies in a multicultural environment, and applying my skills in dynamic team settings.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently, I'm focused on leveraging AI and machine learning to create real-world solutions, with expertise in backend development, API design, and deploying ML models. I'm always eager to connect with fellow tech enthusiasts, brainstorm ideas, and stay at the forefront of emerging AI/ML trends.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:example@email.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section id="timeline" title="My Journey" isDark>
        <Timeline items={timelineData} />
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience" isDark>
        <div className="space-y-12">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch" isDark>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 dark:bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-700 dark:hover:bg-primary-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">Priya</span>
              <p className="text-gray-400 mt-2">Machine Learning Engineer & Software Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:example@email.com" className="text-gray-400 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Priya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;