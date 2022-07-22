import styled from 'styled-components';

import {Container, Heading, SubHeading} from '../../globalStyles'

export const PaymentContainer = styled(Container)`
text-align: center;`;
export const PaymentHeading = styled(Heading)`
text-align: center;
`
export const PaymentSubHeading = styled(SubHeading)``

export const ImageContainer = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: auto;
    margin: auto;
    object-fit: contain;
  }
`;