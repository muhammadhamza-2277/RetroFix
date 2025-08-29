import React from 'react';
import { Box, Container, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import bg from "../../assets/boiler-replacement.jpg";
import bg1 from "../../assets/boiler-replacement.jpg";

export default function FirstTimeCentralHeating() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: '#fff',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          maxWidth: '1140px',
          px: 2,
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 2,
            mt: { xs: 3, md: 6 },
          }}
        >
          Gas Central Heating installation
        </Typography>

        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{
            fontSize: { xs: '0.95rem', md: '1rem' },
            fontWeight: 600,
            color: '#666',
            mt: 1,
            pb: 2,
          }}
        >
          A heat loss survey from our surveyor will help you understand how the layout of your home could affect the cost of running a new system.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            mt: 6,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              flex: 1,
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'left',
              borderLeft: '6px solid #2a7b2e',
              backgroundImage: `linear-gradient(to right, rgba(0.1, 0.1, 0.1, 0.8), rgba(0, 0, 0, 0.3)), url(${bg1})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              sx={{
                fontSize: { xs: '1.4rem', md: '1.7rem' },
                mb: 1.5,
                color: '#ff6600',
              }}
            >
              Qualified Surveyors
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                fontSize: { xs: '0.95rem', md: '1rem' },
                lineHeight: 1.6,
              }}
            >
              When you choose us, we'll arrange a surveyor to visit your home at a time and date that suits you. We do all the background checks and calculations to ensure a quality installation for complete peace of mind.
            </Typography>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              flex: 1,
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'left',
              borderLeft: '6px solid #2a7b2e',
              backgroundImage: `linear-gradient(to right, rgba(0.1, 0.1, 0.1, 0.9), rgba(0, 0, 0, 0.6)), url(${bg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              sx={{
                fontSize: { xs: '1.4rem', md: '1.7rem' },
                mb: 1.5,
                color: '#ff6600',
              }}
            >
              Free Survey
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                fontSize: { xs: '0.95rem', md: '1rem' },
                lineHeight: 1.6,
              }}
            >
              Our survey is totally free and will not obligate you to take any further action. We can help you find more energy savings than your energy supplier. We will carry out a full energy audit and discover how you can save on your bills and reduce your carbon footprint.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
