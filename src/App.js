import React from "react";
//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import CityPage from "./city/CityPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
    },
    typography: {
      h3: {
        fontSize: "2rem",
        "@media (min-width:600px)": {
          fontSize: "3rem",
        },
      },
    },
  });

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/city/:link" element={<CityPage />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
