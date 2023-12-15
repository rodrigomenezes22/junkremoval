import React, { useRef } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import emailjs from "@emailjs/browser";
import PhoneIcon from "@mui/icons-material/Phone";

const Details = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+5617150548";
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vc0doff",
        "template_ghkajyi",
        form.current,
        "5K9dJ3kO9WWDGBSs-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}>
      <Title text={"Get rid of your Junk now!"} textAlign={"center"} />
      <Paragraph
        text={
          "Need someone to clean the junk from your property, contact us now!"
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      <Typography variant="h4" sx={{ paddingBottom: "2rem" }}>
        +1 (561) 715-0548
      </Typography>

      <Button
        variant="contained"
        startIcon={<PhoneIcon />}
        onClick={handlePhoneClick}
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
        Call now
      </Button>

      <Box
        sx={{
          mt: 1,
          py: 2,
          maxWidth: { lg: "450px" },
        }}>
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="from_name"
            label="Your Name"
            type="phone"
            id="from_name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="from_email"
            label="Email Address"
            name="from_email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="from_phone"
            label="Phone Number"
            type="tel"
            id="from_phone"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="from_zipcode"
            label="Type your zip code"
            type="number"
            id="from_zipcode"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="from_state"
            label="Type your state"
            type="text"
            id="from_state"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="from_city"
            label="Type your city:"
            type="text"
            id="from_city"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="message"
            label="Describe the Services that you need"
            type="text"
            id="message"
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            size="medium"
            sx={{
              fontSize: "0.9rem",
              textTransform: "capitalize",
              py: 2,
              mt: 3,
              mb: 2,
              borderRadius: 0,
              backgroundColor: "#14192d",
              "&:hover": {
                backgroundColor: "#1e2a5a",
              },
            }}>
            send
          </Button>
        </form>
      </Box>
    </Stack>
  );
};

export default Details;
