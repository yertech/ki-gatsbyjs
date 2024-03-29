import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GridProducts from '../Grid'
import './styles.css'

const Selection = () => {
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
              id
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
                      resize(width: 300, height: 400, jpegProgressive: true) {
                        src
                      }
                      fluid(maxWidth: 300) {
                        base64
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
  const [activeTabId, setActiveTabId] = useState(null)

  const getTabClass = (index, currentTabId) => {
    if (index === 0 && activeTabId === null) setActiveTabId(currentTabId)
    return (index === 0 && activeTabId === null) || currentTabId === activeTabId
      ? 'active first'
      : ''
  }

  return (
    <div className="Selection">
      <div className="flex-item-centre tab_title">
        <h2 className="title">La sélection de Ki</h2>
        <p></p>
      </div>
      <div className="flex-item-center">
        <ul className="slider-tab flex-item">
          {allShopifyCollection.edges ? (
            allShopifyCollection.edges
              .slice(0, 12)
              .map(({ node: { id, handle, title } }, index) => (
                <li key={handle} className={getTabClass(index, handle)}>
                  <button onClick={() => setActiveTabId(handle)} type="button">
                    {title}
                  </button>
                </li>
              ))
          ) : (
            <p>No Selections found</p>
          )}
        </ul>
      </div>
      {allShopifyCollection.edges.map(({ node: { id, handle, products } }) =>
        products ? (
          <div
            className={
              handle === activeTabId ? 'tab-content active' : 'tab-content'
            }
            key={id}
          >
            <div className="flex-item-center" key={id}>
              <GridProducts products={products} selection={handle} />
            </div>
          </div>
        ) : (
          <p>No Products found</p>
        )
      )}
    </div>
  )
}

export default Selection
