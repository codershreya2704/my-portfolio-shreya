'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#ff4081' },
    background: { default: '#fafafa' },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
