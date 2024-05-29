import Lottie from "lottie-react";
import AnimationData from "../assets/HeroAnimation2.json";
import { useEffect, useState } from "react";
import { Cursor } from "react-simple-typewriter";

export default function HoreSec() {
  const words = ["Full Stack Developer", "Programmer"];
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [deleteSpeed, setDeleteSpeed] = useState(200);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentWord((prevWord) => {
          if (!isDeleting) {
            if (prevWord === words[index]) {
              setIsDeleting(true);
              setTypingSpeed(0);
              setDeleteSpeed(200);
            } else {
              return words[index].substring(0, prevWord.length + 1);
            }
          } else {
            if (prevWord === "") {
              setIsDeleting(false);
              setIndex((prevIndex) => (prevIndex + 1) % words.length);
              setTypingSpeed(120);
              setDeleteSpeed(0);
            } else {
              return prevWord.substring(0, prevWord.length - 1);
            }
          }
          return prevWord;
        });
      },
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearInterval(interval);
  }, [index, isDeleting, words, typingSpeed, deleteSpeed]);

  return (
    <section id="hero">
      <div className="relative overflow-hidden bg-gray-300 dark:bg-[#1E1E1E] ">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <span className="dark:text-gray-300 text-gray-900 text-2xl">
              Hello,
            </span>
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 pt-1 pb-4 dark:text-white sm:text-5xl">
                I'm Mukesh Choudhary
              </h1>
              <span className="text-5xl font-bold text-gray-900 dark:text-white">
                {currentWord} <Cursor cursorStyle="|" />
              </span>

              <p className="text-gray-900 dark:text-white pt-3">
                As a full stack developer, I specialize in crafting dynamic and
                efficient web solutions.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <Lottie
                      animationData={AnimationData}
                      className="h-100 w-100 lg:w-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
