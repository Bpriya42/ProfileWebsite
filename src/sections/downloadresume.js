import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

const DownloadResume = () => {
  return (
    <Box id="downloadresume" style={{ padding: '50px 0', textAlign: 'center' }}>
      <Typography variant="h4">Download My Resume</Typography>
      <Button
        variant="contained"
        color="primary"
        href="/path/to/your/resume.pdf"
        download
        startIcon={<GetAppIcon />}
        style={{ marginTop: '20px' }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default DownloadResume;
