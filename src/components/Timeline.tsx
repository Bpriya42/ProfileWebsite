import React from 'react';
import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  location: string;
  type: 'work' | 'education' | 'achievement';
}

interface TimelineProps {
  items: TimelineItem[];
}

const getIcon = (type: TimelineItem['type']) => {
  switch (type) {
    case 'work':
      return <Briefcase className="w-6 h-6" />;
    case 'education':
      return <GraduationCap className="w-6 h-6" />;
    case 'achievement':
      return <Award className="w-6 h-6" />;
    default:
      return <Calendar className="w-6 h-6" />;
  }
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } items-start md:items-center`}
          >
            {/* Content */}
            <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-primary-600 dark:text-primary-400">
                    {getIcon(item.type)}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {item.date}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.location}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>

            {/* Circle indicator */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary-500 dark:bg-primary-400 rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            {/* Empty div for spacing on the other side */}
            <div className="hidden md:block flex-1 md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}