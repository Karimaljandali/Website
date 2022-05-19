import React from 'react'
import Html from '/components/icons/Html'
import Css from '/components/icons/Css'
import Javascript from '/components/icons/Javascript'
import Next from '/components/icons/Next'
import Php from '/components/icons/Php'
import Python from '/components/icons/Python'
import ReactIcon from '/components/icons/ReactIcon'
import Wordpress from '/components/icons/Wordpress'
import Tailwind from '/components/icons/Tailwind'
import Git from '/components/icons/Git'

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-screen-xl p-8 my-8">
      <span className="code-tag top-0">{"<about>"}</span>
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="flex-1 space-y-4">
            <h2 className="text-4xl text-cyan-400">Yo.<br /> I'm Karim Aljandali</h2>
            <p className="text-white">I'm a front-end developer with 3 years of experience creating fully responsive websites.  I have built websites for clients ranging from medium-sized law firms to local small businesses. My primary coding language is Javascript, but I also have experience with other languages such as PHP and Python.</p>
            <h3 className="text-cyan-400 text-2xl">Tools &amp; Languages</h3>
            <div className="grid grid-cols-5 gap-y-6">
              <div className="flex flex-col items-center justify-center">
                <Javascript className="w-10 h-10 text-white hover:text-cyan-400 transition-colors" />
                <p className="text-md text-white">Javascript</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ReactIcon className="w-10 h-10 text-white hover:text-cyan-400 transition-colors" />
                <p className="text-md text-white">React</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Next className="w-10 h-10 text-white hover:text-cyan-400 transition-colors" />
                <p className="text-md text-white">Next.js</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Tailwind className="w-10 h-10 text-white hover:text-cyan-400 transition-colors" />
                <p className="text-md text-white">Tailwind</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Css className="w-10 h-10 text-white hover:text-cyan-400 transition-colors"/>
                <p className="text-md text-white">CSS</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Html className="w-10 h-10 text-white hover:text-cyan-400 transition-colors" />
                <p className="text-md text-white">HTML</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Git className="w-10 h-10 text-white hover:text-cyan-400 transition-colors" />
                <p className="text-md text-white">Git</p>
              </div>
              <div className="flex flex-col items-center justify-center">
               <Python className="w-10 h-10 text-white hover:text-cyan-400 transition-colors" />
                <p className="text-md text-white">Python</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Php className="w-10 h-10 text-white hover:text-cyan-400 transition-colors" />
                <p className="text-md text-white">PHP</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Wordpress className="w-10 h-10 text-white hover:text-cyan-400 transition-colors" />
                <p className="text-md text-white">Wordpress</p>
              </div>    
            </div>
        </div>
        <div className="my-8 lg:ml-6 lg:my-0">
          <img className="max-w-100 h-auto md:max-w-lg" src="/imgs/about.svg" alt=""/>
        </div>
      </div>
      <span className="code-tag bottom-0">{"</about>"}</span>
    </section>
  )
}

export default About