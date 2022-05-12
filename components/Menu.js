import React from "react";
import { XIcon } from "@heroicons/react/solid";
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = ({ menu, setMenu }) => {
  return (
    <div
      className={`h-screen z-20 bg-stone-800 fixed right-0 top-0 flex flex-col pt-20 transition-all overflow-hidden ${
        menu === true ? "w-96" : "w-0"
      }`}
    >
      <XIcon
        tabIndex={0}
        onClick={() => setMenu(false)}
        className="absolute top-2 right-2 h-16 w-16 text-white transition-transform cursor-pointer hover:scale-90 focus:scale-90"
      />
      <Link
        to="about"
        smooth={true}
        onClick={() => setMenu(false)}
        offset={-130}
        duration={800}
        className="w-full cursor-pointer px-4 py-8 border-b-2 border-stone-300 hover:bg-stone-700 focus:bg-stone-700 text-xl text-white"
      >
        About
      </Link>
      <Link
        to="projects"
        smooth={true}
        onClick={() => setMenu(false)}
        offset={-130}
        duration={800}
        className="w-full cursor-pointer px-4 py-8 border-b-2 border-stone-300 hover:bg-stone-700 focus:bg-stone-700 text-xl text-white"
      >
        Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        onClick={() => setMenu(false)}
        offset={-130}
        duration={800}
        className="w-full cursor-pointer px-4 py-8 border-b-2 border-stone-300 hover:bg-stone-700 focus:bg-stone-700 text-xl text-white"
      >
        Contact
      </Link>
    </div>
  );
};

export default Menu;
