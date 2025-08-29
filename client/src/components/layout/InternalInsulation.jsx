import { Box, Typography, useTheme } from '@mui/material';
import in5 from '../../assets/in5.jpg';
import in6 from '../../assets/in6.jpg';
import in2 from '../../assets/in2.webp';

const InsulationSection = () => {
  const theme = useTheme();

  return (
    <>
      {/* Heading */}
      <Box
        component="section"
        sx={{
          paddingBottom: '10px',
          textAlign: 'center',
          mt: '130px',
          [theme.breakpoints.down('sm')]: {
            mt: '80px',
            paddingX: '16px',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.9rem' },
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          Upgrade Your Comfort with{' '}
          <Box component="span" sx={{ color: '#ff6600' }}>
            Internal Wall Insulation
          </Box>
        </Typography>
      </Box>

      {/* Two-column content */}
      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          padding: { xs: '40px 16px', sm: '50px 5%' },
          gap: '40px',
          backgroundImage: `linear-gradient(rgba(1.2, 1.2, 1.2, 0.8), rgba(1.2, 1.2, 1.2, 0.8)), url(${in2})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 45%' },
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Box
            component="img"
            src={in5}
            alt="Insulation Process"
            sx={{
              width: '100%',
              height: { xs: '220px', sm: '300px' },
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              lineHeight: 1.6,
              color: '#f1f1f1',
              padding: '10px',
              borderRadius: '12px',
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            Internal wall insulation is one of the most efficient ways to improve your home’s energy performance without altering its exterior. At Retrofix Solutions, we install high-quality insulation materials between stud panels and finish with a smooth plastered surface — creating a warmer, more comfortable living environment while keeping your walls looking modern and clean.
          </Typography>
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 45%' },
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              lineHeight: 1.6,
              color: '#f1f1f1',
              padding: '10px',
              borderRadius: '12px',
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            By reducing heat loss and minimizing your reliance on heating systems, internal wall insulation can help cut your energy bills by up to 20%. It also lowers your carbon footprint, reduces outside noise, and improves your EPC rating — all delivered with the care and expertise that Retrofix Solutions is known for.
          </Typography>
          <Box
            component="img"
            src={in6}
            alt="Warm Interior"
            sx={{
              width: '100%',
              height: { xs: '220px', sm: '300px' },
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default InsulationSection;
