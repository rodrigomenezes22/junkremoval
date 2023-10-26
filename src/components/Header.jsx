import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//img
import headerImg from "../assets/pexels-binyamin-mellish-186078.png";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import ConstructionIcon from "@mui/icons-material/Construction";
import Container from "@mui/material/Container";
import ApartmentIcon from "@mui/icons-material/Apartment";
const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // tamanhos
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    // cor de fundo
    backgroundColor: "orange",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return (
    <>
      <CustomBox component="header">
        {/*  Box text  */}
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
            Junk Removal Services
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
                backgroundColor: "#14192d",
                "&&:hover": {
                  backgroundColor: "#343a55",
                },
                "&&:focus": {
                  backgroundColor: "#343a55",
                },
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
      </CustomBox>

      <Container>
        <Grid
          width={"100%"}
          container
          paddingTop={"2rem"}
          columnSpacing={"1.5rem"}
          justifyContent={"space-around"}
          padding={"4rem 0"}>
          <Grid item textAlign={"center"}>
            <CarCrashIcon sx={{ fontSize: 60, color: "orange" }} />
            <Typography variant="h6" component="h6" color={"orange"}>
              Junk Car Removal
            </Typography>
          </Grid>
          <Grid item textAlign={"center"}>
            <ConstructionIcon sx={{ fontSize: 60, color: "orange" }} />
            <Typography variant="h6" component="h6" color={"orange"}>
              Construction Site Junk Removal
            </Typography>
          </Grid>
          <Grid item textAlign={"center"}>
            <ApartmentIcon sx={{ fontSize: 60, color: "orange" }} />
            <Typography variant="h6" component="h6" color={"orange"}>
              Rental Cleanup Service
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
