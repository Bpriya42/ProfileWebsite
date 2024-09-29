import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CodeIcon from '@mui/icons-material/Code';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Me', id: 'aboutme' },
    { label: 'Skills', id: 'skills' },
    { label: 'Work Experience', id: 'workexperience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Download Resume', id: 'downloadresume' },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ background: '#333', padding: '0 20px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Left Section: Code Icon with Hover Animation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <CodeIcon 
              sx={{
                fontSize: 40,
                color: 'rgb(136, 28, 28)',  // Set color to R136 G28 B28
                transition: 'transform 0.3s ease-in-out',  // Add smooth transition effect
                '&:hover': {
                  transform: 'scale(1.3)',  // Scale up on hover
                  cursor: 'pointer',
                }
              }}
            />
          </Box>

{/* Profile Icon - I wasn't sure what to do with the empty space on the left, see if you likr having a profile picture over the animaton on top bub */}
{/* <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
  <img
    src="Images/priya_profile.jpg"
    alt="Profile"
    style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '2px solid #ff5722',
      padding: '2px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  />
</Box> */}


          {/* Center Section: Navbar Items */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={() => handleScroll(item.id)}
                sx={{
                  position: 'relative',
                  margin: '0 10px',
                  fontFamily: 'Montserrat',
                  fontWeight: 500,
                  textTransform: 'none',
                  ':hover': {
                    background: 'transparent',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    bottom: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgb(136, 28, 28)',
                    transition: 'width 0.3s ease-in-out',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right Section: Social Media Icons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <IconButton
              color="inherit"
              href="https://github.com/YourGitHubProfile"
              target="_blank"
              sx={{ marginLeft: '10px', ':hover': { color: '#6e5494' } }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://linkedin.com/in/YourLinkedInProfile"
              target="_blank"
              sx={{ marginLeft: '10px', ':hover': { color: '#0077b5' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com/YourTwitterProfile"
              target="_blank"
              sx={{ marginLeft: '10px', ':hover': { color: '#1DA1F2' } }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>

          {/* Hamburger Icon for smaller screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto' }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { background: '#333', color: '#fff', width: '250px' } }}
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem button key={index} onClick={() => { handleScroll(item.id); toggleDrawer(false); }}>
              <ListItemText primary={item.label} primaryTypographyProps={{ style: { fontFamily: 'Montserrat', color: '#fff' } }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
