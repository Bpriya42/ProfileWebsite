import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Box mt={4}>
        <Typography variant="h6">Contact Me</Typography>
        <Typography variant="body2">Email: bpriya2001@gmail.com </Typography>
        <Typography variant="body2">LinkedIn: 
          <Link href="https://linkedin.com/in/abhishek-subramanian" target="_blank"> linkedin.com/in/abhishek-subramanian</Link>
        </Typography>
        <Typography variant="body2">GitHub: 
          <Link href="https://github.com/AbhishekSubramanian" target="_blank"> github.com/AbhishekSubramanian</Link>
        </Typography>
        <Box mt={2}>
          <Typography variant="body2">© 2024 Priyamvadha Balakrishnan. All Rights Reserved.</Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
