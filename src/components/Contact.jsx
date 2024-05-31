import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import AnimationData from "../assets/EmailAnimation .json";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm("service_ov4bqib", "template_vg7rv2m", form.current, {
        publicKey: "uvSq_tIFla9ZaTqW0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email Sent Successfully!");
          setLoading(false);
        },
        (error) => {
          toast.error("FAILED to Sent Email");
          console.log("FAILED! : ", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact">
      <div className="mt-10 bg-gray-300 dark:bg-[#1E1E1E]">
        <div className="   dark:text-white space-y-2 text-center">
          <h2 className="text-2xl md:hidden sm:text-4xl lg:hidden font-bold">
            Contact
          </h2>
          <p className="dark:text-white text-center text-sm md:text-2xl lg:text-2xl font-bold">
            Get in Touch Today
          </p>
        </div>

        <div className="flex mt-10  lg:justify-evenly flex-col-reverse md:flex-row lg:flex-row">
          <div className="mb-6 p-5 max-w-xl bg-gray-300 dark:bg-[#1E1E1E] ">
            <span className=" text-center dark:text-white  font-semibold">
              Fill out the form below to discuss any work opportunities.
            </span>
            <form className=" space-y-4" ref={form} onSubmit={sendEmail}>
              <input
                required
                type="text"
                placeholder="Your Name"
                name="user_name"
                className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                name="user_email"
                className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
              />

              <textarea
                required
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"
                defaultValue={""}
              />
              <button
                type="submit"
                value="send"
                disabled={loading}
                className="text-white  bg-black hover:bg-gray-200 hover:text-black font-semibold rounded-md text-sm px-4 py-3 w-full"
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
    </section>
  );
};

export default Contact;
