import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { SolarPower, SupportAgent } from "@mui/icons-material";
import SolarImg1 from "../../assets/solar1.jpg";
import { Link } from "react-router-dom";

const SolarBenefits = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0b1c2c",
        color: "#fff",
        // overflow:'hidden',
        py: 8,
        px: { xs: 2, md: 10 },
        fontFamily: "sans-serif",
      }}
    >
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        {/* Left Content */}
        <Box sx={{ flex: "1 1 35%", minWidth: 300, pr: { md: 6 }, mb: 4 }}>
          {/* <Typography
            variant="subtitle2"
            sx={{ color: "#52c41a", fontSize: 14, mb: 1 }}
          >
            WHY CHOOSE US
          </Typography> */}
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, fontSize: 28, lineHeight: 1.4, mb: 3, color: '#f1f1f1' }}
          >
            Solar Panel Installation – Power Your <br />  Home with the Sun
          </Typography>
          <Typography variant="body2" sx={{ mb: 8, fontSize: '0.97rem', color: '#f1f1f1' }}>
            Generate clean, renewable energy right from your rooftop. Solar panels help you cut electricity costs, protect against rising prices, and reduce your carbon footprint—all while adding value to your property.
          </Typography>

          {/* Benefit Box 1 */}
          <Stack direction="row" spacing={2} alignItems="flex-start" mb={3}>
            <Box
              sx={{
                bgcolor: "#52c41a",
                borderRadius: "50%",
                width: 150,
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SolarPower sx={{ color: "#fff" }} />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#ff6600', fontSize: '1.40rem' }}>
                Expert Guidance from Start to Finish
              </Typography>
              <Typography variant="body2" sx={{ color: "#f1f1f1", fontSize: '0.95rem' }}>
                Our team guides you through every step—from consultation to installation—making sure your solar system fits your home and energy needs perfectly. We handle the details so you don’t have to worry.
              </Typography>
            </Box>
          </Stack>

          {/* Benefit Box 2 */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Box
              sx={{
                bgcolor: "#ffcc00",
                borderRadius: "50%",
                width: 150,
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SupportAgent sx={{ color: "#000" }} />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 580, color: '#ff6600', fontSize: '1.40rem' }}>
                Upgrade Your Energy with Zero Hassle
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff", fontSize: '0.95rem' }}>
                Switching to solar is seamless. Our dedicated team oversees every phase—from consultation and installation to ongoing support—ensuring you enjoy reduced energy costs and a sustainable home with ease.


              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Right Content (Image + Heading + New Text + Button) */}
        <Box
          sx={{
            flex: "1 1 25%",
            minWidth: 250,
            bgcolor: "#1d2c3b",
            p: 3,
            borderRadius: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <Box
            component="img"
            src={SolarImg1}
            alt="Solar Benefit"
            sx={{
              width: "100%",
              height: 230,
              objectFit: "cover",
              borderRadius: 1,
              //   mb: 3,
            }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#fff", mb: 1, fontSize: '1.6rem' }}
            >
              Ready to Save Energy?
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", mb: 5, fontSize: '1.3rem' }}>
              Let us help you improve the comfort of your home
            </Typography>
            {/* <Typography variant="body2" sx={{ color: "#ccc", mb: 3 }}>
              Contact us now to see if you qualify
            </Typography> */}
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SolarBenefits;
