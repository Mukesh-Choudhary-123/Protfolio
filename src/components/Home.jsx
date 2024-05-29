import React from "react";
import Navbar from "./Navbar";
import HoreSec from "./HeroSec";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import { ScrollingProvider, Section } from "react-scroll-section";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-white dark:bg-[#1E1E1E]">
      <Navbar></Navbar>

      <HoreSec></HoreSec>

      <Skills></Skills>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
