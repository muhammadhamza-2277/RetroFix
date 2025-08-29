import React from "react";
import { Box, Typography, Button, Stack, Avatar, AvatarGroup } from "@mui/material";
import { Link } from "react-router-dom";

// Online image URLs (same as your HTML)
const avatarUrls = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
  "https://i.pravatar.cc/40?img=5",
];

export default function ConnectSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        textAlign: "center",
        fontFamily: "'Segoe UI', sans-serif",
        mb: 12,
        background: "linear-gradient(to bottom right, #fceabb, #e6e9f0, #cfd9df, #a1c4fd)",
      }}
    >
      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        {/* Top Row */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          flexWrap="wrap"
          mb={2}
        >
          {/* Avatars */}
          <AvatarGroup
            max={5}
            sx={{
              "& .MuiAvatar-root": {
                width: 40,
                height: 40,
                border: "2px solid #fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              },
            }}
          >
            {avatarUrls.map((url, index) => (
              <Avatar key={index} src={url} alt="user" />
            ))}
          </AvatarGroup>

          {/* Rating */}
          <Box sx={{ fontSize: 14, color: "#555", textAlign: "left" }}>
            ⭐⭐⭐⭐⭐
            <Typography sx={{ fontSize: 13, color: "#888", mt: 0.5 }}>
              1,000+ customers joined
            </Typography>
          </Box>
        </Stack>

        {/* Heading */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: 700,
            color: "#111",
            mb: 2,
          }}
        >
          Your Comfort, Our Mission —{" "}
          <Box component="span" sx={{ color: "#000" }}>
            Reach Out Anytime
          </Box>
        </Typography>

        {/* Paragraph */}
        <Typography
          sx={{
            fontSize: 16,
            color: "#000",
            maxWidth: 600,
            mx: "auto",
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          we help make your home more comfortable, energy-efficient and
          cost-effective with smart heating technology.
        </Typography>

        {/* Buttons */}
        <Stack direction="row" justifyContent="center" gap={2} flexWrap="wrap">
          <Button
            variant="contained"
            component={Link}
            to="/contact"
            sx={{
              backgroundColor: "#078330",
              color: "#fff",
              px: 3,
              py: 1.5,
              borderRadius: "25px",
              fontWeight: 600,
              fontSize: 15,
              "&:hover": { backgroundColor: "#ff6600" },
            }}
          >
            Contact Us →
          </Button>


        </Stack>
      </Box>
    </Box>
  );
}
