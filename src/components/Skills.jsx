import React from "react";
import HTML_LOGO from "../assets/html_logo.png";
import CSS_LOGO from "../assets/css.png";
import REACT_LOGO from "../assets/react.png";
import GITHUB_LOGO from "../assets/git.png";
import GIT_LOGO from "../assets/git_logo.png";
import JS_LOGO from "../assets/js_logo.png";
import REDUX_LOGO from "../assets/redux.jpeg";
import JAVA_LOGO from "../assets/java.png";
import MONGODB_LOGO from "../assets/mongodb_logo.png";
import SQl_LOGO from "../assets/sql_logo.png";
import NODE_LOGO from "../assets/node.png";
import EXPRESS_LOGO from "../assets/express.png";
import "../App.css";
import Lottie from "lottie-react";
import AnimationData from "../assets/SkillsAnimation .json";

const Skills = () => {
  return (
    <section id="skils" className="">
      <div className=" overflow-hidden  bg-white  dark:bg-[#1E1E1E] ">
        <div className=" mx-auto p-4 dark:text-white space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My Skills{" "}
          </h2>
          <p className="dark:text-gray-600">Libero minima optio qui</p>
        </div>

        <div className="flex flex-col  lg:flex-row md:flex-row  sm:flex-row lg:justify-evenly lg:mt-11">
          <Lottie animationData={AnimationData} className="h-100 " />

          <div className="container grid max-w-xl devIcons gap-4 sm:grid-cols-4 grid-cols-3 lg:grid-cols-4 p-4 ">
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
            <img src={SQl_LOGO} alt="" className="h-20 animated" />
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
