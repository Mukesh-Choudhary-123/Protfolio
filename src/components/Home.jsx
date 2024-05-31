import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroSec from "./HeroSec";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="bg-gray-300 dark:bg-[#1E1E1E]">
      <Navbar />
      <HeroSec />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
