'use client'
import React from 'react'
import FlipLink from "../ui/text-effect-flipper"

const NavPart1 = () => {
  return (
    <div className='lg:block'>
      <div className='flex items-center gap-2 sm:gap-3 md:gap-4 flex-col items-start lg:flex-row lg:items-center'>
        <FlipLink href="#" className="font-bold text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base text-gray-900 dark:text-white lg:text-gray-900 lg:dark:text-white">
          Joynur Rahman
        </FlipLink>
        <span className="font-extralight text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg text-gray-600 dark:text-gray-300 lg:text-gray-50">
          portfolio
        </span>
      </div>
    </div>
  )
}

export default NavPart1
