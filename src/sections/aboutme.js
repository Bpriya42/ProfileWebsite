import React from 'react';
import { Box, Typography } from '@mui/material';
import './aboutme.css'; // Make sure to import your CSS file

const AboutMe = () => {
  return (
    <Box id="aboutme" className="about-me-container">
      <div className="profile-picture-container">
        <img 
          src="images/priya_profile.jpg" // Replace this with the actual path to your profile picture
          alt="Profile" 
          className="profile-picture"
        />
      </div>
      <div className="about-me-content">
        <Typography mt={2} className="about-me-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
    </Box>
  );
};

export default AboutMe;
