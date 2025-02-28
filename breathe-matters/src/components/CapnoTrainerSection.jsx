import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CapnoTrainer from "../assets/images/capnotrainer.png";
import WoodenStand from "../assets/images/wood_stand.png";

const listItems = [
  "Identify and correct dysfunctional breathing habits.",
  "Understand the triggers and motivations behind your habits.",
  "Optimize your respiration for health, focus, and performance.",
];

const CapnoTrainerSection = () => {
  return (
    <Container sx={{ mt: '100px', mb: 5, height: "340px" }}>
      <Grid container spacing={7} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "35px", md: "40px" },
                fontWeight: 700,
                color: "#2e7d8b",
                fontFamily: "'Spectral SC', serif",
              }}
            >
              WHAT IS THE
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "40px", md: "50px" },
                fontWeight: 700,
                color: "#2e7d8b",
                fontFamily: "'Spectral SC', serif",
                mb: 4,
              }}
            >
              CAPNOTRAINER® GO?
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
              The Capno Trainer® GO isn't just a tool—it's your personal gateway
              to a healthier, more aligned you. Using advanced{" "}
              <Typography
                component="span"
                sx={{ color: "teal", fontWeight: 700 }}
              >
                capnography technology,
              </Typography>
              it provides real-time insights into your breathing behavior by
              measuring CO2 levels and visualizing your breathing patterns.
              Paired with a guided learning framework, it empowers you to:
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={CapnoTrainer}
              alt="CapnoTrainer GO"
              sx={{
                width: "200px",
                height: "250px",
                zIndex: 2,
                position: "relative",
                display: { xs: "none", sm: "block", md: "block" },
              }}
            />
            <Box
              component="img"
              src={WoodenStand}
              alt="Wooden Stand"
              sx={{
                width: "375px",
                height: "132px",
                position: "absolute",
                bottom: "-60px",
                left: { xs: "10%", sm: "17%", md: "22%" },
                transform: "translateX(-50%)",
                zIndex: 1,
                display: { xs: "none", sm: "block", md: "block" },
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 3,
              }}
            >
              {listItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    height: { xs: "40px", sm: "25px", md: "20px" },
                    width: { xs: "350px", sm: "470px", md: "480px" },
                    display: "flex",
                    justifyContent: "flex-start",
                    borderRadius: "8px",
                    padding: "10px 5px",
                    marginLeft: { xs: "10px", sm: "200px", md: "290px" },
                    marginTop: "30px",
                    backgroundColor: "#E6F2F2",
                    mb: 1,
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#4caf50", mr: 1 }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#008080",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CapnoTrainerSection;
