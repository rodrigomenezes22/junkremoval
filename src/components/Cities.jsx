import { Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import floridaCities from "../object/cities.json"; // Import the JSON module
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function Cities() {
  const [cities, setCities] = useState(floridaCities);

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
      <ul>
        {cities.map((city, index) => (
          <Link key={index} to={`../city/${city.link}`}>
            {city.name}
          </Link>
        ))}
      </ul>
    </Stack>
  );
}

export default Cities;
