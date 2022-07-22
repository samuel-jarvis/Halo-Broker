import styled from "styled-components";
import {Container} from '../../globalStyles';
import {FaFacebookSquare, FaYoutube} from "react-icons/fa";

export const FooterContainer = styled(Container)`
  /* background-color: var(--card);
  background: linear-gradient(var(--card), var(--dark)); */
  `;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));


`;

export const FooterGroup = styled.div`
  h3 {
    font-size: 2.2rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  li {
    margin-bottom: 2rem;
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      color: var(--blue);
    }
  }

`

export const SocialCards = styled.div`
  display: flex;
  /* justify-content: space-between; */
`

export const SocialCard = styled.div`
  background-color: ${props => props.bg == "blue" ? "var(--blue)" : "var(--red)"};
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-right: ${props => props.margin ? props.margin : "0"};

  h4 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: white;

  }

  p {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    color: white;

  }
`
  
export const FBIcon = styled(FaFacebookSquare)`
  color: white;
  font-size: 2.9rem;
  margin-bottom: 2rem;
`
  
export const YTIcon = styled(FaYoutube)`
  color: white;
  font-size: 2.9rem;  
  margin-bottom: 2rem;
`


