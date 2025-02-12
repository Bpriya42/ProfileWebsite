import { Experience } from '../components/ExperienceCard';

export const experienceData: Experience[] = [
  {
    id: '1',
    title: 'Graduate Consultant | Fullstack Software Developer',
    company: 'Deloitte',
    period: 'Jul 2023 - May 2024',
    description: 'At Deloitte Digital, I contributed to building robust, scalable solutions for Travel Money Oz, improving both user experience and platform efficiency.',
    details: [
      'Auth0 Integration: Implemented secure authentication workflows, including user registration, password recovery, and account management.',
      'User Migration Automation: Developed a C# console application to automate user migrations, reducing manual effort by 90%.',
      'API & Front-end Development: Designed RESTful APIs and React components for seamless authentication and user management.',
      'Custom Dashboard: Built an internal dashboard for real-time monitoring of exchange rates and customer data, enhancing operational efficiency.'
    ],
    skills: ['React', '.NET', 'C#', 'Jenkins', 'Auth0', 'REST APIs']
  },
  {
    id: '2',
    title: 'Summer Vacationer | Backend Software Developer',
    company: 'Deloitte Consulting',
    period: 'Nov 2021 - Dec 2021',
    description: 'Contributed to the backend development of the Travel Money Oz project, focusing on API enhancements and feature development using C#.',
    details: [
      'Developed backend features using C# and .NET',
      'Enhanced existing APIs for improved performance',
      'Gained experience in UI/UX design and technology strategy',
      'Participated in business analysis and project management'
    ],
    skills: ['C#', '.NET', 'API Development', 'Backend Development']
  },
  {
    id: '3',
    title: 'Engineer Intern',
    company: 'VOLTAMP OMAN',
    period: 'Dec 2020 - Jan 2021',
    description: 'Worked with engineers in designing and manufacturing transformers at one of the leading transformer manufacturing companies.',
    details: [
      'Learned end-to-end transformer manufacturing process',
      'Participated in order processing, design, production, and testing',
      'Contributed to quality assurance processes',
      'Identified optimization opportunities in production and administration'
    ],
    skills: ['Engineering', 'Manufacturing', 'Quality Assurance', 'Process Optimization']
  }
];