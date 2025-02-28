import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import Person from "../assets/images/Person.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#008080",
        color: "#fff",
        padding: { xs: 2, md: 4 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        height: { xs: "auto", sm: "auto", md: "500px" },
        width: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sm={12}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <img
              src={Person}
              alt="Person"
              style={{
                width: "426px",
                height: "490px",
                marginTop: "40px",
                marginLeft: "50px",
              }}
            />
          </Grid>

          <Grid item xs={12} md={9} sm={12}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "right" },
                padding: { xs: 1, md: 2 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "30px", sm: "55px", md: "60px" },
                  fontFamily: "'Spectral SC', serif",
                  textDecoration: "underline wavy #fff 2px",
                  marginBottom: { xs: 2, sm: 2, md: 1 },
                }}
              >
                TAKE CONTROL OF YOUR <br /> BREATH TODAY!
              </Typography>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
                width: "80%",
                padding: "30px",
                marginLeft: "140px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  margin: "0px 0px 0px -60px",
                  textAlign: { sm: "center" },
                }}
              >
                Invest in the Science of Better Breathing.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  margin: "0px -90px 50px 80px",
                }}
              >
                For a limited time, get your CapnoTrainer®GO at an exclusive
                launch price!
              </Typography>
            </Box>

            <Box
              sx={{
                width: { xs: "300px", sm: "550px", md: "600px" },
                height: { xs: "90px", sm: "180px", md: "130px" },
                backgroundColor: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: { xs: "auto", sm: "auto", md: 0 }, // Centers for xs & sm, removes centering for md
                marginLeft: { md: "350px" }, // Left margin only for md
                marginTop: { xs: "10px", sm: "40px", md: "20px" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  margin: { xs: 3, sm: 5, md: 2 },
                  backgroundColor: "#fff",
                  padding: { xs: "5px", sm: "15px", md: "20px" },
                  fontWeight: 700,
                  fontSize: { xs: "10px", sm: "16px", md: "16px" },
                  color: "#008080",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                Order now and receive a FREE personalized breathing evaluation
                plan!
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
