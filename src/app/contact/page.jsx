'use client';
import { useEffect } from 'react';
import { Box, Typography, Button, Stack, Link } from '@mui/material';
import { Email, LinkedIn, GitHub, Phone } from '@mui/icons-material';

export default function ContactPage() {
  // generate twinkling stars dynamically
  useEffect(() => {
    const starContainer = document.getElementById('contact-stars');
    if (!starContainer) return;
    const starCount = 120;
    starContainer.innerHTML = '';

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2 + 1 + 'px';
      const top = Math.random() * 100 + '%';
      const left = Math.random() * 100 + '%';
      const delay = Math.random() * 5 + 's';

      Object.assign(star.style, {
        position: 'absolute',
        width: size,
        height: size,
        background: 'white',
        borderRadius: '50%',
        top,
        left,
        opacity: 0.8,
        animation: `twinkle 2s infinite ease-in-out ${delay}`,
      });

      starContainer.appendChild(star);
    }
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000010 0%, #001f3f 30%, #004080 60%, #0d47a1 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
        py: 10,
      }}
    >
      {/* STARS BACKGROUND */}
      <Box
        id="contact-stars"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* CONTACT CONTENT */}
      <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 600, width: '100%', py: 5 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Let’s Connect 🚀
        </Typography>
        <Typography variant="body1" color="#ccc" sx={{ mb: 5 }}>
          Feel free to reach out if you want to collaborate, discuss opportunities, or just say hi!
        </Typography>

        <Stack
          spacing={3}
          alignItems="center"
          sx={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 3,
            p: 4,
            backdropFilter: 'blur(6px)',
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Email sx={{ color: '#ffeb3b' }} />
            <Typography variant="h6">
              <Link
                href="mailto:youremail@example.com"
                underline="hover"
                sx={{ color: '#fff', '&:hover': { color: '#ffeb3b' } }}
              >
                youremail@example.com
              </Link>
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <LinkedIn sx={{ color: '#ffeb3b' }} />
            <Typography variant="h6">
              <Link
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                underline="hover"
                sx={{ color: '#fff', '&:hover': { color: '#ffeb3b' } }}
              >
                linkedin.com/in/yourlinkedin
              </Link>
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <GitHub sx={{ color: '#ffeb3b' }} />
            <Typography variant="h6">
              <Link
                href="https://github.com/yourgithub"
                target="_blank"
                underline="hover"
                sx={{ color: '#fff', '&:hover': { color: '#ffeb3b' } }}
              >
                github.com/yourgithub
              </Link>
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Phone sx={{ color: '#ffeb3b' }} />
            <Typography variant="h6" sx={{ color: '#fff' }}>
              +91 98765 43210
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* BACK LINK */}
      <Box sx={{ mt: 4, zIndex: 2 }}>
        <Button
          href="/"
          variant="outlined"
          color="secondary"
          sx={{
            borderColor: '#ffeb3b',
            color: '#ffeb3b',
            '&:hover': { borderColor: '#fff', color: '#fff' },
          }}
        >
          ← Back to Home
        </Button>
      </Box>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </Box>
  );
}
