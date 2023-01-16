import React from "react";
import "./App.css";
import Header from "./Components/header/header";
import Home from "./Components/home/home";
import About from "./Components/about/about";
import Skills from "./Components/skills/skills";
import Work from "./Components/work/work";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Work />
      </main>
      <Footer />
    </>
  );
}

export default App;
