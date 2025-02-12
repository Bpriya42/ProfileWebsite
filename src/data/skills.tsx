import { Laptop, Brain, Globe } from 'lucide-react';
import { Skill } from '../components/SkillCard';

export const skillsData: Skill[] = [
  {
    id: '1',
    name: 'Machine Learning',
    icon: <Brain />,
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'Computer Vision']
  },
  {
    id: '2',
    name: 'Programming',
    icon: <Laptop />,
    items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java']
  },
  {
    id: '3',
    name: 'Web Development',
    icon: <Globe />,
    items: ['React.js', 'Node.js', 'Next.js', 'GraphQL', 'REST APIs']
  }
];