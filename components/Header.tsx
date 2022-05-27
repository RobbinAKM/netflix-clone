import React, { useState, useEffect } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  useEffect(() => {
    const isScrolled = () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', isScrolled)
    return () => {
      window.removeEventListener('scroll', isScrolled)
    }
  }, [])

  return (
    <header className={`${scroll && 'bg-[#141414]'}`}>
      <div className="flex flex-row items-center space-x-2 md:space-x-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="ext-sm hidden space-x-3 text-sm font-light md:flex">
          <li className="NavListitem">Home</li>
          <li className="NavListitem">TV Shows</li>
          <li className="NavListitem">Movies</li>
          <li className="NavListitem">New & Popular</li>
          <li className="NavListitem">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <img
          className="cursor-pointer rounded"
          src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        />
      </div>
    </header>
  )
}

export default Header
