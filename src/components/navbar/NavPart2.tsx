'use client'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io"

const NavPart2 = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-2">
      <h6 className="font-medium text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg text-gray-700 dark:text-gray-200 lg:text-gray-600 lg:dark:text-gray-300">
        Scroll down to see
      </h6>
      <IoIosArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-gray-700 dark:text-gray-200 animate-bounce lg:text-gray-600 lg:dark:text-gray-300" />
    </div>
  )
}

export default NavPart2
