import { Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
function Cities() {
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
        Cities
      </Typography>
    </Stack>
  );
}

export default Cities;
