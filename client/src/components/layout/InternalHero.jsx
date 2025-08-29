import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import bg from "../../assets/pagebg.png"; // Ensure this path is correct

const HeroSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: `linear-gradient(to right, rgba(0.1, 0.1, 0.1, 0.9), rgba(0, 0, 0, 0.2)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        // px: { xs: 3, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 4, sm: 6, md: 10 },


      }}
    >
      <Box
        sx={{
          maxWidth: "1000px",
          color: "#ffffffff",
          textAlign: "left", // Align text to start
          paddingLeft: '20px',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            // fontSize: { xs: "2rem", sm: "2.8rem", md: "3rem" },
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            fontWeight: 730,
            mb: 2,
            textShadow: "1px 1px 3px rgba(0.1, 0.1, 0.1, 0.8)",
            whiteSpace: "normal", // Allow wrapping
            color: 'text.default'
          }}
        >
          <Box component="span" sx={{ color: "#ff6600" }}>
            Internal{" "}
          </Box>
          Wall Insulation
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
          Internal wall insulation involves installing a stud frame, filling the gaps with high-quality insulation <br />material, and finishing with plasterboard. Once in place, we fully replaster the wall to create <br /> a smooth, durable surface that enhances comfort and energy efficiency.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
