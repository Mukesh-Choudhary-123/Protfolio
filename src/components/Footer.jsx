import React from "react";
import GITHUB_LOGO from "../assets/color_github.png";
import LINKEDIN_LOGO from "../assets/linkedin.png";
import VisitorCounter from "./VisitorCounter";
const Footer = () => {
  function handleToScrollTop() {
    const scrollStep = -window.scrollY / (1000 / 15); // 500ms duration for smooth scrolling
    const scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
  return (
    <footer className="bg-gray-300 dark:bg-[#1E1E1E]">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <div className="flex -mx-2 items-center">
          <a
            href="https://www.linkedin.com/in/choudhary-mukesh/"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <img
              className="w-7 h-7"
              target="absolute"
              src={LINKEDIN_LOGO}
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/Mukesh-Choudhary-123"
            target="absolute"
            className="mx-2 text-gray-600"
          >
            <img className="w-8 h-8" src={GITHUB_LOGO} alt="github" />
          </a>
        </div>
        <VisitorCounter />
        <p className="text-sm text-gray-600 font-semibold dark:text-gray-300">
          Made with ❤ By Mukesh Choudhary
        </p>
        <button
          onClick={handleToScrollTop}
          className=" shadow-md shadow-black  dark:bg-white bg-[#1E1E1E] p-1 px-4 text-gray-300 dark:text-gray-900 font-semibold rounded-3xl"
        >
          Scroll Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
