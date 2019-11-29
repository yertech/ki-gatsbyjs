import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'

export const ProductPrice = styled.h3`
  font-size: 25px;
  line-height: 30px;
  font-weight: normal;
  margin-top: 40px;
`

export const ProductCodes = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  border-top: 1px solid#dddddd;
  border-bottom: 1px solid#dddddd;
  padding: 7px 0;
  & > p {
    margin: 0;
    line-height: 40px;
  }
  & > p > span {
    color: #d8b7a2;
  }
`
export const ProductOptions = styled.div`
  padding: 15px 0 20px;
  & > label {
    display: block;
    font-weight: 400;
    margin-bottom: 5px;
  }
  & > select {
    max-width: 300px;
    height: 45px;
    width: 100%;
    padding: 7px;
    line-height: 37px;
    background: #fff;
    border: 1px solid#dddddd;
  }
`

export const AddToQty = styled.div`
  display: inline-block;
  float: left;
  margin: 25px 10px 25px 0;
  position: relative;

  & > input {
    background-color: #dddddd;
    border: 0 none;
    display: inline-block;
    float: left;
    font-size: 15px;
    height: 45px;
    margin-right: 20px;
    padding: 0 15px;
    text-align: center;
    width: 60px;
  }
`

export const AddToCart = styled.div`
  display: inline-block;
  float: left;
  margin: 25px 10px 25px 0;

  & > button {
    float: left;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 45px;
    padding: 0 22px;
    text-transform: uppercase;
    background-color: #d8b7a2;
    color: #ffffff;
  }

  & > button.disabled {
    background-color: #bbbbbb !important;
  }
`
