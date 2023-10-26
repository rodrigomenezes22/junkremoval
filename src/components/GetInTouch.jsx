import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
const GetInTouch = () => {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#1565c0"
      sx={{
        py: 10,
      }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          color: "#fff",
        }}>
        Call us!{" "}
      </Typography>
      <Typography variant="body1" color={"white"}>
        We are available by phone, WhatsApp and email.
      </Typography>
      <Button
        component={Link}
        to={"/contact"}
        variant="contained"
        type="submit"
        startIcon={<DeleteSweepIcon />}
        size="medium"
        sx={{
          fontSize: "0.9rem",
          textTransform: "capitalize",
          py: 2,
          px: 4,
          mt: 3,
          mb: 2,
          borderRadius: 0,
          backgroundColor: "#14192d",
          "&:hover": {
            backgroundColor: "#1e2a5a",
          },
        }}>
        Remove my Junk!
      </Button>
    </Stack>
  );
};

export default GetInTouch;
