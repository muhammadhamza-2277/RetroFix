import React from "react";
import { Box, Typography } from "@mui/material";
import ewiImg from "../../assets/ewi.jpeg"; // import from src/assets

export default function HighlightedSection() {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/gplay.png'),
                          linear-gradient(to right, #c9ccc7e3, #aef0c9b4, #f8faf5)`,
        backgroundRepeat: "repeat",
        backgroundColor: "#fdfcfa",
        py: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: { xs: 3, md: 8 },
          py: { xs: 4, md: 10 },
          background: "linear-gradient(to right,#d4ddce,#92e0b3, #e3f1d8, 30%, transparent 30%)",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Image */}
        <Box sx={{ flex: { xs: "unset", md: 1.1 }, p: { xs: 3, md: 6 } }}>
          <Box
            component="img"
            src={ewiImg} // imported image here
            alt="Home Image"
            sx={{
              width: "100%",
              minWidth: { md: "420px" },
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            }}
          />
        </Box>

        {/* Text */}
        <Box sx={{ flex: { xs: "unset", md: 2 }, p: { xs: 3, md: 4 } }}>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "51px" },
              lineHeight: 1.6,
              color: "#2c3e50",
              fontWeight: 500,
              maxWidth: "600px",
            }}
          >
            <span id="animated-text">External Wall Insulation</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "19px",
              color: "#444",
              mt: 2,
              fontWeight: 400,
              maxWidth: "550px",
              pt: 1,
            }}
          >
            Wrap your home in warmth, style, and energy savings with external wall insulation.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
