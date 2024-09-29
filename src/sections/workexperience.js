import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const experiences = [
//   {
//     role: 'Full Stack Software Developer',
//     company: 'Quantiphi',
//     duration: 'August 2022 – May 2024',
//     location: 'Bengaluru, India',
//     description: [
//       'Designed and developed a responsive frontend system using Figma, React.js, and Material UI to interact with NVIDIA’s Digital Avatar solution.',
//       'Collaborated with the ML team to integrate and optimize the frontend with the LLM enabling dynamic context-aware UI modifications.',
//       'Led backend development for intelligent music synthesis using machine learning for a non-profit organization.',
//       'Developed a secure database system using MySQL capable of handling 100+ concurrent users.',
//     ],
//   },
  {role: 'Software Developer',
    company: 'Delloite',
    duration: 'July 2022 – May 2024',
    location: 'Brisbane, Australia',
    description: [
      'Designed and developed a responsive frontend system using Figma, React.js, and Material UI to interact with NVIDIA’s Digital Avatar solution.',
      'Collaborated with the ML team to integrate and optimize the frontend with the LLM enabling dynamic context-aware UI modifications.',
      'Led backend development for intelligent music synthesis using machine learning for a non-profit organization.',
      'Developed a secure database system using MySQL capable of handling 100+ concurrent users.',
    ],
  },
//   {
//     role: 'Mobile Application Development Intern',
//     company: 'Bahwan CyberTek',
//     duration: 'March 2021 – May 2021',
//     location: 'Muscat, Oman',
//     description: [
//       'Developed an Android app in Java and XML to simplify vehicle inspection document retrieval.',
//       'Implemented a QR code scanner using the ZXing library and integrated Firebase Real-Time Database and Authentication.',
//       'Significantly reduced the time taken to obtain the inspection documents by 40%.',
//     ],
//   },
{role: 'Software Developer',
    company: 'Delloite',
    duration: 'July 2022 – May 2024',
    location: 'Brisbane, Australia',
    description: [
      'Designed and developed a responsive frontend system using Figma, React.js, and Material UI to interact with NVIDIA’s Digital Avatar solution.',
      'Collaborated with the ML team to integrate and optimize the frontend with the LLM enabling dynamic context-aware UI modifications.',
      'Led backend development for intelligent music synthesis using machine learning for a non-profit organization.',
      'Developed a secure database system using MySQL capable of handling 100+ concurrent users.',
    ],
  },
];

const WorkExperience = () => {
  return (
    <Box id="workexperience" style={{ padding: '50px 0' }}>
      <Typography variant="h4">Work Experience</Typography>
      {experiences.map((experience, index) => (
        <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }} key={index}>
          <Typography variant="h6">{experience.role}</Typography>
          <Typography variant="subtitle1">{experience.company} - {experience.location}</Typography>
          <Typography variant="subtitle2">{experience.duration}</Typography>
          <ul>
            {experience.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </Paper>
      ))}
    </Box>
  );
};

export default WorkExperience;
