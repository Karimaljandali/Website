import { EyeIcon } from '@heroicons/react/solid'
import Github from './icons/Github'

const projects = [
  {
    id: 1,
    githubLink: '#',
    liveLink: '#',
    photo: 'https://via.placeholder.com/400x200',
    title: 'Spotify App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    githubLink: '#',
    liveLink: '#',
    photo: 'https://via.placeholder.com/400x200',
    title: 'Spotify App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    githubLink: '#',
    liveLink: '#',
    photo: 'https://via.placeholder.com/400x200',
    title: 'Spotify App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-screen-xl py-12 relative">
      <span className="font-code text-pink-500 absolute top-0 -left-1.5 text-xl">{"<projects>"}</span>
      {projects.map((project) => (
        <div key={project.id} className="bg-stone-800 rounded-lg text-white max-w-sm border border-stone-600">
          <img className="rounded-t-lg" src={project.photo} alt=""/>
          <div className="p-5 space-y-2">
            <h3 className="text-2xl text-white">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="flex justify-between items-center pt-6">
              <a 
                href={project.liveLink}
                className="bg-cyan-400 text-stone-900 px-8 py-2 rounded transition-colors text-md hover:bg-cyan-500 focus:bg-cyan-500 h-12 flex items-center"
              >
                <EyeIcon className="h-4 w-4 mr-2"/> Live Link
              </a>
              <a 
                href={project.githubLink}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-2 rounded transition-colors text-md hover:bg-cyan-400 focus:bg-cyan-400 hover:text-stone-900 focus:text-stone-900 h-12 flex items-center"
              >
                <Github className="inline h-4 w-4 mr-2"/> Github Link
              </a>
            </div>
          </div>
        </div>
      ))}
      <span className="font-code text-pink-500 absolute bottom-0 -left-1.5 text-xl">{"</projects>"}</span>
    </div>
  )
}

export default Projects