import React from 'react'
import Html from '/components/icons/Html'
import Css from '/components/icons/Css'
import Javascript from '/components/icons/Javascript'
import Next from '/components/icons/Next'
import Php from '/components/icons/Php'
import Python from '/components/icons/Python'
import ReactIcon from '/components/icons/ReactIcon'
import Wordpress from '/components/icons/Wordpress'

const About = () => {
  return (
    <div className="relative mx-auto max-w-screen-xl p-8 my-8">
      <span className="code-tag top-0">{"<about>"}</span>
      <div className="flex justify-between items-center">
        <div className="flex-1 space-y-4">
            <h2 className="text-4xl text-cyan-400">Yo.<br /> I'm Karim Aljandali</h2>
            <p className="text-white">I'm a front-end developer with 3 years of experience creating fully responsive websites.  I have built websites for clients ranging from medium-sized law firms to local small businesses. My primary coding language is Javascript, but I also have experience with other languages such as PHP and Python.</p>
            <h3 className="text-pink-500 text-2xl">Tools &amp; Languages</h3>
            <div className="grid grid-cols-5 gap-2">
              <Css className="w-10 h-10 text-white"/>
              <Html className="w-10 h-10 text-white" />
              <Javascript className="w-10 h-10 text-white" />
              <ReactIcon className="w-10 h-10 text-white" />
              <Next className="w-10 h-10 text-white" />
              <Python className="w-10 h-10 text-white" />
              <Php className="w-10 h-10 text-white" />
              <Wordpress className="w-10 h-10 text-white" />
            </div>
        </div>
        <div className="ml-6">
          <img className="max-w-lg" src="/imgs/about.svg" alt=""/>
        </div>
      </div>
      <span className="code-tag bottom-0">{"</about>"}</span>
    </div>
  )
}

export default About