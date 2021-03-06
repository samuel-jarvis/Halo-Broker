import styled from 'styled-components'
import {Button, Container} from '../../globalStyles'

export const HeroContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;

  @media (max-width: 900px) {
    display: block;
  }
`

export const HeroTextContent = styled.div`
  padding: 2rem;

  @media (max-width: 900px) {
    padding: 2rem 0;
    padding-top: 4rem;
  }
`

export const HeroHeading = styled.h1`
  font-size: clamp(4.5rem, 8vw, 8rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;

`

export const HeroSubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`

export const HeroButton = styled(Button)`
  margin-top: 2rem;
  display: inline-block;
`

export const HeroImageContent = styled.div`
`

export const HeroImage = styled.img`
  width: 80%;
  /* height: 100%; */
  /* object-fit: cover; */
  /* object-position: center; */
  margin-top: 2rem;
`