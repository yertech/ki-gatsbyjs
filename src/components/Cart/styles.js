import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  & p {
    padding-left: 15px;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: auto;
    justify-content: center;
    align-items: left;
  }
`
export const CartTitle = styled.h1`
  margin-left: 15px;
  align-items: left;

  @media (max-width: ${breakpoints.l}px) {
    padding-bottom: 15px;
    border-bottom: 1px solid #dddddd;
  }
`

export const CartTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    align-items: center;
    width: 90vw;
  }
`
export const CartRow = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  height: 40px;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;

  & div {
    margin-right: 5px;
  }
  @media (max-width: ${breakpoints.l}px) {
    display: none;
  }
`

export const CartImage = styled.div`
  width: 15%;

  @media (max-width: ${breakpoints.l}px) {
    width: auto;
  }
`
export const CartDesc = styled.div`
  width: 40%;

  @media (max-width: ${breakpoints.l}px) {
    width: auto;
  }
`
export const CartQty = styled.div`
  width: 15%;

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
  }
`
export const CartUnitPrice = styled.div`
  width: 15%;

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
  }
`
export const CartSubTotal = styled.div`
  width: 15%;
  text-align: center;

  @media (max-width: ${breakpoints.l}px) {
    text-align: left;
    width: 100%;
  }
`

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
  padding: 15px;
  width: 100%;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0;
    margin: 0;
  }
`

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  width: 315px;
  justify-content: center;
  align-items: flex-start;
  margin: 15px 0;
  padding: 15px;

  & > h2 {
    font-weight: normal;
    font-size: 14px;
    text-transform: uppercase;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 5px;
    width: 100%;
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 82vw;
  }
`

export const CartSummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  margin-bottom: 30px;
`

export const CartSummaryPrice = styled.div`
  font-size: 20px;
`

export const CartSummaryTxt = styled.div`
  font-style: italic;
  margin-bottom: 30px;
`

export const CartSummaryBtn = styled.button`
  width: 205px;
  height: 35px;
  background-color: #9e6947;
  color: white;
  text-transform: uppercase !important;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`

export const BackToShop = styled.div`
  width: 205px;
  height: 35px;
  background-color: #9e6947;
  cursor: pointer;
  text-align: center;
  margin-top: 15px;

  &:hover {
    background-color: black;
  }

  & a {
    color: white;
    text-transform: uppercase !important;
    line-height: 35px;
  }
`
