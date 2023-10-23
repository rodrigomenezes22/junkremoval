import { Typography } from "@mui/material";
import React from "react";

function Locations() {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}>
      <Typography variant="h2" component="h1">
        Locations
      </Typography>
    </Stack>
  );
}

export default Locations;
