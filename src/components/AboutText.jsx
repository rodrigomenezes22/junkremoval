import React from "react";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Title from "./Title";
import Typography from "@mui/material/Typography";
import Paragraph from "./Paragraph";

function AboutText() {
  return (
    <Box sx={{ width: "100%", height: "auto" }}>
      <Container sx={{ padding: { xs: "3rem 1rem", md: "4rem 0rem" } }}>
        <Typography
          variant="h3"
          color={"primary"}
          component={"h2"}
          fontWeight={"bold"}
          paddingBottom="1rem">
          We Make Junk Disappear
        </Typography>

        <Typography variant="body1" paddingBottom="1rem">
          1-800-GOT-JUNK? is your full-service junk removal company. We offer
          Junk Removal services for your home or business. Do you have old
          furniture, appliances, electronics, tires, construction debris, or
          yard waste you need to make disappear? 1-800-GOT-JUNK? can take away
          almost any material we can fit in our trucks, without you ever lifting
          a finger.
        </Typography>
        <Typography variant="body1">
          We will remove junk from wherever it is located and we will not leave
          a dent or speck of dirt behind. When we say we are your full-service
          Junk Removal company, we really mean it. We handle the tough stuff and
          we ensure that your junk is recycled, donated, or otherwise disposed
          of responsibly."
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutText;
