import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const projects = [
  {
    name: 'Starbucks AI Assistant',
    description: 'Developed an interactive 3D Avatar powered by NVIDIA NeMo Megatron LLM that curates drinks and provides recommendations.',
    technologies: ['React.js', 'Express.js', 'gRPC API', 'NVIDIA Riva'],
  },
  {
    name: 'Facial Emotion and Identity Recognition',
    description: 'Built a facial identification and emotion recognition model aimed at providing real-time responses from a live camera feed.',
    technologies: ['TensorFlow', 'Python', 'OpenCV'],
  },
  {
    name: 'Unhealthy Liver Detection using CNN',
    description: 'Developed a CNN-based method for unhealthy liver detection using CT images and presented it at the 2023 IEEE ICSCSS conference.',
    technologies: ['Python', 'Keras', 'CNN', 'IoT'],
  },
];

const Projects = () => {
  return (
    <Box id="projects" style={{ padding: '50px 0' }}>
      <Typography variant="h4">Projects</Typography>
      {projects.map((project, index) => (
        <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }} key={index}>
          <Typography variant="h6">{project.name}</Typography>
          <Typography variant="body1">{project.description}</Typography>
          <Typography variant="body2" mt={1}>
            Technologies: {project.technologies.join(', ')}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Projects;
