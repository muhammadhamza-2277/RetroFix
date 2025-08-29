import { Box, Typography, Grid, Paper } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';

export default function BoilerUpgradeFeatures() {
  const features = [
    {
      icon: <BuildIcon sx={{ fontSize: 38, color: '#28a745', mb: 2 }} />,
      title: 'Quick Installation',
      desc: 'Select the right unit, safely disconnect old systems, and upgrade to a high-efficiency boiler quickly and cleanly.',
    },
    {
      icon: <HomeIcon sx={{ fontSize: 38, color: '#28a745', mb: 2 }} />,
      title: 'Warm Home',
      desc: 'Enjoy a warmer, more energy-efficient home in no time with our seamless installation process.',
    },
    {
      icon: <EngineeringIcon sx={{ fontSize: 38, color: '#28a745', mb: 2 }} />,
      title: 'Licensed Professionals',
      desc: 'Our certified experts ensure safe, compliant, and reliable boiler upgrades for your peace of mind.',
    },
  ];

  return (
    <Box
      sx={{
        // px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(to bottom, #e6f5ea, #ffffff)',
        color: '#000',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: '#000',
            fontSize: { xs: '2rem', md: '2.4rem' },
            mb: 2,
          }}
        >
          Fast Turnaround, Warm Results
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: '#333',
            fontWeight: 500,
            maxWidth: 700,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.15rem' },
          }}
        >
          A home boiler heats water and distributes it through radiators or underfloor systems to provide central heating and hot water.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {features.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box display="flex" justifyContent="center">
              <Paper
                elevation={3}
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 8px 22px rgba(0,0,0,0.15)',
                  },
                }}
              >
                {item.icon}
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ mb: 1, fontSize: '1.3rem', color: '#ff6600', }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#000',
                  }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
