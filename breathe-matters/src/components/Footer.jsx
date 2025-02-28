import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import BMLogo from "../assets/images/BreatheMattersLogo.png";
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/insta.png";
import Twitter from "../assets/images/twitter.png";
import Discord from "../assets/images/discord.png";

const Footer = () => (
  <Box sx={{ bgcolor: "white", py: 4 }}>
    <Container maxWidth="lg">
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={4} sm={12}>
          <img
            src={BMLogo}
            style={{
              width: window.innerWidth < 600 ? "290px" : "355px",
              height: "79px",
            }}
            alt="Breathe Matters Logo"
          />

          <Typography variant="body2" color="text.secondary">
            Join us on a journey towards a healthier, balanced life – where each
            inhale and exhale contributes to your overall sense of wellness.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Box sx={{ textAlign: { xs: "left", sm: "left" } }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "black",
                fontFamily: "'Spectral SC', serif",
                fontSize: "25px",
                lineHeight: "1",
                mb: 1,
              }}
            >
              Contact
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography color="text.secondary">Phone</Typography>
              <Typography color="text.secondary">Email</Typography>
              <Typography color="text.secondary">Location</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: { xs: "left", sm: "left" } }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: "black",
                fontSize: "25px",
                fontFamily: "'Spectral SC', serif",
                lineHeight: "1",
                mb: 3,
                ml: { xs: 0, sm: 4, md: 3 },
              }}
            >
              Stay in Touch
            </Typography>
            <Box
              sx={{
                display: "flex",
                mt: 1,
                justifyContent: { xs: "space-between", sm: "space-evenly" },
              }}
            >
              <Link href="#" color="inherit">
                <img
                  src={Instagram}
                  width="30px"
                  height="30px"
                  alt="Instagram"
                />
              </Link>
              <Link href="#" color="inherit">
                <img src={Facebook} width="30px" height="30px" alt="Facebook" />
              </Link>
              <Link href="#" color="inherit">
                <img src={Twitter} width="30px" height="30px" alt="Twitter" />
              </Link>
              <Link href="#" color="inherit">
                <img src={Discord} width="30px" height="30px" alt="Discord" />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography>@2024 BreatheMatters all rights reserved</Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
