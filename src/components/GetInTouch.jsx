import React from "react";
import { Button, Stack } from "@mui/material";
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
      sx={{
        py: 10,
        mx: 6,
      }}>
      <Title text={"Call the Guy to remove your Junk!"} textAlign={"center"} />
      <Paragraph
        text={
          "Call us at any time, we are ready to take on your task! Schedule an appointment today!"
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
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
