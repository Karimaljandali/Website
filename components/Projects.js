import { EyeIcon } from '@heroicons/react/solid'
import Github from './icons/Github'

const projects = [
  {
    id: 1,
    githubLink: 'https://github.com/Karimaljandali/Spotify',
    liveLink: 'http://spotify-ruddy-xi.vercel.app/',
    photo: '/imgs/project1.jpg',
    title: 'Spotify App',
    description: 'A clone of the popular music streaming platform Spotify. The build was done using React, TailwindCSS and Next.js and required implementing the Spotify API.'
  },
  {
    id: 2,
    githubLink: 'https://github.com/Karimaljandali/Crypto-Dashboard',
    liveLink: 'https://crypto-dashboard-ecru.vercel.app/',
    photo: '/imgs/project2.jpg',
    title: 'Crypto Dashboard',
    description: 'A web app showing the top 100 cryptocurrencies. Built using Next.js, React, Tailwind and pulls info using the Coingecko API.'
  },
  {
    id: 3,
    githubLink: 'https://github.com/Karimaljandali/Web3',
    liveLink: 'https://web3-pi.vercel.app/',
    photo: '/imgs/project3.jpg',
    title: 'Web3 Template',
    description: 'A web3 starter template that allows users to mint NFTs on any Ethereum Virtual Machine (EVM) compatible chain. Built using Next.js, React, Tailwind and Ether.js'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="grid mx-auto max-w-screen-xl p-8 my-8 relative lg:grid-cols-3 lg:gap-4 justify-center">
      <span className="code-tag top-0">{"<projects>"}</span>
      {projects.map((project) => (
        <div key={project.id} className="bg-stone-800 rounded-lg text-white max-w-sm border border-stone-600 mb-6 lg:mb-0">
          <img className="rounded-t-lg" src={project.photo} alt=""/>
          <div className="p-5 space-y-2 min-h-[250px] relative">
            <h3 className="text-2xl text-white">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="flex justify-between items-center pt-6 absolute bottom-8 space-x-2">
              <a 
                href={project.liveLink}
                className="bg-cyan-400 text-stone-900 px-4 py-2 rounded transition-colors text-md hover:bg-cyan-500 focus:bg-cyan-500 h-12 flex items-center md:px-8"
              >
                <EyeIcon className="h-4 w-4 mr-2"/> Live Link
              </a>
              <a 
                href={project.githubLink}
                className="border-2 border-cyan-400 text-cyan-400 px-4 py-2 rounded transition-colors text-md hover:bg-cyan-400 focus:bg-cyan-400 hover:text-stone-900 focus:text-stone-900 h-12 flex items-center md:px-8"
              >
                <Github className="inline h-4 w-4 mr-2"/> Github Link
              </a>
            </div>
          </div>
        </div>
      ))}
      <span className="code-tag bottom-0">{"</projects>"}</span>
    </section>
  )
}

export default Projects