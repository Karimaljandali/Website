import { useState, useEffect } from 'react'
import { MenuIcon } from '@heroicons/react/solid'

function Header() {
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
    <div className={`w-100 fixed top-0 inset-x-0 transition-all duration-200 z-10 ${isScrolled ? "bg-stone-700" : "bg-transparent" }`}>
        <div className='mx-auto max-w-screen-xl'>
            <div className="px-2 py-4 flex justify-between items-center">
                <a href="/" className="">
                  <img src="/imgs/logo.png" alt="Karim Aljandali Logo" className="w-12 h-auto"/>
                </a>
                <MenuIcon className="h-10 w-10 text-pink-500 cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

export default Header