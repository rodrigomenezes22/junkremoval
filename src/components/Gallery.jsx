import React from "react";
import { Typography } from "@mui/material";
import { Image, Moving } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import imageOne from "../assets/pexels-alex-staudinger-1732414.jpg";
import imageTwo from "../assets/pexels-alex-staudinger-1732414.jpg";
import imageThree from "../assets/pexels-alex-staudinger-1732414.jpg";
import Stack from "@mui/material/Stack";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MovingImage from "../assets/moving.jpg";
import RenovationImage from "../assets/renovation.jpg";
import StorageImage from "../assets/storage.jpg";
import DisastersImage from "../assets/disasters.jpg";
import CommercialImage from "../assets/commercial.jpg";

function Gallery() {
  const ListServices = [
    "Attics",
    "Basements",
    "Crawl Spaces",
    "Estates",
    "Garages",
    "Sheds",
    "Storage Units",
    "Warehouses",
    "Yards",
    "Apartment Buildings",
    "Condos",
    "Construction Sites",
    "Hotels",
    "Offices",
    "Restaurants",
    "Retail Spaces",
    "Schools",
    "Storage Facilities",
    "Warehouses",
  ];

  return (
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
            Resindential
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
            Moving
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
            Renovation
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
            Storage
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
            Disasters
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
            Commercial Junk Removal
          </Typography>
          <Typography variant="body1">
            Need a hand managing junk at work? Give us a call.
          </Typography>
        </Grid>
      </Grid>
      <Stack>
        <Typography
          variant="h3"
          color={"primary"}
          component={"h2"}
          fontWeight={"bold"}
          padding="1rem 0">
          All Services
        </Typography>
        <Grid container paddingBottom={"3rem"}>
          {ListServices.map((item, index) => (
            <Grid item xs={12} md={6} lg={3}>
              <ListItem key={index}>
                <ListItemIcon>
                  <TaskAltIcon />
                </ListItemIcon>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export default Gallery;
