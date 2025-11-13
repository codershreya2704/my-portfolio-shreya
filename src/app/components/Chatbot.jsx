'use client';
import { useState } from 'react';
import { Box, IconButton, TextField, Typography, Paper, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! 👋 I'm your personal assistant. Ask me about my experience, skills, or education." },
  ]);
  const [input, setInput] = useState('');

  
  const resumeData = {
    experience: "I have 1 year of hands-on experience as a Frontend Developer intern, building scalable web apps using React, Next.js, and Material UI.",
    education: "I hold a Bachelor's degree in Computer Science and Engineering.",
    skills: "I'm skilled in JavaScript, React, Next.js, Material UI, Tailwind CSS, and Git.",
    projects: "I've worked on projects like an E-commerce App, Task Tracker, and a personal Portfolio site.",
    contact: "You can reach me via the contact form or email me directly at shreyrt411@gmail.com.",
  };

  
  
    const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { from: 'user', text: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput('');

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    const botMessage = { from: 'bot', text: data.reply };
    setMessages((prev) => [...prev, botMessage]);
  } catch {
    const botMessage = { from: 'bot', text: 'Sorry, there was an error.' };
    setMessages((prev) => [...prev, botMessage]);
  }
};

  

  return (
    <>
      
      {!open && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            backgroundColor: '#000000ff',
            color: 'white',
            '&:hover': { backgroundColor: '#1565c0' },
            zIndex: 1000,
          }}
        >
          <ChatIcon />
        </IconButton>
      )}

     
      {open && (
        <Paper
          elevation={6}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: 320,
            height: 420,
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.85)',
            color: 'white',
          }}
        >
          
          <Box
            sx={{
              p: 1.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <Typography fontWeight={600}>Chat Assistant </Typography>
            <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          
          <Box
            sx={{
              flexGrow: 1,
              overflowY: 'auto',
              p: 1.5,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                  bgcolor: msg.from === 'user' ? '#2196f3' : 'rgba(255,255,255,0.1)',
                  color: 'white',
                  px: 1.5,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: '80%',
                  fontSize: '0.9rem',
                }}
              >
                {msg.text}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              p: 1.5,
              display: 'flex',
              borderTop: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <TextField
              variant="standard"
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              fullWidth
              InputProps={{
                disableUnderline: true,
                sx: { color: 'white' },
              }}
              sx={{ mr: 1 }}
            />
            <Button variant="contained" color="primary" onClick={handleSend}>
              Send
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
}
