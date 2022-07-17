import styled from 'styled-components'
import { MainCard } from '../Latest/LatestStyled'

import {
  Container }  from '../../globalStyles'


export const DownloadsContainer = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  /* justify-content: space-between; */

  & > div {margin-right: 8rem;}
`

export const DownloadPlatforms = styled.div``;


export const DeviceCategory = styled.div`
  
`

export const CategoryHeading = styled.p`
  font-size: 2rem;
  color: var(--blue);
  margin-bottom: 2rem;
`

export const DeviceGroup = styled.div`
  display: flex;
`

export const CardDetails = styled.div`
  p {
    color: white;

  }
  h4 {
    font-size: 2.4rem;
    font-weight: 500;
    color: white;
  }
`

export const DeviceCard = styled.div`
  background-color: var(--card);
  border-radius: 3rem;
  display: flex;
  align-items: center;
  padding: 1.5rem 2.5rem;
  margin-right: 2rem;

  img {
    width: 5rem;
    margin-right: ${props => props.margin ? '0' : '2rem'};
  }

  &:hover {
    background-color: var(--blue);
    transition: all 0.3s ease-in-out;
  }
`


export const DownloadAmt = styled.p`
  font-size: 4.8rem;
  font-weight: 500;`