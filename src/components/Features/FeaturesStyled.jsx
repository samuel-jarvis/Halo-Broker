import styled from "styled-components";
import { Container, Heading, SubHeading, Button } from "../../globalStyles";

export const FeaturesContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const FeaturesDetails = styled.div`
  flex: 0 0 30%;
`;

export const FeaturesHeading = styled(Heading)``;
export const FeaturesSubHeading = styled(SubHeading)``;
export const FeaturesButton = styled(Button)`
  display: inline-block;
`;

export const FeaturesCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-gap: 4rem;
  justify-items: stretch;
  /* margin-left: 26rem; */

  @media (max-width: 1000px) {
    margin-top: 4rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
