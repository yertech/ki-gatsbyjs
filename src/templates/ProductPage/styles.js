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
  font-weight: 300;
`
export const ProductGridLeft = styled.div`
  grid-area: left;
  width: 5vw;

  @media (max-width: ${breakpoints.m}px) {
    width: 20vw;
  }
`

export const ProductGridRight = styled.div`
  grid-area: right;
  width: 30vw;

  @media (max-width: ${breakpoints.m}px) {
    width: 75vw;
  }
`
export const ImgTwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 5vw 1rem 30vw;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';

  @media (max-width: ${breakpoints.m}px) {
    grid-template-columns: 20vw 2vw 75vw;
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

  & #tabDescription:checked ~ .tabs #tabDescription-label,
  #tabDeliver:checked ~ .tabs #tabDeliver-label {
    cursor: default;
    color: #9e6947 !important;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
    margin-bottom: -1px;
    position: relative;
    background: white;
  }

  & #tabDescription:checked ~ .tabs #tabDescription-panel,
  #tabDeliver:checked ~ .tabs #tabDeliver-panel {
    display: block;
    border: 1px solid #ddd;
  }
`
export const FlexTabs = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;

  & .tab {
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
    background-color: #fff;
    padding: 30px;
    min-height: 300px;
    display: none;
    width: 100%;
    flex-basis: auto;
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

export const Section = styled.div`
  position: ${props => (props.id === props.activeId ? 'static' : 'absolute')};
  opacity: ${props => (props.id === props.activeId ? '1' : '0')};
  visibility: ${props => (props.id === props.activeId ? 'visible' : 'hidden')};
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
`
