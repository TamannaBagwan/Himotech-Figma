import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import WellnessEnthusiasts from "../assets/images/wellness_enthusiatsa.png";
import HealthPractitioners from "../assets/images/health_practitioners.png";
import Athlets from "../assets/images/athelets.png";
import HealthcareProfessionals from "../assets/images/professionals.png";
import Trainers from "../assets/images/trainers.png";

const images = [
  {
    src: WellnessEnthusiasts,
    title: "Wellness Enthusiasts",
    desc: "Achieve better sleep, reduce anxiety, and enhance overall vitality.",
  },
  {
    src: HealthPractitioners,
    title: "Health Practitioners",
    desc: "Provide clients with revolutionary breathing behavior analysis for lasting results.",
  },
  {
    src: Athlets,
    title: "Athletes & Performers",
    desc: "Boost endurance, focus, and physical resilience.",
  },
  {
    src: HealthcareProfessionals,
    title: "Healthcare Professionals",
    desc: "Enhance patient care with cutting-edge breathing assessment tools.",
  },
  {
    src: Trainers,
    title: "Educators & Trainers",
    desc: "Incorporate evidence-based breathing techniques into your teaching or coaching.",
  },
];

const ImageGallery = () => {
  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Typography
        sx={{
          fontSize: { xs: "28px", sm: "34px", md: "40px" },
          fontWeight: 700,
          textAlign: "center",
          fontFamily: "'Spectral SC'",
          mb: { xs: 3, sm: 4, md: 5 },
        }}
      >
        Who Is the CapnoTrainer® GO For?
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {images.slice(0, 3).map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                "&:hover .overlay": {
                  opacity: 1,
                },
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                style={{
                  width: "100%",
                  height: "348px",
                  display: "block",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "85%", sm: "80%", md: "340px" },
                  backgroundColor: "#008080A6",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 2,
                  borderRadius: "8px",
                }}
              >
                <Typography
                  sx={{ fontWeight: 800, fontSize: { xs: "18px", md: "20px" } }}
                >
                  {image.title}
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: { xs: "14px", md: "16px" } }}
                >
                  {image.desc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        {images.slice(3).map((image, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                "&:hover .overlay": {
                  opacity: 1,
                },
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "85%", sm: "80%", md: "520px" },
                  backgroundColor: "#008080A6",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 2,
                  borderRadius: "8px",
                }}
              >
                <Typography
                  sx={{ fontWeight: 800, fontSize: { xs: "18px", md: "20px" } }}
                >
                  {image.title}
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: { xs: "14px", md: "16px" } }}
                >
                  {image.desc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGallery;
