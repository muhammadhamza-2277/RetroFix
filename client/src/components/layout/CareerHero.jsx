// src/components/CareerHeroSection.jsx
import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import bg2 from '../../assets/bg2.webp'; // adjust path if needed

const CareerHeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '60px auto 60px',
        padding: { xs: '2rem 1rem', sm: '3rem' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
        // color: '#000',
        animation: 'fadeIn 1.2s ease',
        '@keyframes fadeIn': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      {/* Text Section */}
      <Box sx={{ flex: 1, minWidth: '280px', textAlign: { xs: 'center', md: 'left' } }}>
        <Typography
          variant='h1'
          sx={{
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '20px',
            fontSize: '42px'
          }}
        >
          Build Your Future
          <br />
          with <Box component="span" sx={{ color: 'text.secondary' }}>Retrofix Solutions</Box>
        </Typography>

        <Typography
          sx={{
            fontSize: '18px',
            color: '#2b3339',
            marginBottom: '40px',
            lineHeight: 1.6,
          }}
        >
          Be a part of meaningful projects, grow your skills, and
          <br />
          build the future — together.
        </Typography>


      </Box>

      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          component="img"
          src={bg2}
          alt="Career at GOC"
          sx={{
            maxWidth: '450px',
            width: '100%',
            borderRadius: '20px',
            boxShadow: '0 8px 10px rgba(214, 157, 51, 0.705)',
            transform: 'rotate(-2deg)',
            transition: 'transform 0.4s ease',
            '&:hover': {
              transform: 'rotate(0deg) scale(1.03)',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default CareerHeroSection;
