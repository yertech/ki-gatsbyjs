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
            mobileImage: fixed(width: 271) {
              ...GatsbyImageSharpFixed_withWebp
            }
            desktopImage: fixed(width: 600) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  `)

  return (
    <div className="BannerColumn home-banners">
      {allImageSharp.edges.map(
        ({ node: { id, mobileImage, desktopImage } }) => {
          const sources = [
            { ...mobileImage, media: `(max-width: 668px)` },
            { ...desktopImage, media: `(min-width: 668px)` },
          ]

          return (
            <div className="banner-item" key={id}>
              <div className="overlay">
                <div className="banner-hover"></div>
                <Img fixed={sources} alt="ki decoration banner" />
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default BannerColumns
