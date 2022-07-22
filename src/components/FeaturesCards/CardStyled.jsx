import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--card);
  padding: 3rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
  height: 20rem;

  svg {
    font-size: 3rem;
    color: var(--blue);
    margin-bottom: 1rem;
  }

  p {
    /* display: none; */
    color: white;
    height: 0;
    overflow: hidden;
    /* transition-delay: 0.5s; */
    /* transition: all 0.3s ease-in-out; */
  }

  &:hover {
    background-color: var(--blue);
    color: white;

    svg {
      color: white;
    }

    p {
      color: white;
      height: 10rem;
      display: block;
      transition: all 0.5s ease-in-out;
      /* transition-delay: 0.3s; */
    }

    h4 {
      transform: translateY(0);
    }
  }
`;

export const CardIcon = styled.div``;

export const CardTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: white;
  transform: translateY(8rem);
  transition: all 0.3s ease-in-out;
`;

export const CardDetails = styled.p`
  font-size: 1.6rem;
  color: white;
`;
