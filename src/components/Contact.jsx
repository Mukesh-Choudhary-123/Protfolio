import Lottie from "lottie-react";
import React from "react";
import AnimationData from "../assets/EmailAnimation .json";

const Contact = () => {
  return (
    <div className="mt-10 bg-white dark:bg-[#1E1E1E]">
      <div>
        <h1 className="text-3xl dark:text-white md:text-4xl lg:text-5xl font-bold text-center">
          Contact
        </h1>
      </div>

      <div className="flex mt-10 justify-evenly flex-col-reverse md:flex-row lg:flex-row">
        <div className="mb-6 p-5 max-w-xl bg-white dark:bg-[#1E1E1E] ">
          <form className=" space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
            />

            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"
              defaultValue={""}
            />
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
            >
              Send
            </button>
          </form>
        </div>
        <div className=" max-w-xl ">
          <Lottie
            animationData={AnimationData}
            className=" lg:-mt-24 md:-mt-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
