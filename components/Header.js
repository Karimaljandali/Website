import { useState, useEffect } from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function Header({ setMenu }) {
  const [isScrolled, setIsScrolled] = useState(false)
  
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setIsScrolled(true)
      : setIsScrolled(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <div className={`w-100 fixed top-0 inset-x-0 transition-all duration-200 z-10 border-b-[1px] ${isScrolled ? "bg-stone-900 backdrop-blur bg-opacity-70 border-offwhite" : "bg-transparent border-b-transparent" }`}>
        <div className='mx-auto max-w-screen-xl'>
            <div className="px-2 py-4 flex justify-between items-center">
                <Link href="/">
                  <a className="">
                    <img src="/logo.png" alt="Karim Aljandali Logo" className="w-20 h-auto"/>
                  </a>
                </Link>
                <button onClick={() => setMenu(true)} className=" cursor-pointer transition-transform hover:scale-110 focus:scale-110" >
                  <MenuIcon className="h-10 w-10 text-pink-500" />
                  <span className="sr-only">Open Menu Button</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header