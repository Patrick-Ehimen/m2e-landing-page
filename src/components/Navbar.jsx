import { useEffect, useState } from "react";

import { Logo, menu, close } from "../assets";
import { navLinks } from "../constants";

// Navbar component
// Renders the navigation bar
const Navbarr = () => {
  // Using React hook for handling toggle state
  const [toggle, settoggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // cleanup
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border border-black sm:rounded-full shadow-lg sm:px-2 py-3 sm:mx-20 sm:mt-10 ${
        scrolled ? "bg-black" : "sm:bg-[rgba(255, 255, 255, 0.06)]"
      }`}
    >
      {/* Navigation bar content */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between sm:mx-0 p-2">
        {/* Logo */}
        <a href="#" className="flex items-center ">
          <img
            src={Logo}
            alt="logo"
            className="w-[36px] h-[30px] ml-2 sm:ml-6 my-2"
          />
        </a>
        {/* Launch App button */}
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-primary bg-[#D9D9D9C9] hover:bg-[#d9d9d9df]   font-bold font-inter rounded-full text-sm px-4 py-2 text-center mr-3 sm:flex hidden hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Launch App
          </button>
        </div>
        {/* Navigation links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex flex-col mt-3 font-medium  text-[15px] md:flex-row md:space-x-8 text-white font-inter text-lg my-2 ">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block py-2 pl-3 pr-4 text-white hover:scale-105 hover:shadow-lg transition-all duration-300 md:p-0"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Menu button which toggles visibility of navbar */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-2"
            onClick={() => settoggle((prev) => !prev)}
          />
          {/* Sidebar menu */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                // Each item in sidebar menu
                <li
                  key={nav.id}
                  className={`font-inter font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white mr-10`}
                >
                  <a
                    href={`#${nav.id}`}
                    className="text-white hover:text-secondary"
                  >
                    {nav.title}
                  </a>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
