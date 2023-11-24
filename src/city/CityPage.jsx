import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import floridaCities from "../object/cities.json"; // Import the JSON module
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/material";
import headerImg from "../assets/pexels-binyamin-mellish-186078.png";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import ConstructionIcon from "@mui/icons-material/Construction";
import Container from "@mui/material/Container";
import ApartmentIcon from "@mui/icons-material/Apartment";
import imgBackground from "../assets/what-we-do.jpg";
import Backdrop from "@mui/material/Backdrop";
import { Link } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MovingImage from "../assets/moving.jpg";
import RenovationImage from "../assets/renovation.jpg";
import StorageImage from "../assets/storage.jpg";
import DisastersImage from "../assets/disasters.jpg";
import CommercialImage from "../assets/commercial.jpg";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import imageOne from "../assets/pexels-alex-staudinger-1732414.jpg";

import Stack from "@mui/material/Stack";

function CityPage() {
  const { link } = useParams();
  const [cities, setCities] = useState(floridaCities);
  // Fetch city data based on the 'link' parameter or perform other actions
  const currentCity = floridaCities.filter((city) => city.link === link);
  console.log(currentCity);

  return (
    <div>
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
          <Box
            component="section"
            sx={{ textAlign: "center", height: "auto", paddingBottom: "2rem" }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                color: "#fff",
              }}>
              {currentCity[0].name} Junk Removal Services
            </Typography>

            <Typography
              variant="p"
              component="p"
              sx={{
                py: 3,
                lineHeight: 1.6,
                color: "#fff",
              }}>
              Our specialists can help you, apartment clean-up. Construction
              cleaning, anything! Call us!
            </Typography>

            <Box>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  mr: 2,
                  px: 4,
                  py: 1,
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  borderRadius: 0,
                  borderColor: "#14192d",
                  color: "#fff",
                }}>
                Contact us!
              </Button>
              <Button
                startIcon={<WhatsAppIcon />}
                component={Link}
                to={"/about"}
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1,
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  borderRadius: 0,
                  color: "#fff",
                  backgroundColor: "transparent",
                  borderColor: "#fff",
                  "&&:hover": {
                    color: "#343a55",
                    borderColor: "#343a55",
                  },
                  "&&:focus": {
                    color: "#343a55",
                    borderColor: "#343a55",
                  },
                }}>
                Live Chat!
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Container sx={{ padding: { xs: "2rem 1rem", md: "2rem 0rem" } }}>
        <Grid container justifyItems={"space-between"} columnSpacing={2}>
          <Grid item xs={12} md={10} lg={4}>
            <img
              src={imageOne}
              alt="Resindential Junk Removal"
              width={"100%"}
              height={"auto"}
            />
            <Typography
              variant="h5"
              color={"primary"}
              component={"h2"}
              fontWeight={"bold"}
              padding="1rem 0">
              {currentCity[0].name} Resindential
            </Typography>
            <Typography variant="body1">
              Need more space? We’ll take care of all your household junk.
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} lg={4}>
            <img
              src={MovingImage}
              alt="Moving Junk Removal"
              width={"100%"}
              height={"auto"}
            />
            <Typography
              variant="h5"
              color={"primary"}
              component={"h2"}
              fontWeight={"bold"}
              padding="1rem 0">
              {currentCity[0].name} Moving
            </Typography>
            <Typography variant="body1">
              Why pay to move stuff you don’t need? Let us handle it!
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} lg={4}>
            <img
              src={RenovationImage}
              alt="Home Renovation Junk Removal "
              width={"100%"}
              height={"auto"}
            />
            <Typography
              variant="h5"
              color={"primary"}
              component={"h2"}
              fontWeight={"bold"}
              padding="1rem 0">
              {currentCity[0].name} Renovation
            </Typography>
            <Typography variant="body1">
              Want to avoid the hassle of dumpster rental? Let us do the heavy
              lifting.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyItems={"space-between"}
          columnSpacing={2}
          paddingTop={"2rem"}
          paddingBottom={"3rem"}>
          <Grid item xs={12} md={10} lg={4}>
            <img
              src={StorageImage}
              alt="Storage Unit Junk Removal"
              width={"100%"}
              height={"auto"}
            />
            <Typography
              variant="h5"
              color={"primary"}
              component={"h2"}
              fontWeight={"bold"}
              padding="1rem 0">
              {currentCity[0].name} Storage
            </Typography>
            <Typography variant="body1">
              Have junk you need to make disappear? Let us take care of it.
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} lg={4}>
            <img
              src={DisastersImage}
              alt="Disasters Junk Removal"
              width={"100%"}
              height={"auto"}
            />
            <Typography
              variant="h5"
              color={"primary"}
              component={"h2"}
              fontWeight={"bold"}
              padding="1rem 0">
              {currentCity[0].name} Disasters
            </Typography>
            <Typography variant="body1">
              Dealing with debris from a disaster? We’re here to help.
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} lg={4}>
            <img
              src={CommercialImage}
              alt="Commercial Junk Removal"
              width={"100%"}
              height={"auto"}
            />
            <Typography
              variant="h5"
              color={"primary"}
              component={"h2"}
              fontWeight={"bold"}
              padding="1rem 0">
              {currentCity[0].name} Commercial Junk Removal
            </Typography>
            <Typography variant="body1">
              Need a hand managing junk at work? Give us a call.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Typography variant="h2"></Typography>
      {/* Display city-specific information here */}
    </div>
  );
}

export default CityPage;
