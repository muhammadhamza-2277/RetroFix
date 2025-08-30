import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import bg from "../../assets/banner.webp"; // Ensure this path is correct

const HeroSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(to right, rgba(0.1, 0.1, 0.1, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "start",
        boxSizing: "border-box",
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 20, sm: 10, md: 10 },
        mx: 'auto'
      }}
    >
      <Box
        sx={{
          maxWidth: "1000px",
          color: "#fff",
          textAlign: "left",
          px: { xs: 1, sm: 2, md: 0 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.5rem",
              xl: "4rem",
            },
            fontWeight: 730,
            mb: 2,
            textShadow: "1px 1px 3px rgba(0.1, 0.1, 0.1, 0.8)",
            whiteSpace: "normal",
          }}
        >
          <Box component="span" sx={{ color: "#ff6600" }}>
            First Time{" "}
          </Box>
          Gas Central Heating
        </Typography>

        <Typography
          component="p"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            lineHeight: 1.6,
            fontWeight: 250,
            pt: 1.2,
            color: 'text.default',
          }}
        >
          Upgrade your home’s comfort with First Time Central Heating — the ideal
          solution for <br />
          properties without existing systems, offering your first step toward a
          warmer, <br />
          more energy-efficient living space.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
