import { Box, Typography, Button, useTheme } from '@mui/material';
import rdt from '../../assets/rrdd.webp';

import { Link } from "react-router-dom";
import { use } from 'react';
const CtaSection = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        // width: theme.layout?.maxContentWidth || '',
        // maxWidth: theme.layout?.maxContentWidth || '',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.80rem',
        padding: { xs: '2rem', md: '3rem 4rem' },
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${rdt})`,
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        color: '#fff',
        position: 'relative',
        zIndex: 1,
        marginTop: '50px',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      {/* Text Content */}
      <Box sx={{ flex: '1 1 300px' }}>
        <Typography variant="h5" textAlign='left' sx={{ fontSize: '1.7rem', mb: 1, paddingBottom: '8px', color: '#000', fontWeight: 510 }}>
          Let us help you make your home warmer and more energy-efficient.
        </Typography>
        <Typography textAlign='left' sx={{ fontSize: '1.1rem', color: '#000' }}>
          Contact us today to check if you qualify — it's quick and hassle-free.
        </Typography>
      </Box>

      {/* Button */}
      <Box sx={{ flex: { xs: '1 0 auto', sm: '0 0 auto' }, mt: { xs: 2, md: 0 } }}>
        <a href="#contact" style={{ textDecoration: 'none' }}>
          <Button
            variant="filled"
            textAlign='center'
            component={Link}
            to="/check-eligibility"
            sx={{
              mt: 4,
              alignSelf: { xs: 'center', md: 'flex-start' },
              width: 'fit-content',
            }}
          >
            Check Eligibility
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default CtaSection;
