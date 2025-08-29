// src/components/BenefitsSection.jsx

import { Box, Typography, List, ListItem, useTheme } from '@mui/material';
import in3 from "../../assets/in3.jpg";

const benefits = [
  'Save up to 20% on annual heating costs',
  'Keeps your home warmer and reduces heat loss',
  'Reduces your carbon footprint and CO₂ emissions',
  'Reduces outside noise for a more peaceful home',
  'Improves your Energy Performance Certificate (EPC) rating',
  'No loss of internal space or change to your exterior',
];

const BenefitsSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: { xs: '2rem 1rem', md: '4rem 2rem' },
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Image */}
      <Box
        sx={{
          flex: '1 1 400px',
          maxWidth: '600px',
        }}
      >
        <Box
          component="img"
          src={in3}
          alt="Internal Wall Insulation"
          sx={{
            width: '100%',
            borderRadius: '20px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
            maxWidth: { xs: '100%', sm: '600px' }

          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          flex: '1 1 500px',
          maxWidth: '600px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#2a7b2e',
            marginBottom: '1.5rem',
            fontWeight:'700',
            fontSize: '2rem',
          }}
        >
          Benefits of Internal Wall Insulation
        </Typography>
        <List disablePadding>
          {benefits.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                paddingLeft: '2rem',
                position: 'relative',
                marginBottom: '0.6rem',
                fontSize: '1rem',
                color: '#000',
                '&::before': {
                  content: '"✔"',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  paddingTop:'8px',
                  color: '#ff6600',
                  fontWeight: 'bold',
                },
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default BenefitsSection;
