import React from "react";
import College_Logo from "../assets/college.png";
import Profile_Photo from "../assets/myImg.png";
import Coding_Logo from "../assets/coding.png";
const AboutMe = () => {
  return (
    <>
      <section
        id="about"
        className="relative pt-16 bg-gray-300 dark:bg-[#1E1E1E] "
      >
        <div className=" mx-auto  dark:text-white space-y-2 text-center">
          <h2 className="text-2xl md:hidden sm:text-4xl lg:hidden font-bold">
            About Me
          </h2>
          <p className="dark:text-white text-sm md:text-2xl lg:text-2xl font-bold">
            Creative Innovator and Problem Solver
          </p>
        </div>
        <div className="container mt-8 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12  px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex items-center flex-col min-w-0 break-words bg-gray-200  w-full mb-6 shadow-lg rounded-lg ">
                <img
                  alt="..."
                  src={Profile_Photo}
                  // src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-72 flex justify-center items-center align-middle rounded-t-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full  px-4">
                  <div className="relative  ">
                    <div className="px-4">
                      <div className="flex ">
                        <div className="dark:text-white p-1 text-center last: w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <img
                            src={College_Logo}
                            alt="college"
                            className="inline"
                          />
                        </div>
                        <h6 className="text-xl ml-4 mt-3 dark:text-white font-semibold inline">
                          College
                        </h6>
                      </div>
                      <p className="mb-4 dark:text-white">
                        Currently pursuing my degree in{" "}
                        <span className="font-bold">
                          Computer Science and Engineering.
                        </span>
                        <br />
                        <span className="font-bold">
                          {" "}
                          S.S college of Engineering
                        </span>{" "}
                        (Rajasthan Technical University). <br /> Current in 6
                        semester with{" "}
                        <span className="font-bold"> 8.56 CGPA</span>
                      </p>
                    </div>
                  </div>
                  <div className="relative ">
                    <div className="px-4 py-5 ">
                      <div className="flex">
                        <div className="dark:text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <img src={Coding_Logo} alt="college" />
                        </div>
                        <h6 className="text-xl dark:text-white ml-4 mt-3 font-semibold">
                          Coding
                        </h6>
                      </div>
                      <p className="mb-4 dark:text-white ">
                        I am an enthusiastic{" "}
                        <span className=" font-bold"> web developer🎯</span>{" "}
                        <br /> I create web applications using{" "}
                        <span className=" font-bold">
                          {" "}
                          HTML, CSS, JavaScript
                        </span>{" "}
                        and <span className=" font-bold">Tailwind CSS</span> .
                        <br /> I build responsive UIs with{" "}
                        <span className=" font-bold">React.js</span> and craft
                        efficient server-side applications with
                        <span className=" font-bold"> Node.js</span> and
                        <span className=" font-bold"> Express</span> .
                        <br /> I am experienced in designing and consuming
                        <span className=" font-bold"> RESTful APIs </span>
                        and managing databases with{" "}
                        <span className=" font-bold"> MongoDB</span> .<br />{" "}
                        Additionally, I have a solid understanding of{" "}
                        <span className=" font-bold"> Java </span>&{" "}
                        <span className=" font-bold">DSA</span> .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
