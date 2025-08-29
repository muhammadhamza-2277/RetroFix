import React from "react";
import { Box, Typography } from "@mui/material";
import SolarBg from "../../assets/solarinsulation.jpg";

const SolarIntro = () => {
  // Define styles separately
  const headingStyles = {
    fontWeight: 800,
    mb: 3,
    pt:7,
    fontSize: { xs: "1.7rem", md: "2.1rem" },
    color: "#ff6600",
    textTransform: "uppercase",
          textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
    // textShadow: "1px 1px 3px rgba(0,0,0,0.7)", 
  };

  const paragraphStyles = {
    fontSize: { xs: "1rem", md: "1.25rem" },
    lineHeight: 1.6,
    maxWidth: 800,
    color: "#f1f1f1",
    pb:7,
    textShadow: "0.5px 0.5px 2px rgba(0,0,0,0.5)",
  };

  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        py: 8,
        px: { xs: 3, md: 12 },
        fontFamily: "sans-serif",
        minHeight: 300,
        // backgroundImage: `linear-gradient(rgba(11,28,44,0.75), rgba(11,28,44,0.75)), url(${SolarBg})`,
        backgroundImage: `linear-gradient(to right, rgba(0.1, 0.1, 0.1, 0.6), rgba(0, 0, 0, 0.3)), url(${SolarBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        borderRadius: 2,
        boxShadow: "inset 0 0 100px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow:'hidden',
      }}

    >
      <Typography variant="h5" sx={headingStyles}>
        Power Your Future with Retrofix Solutions
      </Typography>
      <Typography variant="body1" sx={paragraphStyles}>
        Retrofix Solutions is your trusted partner in harnessing solar energy for a sustainable future. We specialize in high-quality solar panel installations that help reduce electricity costs, increase energy independence, and lower your carbon footprint. Our expert team ensures seamless installation and maintenance, delivering reliable, clean power that adds long-term value to your home or business. Choose Retrofix Solutions to power your property efficiently while contributing to a greener planet.
      </Typography>
    </Box>
  );
};

export default SolarIntro;
