import React, { useState } from "react";
import {
  styled,
  useTheme,
  Drawer,
  Divider,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// rotas
import { Link } from "react-router-dom";
// icons
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 5),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

//rotas
const itemList = [
  {
    text: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    text: "About",
    icon: <InfoIcon />,
    to: "/about",
  },
  {
    text: "Locations",
    icon: <InfoIcon />,
    to: "/locations",
  },
  {
    text: "Contact",
    icon: <EmailIcon />,
    to: "/contact",
  },
];

const DrawerItem = ({ handleDrawerOpen, openNav }) => {
  const theme = useTheme();

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(openNav && { display: "none" }), zIndex: "1000000" }}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerItem;
