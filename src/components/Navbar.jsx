import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import "../App.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./hooks/useDarkSide";

const navigation = [
  { name: "Home", link: "/apnamarket", current: false },
  { name: "Skills", link: "/skills", current: false },
  { name: "Projects", link: "/project", current: false },
  { name: "About Me", link: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light");

  useEffect(() => {
    const handleScrollPercentage = () => {
      const howMuchScrolled =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollPercentage((howMuchScrolled / height) * 100);
    };

    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  const toggleDarkMode = (checked) => {
    setTheme(checked ? "dark" : "light");
    setDarkSide(checked);
  };

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-gray-300 dark:bg-[#1E1E1E]  sticky top-0 z-10 "
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch ">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-8 hover:cursor-default">
                      <Link
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        className="hover:bg-gray-900  hover:text-white dark:hover:bg-white dark:hover:text-black px-3 p-1 dark:text-white rounded-lg z-10 hover:cursor-pointer font-bold text-xl"
                      >
                        Home
                      </Link>

                      <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        className="hover:bg-gray-900  hover:text-white dark:hover:bg-white dark:hover:text-black px-3 p-1 dark:text-white rounded-lg z-10 hover:cursor-pointer font-bold text-xl"
                      >
                        Skills
                      </Link>
                      <Link
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={1000}
                        className="hover:bg-gray-900  hover:text-white dark:hover:bg-white dark:hover:text-black px-3 p-1 dark:text-white rounded-lg z-10 hover:cursor-pointer font-bold text-xl"
                      >
                        Projects
                      </Link>
                      <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={1000}
                        className="hover:bg-gray-900  hover:text-white dark:hover:bg-white dark:hover:text-black px-3 p-1 dark:text-white rounded-lg z-10 hover:cursor-pointer font-bold text-xl"
                      >
                        About Me
                      </Link>
                      <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1000}
                        className="hover:bg-gray-900  hover:text-white dark:hover:bg-white dark:hover:text-black px-3 p-1  dark:text-white rounded-lg z-10 hover:cursor-pointer font-bold text-xl"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    // className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    {/* <span className="absolute -inset-1.5" /> */}
                    <DarkModeSwitch
                      // style={{ marginBottom: "2rem" }}
                      checked={darkSide}
                      onChange={toggleDarkMode}
                      size={30}
                    />
                  </button>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {/* {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 dark:text-white text-gray-900"
                        : "dark:text-gray-300 text-gray-900 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))} */}
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  className="block hover:bg-gray-900  hover:text-white dark:hover:bg-white dark:hover:text-black px-3 p-1 dark:text-white rounded-lg z-10 hover:cursor-pointer font-bold text-xl"
                >
                  Home
                </Link>

                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-95}
                  duration={1000}
                  className="block hover:bg-gray-900  hover:text-white dark:hover:bg-white dark:hover:text-black px-3 p-1 dark:text-white rounded-lg z-10 hover:cursor-pointer font-bold text-xl"
                >
                  Skills
                </Link>
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-300}
                  duration={1000}
                  className="hover:bg-gray-900 block hover:text-white dark:hover:bg-white dark:hover:text-black px-3 p-1 dark:text-white rounded-lg z-10 hover:cursor-pointer font-bold text-xl"
                >
                  Projects
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={1000}
                  className="hover:bg-gray-900 block hover:text-white dark:hover:bg-white dark:hover:text-black px-3 p-1 dark:text-white rounded-lg z-10 hover:cursor-pointer font-bold text-xl"
                >
                  About Me
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                  className="hover:bg-gray-900 block hover:text-white dark:hover:bg-white dark:hover:text-black px-3 p-1  dark:text-white rounded-lg z-10 hover:cursor-pointer font-bold text-xl"
                >
                  Contact
                </Link>
              </div>
            </DisclosurePanel>
            <div className="h-1 top-4 sticky">
              <div
                className="h-1 dark:bg-gray-300 bg-gray-900 w-0"
                style={{ width: `${scrollPercentage}` + "%" }}
              >
                {/* {console.log(scrollPercentage)} */}
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}
