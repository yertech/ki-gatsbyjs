import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import GridProducts from '../Grid'
import './styles.css'

const Selection = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyCollection } = useStaticQuery(
    graphql`
      query {
        allShopifyCollection(
          filter: {
            handle: { in: ["selection-de-noel", "nouveautes", "petits-prix"] }
          }
          sort: { fields: updatedAt, order: DESC }
        ) {
          edges {
            node {
              handle
              title
              products {
                id
                title
                handle
                createdAt
                images {
                  id
                  originalSrc
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 910) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
                variants {
                  price
                }
                availableForSale
                variants {
                  price
                }
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <div className="Selection">
      <div className="flex-item-centre tab_title">
        <h2 className="title">La sélection de Ki</h2>
        <p></p>
      </div>
      <div className="flex-item-center">
        <ul className="slider-tab flex-item">
          {allShopifyCollection.edges ? (
            allShopifyCollection.edges.map(({ node: { handle, title } }) => (
              <li key={handle} className="active first">
                <a href=".">
                  <span>{title}</span>
                </a>
              </li>
            ))
          ) : (
            <p>No Selections found</p>
          )}
        </ul>
      </div>
      {allShopifyCollection.edges.map(({ node: { handle, products } }) =>
        products ? (
          <GridProducts products={products} selection={handle} />
        ) : (
          <p>No Products found</p>
        )
      )}
    </div>
  )
}

export default Selection
