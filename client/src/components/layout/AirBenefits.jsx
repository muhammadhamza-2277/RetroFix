// src/components/EligibilitySection.jsx
import { Box, Typography, Button, Container } from '@mui/material';
import bgImg from '../../assets/pumpp.jpg'; // your image path

const eligibilityPoints = [

  '✅ Compatible with underfloor heating and radiators.',
  '✅ Lower your energy bills with high-efficiency heating.',
  '✅ Eligible for government grants or energy-saving schemes.',
  '✅ Provides both heating and hot water, even in colder weather.',
  '✅ No need for fuel storage — it simply uses the air around your home.',
 
];

const EligibilitySection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}
        >
          {/* Left Side - Eligibility Criteria */}
          <Box sx={{ flex: 1.4, p: { xs: 2, md: 4 } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 790,
                color: '#000',
                mb: 6,
                lineHeight: 1.2,
                textTransform: 'capitalize',
                pt:7,
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.8rem' },
              }}
            >
              Benefits of Air Source Heat Pumps
            </Typography>

            <Box>
              {eligibilityPoints.map((point, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontSize: { xs: '0.90rem', md: '1.1rem' },
                    // fontSize: '1rem',
                    fontWeight: 520,
                    color: '#000',
                    lineHeight: 1.7,
                  }}
                >
                  {point}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Right Side - CTA with Background Image */}
          <Box
            sx={{
              flex: 1.1,
              minHeight: { xs: '300px', md: '450px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: { xs: 3, md: 5 },
              color: '#fff',
              borderRadius: 2,
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${bgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
              width: '100%',
              height: '80vh',
            //   marginTop:2
            }}
          >
         

          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EligibilitySection;
