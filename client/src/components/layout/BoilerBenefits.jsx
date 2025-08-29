// src/components/WhyUpgrade.jsx
import { Typography, Box, Container } from '@mui/material';
import bgImage from '../../assets/boiler-replacement.jpg'; // ✅ Make sure image exists in this path

const benefits = [
  {
    icon: '💸',
    title: 'Save on Energy Bills',
    description: 'Save up to 30% annually on your gas bills with a new energy-efficient boiler.',
  },
  {
    icon: '🌍',
    title: 'Eco-Friendly',
    description: 'Reduce your carbon footprint and support a greener home.',
  },
  {
    icon: '🛠️',
    title: 'Low Maintenance',
    description: 'Enjoy lower maintenance costs and fewer breakdowns over time.',
  },
  {
    icon: '🏠',
    title: 'Home Comfort',
    description: 'Improve your home\'s comfort and overall energy efficiency.',
  },
  {
    icon: '✅',
    title: 'Free Installation',
    description: 'Free installation may be available for eligible households.',
  },
];

const WhyUpgrade = () => {
  return (
    <Box
      sx={{
        py: 10,
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="lg">
        {/* Heading Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.4rem' },
            color: '#000',
            mb: 2,
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          🎯 Why Upgrade? Key Benefits
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#000',
            mb: 8,
            pt: 1,
            fontWeight: 500,
            fontSize: { xs: '1rem', md: '1.1rem' },
            maxWidth: '700px',
          }}
        >
          Upgrade to a modern boiler and enjoy comfort, savings, and a greener lifestyle.
        </Typography>

        {/* Flexbox Layout */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 5,
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              sx={{
                flex: '1 1 calc(33.33% - 40px)',
                minWidth: '280px',
                maxWidth: '360px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="h6"
                fontWeight="600"
                sx={{ display: 'flex', alignItems: 'center', mb: 1, color: '#2a7b2e',fontSize:'1.4rem', }}
              >
                <Box component="span" sx={{ fontSize: '1.7rem', mr: 1 }}>
                  {benefit.icon}
                </Box>
                {benefit.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ lineHeight: 1.6, fontSize: '0.95rem', color: '#000', mb: 3, }}
              >
                {benefit.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUpgrade;
