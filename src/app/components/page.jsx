'use client';
import { Box, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Hi, I’m <span style={{ color: '#ffeb3b' }}>Your Name</span> 👋
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Frontend Developer | React | Next.js | Material UI
      </Typography>
      <Button variant="contained" color="secondary" href="/projects">
        View My Projects
      </Button>
    </Box>
  );
}
