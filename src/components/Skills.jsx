import React from "react";
import HTML_LOGO from "../assets/html_logo.png";
import CSS_LOGO from "../assets/css.png";
import REACT_LOGO from "../assets/react.png";
import GITHUB_LOGO from "../assets/git.png";
import GIT_LOGO from "../assets/git_logo.png";
import JS_LOGO from "../assets/js_logo.png";
import REDUX_LOGO from "../assets/redux.png";
import JAVA_LOGO from "../assets/java.png";
import MONGODB_LOGO from "../assets/mongodb_logo.png";
import TAILWIND_LOGO from "../assets/tailwind.png";
import NODE_LOGO from "../assets/node.png";
import EXPRESS_LOGO from "../assets/express.png";
import "../App.css";
import Lottie from "lottie-react";
import AnimationData from "../assets/SkillsAnimation .json";

const Skills = () => {
  return (
    <section id="skills">
      <div className=" overflow-hidden  bg-gray-300  dark:bg-[#1E1E1E] ">
        <div className=" mx-auto p-4 dark:text-white space-y-2 text-center">
          <h2 className="text-2xl md:hidden sm:text-4xl lg:hidden font-bold">
            My Skills
          </h2>
          <p className="dark:text-white text-sm md:text-2xl lg:text-2xl font-bold">
            Dynamic and proactive mindset
          </p>
        </div>

        <div className="flex flex-col  lg:flex-row md:flex-row  sm:flex-row lg:justify-evenly lg:mt-11">
          <Lottie animationData={AnimationData} className="h-100 " />

          <div className="container grid max-w-xl justify-items-center devIcons gap-4 sm:grid-cols-4 grid-cols-3 lg:grid-cols-4 p-4 ">
            <img src={HTML_LOGO} alt="" className="h-20 animated" />
            <img src={CSS_LOGO} alt="" className="h-20 animated" />
            <img src={JS_LOGO} alt="" className="h-20 animated" />
            <img src={REACT_LOGO} alt="" className="h-20 animated" />
            <img src={NODE_LOGO} alt="" className="h-20 animated" />
            <img src={MONGODB_LOGO} alt="" className="h-20 animated" />
            <img
              src={EXPRESS_LOGO}
              alt=""
              className="h-20 animated rounded-3xl"
            />
            <img
              src={REDUX_LOGO}
              alt=""
              className="h-20 animated rounded-3xl"
            />
            <img
              src={TAILWIND_LOGO}
              alt=""
              className="h-20 animated rounded-3xl"
            />
            <img src={GIT_LOGO} alt="" className="h-20 animated " />
            <img
              src={GITHUB_LOGO}
              alt=""
              className="h-20 animated rounded-3xl"
            />
            <img src={JAVA_LOGO} alt="" className="h-20 animated" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
