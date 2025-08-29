import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const AboutCompany = () => {
  return (
    <Box
      className="about-company"
      sx={{
        background:
          "linear-gradient(to bottom, #89eb99bd, rgba(0.2, 0.2, 0.3, 0.7), rgba(0.1, 0.1, 0.1, 0))",
        mb: 6,
        color: "#fff",
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 10 },
        textAlign: "center",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <Typography
        variant="h2"
        className="company-title"
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.4rem" },
          mb: 4,
          mt: { xs: 4, md: 6 },
          color: "#000",
        }}
      >
        Internal Wall Insulation (IWI)
      </Typography>

      <Typography
        className="sub"
        sx={{
          textAlign: "justify",
          fontSize: { xs: "1rem", md: "1.2rem" },
          color: "#000",
          mb: 8,
          px: { xs: 2, sm: 6, md: 12 },
        }}
      >
        Internal wall insulation involves building a stud frame on the inside of
        external walls, inserting premium insulation material between the
        panels, and covering it with plasterboard. We then fully replaster the
        wall to deliver a smooth, warm, and energy-efficient finish — all
        without changing your home’s appearance.
      </Typography>

      <Grid
        container
        spacing={3}
        direction={{ xs: "column", md: "row" }}
        alignItems="stretch"
        justifyContent="center"
        className="features"
      >
        {[
          {
            title: "⚡ Quick Installation",
            desc: "Our internal wall insulation service is ideal for older properties where energy efficiency is a concern. The process is fast, clean, and minimally disruptive.",
          },
          {
            title: "🏠 Stronger, Warmer Home",
            desc: "Insulating your internal walls helps reduce heat loss, instantly making your home more comfortable while lowering energy bills.",
          },
          {
            title: "✅ Licensed Professionals",
            desc: "Our fully trained and certified team ensures every installation meets the highest standards — with quality, safety, and precision in every step.",
          },
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                border: '15px solid #fff',
                borderRadius: 2,
                maxWidth: 300,
                width: "100%",
                mx: "auto",
                height: "100%",
                background:
                  "linear-gradient(to right,#d4ddce,#92e0b3, #e3f1d8)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 0 15px rgba(255, 153, 0, 0.3)",
                },
              }}
            >
              <Typography variant="h6" sx={{ color: "#ff6600", mb: 1 }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: "0.95rem", color: "#000" }}>
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutCompany;
