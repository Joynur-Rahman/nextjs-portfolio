'use client'

import React from 'react'
import Image from 'next/image'
import { TextScroll } from "../ui/text-scroll"
import HoverExpand from "../ui/hover-expand"
const images = [
  "./jay.jpg",
  "./jay2.jpg",
  "./jay3.jpg",
  "./jay4.jpg",
  "./jay5.jpg",
  "./jay6.jpg",
]
const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4">
      <HoverExpand
          images={images}
          initialSelectedIndex={0}
          thumbnailHeight={400}
          modalImageSize={600}
          maxThumbnails={11}
    />

      {/* TextScroll Component */}
      <TextScroll
        className="font-display text-center text-4xl font-semibold tracking-tighter text-black dark:text-white md:text-7xl md:leading-[5rem]"
        text="I am Joynur Rahman,"
        default_velocity={5}
      />
    </div>
  )
}

export default Home
