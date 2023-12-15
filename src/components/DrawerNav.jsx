import React, { useState } from "react";
import {
  styled,
  Drawer,
  useTheme,
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
import PlaceIcon from "@mui/icons-material/Place";
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
    text: "Boca Raton",
    icon: <PlaceIcon />,
    to: "/city/boca_raton",
  },
  {
    text: "Palm Beach",
    icon: <PlaceIcon />,
    to: "/city/palm_beach",
  },
  {
    text: "Delray Beach",
    icon: <PlaceIcon />,
    to: "/city/delray_beach",
  },
  {
    text: "Boynton Beach",
    icon: <PlaceIcon />,
    to: "/city/boynton_beach",
  },
  {
    text: "Contact",
    icon: <EmailIcon />,
    to: "/contact",
  },
];

const DrawerNav = ({
  handleDrawerClose,
  handleDrawerOpen,
  setOpenNav,
  openNav,
}) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={openNav}>
        <DrawerHeader sx={{ padding: "0px" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem
                key={text}
                component={Link}
                to={item.to}
                onClick={handleDrawerClose}
                sx={{
                  color: "#414141",
                  "&:hover": {
                    backgroundColor: "#e9e5e5",
                    color: "#1c2859",
                  },
                }}>
                <ListItemIcon
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#1c2859",
                    },
                  }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerNav;
