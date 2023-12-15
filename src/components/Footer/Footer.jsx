import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import floridaCities from "../../object/cities.json"; // Import the JSON module
import { useState } from "react";

const Footer = () => {
  const [cities, setCities] = useState(floridaCities);

  const CurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 8,
    textAlign: "center",
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#000",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 30,
    },
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 2,
      }}>
      <StackColumn>
        <FooterTitle className="text-white" text={"address"} />
        <FooterLink text={"1030 N State Street - FL"} />
        <FooterLink text={"561-213-9528"} />
        <FooterLink text={"info@junkremovalservices.com"} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"our services"} />
        <FooterLink text={"Junk Car Removal"} />
        <FooterLink text={"Home Junk Removal"} />
        <FooterLink text={"Apartment Junk Removal"} />
        <FooterLink text={"Construction Junk Removal"} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={"Our Locations"} />
        {cities.map((city, index) => (
          <>
            <Link
              style={{ color: "white" }}
              key={index}
              href={`../city/${city.link}`}>
              {city.name}
            </Link>
          </>
        ))}
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"Junk Removal Services"} />
        <Stack
          direction="row"
          width="70px"
          maxWidth="100%"
          justifyContent="space-between">
          <Link
            href="#"
            variant="body2"
            sx={{
              color: "#ccc",
              "&:hover": {
                color: "#fff",
              },
            }}>
            <InstagramIcon />
          </Link>
          <Link
            href="#"
            variant="body2"
            sx={{
              color: "#ccc",
              "&:hover": {
                color: "#fff",
              },
            }}>
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography variant="caption" component="p">
          &copy; {CurrentYear()} All Rights Reserved
        </Typography>
      </StackColumn>
    </BoxRow>
  );
};

export default Footer;
