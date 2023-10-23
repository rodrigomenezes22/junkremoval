import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import floridaCities from "../object/cities.json"; // Import the JSON module
import { Typography } from "@mui/material";

function CityPage() {
  const { link } = useParams();
  const [cities, setCities] = useState(floridaCities);
  // Fetch city data based on the 'link' parameter or perform other actions
  const currentCity = floridaCities.filter((city) => city.link === link);
  console.log(currentCity);

  return (
    <div>
      <Typography variant="h2">{currentCity[0].name}</Typography>
      {/* Display city-specific information here */}
    </div>
  );
}

export default CityPage;
