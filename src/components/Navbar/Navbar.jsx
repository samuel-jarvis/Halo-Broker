import React from 'react'
import {ReactComponent as Svg} from '../../asset/halo-logo.svg'
import {Nav, NavContainer, NavLogo, NavLinks, NavLink, NavFeatures, ToggleButton, MobileIcon, NavButton} from './NavStyled'
import { useState } from 'react'
import {BsLightbulb, BsLightbulbOff} from 'react-icons/bs'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useTheme } from 'styled-components'



const Navbar = ({themeToggler}) => {
  const [showNav, setShowNav] = useState(false)
  const handleNav = () => {
    {showNav ? setShowNav(false) : setShowNav(true)}
  }

  const closeNav = () => {
    setShowNav(false)
  }

  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>

        <MobileIcon onClick={handleNav}>
          {showNav ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        
        <NavLogo>
          <Svg/>
        </NavLogo>

        <NavLinks showNav={showNav} onClick={closeNav}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/'>Contact</NavLink>
        </NavLinks>

        <NavFeatures>
          <ToggleButton onClick={themeToggler}>
            {theme.text === 'white' ? 
              <BsLightbulb size={20}/> : 
              <BsLightbulbOff size={20}/>
            }
          </ToggleButton>

          <NavButton>Sign Up</NavButton>
        </NavFeatures>

      </NavContainer>
    </Nav>
  )
}

export default Navbar

