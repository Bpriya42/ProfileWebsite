import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  details?: string[];
  skills?: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-l-4 border-primary-500 dark:border-primary-400 pl-4">
      <div 
        className="cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {experience.title}
        </h3>
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-medium">{experience.company}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {experience.period}
          </span>
          <button className="ml-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-500 transition-colors">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>
      </div>
      
      {isExpanded && experience.details && (
        <div className="mt-4 pl-4 border-l-2 border-primary-200 dark:border-primary-800">
          <ul className="space-y-2 mb-4">
            {experience.details.map((detail, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300">
                • {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {experience.skills && (
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}