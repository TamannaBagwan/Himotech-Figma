import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import eliminateStressImage from "../assets/images/eliminate_stress.png";
import enhanceMentalClarityImage from "../assets/images/enhance_mental_clarity.png";
import achievePeakPerformanceImage from "../assets/images/achieve_peak_performance.png";
import improvePhysicalHealthImage from "../assets/images/improve_physical_health.png";

function ServiceSection() {
  const services = [
    {
      title: "Eliminate Stress and Anxiety",
      description:
        "Learn to control overbreathing, reduce hypocapnia, and maintain balance even in challenging situations.",
      image: eliminateStressImage,
    },
    {
      title: "Enhance Mental Clarity and Focus",
      description:
        "Boost oxygen and glucose supply to your brain by aligning your breathing mechanics.",
      image: enhanceMentalClarityImage,
    },
    {
      title: "Achieve Peak Performance",
      description:
        "Whether you're giving a presentation, running a marathon, or meditating, experience the benefits of a well-aligned breath.",
      image: achievePeakPerformanceImage,
    },
    {
      title: "Improve Physical Health",
      description:
        "Address symptoms like shortness of breath, dizziness, and fatigue by optimizing your acid-base physiology.",
      image: improvePhysicalHealthImage,
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        sx={{
          fontSize: { xs: "30px", sm: "40px", md: "40px" },
          marginTop: "40px",
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "'Spectral SC', serif",
        }}
      >
        WHAT CAN THE CAPNOTRAINER®GO DO FOR YOU?
      </Typography>
      <Grid container>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ p: 3 }}>
            <Card
              sx={{
                height: "429px",
                width: "288px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: { xs: "20px 25px", sm: "30px 20px", md: "30px 15px" },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{ height: "258px", borderRadius: "11px 13px 0 0" }}
                />
                <CardContent
                  sx={{
                    backgroundColor: "rgb(0,128,128)",
                    color: "#fff",
                    height: "187px",
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <Typography sx={{ fontSize: "20px" }}>
                    {service.title}
                  </Typography>
                  <Typography sx={{ fontSize: "16px" }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ServiceSection;
