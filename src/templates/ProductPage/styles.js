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
}
`
export const ProductNavTabs = styled.div`
  border-bottom: 1px solid #ddd;
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
    background-color: #fff;
    cursor: default;
    border-left-color: #69be28;
  }

  & #tabDescription:checked ~ .tabs #tabDescription-panel,
  #tabDeliver:checked ~ .tabs #tabDeliver-panel {
    display: block;
  }
`
export const FlexTabs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & .tab {
    flex-grow: 1;
    max-height: 40px;
    display: inline-block;
    padding: 10px;
    vertical-align: top;
    background-color: #eee;
    cursor: hand;
    cursor: pointer;
    border-left: 10px solid #ccc;

    &:hover {
      background-color: #fff;
    }
  }

  & .panel {
    background-color: #fff;
    padding: 20px;
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
    }

    & .tab {
      background: #fff;
      border-bottom: 1px solid #ccc;

      &:last-of-type {
        border-bottom: none;
      }
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

export const ProductTabContent = styled.div`
  border-left: 1px solid /*!setting.border_color{*/ #dddddd /*}*/;
  border-bottom: 1px solid /*!setting.border_color{*/ #dddddd /*}*/;
  border-right: 1px solid /*!setting.border_color{*/ #dddddd /*}*/;
  padding: 25px;
`
export const Section = styled.div`
  position: ${props => (props.id === props.activeId ? 'static' : 'absolute')};
  opacity: ${props => (props.id === props.activeId ? '1' : '0')};
  visibility: ${props => (props.id === props.activeId ? 'visible' : 'hidden')};
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;

  & p {
    margin: 0;
    padding: 0;
  }

  & li {
    list-style-type: initial;
  }
`
