import React from "react";
import Navbar from "./Navbar";
import HoreSec from "./HeroSec";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import { ScrollingProvider, Section } from "react-scroll-section";

const Home = () => {
  return (
    <div>
      <ScrollingProvider>
        <Navbar></Navbar>
        <Section id="home">
          <HoreSec></HoreSec>
        </Section>
        <Skills></Skills>
        <Projects></Projects>
        <AboutMe></AboutMe>
        <Footer></Footer>
      </ScrollingProvider>
    </div>
  );
};

export default Home;
