import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import BreatheMattersLogo from "../assets/images/BreatheMattersLogo.png";
import Device from "../assets/images/device.png";

const HeaderSection = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(107, 181, 181, 1), rgba(0, 128, 128, 1))",
          minHeight: { xs: "auto", sm: "auto", md: "520px" },
          padding: { xs: "10px", sm: "20px", md: "10px 10px 35px 10px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            padding: { xs: "10px 20px", md: "20px 40px" },
          }}
        >
          <Box
            component="img"
            src={BreatheMattersLogo}
            alt="BreatheMattersLogo"
            sx={{
              height: "58px",
              width: "260px",
              mb: { xs: 2, md: 0 },
              ml: { md: "40px" },
            }}
          />

          <Button
            variant="contained"
            sx={{
              bgcolor: "#006D5B",
              color: "white",
              fontWeight: 600,
              fontSize: "16px",
              textTransform: "none",
              width: "121px",
              height: "43px",
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#005a4c",
              },
            }}
          >
            Book Now
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={10}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "28px", sm: "40px", md: "40px" },
                lineHeight: 1.2,
                fontFamily: "'Spectral SC', serif",
                color: "#fff",
                textAlign: { xs: "center", sm: "center", md: "left" },
                marginLeft: { xs: " 10px", sm: "10px", md: "40px" },
                p: { xs: "20px", sm: "10px", md: "5px 20px 15px 45px" },
              }}
            >
              Transform Your Life with the Revolutionary CapnoTrainer® GO
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ borderRadius: "8px", textAlign: "left", color: "#fff" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "22px", sm: "34px", md: "36px" },
                  m: { xs: "5px 20px", sm: "30px 40px", md: "5px 40px" },
                  textAlign: { xs: "center", md: "left" },
                  pl:{ md:"50px" },  
                }}
              >
                Breathe Smarter, Live Better
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "18px", md: "17px" },
                  lineHeight: 1.6,
                  mb: 4,
                  fontWeight: 400,
                  textAlign: { xs: "center", md: "left" },
                  marginLeft: { xs: " 10px", sm: "10px", md: "40px" },
                  p: { xs: "20px", sm: "10px", md: "5px 20px 15px 45px" },
                }}
              >
                Breathing is more than just an unconscious action—it's a
                foundation of health, performance, and emotional well-being. But
                what if your breathing habits are silently holding you back?
                Enter the CapnoTrainer® GO, the groundbreaking tool that merges
                science, psychology, and technology to revolutionize your
                breathing habits and transform your life.
              </Typography>
            </Box>
          </Grid>

         
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                p: 0
              }}
            >
              <Box
                component="img"
                src={Device}
                alt="CapnoTrainer Device"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "85%" },          
                  height: "auto",
                  mt: 2,
                
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          background: "linear-gradient(135deg,#008080,#001A1A)",
          height: "110px",
        }}
      />
    </>
  );
};

export default HeaderSection;
