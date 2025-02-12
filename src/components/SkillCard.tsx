import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface Skill {
  id: string;
  name: string;
  items: string[];
  icon?: React.ReactNode;
}

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 mb-4">
        {skill.icon && <span className="text-primary-500 dark:text-primary-400">{skill.icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
      </div>
      <ul className="space-y-2">
        {skill.items.map((item) => (
          <li key={item} className="flex items-center text-gray-600 dark:text-gray-300">
            <ChevronRight size={16} className="text-primary-500 dark:text-primary-400 mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}