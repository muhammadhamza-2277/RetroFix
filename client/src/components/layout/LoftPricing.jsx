import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <Section>
      <Left>
        <Typography variant="h4" className="heading">
          We're Efficient with Loft Insulation
        </Typography>
        <Typography className="description">
          Up to <strong>25% of your home's heat</strong> is lost through the roof. Loft insulation is an effective way to reduce energy loss, improve comfort, and lower your bills.
          Our certified professionals ensure quick and clean installation using the best materials like mineral wool and fibreglass.
        </Typography>
        <Button
          variant="filled"
          textAlign='center'
          component={Link}
          to="/check-eligibility"
          sx={{
            mt: 4,
            alignSelf: { xs: 'center', md: 'flex-start' },
            width: 'fit-content',
          }}
        >
          Check Eligibility
        </Button>
      </Left>

      <Right>
        <Card className="red">
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Quick Installation
          </Typography>
          <Typography>
            Fast, clean, and professional installation with minimal disruption to your home.
          </Typography>
        </Card>
        <Card className="yellow">
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Energy Efficiency
          </Typography>
          <Typography>
            Keeps your home warmer in winter and cooler in summer while lowering bills.
          </Typography>
        </Card>
        <Card className="green">
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Eco-Friendly Materials
          </Typography>
          <Typography>
            We use top-quality, sustainable materials like mineral wool and fibreglass.
          </Typography>
        </Card>
        <Card className="yellow">
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Licensed Professionals
          </Typography>
          <Typography>
            All work is carried out by certified professionals with safety and quality in mind.
          </Typography>
        </Card>
      </Right>
    </Section>
  );
};

export default PricingSection;

// Styled Components

const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "110px 40px",
  maxWidth: "1200px",
  margin: "auto",
  gap: "45px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "40px 20px",
  },
}));

const Left = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingTop: "100px",
  minWidth: "300px",
  maxWidth: "500px",
  "& .heading": {
    fontSize: "2rem",
    color: "#083344",
    paddingBottom: "25px",
    fontWeight: "750", // fixed value
  },
  "& .description": {
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: "30px",
    color: '#000',
  },
}));

const StyledButton = styled(Button)({
  backgroundColor: "#2a7b2e",
  color: "white",
  padding: "12px 30px",
  borderRadius: "38px",
  fontSize: "1.2rem",
  textTransform: "none",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: "#ff6600",
  },
});

const Right = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  maxWidth: "100%",
}));

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: "25px 25px",
  borderRadius: "10px",
  color: "#000",
  marginBottom: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
  borderLeft: "6px solid transparent",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
  },
  "&.red": {
    borderColor: "#ef4444",
  },
  "&.yellow": {
    borderColor: "#facc15",
  },
  "&.green": {
    borderColor: "#22c55e",
  },
}));
