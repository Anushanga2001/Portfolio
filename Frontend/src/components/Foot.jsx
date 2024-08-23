import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Email, LinkedIn, GitHub, Facebook } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
      }}>
      <Typography variant="h6" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        Anushanga Kaluarachchi
      </Typography>
      <Typography variant="body2">
        <Link href="anushanga2001@gmail.com" color="inherit">
          <IconButton color="inherit" aria-label="email">
            <Email />
          </IconButton>
          anushanga2001@gmail.com
        </Link>
      </Typography>

      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Follow Me
        </Typography>
        <Link href="https://www.linkedin.com/in/anushanga-kaluarachchi-30969825b/" color="inherit" sx={{ marginRight: '10px' }}>
          <IconButton color="inherit" aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
        </Link>
        <Link href="https://github.com/Anushanga2001?tab=repositories" color="inherit" sx={{ marginRight: '10px' }}>
          <IconButton color="inherit" aria-label="GitHub">
            <GitHub />
          </IconButton>
        </Link>
        <Link href="https://web.facebook.com/anushanga.kaluarachchi" color="inherit">
          <IconButton color="inherit" aria-label="Facebook">
            <Facebook />
          </IconButton>
        </Link>
      </Box>

      <Typography variant="body2" sx={{ marginTop: '20px' }}>
        © {new Date().getFullYear()} Anushanga Kaluarachchi. All rights reserved.
      </Typography>
    </Box>
  );
}
