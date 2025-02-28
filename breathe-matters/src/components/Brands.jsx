
import React from "react";
import { Box, Grid } from "@mui/material";
import Knosis from "../assets/images/knosis_logo.png";
import DrCruz from "../assets/images/dr_cruz.png";
import Airway from "../assets/images/airway.png";
import Conspire from "../assets/images/conspire.png";

const Brands = () => {
  return (
    <Box sx={{ margin: "10px 30px", padding: "10px 40px" }}>
      <Grid container spacing={4} justifyContent="center">
        {[Knosis, DrCruz, Airway, Conspire].map((brand, index) => (
          <Grid key={index} item xs={12} sm={6} md={3} display="flex" justifyContent="center">
            <Box
              component="img"
              src={brand}
              alt={`Brand-${index}`}
              sx={{
                width: { xs: "85%", sm: "85%", md: "55%" },
                height: {xs:'95px',sm:'150px'  , md: '80px'}, 
                padding:'40px'
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Brands;
