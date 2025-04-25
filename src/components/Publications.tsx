import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Link, Users, Calendar } from 'lucide-react';

const publications = [
  {
    title: 'Visualising Physiological Cues in Individualised Virtual Reality for Mental Health',
    journal: '22nd IEEE International Symposium on Mixed and Augmented Reality (ISMAR)',
    authors: ['Nilufar Baghaei', 'Priya Balakrishnan'],
    date: 'October 2023',
    doi: '10.1109/ISMAR.2023.10322159',
    abstract: 'This research presents four distinct VR visualizations for physiological data representation, enhancing the therapeutic potential of virtual reality in mental health interventions. Expert and user testing were conducted with over 30 participants to refine the visualizations and assess engagement. The study contributes to the scalable application of individualized VR solutions for mental health treatment.',
    link: 'https://ieeexplore.ieee.org/document/10322159'
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Publications
        </motion.h2>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.doi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 mb-2 sm:mb-0">
                  <BookOpen size={24} className="text-primary" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="font-bebas text-2xl mb-2">{pub.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-primary flex-shrink-0" />
                      <span>{pub.authors.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary flex-shrink-0" />
                      <span>{pub.date}</span>
                    </div>
                  </div>
                  <p className="text-text/80 mb-4">{pub.abstract}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <span className="font-medium">{pub.journal}</span>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      <Link size={16} className="flex-shrink-0" />
                      <span>DOI: {pub.doi}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;