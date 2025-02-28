
import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import BreathePattern from "../assets/images/breathe_patterns.png";

const cardData = [
  {
    title: "Measure What Matters",
    description:
      "Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.",
  },
  {
    title: "Customized Interventions",
    description:
      "Based on your unique breathing habits, receive tailored exercises and interventions to dismantle bad habits and cultivate optimal ones.",
  },
  {
    title: "Visualize Your Breathing",
    description:
      "See your breathing habits on a capnogram, a dynamic display of your inhalation and exhalation patterns. Pinpoint issues like overbreathing, gasps, or shallow breaths.",
  },
  {
    title: "Engage in Practicums",
    description:
      "Explore playful self-intervention techniques to realign breathing mechanics with your body’s needs—whether through nose-breathing challenges or CO2 biofeedback training.",
  },
];

const CapnoTrainerHowItWorks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "auto",
        height: "auto",
        position: "relative",
        background: `linear-gradient(to right, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%), url(${BreathePattern})`,
        // backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 2,
          p: 5,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "40px",
            mb: 3,
            fontFamily: "'Spectral SC', serif",
          }}
        >
          HOW THE CAPNOTRAINER® GO WORKS
        </Typography>

        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  backgroundColor: "rgb(3, 136, 136)",
                  color: "white",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="body2">{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
};

export default CapnoTrainerHowItWorks;
