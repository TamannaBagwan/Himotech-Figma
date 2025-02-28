import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import Monitoring from "../assets/images/monitoring.png";
import SoundWave from "../assets/images/sound_wave.png";
import Practicums from "../assets/images/practicums.png";
import CustomPlans from "../assets/images/custom_learing_plans.png";

function KeyFeatures() {
  const items = [
    {
      title: "Real-Time Monitoring",
      description:
        "Track your breathing metrics like CO2 concentration, breathing rate, and rhythm.",
      image: Monitoring,
    },
    {
      title: "Capnogram Visualization",
      description:
        "Get instant feedback on your breathing mechanics and see the impact of adjustments in real-time.",
      image: SoundWave,
    },
    {
      title: "Custom Learning Plans",
      description:
        "Tailored strategies to help you unlearn bad habits and master new ones.",
      image: CustomPlans,
    },
    {
      title: "Interactive Practicums",
      description:
        "Experiment with guided breathing challenges to align behavior with physiology.",
      image: Practicums,
    },
  ];

  return (
    <Box>
      <Container sx={{ py: 4 }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            textAlign: { xs: "center", sm: "center", md: "center" },
            fontSize: { xs: "27px", sm: "35px", md: "40px" },
            fontWeight: 700,
            margin: "50px 45px",
            fontFamily: "'Spectral SC', serif",
            marginTop:{xs:'280px',sm:'150px',md:'25px'}
          }}
        >
          Key Features You’ll Love
        </Typography>
        <Grid
          container
          spacing={2}
          mt={3}
          justifyContent="center"
          sx={{ textAlign: { xs: "center", sm: "left", md: "left" } }}
        >
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "237px",
                  mx: "auto",
                  height: "181px",
                  mb: 4,
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{ height: "74px", width: "74px", mb: 3 }}
                />
                <Typography sx={{ fontSize: "16px", fontWeight: 700, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "15px", fontWeight: 400 }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default KeyFeatures;
