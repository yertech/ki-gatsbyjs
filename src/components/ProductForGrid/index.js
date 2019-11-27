import React, { useContext } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './styles.css'
import StoreContext from '~/context/StoreContext'

const ProductForGrid = ({ product }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const {
    title,
    images: [firstImage],
    variants: [firstVariant],
  } = product

  const sources = [
    {
      ...firstImage.mobileImage.childImageSharp.fixed,
      media: `(max-width: 668px)`,
    },
    {
      ...firstImage.desktopImage.childImageSharp.fixed,
      media: `(min-width: 668px)`,
    },
  ]

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <>
      <Link
        className="product-image"
        to={`/product/${product.handle}/`}
        title={title}
      >
        <Img fixed={sources} alt={title} />
        <h3 className="product-name">{title}</h3>
      </Link>

      <div className="price-box">
        <p className="special-price c--anim-btn">
          <span className="price c-anim-btn">
            {getPrice(firstVariant.price)}
          </span>
          <span>
            {' '}
            <a
              href="/"
              title="Add to cart"
              className="addToCart"
              aria-label="link to add to cart"
            >
              AJOUT AU PANIER
            </a>
          </span>
        </p>
      </div>
    </>
  )
}

export default ProductForGrid
