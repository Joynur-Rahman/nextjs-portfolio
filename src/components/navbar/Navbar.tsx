'use client'
import React, { useState } from 'react'
import NavPart1 from './NavPart1'
import NavPart2 from './NavPart2'
import NavPart3 from './NavPart3'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Main Navbar */}
      <nav className='
        flex justify-between items-center w-full relative z-50
        px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-16 2xl:py-6
         backdrop-blur-md
        border-b 
        fixed top-0 left-0 right-0
      '>
        
        {/* Left Section - Only visible on lg+ */}
        <div className='hidden lg:block'>
          <NavPart1 />
        </div>
        
        {/* Center Section - Only visible on lg+ */}
        <div className='hidden lg:block'>
          <NavPart2 />
        </div>
        
        {/* Right Section - Always visible */}
        <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
          {/* Hamburger Menu Button - Only on mobile */}
          <button
            onClick={toggleMenu}
            className='
              block sm:hidden p-2 rounded-lg
              text-gray-700 dark:text-gray-200
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500
            '
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <HiX className='w-6 h-6' /> : <HiMenu className='w-6 h-6' />}
          </button>
          
          {/* NavPart1 - Visible on sm and md only */}
          <div className='hidden sm:block lg:hidden'>
            <NavPart1 />
          </div>
          
          {/* NavPart3 - Always visible */}
          <NavPart3 />
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-40 sm:hidden bg-black/50 animate-fadeIn'
        onClick={toggleMenu} />
      )}
      
      {/* Mobile Menu */}
      <div className={`
        fixed top-0 left-0 h-full z-50 sm:hidden w-80 max-w-[85vw]
        bg-white dark:bg-gray-900 shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        border-r border-gray-200 dark:border-gray-700
      `}>
        
        {/* Mobile Menu Header */}
        <div className='flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700'>
          <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>Menu</h2>
          <button onClick={toggleMenu} className='p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'>
            <HiX className='w-6 h-6' />
          </button>
        </div>
        
        {/* Mobile Menu Content */}
        <div className='flex flex-col p-4 space-y-8'>
          <div className='animate-slideInLeft animation-delay-100'>
            <div className='mb-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>Brand</div>
            <NavPart1 />
          </div>
          <div className='animate-slideInLeft animation-delay-200'>
            <div className='mb-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>Navigation</div>
            <NavPart2 />
          </div>
        </div>
      </div>
      
      {/* Spacer for fixed navbar */}
      <div className='h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24 2xl:h-24' />
    </>
  )
}

export default Navbar
