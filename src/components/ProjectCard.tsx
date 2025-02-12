import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Building2 } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  period: string;
  association: string;
  details: string[];
  githubUrl?: string;
  demoUrl?: string;
  tags?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[500px] group perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-3">
                <Calendar size={16} className="mr-1" />
                <span>{project.period}</span>
                <span className="mx-2">•</span>
                <Building2 size={16} className="mr-1" />
                <span>{project.association}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center"
                    >
                      <Github size={18} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Demo
                    </a>
                  )}
                </div>
                <span className="text-gray-400 dark:text-gray-500 text-sm italic">Hover to see details</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Project Details
            </h3>
            <ul className="space-y-3">
              {project.details.map((detail, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}