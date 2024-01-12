'use client'

import { useState } from 'react'
import React from 'react'
import Link from 'next/link'

export const Navigation = () => {
  const [icon,setIcon] = useState(true)

  const handleIcon = () =>{
    setIcon(false)
  }


  return (
    <header className=''>
      <nav className='py-5 px-10 bg-[#121212]'>
        {/* Desktop Navbar */}
        {/* <div className='flex justify-between'>
          <div>
            <a className='text-xl text-white font-black' href="">
              LOGO
            </a>
          </div>

          <ul className='flex gap-10'>
            <li><a className='text-[#f1f1f1]' href="">Products</a></li>
            <li><a className='text-[#f1f1f1]' href="">Tracking</a></li>
            <li><a className='text-[#f1f1f1]' href="">About</a></li>
            <li><a className='text-[#f1f1f1]' href="">Contact</a></li>
          </ul>
        </div> */}

        {/* Mobile Navbar */}
        <div className='flex justify-between'>

          <div>
            <a className='text-xl font-extrabold text-white' href="">LOGO</a>
          </div>

          <div onClick={ handleIcon }>
            {icon ?

              (              
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )

              :

              (              
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) 
            }
          </div>
        
        </div>
      </nav>
    </header>
  )
}

