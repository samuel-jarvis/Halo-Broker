import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Latest from '../components/Latest/Latest'
import Devices from '../components/Devices/Devices'
import Features from '../components/Features/Features'
import Payments from '../components/Payment/Payments'
import Achievements from '../components/Achievements/Achievements'
import Footer from '../components/Footer/Footer'
import Copyright from '../components/Copyright/Copyright'

const Home = ({themeToggler}) => {
  return (
    <>
      <Navbar themeToggler={themeToggler} />
      <Hero />
      <Latest />
      <Devices />
      <Features />
      <Payments />
      <Achievements />
      <Footer />
      <Copyright />
    </>  
  )
}

export default Home