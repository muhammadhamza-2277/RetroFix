import { Box, Typography, Card, CardMedia, useTheme } from '@mui/material';
import teamImage from '../../assets/boil.jpg';
// import bgImage from '../../assets/BGG.jpg';
import bg from '../../assets/boiler-replacement.jpg';

export default function BoilerUpgradeHero() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#000',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: { sm: 'wrap', md: 'nowrap' },
          width: theme.layout?.maxContentWidth || '',
          maxWidth: theme.layout?.maxContentWidth || '',
          py: { xs: 6, md: 14 },

          // backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.85), rgba(220, 255, 220, 0.75)), url(${bgImage})`,

          minHeight: '100vh',
          mx: 'auto',
        }}
      >
        {/* Left Text Section */}
        <Box
          sx={{
            maxWidth: 600,
            animation: 'fadeInUp 1s ease-in-out',
            '@keyframes fadeInUp': {
              from: { opacity: 0, transform: 'translateY(40px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: '#ff6600',
              letterSpacing: 1,
              animation: 'slideIn 1.4s ease forwards',
              opacity: 0,
              '@keyframes slideIn': {
                from: { transform: 'translateX(-50px)', opacity: 0 },
                to: { transform: 'translateX(0)', opacity: 1 },
              },
            }}
          >
            Boiler Upgrade
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#000',
              mb: 4,
              lineHeight: 1.8,
              fontSize: '1.15rem',
              animation: 'fadeInText 2s ease forwards',
              opacity: 0,
              '@keyframes fadeInText': {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            A home boiler heats water and distributes it through radiators or underfloor systems,
            delivering efficient central heating and a reliable supply of hot water throughout your home.
          </Typography>
        </Box>

        {/* Right Image Section */}
        <Box
          sx={{
            mt: { xs: 6, md: 0 },
            position: 'relative',
            animation: 'fadeInUp 1s ease-in-out',
            '@keyframes fadeInUp': {
              from: { opacity: 0, transform: 'translateY(40px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Card
            sx={{
              width: { xs: 380, sm: 360, md: 400 },
              borderRadius: 5,
              overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={teamImage}
              alt="Boiler Upgrade"
              sx={{
                // width: { md: "70%", lg: '100%' },
                // height: { md: "70%", lg: '100%' },
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            />
          </Card>
        </Box>
      </Box>
    </Box>

  );
}
