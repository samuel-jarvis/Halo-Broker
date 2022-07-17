import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Latest from '../components/Latest/Latest'
import Devices from '../components/Devices/Devices'
import Features from '../components/Features/Features'

const Home = ({themeToggler}) => {
  return (
    <>
      <Navbar themeToggler={themeToggler} />
      <Hero />
      <Latest />
      <Devices />
      <Features />
    </>  
  )
}

export default Home