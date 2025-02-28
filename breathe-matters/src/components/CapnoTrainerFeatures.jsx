import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import BreathingSctions from "../assets/images/real_time_pco.png";
import MonitorProgress from "../assets/images/monitor_your_progress.png";
import Feedback from "../assets/images/feedback.png";

const CapnoTrainerFeatures = () => {
  const features = [
    {
      image: BreathingSctions,
      title: "See Your Breathing in Action",
      description:
        "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals.",
    },
    {
      image: MonitorProgress,
      title: "Monitor Your Progress",
      description:
        "Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration.",
    },
    {
      image: Feedback,
      title: "Receive Tailored Feedback",
      description:
        "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.",
    },
  ];

  return (
    <Box
      sx={{
        margin: "0 auto",
        backgroundColor: "#f5f9fa",
        marginTop: { xs: "350px", sm: "350px", md: "300px" },
        padding: { xs: "10px", sm: "10px", md: "130px" },
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography
            variant="h2"
            sx={{
              color: "rgba(0, 128, 128, 1)",
              fontSize: "40px",
              lineHeight: 1.2,
              mb: 3,
              fontWeight: 700,
              fontFamily: "'Spectral SC', serif",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "rgba(16, 16, 16, 1)",
                display: "block",
                fontSize: "17px",
                fontWeight: 700,
                mb: 0.5,
              }}
            >
              Experience the
            </Box>
            Power of CapnoTrainer® GO
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={5}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                height: "367px",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={feature.image}
                alt={feature.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: "#008080",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#666",
                    lineHeight: 1.6,
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CapnoTrainerFeatures;
