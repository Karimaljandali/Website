import React from 'react'

const About = () => {
  return (
    <div className="relative mx-auto max-w-screen-xl py-8 my-8">
      <span className="code-tag top-0">{"<about>"}</span>
      <div className="flex justify-between items-center">
        <div className="flex-1 space-y-4">
            <h2 className="text-4xl text-cyan-400">Yo.<br /> I'm Karim Aljandali</h2>
            <p className="text-white">I'm a front-end developer with 3 years of experience creating fully responsive websites.  I have built websites for clients ranging from medium-sized law firms to local small businesses. My primary coding language is Javascript, but I also have experience with other languages such as PHP and Python.</p>
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