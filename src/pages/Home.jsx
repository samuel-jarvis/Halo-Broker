import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = ({themeToggler}) => {
  return (
    <>
      <Navbar themeToggler={themeToggler} />
    </>  
  )
}

export default Home