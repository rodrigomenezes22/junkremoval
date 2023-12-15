import React from "react";
import Details from "../components/Details";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact 561 Junk Guys | Junk Removal Services in South Florida
        </title>
        <meta
          name="description"
          content={`Contact 561 Junk Guys | Junk Removal Services in South Florida About Page`}
        />
      </Helmet>
      <Details />
    </>
  );
};

export default Contact;
