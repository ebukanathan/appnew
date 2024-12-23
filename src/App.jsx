import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
