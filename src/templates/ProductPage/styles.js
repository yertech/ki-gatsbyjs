import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
`

export const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 15px;
  word-wrap: break-word;
  letter-spacing: 5px;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 24px;
  text-transform: uppercase;
`

export const ProductDescription = styled.div`
  margin-top: 40px;
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 300;
`
export const ProductGridLeft = styled.div`
  grid-area: left;
  width: 97px;

  @media (max-width: ${breakpoints.s}px) {
    width: 40px;
  }
`

export const ProductGridRight = styled.div`
  grid-area: right;
  width: 550px;

  @media (max-width: ${breakpoints.s}px) {
    width: 250px;
  }
`
export const ImgTwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';

  @media (max-width: ${breakpoints.l}px) {
    grid-template-columns: 1fr 0rem 1fr;
    width: 95vw;
  }
`
