import styled from 'styled-components'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import {FaFingerprint} from 'react-icons/fa'
import securityPng from '../../asset/security.png'

import {
  Container,
  Heading,
  SubHeading} 
  from '../../globalStyles'


export const LatestContainer = styled(Container)`
  background-color: transparent;
`

export const LatestHeading = styled(Heading)`
  margin-bottom: 1rem;  
`

export const LatestSubHeading = styled(SubHeading)`
  margin-bottom: 4rem;
`

export const LatestCards = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto auto auto auto;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  /* grid-template-rows: 1fr 1fr; */
`;

export const MainCard = styled.div`
  border-radius: 2rem;
  padding: 2rem;

  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: .5rem;
    text-transform: uppercase;
    color: white;
  }
`;

  
export const CardOne = styled(MainCard)`
  background-color: var(--blue);
  background-color: #1d2c3d;
  background-color: var(--card);

`

export const Text = styled.p`
  color: white;
  font-size: 1.6rem;
  max-width: 25rem;
`

export const CardTwo = styled(MainCard)`
  background-color: var(--green);
  grid-row: 1 / span 2;
  grid-column-start: 2;
`;
  
export const CardThree = styled(MainCard)`
  background-color: #00c9f1;  
`;

export const CardFour = styled(MainCard)`
  background-color: #177df1;
  grid-column: 1;  
`;

export const CardFive = styled(MainCard)`
  background-color: #924ced;
  grid-column: 3 / span 2;
  position: relative;
  overflow: hidden;

  &:after {
    content: 'V';
    font-size: 38rem;
    position: absolute;
    top: 0;
    right: 1rem;
    line-height:0.6;
    font-weight: 700;
    background-image: linear-gradient(to right, #ca98e3, #b4e4ee9f);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
`;

export const PlayButton = styled(BsFillPlayCircleFill)`
  color: white;
  font-size: 4rem;
  margin-top: 4rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

export const Fingerprint = styled(FaFingerprint)`
  color: white;
  font-size: 4rem;
  margin-top: 4rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

export const SecurityImage = styled.div`
  width: 32rem;

  img {
    width: 100%;
  }
`