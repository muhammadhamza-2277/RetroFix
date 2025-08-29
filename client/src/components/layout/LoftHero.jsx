import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import loftImage from "../../assets/loft2.jpg";

const LoftHero = () => {
  return (
    <Section>
      <ImageSide />
      <TextSide>
        <TextContent>
          <Typography variant="h1" className="heading">
            <span>Loft Insulation</span>
          </Typography>
          <Typography className="brand">
            <span>Save up to 25% </span>on heating by preventing roof heat loss
          </Typography>
        </TextContent>
      </TextSide>
    </Section>
  );
};

export default LoftHero;

// Styled Components

const Section = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "auto",
  },
}));

const ImageSide = styled(Box)(({ theme }) => ({
  flex: 1.1,
  width: "100%",
  height: "100vh",
  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${loftImage})`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    height: "300px",
    clipPath: "none",
    backgroundAttachment: "scroll",
  },
}));

const TextSide = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: "#74B12E",
  clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    clipPath: "none",
    padding: theme.spacing(4, 2),
  },
}));

const TextContent = styled(Box)(({ theme }) => ({
  maxWidth: "400px",
  color: "white",
//   textAlign: "center",
  margin: "auto",
  "& .heading": {
    fontSize: "3.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "20px",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
      whiteSpace: "normal",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  "& .brand": {
    fontSize: "1.2rem",
    fontWeight: 600,
    "& span": {
      fontWeight: 700,
      color: "#000",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));
