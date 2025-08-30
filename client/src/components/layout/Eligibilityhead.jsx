import React from "react";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/back.jpg"; // Ensure this path is correct

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        // width: "100vw",
        maxHeight: { xs: '90vh', sm: '100vh' },
        backgroundImage: `linear-gradient(to right, rgba(0.1, 0.1, 0.1, 0.9), rgba(0, 0, 0, 0.4)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "start",
        // textAlign:"center",
        // justifyContent:"center",
        boxSizing: "border-box",
        // px: { xs: 3, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 20, sm: 10, md: 10 },


      }}
    >
      <Box
        sx={{
          maxWidth: "1000px",
          color: "#ffffff",
          textAlign: "left", // Align text to start
          paddingLeft: '20px',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            // fontSize: { xs: "2rem", sm: "2.8rem", md: "3rem" },
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.4rem", lg: "3.8rem" },
            fontWeight: 800,
            mb: 2,
            textShadow: "1px 1px 3px rgba(0.1, 0.1, 0.1, 0.8)",
            whiteSpace: "normal", // Allow wrapping
          }}
        >
          <Box component="span" sx={{ color: "#ff6600" }}>
            Check Eligibility{" "}
          </Box>

        </Typography>

        <Typography
          component="p"
          sx={{
            // fontSize: "1.2rem",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            maxWidth: '800px',
            lineHeight: 1.6,
            fontWeight: 350,
            color: 'text.default',
          }}
        >
          Find out if you qualify for our energy-saving solutions with our quick eligibility form. It only takes a few minutes to see how you can benefit!
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
