import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      // body {
      //   margin: 0;
      // }
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      :container {
        --height-TopHeader: 45px;
        --height-header: 100px;
        --width-item: 150px;
        --bg-color-lg-screens: white;
      }

      .center {
        display: flex;
        width: 80vw;
      }

      .row {
        display: flex;
        flex-direction: row;
        margin: 30px;
      }

      .flex-column {
        display: flex;
        flex-direction: column;
      }

      .flex-item {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .flex-item-left,
      .flex-item-center,
      .flex-item-right {
        display: flex;
        align-items: center;
      }

      .flex-item-center {
        justify-content: center;
      }

      .flex-item-left {
        justify-content: flex-start;
        padding-left: 20vw;
      }

      .flex-item-right {
        justify-content: flex-end;
      }

      .tab_title .title {
        background-color: #ffffff;
        display: inline-block;
        font-weight: normal;
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: 4px;
        margin-bottom: 5px;
        padding: 0 20px;
        position: relative;
        z-index: 2;
      }

      .tab_title {
        overflow: hidden;
        position: relative;
        text-align: center;
      }

      .tab_title p {
        border-bottom: 2px solid #202020;
        margin: 0 auto;
        position: relative;
        top: -18px;
        width: 100%;
        max-width: 390px;
        z-index: 1;
      }

      .flex-item-centre.tab_title {
        margin-bottom: 15px;
      }
      /**
      *
      * Smaller screen + Mobile
      *
      */
      @media screen and (max-width: 1023px) {
        .flex-item-center {
          flex-direction: column;
        }

        .center {
          width: auto;
        }
      }

      /* reset style */
      body,
      ul {
        margin: 0;
        padding: 0;
        font-size: 17px;
      }

      li {
        list-style-type: none;
      }

      a {
        text-decoration: none;
        color: #484848;
      }

      button {
        background-color: transparent;
        border: none;
      }

      button:focus {
        outline: 0;
      }

      .App {
        font-family: sans-serif;
        text-align: center;
      }
    `}
  />
)

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Img = styled(Image)`
  max-width: 100 %;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`

// export const Container = styled.div`
//   margin: 0 auto;
//   max-width: 960px;
// `

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridRight = styled.div`
  grid-area: right;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`
