import React from 'react'
import plafromimage from '../../asset/platforms.png'
import {HeroContainer,
  HeroTextContent,
  HeroHeading,
  HeroSubHeading,
  HeroButton,
  HeroImage,
  HeroImageContent
  } from './HeroStyled'

  export default function Hero() {
  return (
    <HeroContainer>
      <HeroTextContent>
        <HeroHeading>
          Profitability on the rise
        </HeroHeading>
        <HeroSubHeading>
          A broker that support your financial goal
        </HeroSubHeading>
        <HeroButton>
          Start Trading
        </HeroButton>
        
      </HeroTextContent>
      <HeroImageContent>
        <HeroImage src={plafromimage}>

        </HeroImage>
      </HeroImageContent>
    </HeroContainer>
  )
}
