import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './components/navbar';
import Home from './sections/home';
import AboutMe from './sections/aboutme';
import Skills from './sections/skills';
import WorkExperience from './sections/workexperience';
import Projects from './sections/projects';
import DownloadResume from './sections/downloadresume';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Box mt={2}>
          <Home />
          <AboutMe />
          <Skills />
          <WorkExperience />
          <Projects />
          <DownloadResume />
        </Box>
      </Container>
      <Footer/>
    </div>
  );
};

export default App;
