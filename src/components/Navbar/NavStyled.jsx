import styled from 'styled-components'
import {Button} from '../../globalStyles'

export const Nav = styled.nav`
  padding: 3rem 8rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.background};
  z-index: 5;

  @media (max-width: 900px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 900px) {
    padding: 2rem 2rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.div`
  width: 5rem;
  color: white;

  svg {
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.text};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: block;
    /* flex-direction: column;
    align-items: center;
    justify-content: flex-start; */
    position: fixed;
    top: 84px;
    left: ${({ showNav }) => showNav ? '0' : '-100%'};
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.background};
    transition: left 0.5s ease-in-out;
    z-index: 1;
    padding-top: 4rem;
  }
`

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.6rem;
  padding-right: 10rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--blue);
    padding-left: 1rem;
  }
  
  @media (max-width: 900px) {
    padding: 0;
    margin: 1.5rem 0;
    font-size: 3.2rem;
    display: block;
    padding-left: 2.5rem;
    /* text-align: center; */
  }
`

export const NavButton = styled(Button)`
@media (max-width: 600px) {
    display: none;
  }`;  

// Nav Features
export const NavFeatures = styled.div`
  display: flex;
`

export const ToggleButton = styled.button`
  display: inline;
  background-color: transparent;
  border: 0;
  margin-right: 1rem;
  color: ${({ theme }) => theme.text};
`

export const MobileIcon = styled.div`
  font-size: 2.5rem;
  display: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--blue);
  }

  @media (max-width: 900px) {
    display: block;
  }
`
