import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import EYFS from "./Pages/EYFS";
import Grade from "./Pages/Grade";
import HighSchool from "./Pages/HighSchool";
import TryNav from "./components/TryNav";

function App() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Home />
      <EYFS />
      <Grade />
      <HighSchool />

      <Footer />
    </div>
  );
}

export default App;
