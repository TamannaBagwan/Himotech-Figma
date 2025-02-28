import React from "react";
import { Container, Grid, Typography, Avatar, Box } from "@mui/material";
import Amanda from "../assets/images/amanda.png";
import Michael from "../assets/images/michael.png";

const SuccessStories = () => {
  const stories = [
    {
      quote:
        '"I thought I knew how to breathe—until I used the CapnoTrainer® GO. This device opened my eyes to habits I never realized were harming me. I feel more energized and focused than ever before!"',
      name: "Amanda K",
      title: "Entrepreneur",
      avatarSrc: Amanda,
    },
    {
      quote:
        '"As a therapist, the CapnoTrainer®GO has completely transformed how I work with clients. It\'s a game-changer in helping people tackle anxiety and performance issues."',
      name: "Dr. Michael J",
      title: "Clinical Psychologist",
      avatarSrc: Michael,
    },
  ];

  return (
    <Box sx={{ position: "relative", height: {xs:'700px',sm:'620px',md:'400px'}, width: "100%",backgroundColor:'rgba(230, 242, 242, 1)' }}>
      <Container>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 700,
            textAlign: "center",
            fontFamily: "'Spectral SC'",
            margin: { xs: 2, md: 5 },
            paddingTop:'30px'
          }}
        >
          REAL SUCCESS STORIES
        </Typography>
      </Container>

      <Box
        sx={{
          marginTop: "55px",
          backgroundColor: "#008080",
          height: { xs: "72px", md: "90px" },
        }}
      >
        <Container>
          <Grid container spacing={3}>
            {stories.map((story, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#f9f9f9",
                    border: "1px solid rgb(0,128,128)",
                    border: "1px solid rgb(6, 96, 96)",
                    borderRadius: 2,
                    overflow: "hidden",
                    height: "auto",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#E6F2F2",
                      boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#008080",
                        fontSize: { xs: "14px", md: "16px" },
                        fontWeight: 800,
                        p: 2,
                      }}
                    >
                      {story.quote}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: "center",
                      backgroundColor: "#fff",
                      p: 1,
                      mt: 1,
                    }}
                  >
                    <Avatar
                      alt={story.name}
                      src={story.avatarSrc}
                      sx={{
                        width: { xs: 48, md: 56 },
                        height: { xs: 48, md: 56 },
                        mr: { xs: 0, md: 2 },
                        mb: { xs: 1, md: 0 },
                      }}
                    />
                    <Box textAlign={{ xs: "center", md: "left" }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        {story.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: { xs: "12px", md: "16px" },
                          color: "grey",
                        }}
                      >
                        {story.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SuccessStories;
