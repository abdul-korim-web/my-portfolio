import React from "react";
import Hero from "../Hero Section/Hero";
import About from "../About Section/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from '../Contact/Contact'

const Homelayout = () => {
    
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
        <Contact/>
    </>
  );
};

export default Homelayout;
