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
    color: #9e6947;
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
  -webkit-appearance: none;
  border-radius: 0;

  @media (max-width: 402px) {
    margin: 15px 10px 0px 0;
  }

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
  width: 210px;

  @media (max-width: 402px) {
    margin: 15px 10px 15px 0;
  }

  & > button {
    float: left;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 45px;
    padding: 0 22px;
    text-transform: uppercase;
    background-color: #9e6947;
    color: #ffffff;
    cursor: pointer;
  }

  & > button.disabled,
  button:disabled {
    background-color: #bbbbbb !important;
    cursor: initial;
  }

  & > button:hover {
    background-color: #000 !important;
  }
`

export const ShortDescription = styled.div`
  display: inline-block;
  color: #202020;
  font-size: 14px;
  line-height: 25px;
  margin: 0;
`
export const SocialShare = styled.div`
  display: inline-block;
  float: left;
  width: 100%;

  & h2 {
    color: #202020;
    font-size: 16px;
    letter-spacing: 2px;
    margin-bottom: 18px;
    margin-top: 20px;
    font-weight: normal;
  }
  & ul {
    margin: 0;
    padding: 0;
  }

  & ul li a {
    border: 1px solid#dddddd;
    display: inline-block;
    float: left;
    font-size: 20px;
    height: 42px;
    line-height: 50px;
    margin-right: 10px;
    text-align: center;
    width: 42px;
    color: #202020;
  }
`
export const BtnQty = styled.div`
  cursor: pointer;
  float: left;
  font-size: 16px;
  height: 22.5px;
  line-height: 14px;
  padding: 4px 0;
  -webkit-transition: all 0.15s linear 0s;
  -moz-transition: all 0.15s linear 0s;
  transition: all 0.15s linear 0s;
  width: 20px;
  overflow: hidden;
  text-indent: -999px;
`

export const IncQty = styled(BtnQty)`
  background: url(//cdn.shopify.com/s/files/1/0030/1796/5603/t/7/assets/quantity-minus.png?3008)
    no-repeat 100% 0 #bbb;
  position: absolute;
  right: 0;
  top: 0;
`
export const DescQty = styled(BtnQty)`
  background: url(//cdn.shopify.com/s/files/1/0030/1796/5603/t/7/assets/quantity-plus.png?3008)
    no-repeat 100% 100% #bbb;
  position: absolute;
  bottom: 0;
  right: 0;
`
