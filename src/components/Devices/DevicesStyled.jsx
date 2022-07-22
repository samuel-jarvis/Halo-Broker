import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { Container, Heading, SubHeading } from "../../globalStyles";

export const DevicesContainer = styled(Container)``;
export const DevicesHeading = styled(Heading)`
  margin-bottom: 1rem;
`;

export const DevicesSubHeading = styled(SubHeading)`
  margin-bottom: 4rem;
`;

export const DevicesInfoContent = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const DevicesInfoImage = styled.div`
  padding: 0 10rem;
  flex: 0 0 60%;

  img {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const DevicesInfoText = styled.div`
  margin-left: 1rem;

  p {
    margin-bottom: 4rem;
    font-size: 2.4rem;
    line-height: 1.8;
  }
`;

// splide slider
export const SplideContainer = styled(Splide)`
  border-radius: 2rem;
  /* height: 100%; */
`;
export const SplideElement = styled(SplideSlide)``;

export const DevicesInfoRatingCard = styled(SplideElement)`
  border-radius: 2rem;
  padding: 2rem;
  padding-bottom: 4rem;
  background-color: var(--card);

  p {
    font-size: 1.8rem;
    margin-bottom: 0;
    color: white;
  }
`;

export const RatingInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingValue = styled.h2`
  font-size: 4.4rem;
  font-weight: 500;
  color: white;
`;
export const RatingStars = styled.div`
  padding-left: 4rem;

  p {
    font-size: 1.4rem;
  }
`;
export const RatingStarsGroup = styled.div``;

export const StarIcon = styled(BsStarFill)`
  color: var(--yellow);
  font-size: 2rem;
  margin-right: 1rem;
`;

export const StarIconHalf = styled(BsStarHalf)`
  color: var(--yellow);
  font-size: 2rem;
`;
