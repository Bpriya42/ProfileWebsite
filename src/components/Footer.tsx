import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-bebas text-2xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:bpriya2001@gmail.com"
                  className="flex items-center gap-2 text-text hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  <span>bpriya2001@gmail.com</span>
                </a>
              </li>
              <li>
                <p className="text-text/80">United States</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bebas text-2xl mb-4">Social</h3>
            <div className="flex gap-4">
              <a
                href="http://github.com/Bpriya42"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/priya-balakrishnan-sde/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>

            </div>
          </div>

          <div>
            <h3 className="font-bebas text-2xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">Education & Experience</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#resume" className="hover:text-primary transition-colors">Resume</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/20">
          <p className="text-text/80 text-sm mb-4 md:mb-0">
            © 2024 Portfolio. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <ArrowUp 
              size={24} 
              className="text-primary transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;