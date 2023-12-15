"use client";
import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import floridaCities from "../object/cities.json"; // Import the JSON module
import Logo from "../assets/logo.svg";
import DrawerNav from "./DrawerNav";

import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  IconButton,
  styled,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// rotas
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//rotas
const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const [cities, setCities] = useState(floridaCities);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Drawer
  const [openNav, setOpenNav] = useState(false);
  const handleDrawerOpen = () => {
    setOpenNav(true);
  };

  const handleDrawerClose = () => {
    setOpenNav(false);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+5617150548";
  };
  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          backgroundColor: "rgba(0,0,0,0.9)",
          backdropFilter: "blur(10px)",
        }}
        elevation={0}>
        <StyledToolbar>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <img src={Logo} alt="561 Junk Guys" width={"180px"} />
          </Link>
          <Stack direction={"row"}>
            <Box
              sx={{
                display: { xs: "block", sm: "none", lg: "none", xl: "none" },
              }}>
              <IconButton sx={{ color: "white" }} onClick={handlePhoneClick}>
                <LocalPhoneIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}>
              <DrawerItem
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerclose={handleDrawerClose}
                setOpenNav={setOpenNav}
                openNav={openNav}
              />
            </Box>
          </Stack>

          <ListMenu>
            {itemList.map((item) => {
              const { text } = item;
              return (
                <ListItem key={text}>
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "yellow",
                      },
                    }}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
            <ListItem>
              <ListItemButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                Cities
              </ListItemButton>
            </ListItem>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
              {cities.map((city, index) => (
                <Link
                  key={index}
                  to={`../city/${city.link}`}
                  style={{ textDecoration: "none" }}
                  onClick={handleClose}>
                  <MenuItem color="primary">{city.name}</MenuItem>
                </Link>
              ))}
            </Menu>
          </ListMenu>
        </StyledToolbar>
      </AppBar>
      <DrawerNav
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        setOpenNav={setOpenNav}
        openNav={openNav}
      />
    </>
  );
};

export default Navbar;
