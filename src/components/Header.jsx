import React, { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './projects/Project.css' // ✅ FIXED PATH

const Header = () => {
  const [togle, settogle] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`sticky top-0 z-10 bg-gradient-to-r from-white via-pink-200 to-indigo-200 
      flex justify-between items-center h-20 px-4 sm:px-10 lg:px-16
      transition-all duration-700 ease-out
      ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
    >
      {/* Text Logo Instead of Image */}
      <a href="#" className="max-sm:ml-4 font-bold text-lg sm:text-3xl bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent font-poppins tracking-wide">
        <p className='ye'>Vishnu</p>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        <ul className="flex gap-8 font-poppins text-pink-600 items-center mt-2">

          <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <AnchorLink className='anchor-link' href='#home'>Home</AnchorLink>
          </li>

          <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <AnchorLink className='anchor-link' offset={100} href='#about'>About</AnchorLink>
          </li>

          <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink>
          </li>

          <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <AnchorLink className='anchor-link' offset={50} href='#projects'>Projects</AnchorLink>
          </li>

          <li>
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              <button
                className="bg-gradient-to-r from-pink-500 to-orange-500 
                  hover:from-pink-700 hover:to-orange-600 
                  px-6 py-1.5 rounded-2xl cursor-pointer text-white"
              >
                Connect
              </button>
            </AnchorLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {togle && (
        <div
          className="absolute top-20 left-0 w-full bg-white/95 shadow-md sm:hidden 
          transition-all duration-500 ease-in-out"
        >
          <ul className="flex flex-col gap-4 font-poppins text-pink-600 items-center py-6">
            <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
              <AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink>
            </li>

            <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
              <AnchorLink className='anchor-link' offset={50} href='#about'>About</AnchorLink>
            </li>

            <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
              <AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink>
            </li>

            <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
              <AnchorLink className='anchor-link' offset={50} href='#projects'>Projects</AnchorLink>
            </li>

            <li>
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <button
                  className="bg-gradient-to-r from-pink-500 to-orange-500 
                    hover:from-pink-700 hover:to-orange-600 
                    px-6 py-1.5 rounded-2xl cursor-pointer text-white"
                >
                  Connect
                </button>
              </AnchorLink>
            </li>
          </ul>
        </div>
      )}

      {/* Hamburger / Close Button */}
      <button
        className="sm:hidden z-20"
        onClick={() => settogle(!togle)}
      >
        {togle ? (
          <XMarkIcon className="w-7 h-7 text-pink-600 cursor-pointer" />
        ) : (
          <Bars3Icon className="w-7 h-7 text-pink-600 cursor-pointer" />
        )}
      </button>
    </div>
  )
}

export default Header
