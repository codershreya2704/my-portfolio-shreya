'use client';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: 'center', backgroundColor: '#eee', mt: 0 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Shreya Tambad. All rights reserved.
      </Typography>
    </Box>
  );
}
