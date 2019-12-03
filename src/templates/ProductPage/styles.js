import styled from '@emotion/styled'
import { breakpoints, Img } from '~/utils/styles'

export const ImgThumb = styled(Img)`
  cursor: pointer;
  opacity: 0.7;

  &.active {
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
`

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
  font-weight: 50;
  margin: 0;
  line-height: 24px;
  text-transform: uppercase;
`

export const ProductDescription = styled.div`
  font-weight: 300;
`
export const ProductGridLeft = styled.div`
  padding: 10px 0;
  grid-area: left;
  width: 5vw;
  max-width: 65px;

  @media (max-width: ${breakpoints.m}px) {
    width: 10vw;
  }
`

export const ProductGridRight = styled.div`
  grid-area: right;
  width: 40vw;
  max-width: 500px;

  @media (max-width: ${breakpoints.m}px) {
    width: 80vw;
  }
`
export const ImgTwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1rem auto;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';

  @media (max-width: ${breakpoints.m}px) {
    grid-template-columns: auto 2vw auto;
  }
`

export const ProductCollateral = styled.div`
    margin-top: 30px;
    margin-bottom: 40px;
    width: 80vw;   

    @media (max-width:${breakpoints.m}px) {
      width: 90vw; 
    }
}
`
export const ProductNavTabs = styled.div`
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: -webkit-box;

  & .state {
    position: absolute;
    left: -10000px;
  }
`
export const FlexTabs = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;

  & .tab {
    position: relative;
    display: inline-block;
    padding: 15px;
    vertical-align: top;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 30px;
    &:hover {
      color: #9e6947;
    }
  }

  & .panel {
    background: white;
    padding: 30px;
    min-height: 300px;
    display: none;
    width: 100%;
    flex-basis: auto;
  }

  & .tab.active {
    cursor: default;
    color: #9e6947 !important;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
    margin-bottom: -1px;
    background: white;
  }

  & .panel.active {
    display: block;
    border: 1px solid #ddd;
    -webkit-transition: opacity 0.15s linear;
    -o-transition: opacity 0.15s linear;
    transition: opacity 0.15s linear;
  }

  & p {
    margin: 0;
    padding: 0;
  }

  & li {
    list-style-type: initial;
  }
  @media (max-width: 600px) {
    flex-direction: column;

    & .panel {
      width: auto;
      margin-bottom: 5px;
    }

    & .tab {
      background: #fff;
      border: 1px solid #ccc;
      margin-bottom: 5px;
    }

    & #tabDescription-label {
      order: 1;
    }
    & #tabDeliver-label {
      order: 3;
    }
    & #tabDescription-panel {
      order: 2;
    }
    & #tabDeliver-panel {
      order: 4;
    }
  }
`
export const Chevrons = styled.div`
  display: none;

  @media (max-width: ${breakpoints.m}px) {
    display: inline-block;
  }
`
