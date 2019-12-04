import styled from '@emotion/styled'
import { CartDesc } from '../styles.js'
import { breakpoints } from '~/utils/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0.5rem 0 0.5rem 0;
  border-bottom: 1px solid #dddddd;

  & img {
    height: 120px;
  }
  @media (max-width: ${breakpoints.l}px) {
    padding: 0.5rem 0 3rem 0;
  }
`

export const BtnWrapper = styled.div`
  height: 39%;
  display: flex;
  align-items: flex-end;
  width: 100%;
  text-align: left;

  @media (max-width: ${breakpoints.l}px) {
    position: relative;
    top: 80px;
  }
`

export const BtnRemove = styled.button`
  padding: 0;
  cursor: pointer;
  &:hover {
    color: #9e6947;
  }

  & svg:hover {
    color: #9e6947;
  }
`
export const CartDescText = styled.div`
  height: 58%;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${breakpoints.l}px) {
    align-items: normal;
    height: 100%;
  }
`

export const CartDescValue = styled(CartDesc)`
  width: 51%;
  height: 100%;
  padding-left: 15px;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0;
    width: 100%;
    height: 50%;
  }
`

export const CartLineDetails = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;
  }
`
export const CartSm = styled.span`
  display: none;
  @media (max-width: ${breakpoints.l}px) {
    display: inline-block;
    text-transform: uppercase;
    width: 120px;
  }
`
