import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import imgBackground from "../assets/what-we-do.jpg";
import Backdrop from "@mui/material/Backdrop";

function AboutComponent() {
  return (
    <Box
      height="50vh"
      width="100%"
      sx={{
        backgroundImage: `url(${imgBackground})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}>
      <Box
        sx={{
          background: "rgba(0,0,0,0.8)",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={"bold"}
          sx={{ color: "white" }}>
          About Us
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutComponent;
