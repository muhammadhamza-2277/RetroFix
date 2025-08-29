import React from 'react';
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import interImg from '../../assets/inter.jpg'; // Make sure this path is correct

const benefitsList = [
  'Keeps your home warmer in winter and cooler in summer',
  "Increases your home's overall energy efficiency",
  'Reduces your carbon footprint and environmental impact',
  'Cuts down on your monthly energy bills',
  'A fast and hassle-free upgrade to boost home comfort',
  'Improves your Energy Performance Certificate (EPC) rating',
];

const LoftBenefitsSection = () => {
  return (
    <Box
      sx={{
        // width: '100%',
        backgroundImage: `linear-gradient(rgba(18,18,18,0.8), rgba(18,18,18,0.8)), url(${interImg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        padding: { xs: '2rem', md: '4rem' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
        zIndex: 1,
        overflowX:'hidden',
     
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '3rem',
        }}
      >
        {/* Left Side - Image */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 45%' },
            textAlign: 'center',
          }}
        >
          <Box
            component="img"
            src={interImg}
            alt="Loft insulation"
            sx={{
              width: { xs: '100%', md: '500px' },
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              maxWidth: '100%',
            }}
          />
        </Box>

        {/* Right Side - Text */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 50%' },
          }}
        >
          <Typography
            sx={{
              color: '#ff6600',
              fontWeight: 600,
              fontSize: '0.95rem',
              paddingBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            7+ YEARS OF EXPERIENCE
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: '2.2rem',
              paddingBottom: '20px',
              color: '#f1f1f1',
            }}
          >
            Benefits of Loft Insulation
          </Typography>

          <Typography
            sx={{
              fontSize: '1.1rem',
              paddingBottom: '28px',
              lineHeight: 1.6,
              color: '#f1f1f1',
            }}
          >
            Did you know that up to{' '}
            <strong>25% of your home's heat escapes through the roof</strong>? Loft
            insulation is a smart and affordable solution that helps reduce heat
            loss, lower energy bills, and enhance indoor comfort — all year round.
          </Typography>

          <List
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '20px',
              padding: 0,
            }}
          >
            {benefitsList.map((benefit, index) => (
              <ListItem key={index} sx={{ padding: 0, alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: '30px' }}>
                  <CheckCircleIcon sx={{ color: '#6DBE45', fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        color: '#f1f1f1',
                        fontSize: '1rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {benefit}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default LoftBenefitsSection;
