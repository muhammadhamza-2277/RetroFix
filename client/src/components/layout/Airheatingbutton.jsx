import { Box, Typography, Paper, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CreateIcon from '@mui/icons-material/Create';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import bgImage from '../../assets/boiler.jpeg'; // ✅ Make sure this path is correct

import { Link } from "react-router-dom";

export default function BoilerUpgradeSteps() {
  const steps = [
    {
      number: '1',
      title: 'Fast & Clean Installation',
      desc: 'Our expert team ensures your air source heat pump is installed quickly, with minimal disruption to your daily life. We focus on clean workmanship and efficient timelines, so you can start enjoying warmth and savings without the hassle.',
      color: '#f26522'
    },
    {
      number: '2',
      title: 'Lower Bills, Lower Emissions',
      desc: 'Air source heat pumps offer an energy-efficient solution that reduces your monthly heating costs while helping the planet. By switching to a low-carbon system, you cut both your expenses and your environmental impact.',
      color: '#009444'
    },
    {
      number: '3',
      title: 'Installed by Certified Professionals',
      desc: 'At Retrofix Solutions, your heating upgrade is handled by fully licensed and experienced engineers. We follow strict safety and quality standards, giving you peace of mind from start to finish.',
      color: '#0072bc'
    }
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textalign: 'center'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: '800',
          // mb: 3,
          color: '#fff',
          fontSize: '2.1rem',
          lineHeight: 1.6,
          pb: 2,
          '& span': {
            color: '#ff6600',
          },
        }}
      >
        Upgrade Your Comfort. Lower Your Bills.<br />Trust <span>Retrofix Solutions</span>
      </Typography>

      {/* 🔘 Button added here */}
      <Button
        variant="filled"
        textAlign='center'
        component={Link}
        to="/check-eligibility"
        sx={{
          my: 4,
          alignSelf: { xs: 'center', md: 'flex-start' },
          width: 'fit-content',
        }}
      >
        Check Eligibility
      </Button>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 4,
          flexWrap: 'wrap',
          color: "#fff",
        }}
      >
        {steps.map((step, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              borderRadius: 2,
              p: 3,
              width: 320,
              height: 350,
              position: 'relative',
              textAlign: 'left',
              flexShrink: 0,
              //   backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: '50%',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                // backgroundColor: step.color,
                backgroundColor: '#fff',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: -20,
                left: 20,
                fontWeight: 'bold',
                fontSize: '1.2rem'
              }}
            >
              {step.number}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mt: 4,
                mb: 1,
                fontSize: '1.18rem',
                color: '#ff6600'
              }}
            >
              {step.title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
              {step.icon}
            </Box>
            <Typography
              variant="body2"
              sx={{ color: '#000', fontSize: '0.98rem', lineHeight: 1.6 }}
            >
              {step.desc}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
