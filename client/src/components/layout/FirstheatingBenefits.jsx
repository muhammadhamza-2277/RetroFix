import React from 'react';
import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import heatingImage from '../../assets/efficient-home.webp'; // rename your uploaded image accordingly

export default function FirstTimeCentralHeatingBenefits() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
              sx={{ color: '#000', fontSize: '2rem', paddingTop: 10, paddingBottom: 2, mb: 4 }}
            >
              Benefits of First Time Central Heating
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: '#333', fontSize: '1.1rem' }}>
              From consultation to completion, Retrofix Solutions is by your side.
            </Typography>

            <List>
              {[
                "Protects walls and air quality by maintaining a dry, warm environment.",
                "Improve Indoor Air Quality for a Healthier, More Comfortable Home",
                "Reduce Your Heating Bills with a Modern, Energy-Efficient System",
                "Enjoy First-Time Central Heating Backed by Government Funding",
                "Make Your Home Smarter, Greener, and More Efficient",


              ].map((text, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: '50px', color: '#ff6600' }}>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ fontSize: '1rem', color: '#000' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={heatingImage}
              alt="First Time Central Heating"
              sx={{
                width: '100%',
                maxWidth: 400,
                mx: 'auto',
                display: 'block',
                paddingLeft: { xs: 5, sm: 8 },
                paddingTop: { xs: 5, sm: 8 }
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
