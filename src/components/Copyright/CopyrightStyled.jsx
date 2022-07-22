import styled from "styled-components";
import {Container} from "../../globalStyles";

export const CopyrightContainer = styled(Container)`
  background-color: var(--card);
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: white;

  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 0.5rem;
    
    img {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }

    p {
      font-size: 1.4rem;
      font-weight: 500;
      color: white;
      margin-right: .5rem;
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--blue);
    }
  }

`