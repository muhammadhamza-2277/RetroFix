import React from "react";
import { Box, Typography } from "@mui/material";
import heatPumpBanner from "../../assets/AirSource/Airsource.avif"; // adjust the path if needed

const HeatPumpBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "400px", sm: "450px", md: "500px", lg: "550px" },
        backgroundImage: `url(${heatPumpBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        overflow: "hidden",
        justifyContent: "center",
        pt: { xs: 6, sm: 8, md: 10 },
        px: 2,
        textAlign: "center",
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.98) 0%, rgba(255,255,255,1.0) 30%, rgba(255,255,255,0.1) 66%)",
          zIndex: 1,
        }}
      />

      {/* Text */}
      <Box sx={{ zIndex: 2, px: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "background.primary",
            textTransform: "uppercase",
            mt: -5,
            pt: { xs: 6, sm: 8, md: 11 },
            fontSize: {
              xs: "1.8rem",
              sm: "2.4rem",
              md: "2.6rem",
              lg: "3rem",
            },
            lineHeight: 1.2,
          }}
        >
          Air Source Heat Pumps
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#000",
            // fontWeight: 700,
            pt: { xs: 2, sm: 3 },
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.3rem",
            },
            maxWidth: { xs: '400px', sm: '700px' },
            lineHeight: 1.3,
          }}
        >
          Heat your home and water using renewable energy from the
          air — with an efficient air source heat pump.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeatPumpBanner;
