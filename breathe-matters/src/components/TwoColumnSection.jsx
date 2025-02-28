import React from "react";
import { Container, Grid, Typography, CardMedia, Box } from "@mui/material";
import CapnoWithGym from "../assets/images/capno_with_gym.png";

const TwoColumnSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            image={CapnoWithGym}
            alt="CapnoTrainer GO"
            sx={{
              borderRadius: "100px 100px 0 0",
              width: { xs: "100%", sm: "430px", md: "380px" },
              height: "445px",
              display: "block",
              mx: { xs: "auto", sm: "auto" },
            }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Box sx={{ ml: { sm: 1, md: 3 }, mt: { xs: 3, sm: 4, md: 0 } }}>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: 700,
                mb: 2,
                fontFamily: " 'Spectral SC'",
              }}
            >
              WHAT MAKES THE CAPNOTRAINER® GO DIFFERENT?
            </Typography>

            <Typography sx={{ fontSize: "16px", fontWeight: 400, mb: 3 }}>
              Unlike traditional breathing tools that focus on shallow
              techniques, the CapnoTrainer® GO goes deeper. It integrates{" "}
              <Box component="span" sx={{ color: "#008080", fontWeight: 700 }}>
                psychophysiology, behavioral analysis, and cutting-edge
                technology
              </Box>{" "}
              to provide a complete understanding of your breath's role in
              health and performance.
            </Typography>

            <Box
              sx={{
                boxShadow: "0px 4px 10px rgb(126, 124, 124)",
                padding: { xs: "30px 15px", md: "18px 15px" },
                borderRadius: "8px",
                height: { xs: "120px", sm: "60px", md: "70px" },
                position: "relative",
                left: { sm: "0px", md: "-50px" },
                backgroundColor: "#fff",
                width: { xs: "300px", sm: "600px", md: "700px" },
              }}
            >
              <Typography
                sx={{ fontSize: "20px", fontWeight: 800, color: "#008080" }}
              >
                "Breathing is behavior. And behavior can be changed. The
                CapnoTrainer® helps you edit, optimize, and own your breath for
                life."
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TwoColumnSection;
