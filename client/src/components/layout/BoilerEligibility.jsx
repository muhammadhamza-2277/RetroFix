// src/components/EligibilitySection.jsx
import { Box, Typography, Button, Container } from '@mui/material';
import bgImg from '../../assets/boilerbackground.jpeg'; // your image path

import { Link } from "react-router-dom";

const eligibilityPoints = [
  '✅ Non-condensing boiler currently installed (condensing boilers are not eligible for replacement).',
  '✅ Your property must have an Energy Performance Certificate (EPC) rating of D, E, F, or G.',
  '✅ You must be receiving one or more qualifying government benefits (e.g., Universal Credit, Pension Credit, etc.).',
  '✅ Your existing boiler must be 6 years old or more, and not cost-effective to repair.',
  '✅ Applies to gas, oil, LPG boilers, and electric storage heaters.',
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
          <Box sx={{ flex: 1.6, p: { xs: 2, md: 4 } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 790,
                color: '#000',
                mb: 6,
                lineHeight: 1.2,
                textTransform: 'capitalize',
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.8rem' },
              }}
            >
              🔍 Eligibility Criteria for Boiler Upgrade
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
              flex: 1,
              minHeight: { xs: '300px', md: '400px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: { xs: 3, md: 5 },
              color: '#fff',
              borderRadius: 2,
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url(${bgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
              width: '100%',
              height: '50vh',
              marginTop: 2
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 550,
                fontSize: { xs: '1.4rem', md: '2rem' },
                mb: 3,
                lineHeight: 1.6,
                color: 'text.default'
              }}
            >
              Let us help you improve the comfort of your home.
            </Typography>

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
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EligibilitySection;
