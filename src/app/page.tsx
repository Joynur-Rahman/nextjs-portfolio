import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Home from '../components/home/Home'
import About from '@/components/about/About'
import Projects from '@/components/projects/page'
import  Contact from '@/components/contact/page'
import Footer from '@/components/footer/footer'
const Page = () => {
  return (
    <div>
      <Navbar />
      <Home  />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Page