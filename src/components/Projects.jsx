import React, { useEffect, useRef, useState } from "react";
import ImageOne from "../assets/Img1.png";
import ImageTwo from "../assets/BaatKarlo.png";
import ImageThree from "../assets/Img3.png";
import "../App.css";

const Projects = () => {
  const images = [ImageOne, ImageTwo, ImageThree];

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
    <section className="p-4 lg:p-8 bg-white dark:bg-[#1E1E1E] dark:text-white ">
      <div className=" mx-auto p-4 dark:text-white space-y-2 text-center mb-7">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          My Portfolio
        </h2>
        <p className="dark:text-gray-600">Libero minima optio qui</p>
      </div>
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col bg-gray-300 overflow-hidden rounded-md shadow-sm lg:flex-row">
          {/* <img
            src={ImageOne}
            alt=""
            className="h-auto max-h-80 dark:bg-gray-500  object-scale-down"
          /> */}
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
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold dark:text-gray-600">
              We're not reinventing the wheel
            </h3>
            <p className="my-6 dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button type="button" className="self-start dark:text-gray-600">
              Action
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-gray-300 overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src={ImageTwo}
            alt=""
            className="h-auto  max-h-80 dark:bg-gray-500  object-scale-down"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold dark:text-gray-600">
              We're not reinventing the wheel
            </h3>
            <p className="my-6 dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button type="button" className="self-start dark:text-gray-600">
              Action
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-gray-300 overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src={ImageThree}
            alt=""
            className="h-auto max-h-80 dark:bg-gray-500  object-scale-down"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold dark:text-gray-600">
              We're not reinventing the wheel
            </h3>
            <p className="my-6 dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button type="button" className="self-start dark:text-gray-600">
              Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
