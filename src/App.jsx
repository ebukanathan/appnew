import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import EYFS from "./Pages/EYFS";
import Grade from "./Pages/Grade";
import HighSchool from "./Pages/HighSchool";
import TryNav from "./components/TryNav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      {/* <Hero />
      <Home />
      <EYFS />
      <Grade />
      <HighSchool /> */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
