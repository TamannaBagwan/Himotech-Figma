import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import MeditatingWomen from "../assets/images/medidating women.png";
import Headache from "../assets/images/headache.png";
import LowBattery from "../assets/images/low_battery.png";
import MusclePain from "../assets/images/muscle_pain.png";
const BreathingSection = () => {
  return (
    <Box sx={{mb:'80px'}}>
      <Box>
        <Typography
          sx={{
            mt: 3,
            mb: 1,
            fontWeight: 800,
            fontFamily: "'Spectral SC', serif",
            fontSize: { xs: "25px", sm: "40px", md: "40px" },
            textAlign: "center",
          }}
        >
          Discover the Hidden Power of Your Breath
        </Typography>
      </Box>

      <Box
        sx={{
          height: "auto",
          maxWidth: "1200px", 
          margin: "auto",
        }}
      >
        <Grid container sx={{ width: "100%" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={MeditatingWomen}
              alt="MeditatingWomen"
              sx={{
                width: { xs: "350px", sm: "auto", md: "400px" },
                height: {xs:'340px',sm:'440px',md:'440px'},
                mt: 5,
                mx: "auto", 
                display: "block",
              }}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Box
              sx={{
                width: "auto",
                height: {xs:'400px',sm:'250px',md:'250px'},
                backgroundColor: "#E6F2F2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "40px",
                padding:{xs: "30px",sm: "30px",md: "30px"}
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 400, color: "#444" }}
                >
                  Your breathing isn't just about oxygen in and carbon dioxide
                  out—it's a complex behavior shaped by triggers, habits, and
                  physiology. When misaligned, these habits can:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    mt: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box>
                      <img
                        src={Headache}
                        height={44}
                        width={44}
                        alt="Headache"
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#222",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        Compromise your health:
                      </Typography>
                      <Typography
                        sx={{
                          color: "#555",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                      >
                        Triggering anxiety, fatigue, and physical discomfort.
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box>
                      <img
                        src={LowBattery}
                        height={44}
                        width={44}
                        alt="LowBattery"
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#222",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        Disrupt your performance:
                      </Typography>
                      <Typography
                        sx={{
                          color: "#555",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                      >
                        Causing focus deficits, memory issues, and suboptimal
                        endurance.
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box>
                      <img
                        src={MusclePain}
                        height={44}
                        width={44}
                        alt="MusclePain"
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#222",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        Exacerbate existing conditions:
                      </Typography>
                      <Typography
                        sx={{
                          color: "#555",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                      >
                        Like asthma, chronic pain, and even stress-related
                        disorders.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "auto",
                padding: { xs: "20px 15px", sm: "18px 25px", md: "35px 55px" },
                backgroundColor: "#008080",
                color: "#fff",
                height: {xs:'120px',sm:'70px',md:'60px'},
              }}
            >
              <Box>
                <Typography
                  sx={{ color: "#fff", fontSize: "16px", fontWeight: 400 }}
                >
                  Millions of people suffer the consequences of poor breathing
                  habits. But you don’t have to be one of them. With the{" "}
                  <span style={{ fontWeight: 700 }}>CapnoTrainer® GO</span>,
                  you’ll unlock a scientifically-backed pathway to breathing
                  mastery.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BreathingSection;
