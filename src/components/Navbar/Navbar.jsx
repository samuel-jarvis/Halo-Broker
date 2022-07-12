import React from 'react'
import {ReactComponent as Svg} from '../../asset/halo-logo.svg'
import {Nav, NavContainer, NavLogo, NavLinks, NavLink, NavFeatures, ToggleButton} from './NavStyled'
import { Button } from '../../globalStyles'
import { useState } from 'react'
import {BsLightbulb, BsLightbulbOff} from 'react-icons/bs'
import { useTheme } from 'styled-components'

const Navbar = ({themeToggler}) => {
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <Svg/>
        </NavLogo>

        <NavLinks>
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

          <Button>Sign Up</Button>
        </NavFeatures>

      </NavContainer>
    </Nav>
  )
}

export default Navbar

