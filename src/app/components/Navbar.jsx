'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with id '${id}' not found.`);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        opacity: 0.9,
        background: 'linear-gradient(155deg, #6a11cb 0%, #2575fc 100%)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight={600}>
          Shreya&apos;s Portfolio
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => handleScroll('home')}>Home</Button>
          <Button color="inherit" onClick={() => handleScroll('about')}>About</Button>
          <Button color="inherit" onClick={() => handleScroll('projects')}>Projects</Button>
          <Button color="inherit" onClick={() => handleScroll('contact')}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
