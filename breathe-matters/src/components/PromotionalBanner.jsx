import React from "react";
import { Box, Typography, Button } from "@mui/material";

const PromotionalBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          margin: "15px",
          backgroundImage: "radial-gradient(circle,rgb(6, 148, 148), #035C5C)",
          color: "primary.contrastText",
          p: 4,
          borderRadius: 2,
          mt: 4,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            fontFamily: "'Spectral SC', serif",
          }}
          gutterBottom
        >
          DON'T WAIT
        </Typography>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 700,
            fontFamily: "'Spectral SC', serif",
          }}
          gutterBottom
        >
          TRANSFORM YOUR BREATHING TODAY!
        </Typography>
        <Box
          sx={{
            height: "44px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 400, mt: 3, mb: 2 }}>
            Your breath is your power. Take control with the CapnoTrainer® GO,
            and experience life with greater clarity, confidence, and vitality.
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={{
            fontWeight: 600,
            mt: 5,
            p: 2,
            backgroundColor: "#FFFFFF",
            color: "#035C5C",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Order Now and Start Your Breathing Journey!
        </Button>
      </Box>
    </Box>
  );
};

export default PromotionalBanner;
