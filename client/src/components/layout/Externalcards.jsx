import React from "react";
import { Box, Typography } from "@mui/material";
import outsideImg from "../../assets/outside.jpg"; // adjust path

const features = [
  {
    title: "⚡ Quick & Hassle-Free Installation",
    text: "Insulate your home externally with minimal disruption — fast, clean, and effective insulation that keeps your interior untouched."
  },
  {
    title: "🧱 Stronger, Smarter Home",
    text: "Extend the life of your walls and boost your home's look with a sleek, modern finish that adds value."
  },
  {
    title: "🛠️ Licensed Professionals",
    text: "Work with certified experts using the latest insulation techniques and top-grade materials."
  }
];

export default function EWISection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${outsideImg})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "'Poppins', sans-serif",
        color: "#2d2d2d",
        lineHeight: 1.7,
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, sm: 6, md: 8 },
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto"
        }}>
        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "26px", sm: "32px", md: "37px" },
            color: "#fff",
            fontWeight: 600,
            mb: 2,
            textAlign: 'center',
            px: { xs: 2, sm: 3, md: 4 }
          }}
        >
          External Wall Insulation (EWI)
        </Typography>

        {/* Sub-heading */}
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "16px", md: "18px" },
            color: "#f1f1f1",
            mb: { xs: 4, sm: 6 },
            maxWidth: 900,
            fontWeight: 400,
            textAlign: { xs: "justify", sm: "center" },
            px: { xs: 2, sm: 3, md: 4 },
            mx: 'auto'
          }}
        >
          Do you have solid walls and a cold, uncomfortable home? <br />
          <strong> Reimagine your living space</strong> with External Wall
          Insulation — a smart way to cut energy bills, boost warmth, and upgrade
          your home's appearance.
        </Typography>

        {/* Flex container for features */}
        <Box
          sx={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "stretch",
            gap: 3,
            flexWrap: { xs: "wrap", md: 'nowrap' },
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: "12px",
                borderLeft: "5px solid #3d5c3b",
                boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                transition: "transform 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                minHeight: { xs: 180, sm: 220, md: 260 },
                maxWidth: { xs: "100%", sm: "250px", md: "300px", lg: "400px" },
                flex: "1 1 300px", // makes them flexible but capped
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "#ff6600",
                  mb: 1.5,
                }}
              >
                {feature.title}
              </Typography>

              <Box
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  color: "#000",
                  background: "linear-gradient(to right, #f0f4f8, #b7eeb0)",
                  p: { xs: 1.5, sm: 2.5 },
                  borderRadius: "5px",
                  flexGrow: 1,
                  overflowY: "auto",
                }}
              >
                {feature.text}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
