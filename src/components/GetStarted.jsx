import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../assets/pexels-alex-staudinger-1732414.jpg";
import imgDetail2 from "../assets/pexels-pixabay-271816.jpg";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid container spacing={{ xs: 4, sm: 4, md: 0 }} sx={{}}>
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}>
          <Title text={"Leaving your Apartment?"} textAlign={"start"} />
          <CustomTypography>
            Our Special team can get it ready for the next Tenant, you have
            nothing to worry about!
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}>
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}>
        <Box
          component="article"
          sx={{
            px: 4,
          }}>
          <Title text={"Constructions can get messy!"} textAlign={"start"} />
          <CustomTypography>
            Our Guy will show up and get everything clean for you, all junk
            removed. Let us handle it for your.
          </CustomTypography>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
