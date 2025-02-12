import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
}

export function Section({ id, title, children, className = '', isDark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 ${
        isDark
          ? 'bg-gray-900 dark:bg-gray-950'
          : 'bg-gray-50 dark:bg-gray-900'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}