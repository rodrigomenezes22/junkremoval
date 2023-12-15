import React from "react";
import Content from "../components/Content";
import Gallery from "../components/Gallery";
import AboutComponent from "../components/AboutComponent";
import AboutText from "../components/AboutText";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About 561 Junk Guys | Junk Removal Services in South Florida
        </title>
        <meta
          name="description"
          content={`561 Junk Guys | Junk Removal Services in South Florida About Page`}
        />
      </Helmet>
      <AboutComponent />
      <AboutText />
      <Gallery />
    </>
  );
};

export default About;
