import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box 
      id="home"
      sx={{
        display: 'flex',           // Use flexbox
        flexDirection: 'column',   // Stack items vertically
        justifyContent: 'center',  // Center items vertically
        alignItems: 'center',      // Center items horizontally
        height: '100%',            // Ensures the box takes up full height
        textAlign: 'center'        // Centers text content
      }}
    >
      <Typography 
        variant="h2" 
        sx={{ 
          color: 'white',       /* Change to your desired color */
          fontFamily: 'Montserrat',  
          fontWeight: 'bold'        
        }}
      >
        {/* I am Abhishek Subramanian. */}
        I am Priyamvadha Balakrishnan. 
      </Typography>

      {/* Additional text with brackets */}
      <Typography 
        variant="h5" 
        sx={{ 
          color: 'white',          /* Adjust color as needed */
          fontFamily: 'Montserrat',  
          fontWeight: '300',      /* Optional: lighter weight for the subheading */
          mt: 2                   /* Adds margin-top to create space between the text */
        }}
      >
        {/* Master's in Computer Engineering (ML and SWE) at VT */}
        Master's in Computer Science at {' '}
        <span style={{fontWeight: 'bold' }}>Umass Amherst</span> 
        {/* color: 'rgb(136, 28, 28)',  */}
      </Typography>
    </Box>
  );
};

export default Home;
