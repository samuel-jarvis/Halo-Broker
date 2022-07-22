import React from 'react'
import { icons } from 'react-icons/lib'
import {Card,
  CardIcon,
  CardTitle,
  CardDetails} from './CardStyled'

const FeatureCard = ({card}) => {
  console.log(card.icon)

  return (
    <Card>
      <CardIcon>
        {card.icon}
      </CardIcon>

      <CardTitle>
        {card.title}
      </CardTitle>

      <CardDetails>
        {card.details}
      </CardDetails>
    </Card>
  )
}

export default FeatureCard