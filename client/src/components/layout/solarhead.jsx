import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Step1 from "../../assets/solar1.jpg";
import Step2 from "../../assets/solar2.jpg";
import Step3 from "../../assets/solar3.jpg";
import Step4 from "../../assets/solar4.webp";

const steps = [
  {
    id: "01",
    title: "Quick Installation",
    description:
      "Solar panels on the roof harness sunlight to generate clean, renewable energy for your home.",
    image: Step1,
  },
  {
    id: "02",
    title: "Licensed Professionals",
    description:
      "Our qualified team ensures safe, compliant, and efficient solar panel installations every time.",
    image: Step2,
  },
  {
    id: "03",
    title: "Energy Efficiency",
    description:
      "Solar systems increase efficiency, lower bills, and add long-term value to your property.",
    image: Step3,
  },
  {
    id: "04",
    title: "Sustainable Benefits",
    description:
      "Lower your carbon footprint, protect against rising energy prices, and enjoy energy independence.",
    image: Step4,
  },
];

const SolarProcess = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, pb: 6, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 10,
          pt: 5,
          fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
          color: "#ff6600",
          "& span": { color: "#000" },
        }}
      >
        Solar Panel <span>installation</span>
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {steps.map((step, index) => {
          const isEven = index % 2 !== 0;

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                mb: 12,
              }}
            >
              {/* Top Content */}
              {isEven && (
                <>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, fontSize: '1.12rem' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ maxWidth: 240, mb: 2 }}>
                    {step.description}
                  </Typography>
                </>
              )}

              {/* Image Box */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 240,
                  height: 160,
                  overflow: "hidden",
                  position: "relative",
                  borderRadius: isEven ? "0 0 80% 80%" : "80% 80% 0 0",
                }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Bottom Content */}
              {!isEven && (
                <>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2, mb: 1, fontSize: '1.15rem' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ maxWidth: 240 }}>
                    {step.description}
                  </Typography>
                </>
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SolarProcess;
