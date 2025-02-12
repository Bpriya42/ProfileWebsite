import { Project } from '../components/ProjectCard';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Mitigating Bias in Facial Recognition',
    description: 'Developed fairness-aware facial recognition models using the Seldonian framework to address bias in prediction tasks.',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2',
    period: 'Sep 2024 - Dec 2024',
    association: 'University of Massachusetts Amherst',
    details: [
      'Implemented constrained CNN models (ResNet50, VGG16) with FairFace dataset',
      'Achieved 95% compliance rate with fairness constraints',
      'Conducted comparative analyses between fairness-aware and standard models',
      'Enhanced expertise in machine learning and ethical AI development'
    ],
    tags: ['Python', 'CNN', 'Fairness in AI', 'Machine Learning'],
    githubUrl: 'https://github.com/Bpriya42/bias-reduction-facial-recognition'
  },
  {
    id: '2',
    title: 'Indoor Air Quality Indicator',
    description: 'Designed firmware for an Indoor Air Quality Indicator with a mechanical plant avatar responding to air quality changes.',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73',
    period: 'Feb 2023 - Jun 2023',
    association: 'The University of Queensland',
    details: [
      'Integrated sensors for humidity, temperature, CO2, and TVOC levels',
      'Established BLE communication between Thingy-52 and ESP32C3',
      'Implemented real-time dashboard using Tago-IO and MQTT',
      'Applied KNN classification with 72% accuracy for air quality analysis'
    ],
    tags: ['IoT', 'Python', 'Machine Learning', 'Firmware'],
    githubUrl: 'https://github.com/Bpriya42/Vidar-Blue'
  },
  {
    id: '3',
    title: 'Heart Rate Visualization in VR',
    description: 'Research project exploring VR applications for mental health support through heart rate visualization.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',
    period: 'Jul 2022 - Jun 2023',
    association: 'The University of Queensland',
    details: [
      'Conducted literature review on VR\'s impact on mental health',
      'Designed heart rate visualization tool for VR environments',
      'Led research from concept to user evaluations',
      'Published findings on VR applications in mental health support'
    ],
    tags: ['VR Development', 'Research', 'Mental Health', 'UX Design'],
    }
];