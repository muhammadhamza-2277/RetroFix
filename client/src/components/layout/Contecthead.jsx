import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import bg from "../../assets/CONTACT2.jpg"; // Ensure this path is correct

const HeroSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "110vh",
        backgroundImage: `linear-gradient(to right, rgba(0.1, 0.1, 0.1, 0.9), rgba(0, 0, 0, 0.2)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        // textAlign:"center",
        // justifyContent:"center",
        boxSizing: "border-box",
        // px: { xs: 3, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 4, sm: 6, md: 10 },


      }}
    >
      <Box
        sx={{
          // maxWidth: "1000px",
          color: "#ffffff",
          textAlign: "left", // Align text to start
          // paddingLeft: '90px',

          width: theme.layout?.maxContentWidth || '',
          maxWidth: theme.layout?.maxContentWidth || '',
          mx: 'auto'
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
            Contact Us{" "}
          </Box>

        </Typography>

        <Typography
          component="p"
          sx={{
            // fontSize: "1.2rem",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            color: 'text.default',
            lineHeight: 1.6,
            fontWeight: 350,
          }}
        >
          We’re here to help you take the next step. Whether you have questions, need  a  quote,<br /> or want expert guidance — the team at Retrofix Solutions is just a message away.<br /> Let’s connect and build a brighter, energy-efficient future together.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
