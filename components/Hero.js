import { Transition } from "@headlessui/react";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Hero() {
  const [transition, setTransition] = useState(false);
  useEffect(() => setTransition(true), []);
  return (
    <div className="md:h-screen h-[600px]">
      <Transition show={transition}>
        <Transition.Child
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="w-100 md:h-screen h-[600px] flex items-center justify-center flex-col bg-hero-bg bg-cover bg-no-repeat bg-center">
            <Transition.Child
              enter="transition ease-in-out duration-500 delay-200 transform"
              enterFrom="-translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <h1 className="text-5xl uppercase font-bold text-cyan-400 text-center md:text-7xl">
                Karim Aljandali
              </h1>
              <h2 className="text-3xl text-white my-10 text-center md:text-5xl">
                Front-End Developer
              </h2>
              <div className="flex justify-center items-center text-white">
                <a
                  className="text-white hover:text-cyan-400 focus:text-cyan-400 transition-colors"
                  href="https://github.com/Karimaljandali"
                  target="_blank"
                >
                  <Github className="h-12 w-12 mx-4" />
                </a>
                <a
                  className="text-white hover:text-cyan-400 focus:text-cyan-400 transition-colors"
                  href="https://www.linkedin.com/in/karim-aljandali-211701136/"
                  target="_blank"
                >
                  <Linkedin className="h-12 w-12 mx-4" />
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 my-10">
                <Link
                  to="contact"
                  smooth={true}
                  offset={-130}
                  duration={800}
                  className="bg-cyan-400 text-stone-900 px-12 py-4 rounded transition-colors text-xl hover:bg-cyan-500 focus:bg-cyan-500 h-16 hover:cursor-pointer"
                >
                  Contact Me
                </Link>
                <a
                  className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded transition-colors text-xl hover:bg-cyan-400 focus:bg-cyan-400 hover:text-stone-900 focus:text-stone-900 h-16"
                  href="/resume.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </Transition.Child>
          </div>
        </Transition.Child>
      </Transition>
    </div>
  );
}

export default Hero;
