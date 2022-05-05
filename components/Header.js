import React from 'react'
import { MenuIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="w-100 fixed top-0 inset-x-0">
        <div className="mx-auto max-w-screen-xl">
            <div className="px-2 py-8 flex justify-between items-center">
                <a href="/" className="uppercase font-changa text-5xl text-white">KA</a>
                <MenuIcon className="h-10 w-10 text-cyan-600 cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

export default Header