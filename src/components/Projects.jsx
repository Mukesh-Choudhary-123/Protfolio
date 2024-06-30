import React, { useEffect, useRef, useState } from "react";
import ImageOne from "../assets/Img1.png";
import ImageTwo from "../assets/BaatKarlo.png";
import ImageThree from "../assets/Img3.png";
import ApnaMarketLogo from "../assets/logo.png";
import LIVE_LOGO from "../assets/live.png";
import BAATKARLO_LOGO from "../assets/BaatKarlo_logo.png";
import BAATKARLO_img1 from "../assets/baatkarlo/login.png";
import BAATKARLO_img2 from "../assets/baatkarlo/Chat.png";
import BAATKARLO_img3 from "../assets/baatkarlo/file.png";
import BAATKARLO_img4 from "../assets/baatkarlo/AdminLogin.png";
import BAATKARLO_img5 from "../assets/baatkarlo/DashBoard.png";
import BAATKARLO_img6 from "../assets/baatkarlo/AllChats.png";
import BAATKARLO_img7 from "../assets/baatkarlo/AllUsers.png";
import "../App.css";

const Projects = () => {
  const images = [ImageOne, ImageTwo, ImageThree];
  const baatkarloImages = [
    BAATKARLO_img1,
    BAATKARLO_img2,
    BAATKARLO_img3,
    BAATKARLO_img4,
    BAATKARLO_img5,
    BAATKARLO_img6,
    BAATKARLO_img7,
  ];

  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <section
      id="project"
      className="p-4 lg:p-8 bg-gray-300 dark:bg-[#1E1E1E] dark:text-white "
    >
      <div className=" mx-auto p-4 dark:text-white space-y-2 text-center mb-7">
        <h2 className="text-2xl md:hidden sm:text-4xl lg:hidden font-bold">
          My Projects
        </h2>
        <p className="dark:text-white text-sm md:text-2xl lg:text-2xl font-bold">
          Diverse range of successful projects
        </p>
      </div>
      <div className="container mx-auto space-y-12">
        {/* Project 1 */}
        <div className="flex flex-col shadow-xl bg-gray-200 dark:bg-gray-300 overflow-hidden rounded-md lg:flex-row">
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{
                transform: `translate3d(${-index * 100}%, 0, 0)`,
              }}
            >
              {images.map((url, index) => (
                <div
                  className="slide inline-block h-auto max-h-80 dark:bg-gray-500  object-scale-down"
                  key={index}
                >
                  <img src={url} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <span className="text-xs uppercase font-bold dark:text-black">
              E-Commerce
            </span>
            <div className="flex mt-1">
              <img src={ApnaMarketLogo} alt="logo" className="w-10  mr-1 h-9" />
              <h3 className="text-3xl font-bold dark:text-black">
                Apna Market
              </h3>
            </div>
            <p className="mb-6 mt-4 dark:text-black">
              Developed a fully functional e-commerce website 🛒 featuring
              secure user authentication (Passport.js, JWT), dynamic shopping
              cart 🛍️, Stripe payment integration 💳, and comprehensive admin
              panel 📊. Implemented password reset 🔑 and invoice email
              functionalities 📧 using Node Mailer. Built with React ⚛️, Redux
              Toolkit🔄, Node.js 🌐, Express 🚀, and MongoDB 🗄️
            </p>

            <div className="flex justify-between pr-2">
              <a
                href="https://github.com/Mukesh-Choudhary-123/Apna_Market"
                target="absolute"
                className="self-start cursor-pointer relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-black font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group"
              >
                more detail
                <svg
                  className="icon icon-tabler icon-tabler-arrow-up-right"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
                <span className="absolute  bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left" />
              </a>

              <a
                href="https://apna-market-one.vercel.app"
                target="absolute"
                style={{ display: "flex" }}
              >
                <span className="dark:text-black  font">Live</span>
                <img className="w-6 h-6 ml-1" src={LIVE_LOGO} alt="live" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col bg-gray-200 dark:bg-gray-300 overflow-hidden rounded-md shadow-xl lg:flex-row-reverse">
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{
                transform: `translate3d(${-index * 100}%, 0, 0)`,
              }}
            >
              {images.map((url, index) => (
                <div
                  className="slide inline-block h-auto max-h-80 dark:bg-gray-500  object-scale-down"
                  key={index}
                >
                  <img src={url} alt="img" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <span className="text-xs uppercase font-bold dark:text-black">
              Chat App
            </span>
            <div className="flex mt-1">
              <img
                className="w-9 h-9 mr-1"
                src={BAATKARLO_LOGO}
                alt="baatkarlo logo"
              />
              <h3 className="text-3xl font-bold dark:text-black">BaatKarlo</h3>
            </div>
            <p className="mb-6 mt-4 dark:text-black">
              I crafted a dynamic real-time chat web application featuring an
              admin panel 📊 using by Chart.js. The admin dashboard visualizes
              7-day message counts and detailed graph📈 for messages 💬, users
              👥, chats 💬, and groups 👥. Developed using React.js ⚛️,Node.js
              🌐, Express.js 🚀, Axios ✨, Redux Toolkit 🔄, Material UI 🎨,
              Socket.io 🗣️, MongoDB 🗄️ and Cloudinary ☁️, the app enables
              seamless sharing of videos 📹, audios 🎵, images 🖼️, documents 📄,
              and files 📁. It supports group creation 🎇, management 🛠️, and
              the ability to delete 🗑 both groups and individual chats.
            </p>

            <div className="flex justify-between pr-2">
              <a
                href="https://github.com/Mukesh-Choudhary-123/Baat_Karlo"
                target="absolute"
                className="self-start cursor-pointer relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-black font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group"
              >
                more detail
                <svg
                  className="icon icon-tabler icon-tabler-arrow-up-right"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
                <span className="absolute  bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left" />
              </a>

              <a
                href="https://baatkarlo-chat-app.vercel.app"
                target="absolute"
                style={{ display: "flex" }}
              >
                <span className="dark:text-black  font">Live</span>
                <img className="w-6 h-6 ml-1" src={LIVE_LOGO} alt="live" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col bg-gray-200 dark:bg-gray-300 overflow-hidden rounded-md shadow-xl lg:flex-row">
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{
                transform: `translate3d(${-index * 100}%, 0, 0)`,
              }}
            >
              {images.map((url, index) => (
                <div
                  className="slide inline-block h-auto max-h-80 dark:bg-gray-500  object-scale-down"
                  key={index}
                >
                  <img src={url} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <span className="text-xs uppercase dark:text-black">
              Services App
            </span>
            <h3 className="text-3xl font-bold dark:text-black">Muksa Doctor</h3>
            <p className="my-6 dark:text-black">
              Developed a fully functional e-commerce website featuring secure
              user authentication (Passport.js, JWT), dynamic shopping cart,
              Stripe payment integration, and comprehensive admin panel.
              Implemented password reset and invoice email functionalities using
              Node Mailer. Built with React, Redux, Node.js, Express, and
              MongoDB.
            </p>
            <div className="flex justify-between pr-2">
              <a
                href="https://github.com/Mukesh-Choudhary-123/Apna_Market"
                target="absolute"
                className="self-start cursor-pointer relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-black font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group"
              >
                more detail
                <svg
                  className="icon icon-tabler icon-tabler-arrow-up-right"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
                <span className="absolute  bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left" />
              </a>

              <a href="#" style={{ display: "flex" }}>
                <span className="dark:text-black  font">Live</span>
                <img className="w-6 h-6 ml-1" alt="live" src={LIVE_LOGO} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
