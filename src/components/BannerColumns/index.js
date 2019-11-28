import React from 'react'
import Img from 'gatsby-image'
import GImage from '../GImage'
import { useStaticQuery, graphql } from 'gatsby'
import './styles.css'

const BannerColumns = () => {
  const { allImageSharp } = useStaticQuery(graphql`
    query BannerImageQuery {
      allImageSharp(filter: { original: { src: { regex: "/banner/" } } }) {
        edges {
          node {
            id
            resize(width: 500, height:667, jpegProgressive: true) {
              src
            }
            fluid(maxWidth: 500) {
              base64
            }
          }
        }
      }
    }
  `)

  return (
    <div className="BannerColumn home-banners">
      {allImageSharp.edges.map(({ node: { id, resize, fluid } }) => (
        <div className="banner-item" key={id}>
          <div className="overlay">
            <div className="banner-hover"></div>
            <GImage src={resize.src} base64={fluid.base64} sizes={"(max-width: 667px) 271px, 500px"}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BannerColumns
