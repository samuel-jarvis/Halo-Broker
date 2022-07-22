import styled from "styled-components";
import { Container, Heading, SubHeading, Button } from "../../globalStyles";
import award from "../../asset/award.png";
import player from "../../asset/player.png";
import years from "../../asset/5years.png";

export const AchievementsContainer = styled(Container)``;
export const AchievementsHeading = styled(Heading)``;
export const AchievementsSubHeading = styled(SubHeading)``;

export const AchievementsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 450px;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CardHeading = styled.h3`
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: white;
`;

export const CardDetails = styled.p`
  font-size: 1.8rem;
  max-width: 35rem;
  line-height: 1.8;
  color: white;
`;

export const Card = styled.div`
  border-radius: 2rem;
  background-color: var(--card);
  background-color: black;
  padding: 3rem;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-position-x: right;

  
  @media (max-width: 900px) {
    background-position-x: right;
  }
`;


export const PartnershipCard = styled(Card)`
  background-image: url(${player});
  background-size: contain;

  @media (max-width: 500px) {
    background-position-x: 15rem;
  }
`;

export const AwardCard = styled(Card)`
  grid-row: 1 / span 2;
  grid-column-start: 2;
  background-image: url(${award});
  background-size: contain;
  background-position-x: 100px;
  background-position-y: bottom;

  p {
    max-width: 30rem;
  }

  @media (max-width: 900px) {
    grid-row: unset;
    grid-column: unset;
    background-position: right;
  }

  @media (max-width: 500px) {
    background-position-x: 20rem;
  }
`;

export const AnnivessaryCard = styled(Card)`
  background-image: url(${years});
  background-size: contain;
  
  @media (max-width: 500px) {
    background-position-x: 22rem;
  }
`;

export const AchievementButton = styled(Button)`
  margin: auto;
  margin-top: 4rem;
  display: inline-block;
  text-align: center; 
  display: flex;
  justify-content: center;
  width: 25rem;
`;