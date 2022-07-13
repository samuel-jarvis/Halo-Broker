import React from 'react'
import securityPng from '../../asset/security.png'
import { LatestContainer, 
  LatestHeading, 
  LatestSubHeading,
  LatestCards,
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,
  Text, PlayButton, Fingerprint,
  SecurityImage} from './LatestStyled'

const Latest = () => {
  return (
    <LatestContainer>
      <LatestHeading>
        The Lastest from our broker
      </LatestHeading>
      <LatestSubHeading>
        New Features, latest webinars and more...
      </LatestSubHeading>

      <LatestCards>
        <CardOne>
          <h3>CHF JPY</h3>
        </CardOne>
        <CardTwo>
          <h3>Secure Account</h3>
          <Text>You can now use your fingerprint to access your Mobile app</Text>
          <Fingerprint />
          <SecurityImage> 
            <img src={securityPng} alt="security" />
          </SecurityImage>
        </CardTwo>
        <CardThree>
          <h3>Webinar</h3>
          <Text>Trading Strategy "Triple Ricochet"</Text>
          <PlayButton/>
        </CardThree>
        <CardFour>
          <h3>Education</h3>
          <Text>How to start trading on the platform</Text>
          <PlayButton/>
        </CardFour>
        <CardFive>
          <h3>Annivesary</h3>
          <Text>Our Broker has been trailblazing for the past 5 years</Text>
        </CardFive>
      </LatestCards>
    </LatestContainer>

  )
}

export default Latest
