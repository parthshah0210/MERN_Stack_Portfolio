import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Resume } from "./components/resume";
import { Skills } from "./components/skills";
import { About } from "./components/about";
import { Projects } from "./components/projects"; 
import { Contact } from "./components/contact";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true, 
});

const App = () => {

  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
