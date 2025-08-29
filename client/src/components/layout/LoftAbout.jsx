import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import loft2 from '../../assets/loft2.jpg'; // make sure path is correct

const AboutLoftSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${loft2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: { xs: '2rem', md: '4rem' },
        overflow: 'hidden',
        borderRadius: '8px',
        marginTop: '90px',
        marginBottom: '20px',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'rgba(95, 111, 82, 0.2)',
          backdropFilter: 'blur(8px)',
          zIndex: 1,
          borderRadius: '8px',
        },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          position: 'relative',
          zIndex: 2,
          // maxWidth: '1500px',
          margin: '0 auto',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* Text Left */}
        <Grid item xs={12} md={5} sx={{
          maxWidth: { md: '650px' }
        }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, marginBottom: '20px', color: '#000' }}
          >
            Why Choose Retrofix  for Loft Insulation?
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: 1.7,
              marginBottom: '20px',
              //   color: '#f0f0f0',
              color: '#000',
            }}
          >
            At Retrofix Solutions, we pride ourselves on delivering reliable,
            energy-efficient solutions that improve homes across the UK. With
            a passion for sustainability and expert craftsmanship, we help
            homeowners make meaningful upgrades that last.
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: 1.7,
              //   color: '#f0f0f0',
              color: '#000',

            }}
          >
            Loft insulation is a simple yet powerful way to prevent heat loss,
            reduce energy bills, and boost indoor comfort. Whether you're
            aiming for a warmer winter or a cooler summer, our tailored
            approach ensures maximum efficiency for your property.
          </Typography>
        </Grid>

        {/* Image Right */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
          }}
        >
          <Box
            component="img"
            src={loft2}
            alt="Loft insulation service"
            sx={{
              width: { xs: '100%', sm: '400px', md: '350px' },
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Grid>
      </Grid>
    </Box >
  );
};

export default AboutLoftSection;
