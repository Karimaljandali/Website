import React from "react";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

function Hero() {
  return (
    <div className="w-100 md:h-screen h-[600px] flex items-center justify-center flex-col bg-zinc-900">
      <h1 className="text-5xl uppercase font-bold text-cyan-400 text-center md:text-7xl">
        Karim Aljandali
      </h1>
      <h2 className="text-3xl text-white my-10 text-center md:text-5xl">Front-End Developer</h2>
      <div className="flex justify-center items-center text-white space-x-2">
        <a className="text-white hover:text-cyan-400 focus:text-cyan-400 transition-colors" href="https://github.com/Karimaljandali" target="_blank">
          <Github />
        </a>
        <a className="text-white hover:text-cyan-400 focus:text-cyan-400 transition-colors" href="https://www.linkedin.com/in/karim-aljandali-211701136/" target="_blank">
          <Linkedin />
        </a>
      </div>
      <div className="flex items-center justify-center space-x-2 my-10">
        <button className="bg-cyan-400 text-stone-900 px-12 py-4 rounded transition-colors text-xl hover:bg-cyan-500 focus:bg-cyan-500 h-16">
          Contact Me
        </button>
        <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded transition-colors text-xl hover:bg-cyan-400 focus:bg-cyan-400 hover:text-stone-900 focus:text-stone-900 h-16">
          Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
