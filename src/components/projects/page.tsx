"use client"
import React from 'react'
import { TextAnimate } from "@/components/ui/text-animate"
import { CardCarousel } from "@/components/ui/card-carousel"
const Projects = () => {
  const images = [
    { src: "/project_1.svg", alt: "Image 1" },
    { src: "/project_2.svg", alt: "Image 2" },
    { src: "/project_3.svg", alt: "Image 3" },
    { src: "/project_4.svg", alt: "Image 3" },
    { src: "/project_5.svg", alt: "Image 3" },
    { src: "/project_6.svg", alt: "Image 3" },
  ]
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
      <div className='text-3xl  md:text-5xl'>
        <TextAnimate text="PROJECTS" type="popIn" />
      </div>
      <p>these are some projects to showcase</p>
      <div className="pt-40">
          <CardCarousel
            images={images}
            autoplayDelay={1000}
            showPagination={true}
            showNavigation={true}
          />
        </div>
    </div>
  )
}

export default Projects