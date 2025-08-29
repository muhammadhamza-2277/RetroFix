import React from "react";
import { Box, useTheme } from "@mui/material";

const StratfordMap = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: theme.layout?.maxContentWidth || '100%',
        maxWidth: theme.layout?.maxContentWidth || '100%',
        height: "500px",
        margin: "auto",
        my: 10,
        borderRadius: 2,
        overflow: "hidden",
        border: "2px solid #ccc",
      }}
    >
      <iframe
        title="Stratford Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1700.5143698200716!2d-2.0098193891686997!3d52.6058354297563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709f4e7c86a3e5%3A0xc1406a1d7de4c3b4!2s8%20Reaymer%20Cl%2C%20Bloxwich%2C%20Walsall%20WS2%207QZ%2C%20UK!5e1!3m2!1sen!2s!4v1754984924333!5m2!1sen!2s" referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default StratfordMap;
