import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
import outsideImg from "../../assets/outside.jpg";

const HeroSection = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${outsideImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        position: "relative",
        py: { xs: 4, md: 12 }, // responsive padding
        px: 2,
        textAlign: "center",
        color: "#f1f1f1",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          backgroundColor: "rgba(0, 50, 30, 0.6)", // soft green overlay
          px: { xs: 0, md: 8 },
          py: { xs: 4, md: 8 },
          borderRadius: 2,
        }}
      >
        {/* Content */}
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              mb: 3,
              color: "text.secondary",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Powered by Retrofix Solutions. Certified. Reliable.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              mb: 3,
              lineHeight: 1.6,
              color: "text.default",
              fontWeight: 400,
              textAlign: 'justify'
            }}
          >
            At Retrofix, we specialise in delivering high-quality external wall
            insulation tailored to modern homes. With years of industry
            experience, certified installers, and a strong reputation across the
            UK, we offer more than just insulation — we deliver peace of mind.
            Our expert team ensures every detail is handled with precision,
            keeping your home warmer, more energy-efficient, and visually
            refreshed.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              mb: 0,
              lineHeight: 1.6,
              color: "text.default",
              textAlign: 'justify',
              fontWeight: 400,
            }}
          >
            We believe in solutions that last. That’s why our materials are
            carefully selected for performance and durability. Whether you're
            upgrading for comfort, cutting energy bills, or boosting curb appeal,
            Retrofix is your trusted partner. With a streamlined process and
            dedicated support from start to finish, we make it easy to transform
            your home with confidence.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
