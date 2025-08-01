
"use client"
import React from 'react'
import { TextAnimate } from "@/components/ui/text-animate"
import { CardSwipe } from "@/components/ui/card-swipe"

const About = () => {
  const images = [
    { src: "/jay.jpg", alt: "Jay photo" },
    { src: "/jay4.jpg", alt: "Jay photo 4" },
    { src: "/jay5.jpg", alt: "Jay photo 5" },
    { src: "/jay6.jpg", alt: "Jay photo 6" },
  ]

  return (
    <div className='
      /* Main Container - Responsive Layout */
      flex flex-col justify-center items-center
      min-h-screen w-full

      /* Responsive Padding */
      px-4 py-8
      sm:px-6 sm:py-10
      md:px-8 md:py-12
      lg:px-10 lg:py-16
      xl:px-12 xl:py-20
      2xl:px-16 2xl:py-24

      /* Container Max Width */
      max-w-7xl mx-auto
    '>

      {/* TextAnimate Component - Title */}
      <div className='
        /* Base Typography */
        font-bold text-center mb-8

        /* Responsive Font Sizes */
        text-2xl
        xs:text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        xl:text-7xl
        2xl:text-8xl

        /* Responsive Margins */
        mb-6
        sm:mb-8
        md:mb-10
        lg:mb-12
        xl:mb-16
        2xl:mb-20
      '>
        <TextAnimate text="ABOUT ME" type="rollIn" />
      </div>

      {/* Main Content Container */}
      <div className='
        /* Layout - Column on mobile, Row on larger screens */
        flex w-full
        flex-col
        lg:flex-row lg:justify-between lg:items-start

        /* Responsive Gaps */
        gap-8
        sm:gap-10
        md:gap-12
        lg:gap-16
        xl:gap-20
        2xl:gap-24
      '>

        {/* Images Section */}
        <div className="
          /* Base Layout */
          w-full

          /* Responsive Width Control */
          lg:w-1/2 lg:max-w-lg
          xl:max-w-xl
          2xl:max-w-2xl

          /* Flex Properties */
          flex-shrink-0
        ">
          <CardSwipe images={images} autoplayDelay={1000} slideShadows={false} />
        </div>

        {/* Text Content Section */}
        <div className='
          /* Base Layout */
          w-full flex flex-col

          /* Responsive Width */
          lg:w-1/2
        '>

          {/* Name Title */}
          <div className='
            /* Base Typography */
            font-bold leading-tight mb-6

            /* Text Alignment - Center on mobile, Left on desktop */
            text-center
            lg:text-left

            /* Responsive Font Sizes */
            text-xl
            xs:text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-3xl
            xl:text-4xl
            2xl:text-5xl

            /* Responsive Margins */
            mb-4
            sm:mb-6
            md:mb-8
            lg:mb-6
            xl:mb-8
            2xl:mb-10
          '>
            <TextAnimate text="I AM JOYNUR RAHMAN" type="rollIn" />
          </div>

          {/* Description Container */}
          <div className='
            /* Base Styling */
            leading-relaxed

            /* Responsive Typography */
            text-sm
            xs:text-base
            sm:text-lg
            md:text-xl
            lg:text-lg
            xl:text-xl
            2xl:text-2xl

            /* Responsive Padding */
            p-2
            sm:p-3
            md:p-4
            lg:p-2
            xl:p-4
            2xl:p-6
          '>

            {/* Paragraph 1 */}
            <p className='
              /* Base Styling */
              text-justify mb-4

              /* Responsive Indentation */
              indent-4
              sm:indent-6
              md:indent-8
              lg:indent-6
              xl:indent-8
              2xl:indent-12

              /* Responsive Margins */
              mb-3
              sm:mb-4
              md:mb-5
              lg:mb-4
              xl:mb-5
              2xl:mb-6
            '>
              I'm a front-end developer passionate about building modern, interactive web experiences. I specialize in React.js and Next.js, 
              and I love using animation libraries like GSAP to create smooth, engaging UI effects.
            </p>

            {/* Paragraph 2 - Underlined */}
            <p className='
              /* Base Styling */
              text-justify mb-4 underline decoration-2

              /* Responsive Underline Offset */
              underline-offset-4
              sm:underline-offset-4
              md:underline-offset-8
              lg:underline-offset-6
              xl:underline-offset-8
              2xl:underline-offset-8

              /* Responsive Indentation */
              indent-4
              sm:indent-6
              md:indent-8
              lg:indent-6
              xl:indent-8
              2xl:indent-12

              /* Responsive Margins */
              mb-3
              sm:mb-4
              md:mb-5
              lg:mb-4
              xl:mb-5
              2xl:mb-6
            '>
              I enjoy crafting custom interfaces with tools like shadcn/ui and bringing designs to life with attention to detail and user experience.
            </p>

            {/* Paragraph 3 */}
            <p className='
              /* Base Styling */
              text-justify

              /* Responsive Indentation */
              indent-4
              sm:indent-6
              md:indent-8
              lg:indent-6
              xl:indent-8
              2xl:indent-12

              /* Responsive Margins */
              mb-3
              sm:mb-4
              md:mb-5
              lg:mb-4
              xl:mb-5
              2xl:mb-6
            '>
              I also explore the intersection of software and hardware through IoT projects, 
              and I'm comfortable working across multiple programming languages including HTML, 
              CSS, JavaScript, Java, C, C++, and Python.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About