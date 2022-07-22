import React from 'react'
import FeatureCard from '../FeaturesCards/FeatureCard'

import cards from './CardsData'

import {FeaturesContainer, 
  FeaturesDetails,
  FeaturesCards,
  FeaturesHeading,
  FeaturesSubHeading,
  FeaturesButton} from './FeaturesStyled'

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesDetails>
        <FeaturesHeading>A Platform for All Your Needs</FeaturesHeading>
        <FeaturesSubHeading>These features will help you to get the most out of your business</FeaturesSubHeading>
        <FeaturesButton>Start Trading - Its Free</FeaturesButton>
      </FeaturesDetails>

      <FeaturesCards>
        {cards.map(card => (
          <FeatureCard key={card.id} card={card} />
        ))}
      </FeaturesCards>
    </FeaturesContainer>
  )
}

export default Features