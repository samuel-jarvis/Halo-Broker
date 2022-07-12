import styled from 'styled-components'
import {Button} from '../../globalStyles'

export const Nav = styled.nav`
  padding: 4rem 8rem;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
`

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.6rem;
  padding-right: 10rem;
`

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