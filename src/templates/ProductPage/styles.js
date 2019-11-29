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
  font-weight: 300;
`
export const ProductGridLeft = styled.div`
  grid-area: left;
  width: 5vw;

  @media (max-width: ${breakpoints.l}px) {
    width: 10vw;
  }
`

export const ProductGridRight = styled.div`
  grid-area: right;
  width: 30vw;

  @media (max-width: ${breakpoints.l}px) {
    width: 55vw;
  }
`
export const ImgTwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';

  @media (max-width: ${breakpoints.l}px) {
    grid-template-columns: 1fr 0rem 1fr;
  }
`

export const ProductCollateral = styled.div`
    margin-top: 30px;
    margin-bottom: 40px;
}
`
export const ProductNavTabs = styled.ul`
  border-bottom: 1px solid #ddd;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: -webkit-box;

  & > li {
    float: left;
    margin-bottom: -1px;
    position: relative;
    display: block;
  }

  & > li > a {
    position: relative;
    display: block;
    padding: 10px 15px;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 30px;
    text-transform: uppercase;
    border-radius: 0 0 0 0;
    border: 1px solid transparent;
    margin-right: 2px;
  }

  & > li.active > a {
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
    cursor: default;
  }

  & > li.active > a {
    color: #d8b7a2 !important;
  }
`

export const ProductTabContent = styled.div`
  border-left: 1px solid /*!setting.border_color{*/ #dddddd /*}*/;
  border-bottom: 1px solid /*!setting.border_color{*/ #dddddd /*}*/;
  border-right: 1px solid /*!setting.border_color{*/ #dddddd /*}*/;
  padding: 25px;
`
