import React from "react";
import { Typography } from "@mui/material";
import { Image } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import imageOne from "../assets/pexels-alex-staudinger-1732414.jpg";
import imageTwo from "../assets/pexels-alex-staudinger-1732414.jpg";
import imageThree from "../assets/pexels-alex-staudinger-1732414.jpg";

function Gallery() {
  return (
    <Container sx={{ padding: { xs: "2rem 1rem", md: "2rem 0rem" } }}>
      <Grid container justifyItems={"space-between"} columnSpacing={2}>
        <Grid item xs={12} md={10} lg={4}>
          <img src={imageOne} alt="Image One" width={"100%"} height={"auto"} />
        </Grid>
        <Grid item xs={12} md={10} lg={4}>
          <img src={imageTwo} alt="Image Two" width={"100%"} height={"auto"} />
        </Grid>
        <Grid item xs={12} md={10} lg={4}>
          <img
            src={imageThree}
            alt="Image Three"
            width={"100%"}
            height={"auto"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Gallery;
