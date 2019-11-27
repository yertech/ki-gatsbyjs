import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import './styles.css'

const BannerColumns = () => {
  const { allImageSharp } = useStaticQuery(graphql`
    query BannerImageQuery {
      allImageSharp(filter: { original: { src: { regex: "/banner/" } } }) {
        edges {
          node {
            id
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `)

  return (
    <div className="BannerColumn home-banners">
      {allImageSharp.edges.map(({ node: { id, fluid } }) => (
        <div className="banner-item" key={id}>
          <div className="overlay">
            <div className="banner-hover"></div>
            <Img fluid={fluid} alt="ki decoration banner" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default BannerColumns
