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
    id,
    handle,
    title,
    images: [firstImage],
    variants: [firstVariant],
  } = product

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <div className="product" key={product.id}>
      <Link
        className="product-image"
        to={`/product/${product.handle}/`}
        title={title}
      >
        <div className="item-product-image-box">
          <div className="product-img">
            <Img
              fluid={firstImage.localFile.childImageSharp.fluid}
              alt={handle}
            />
          </div>
        </div>
        <h3 className="product-name">{title}</h3>
      </Link>
      <div className="price-box">
        <p className="special-price c--anim-btn">
          <span className="price c-anim-btn">
            {getPrice(firstVariant.price)}
          </span>
          <span>
            {' '}
            <a href="/" title="Add to cart" className="addToCart">
              AJOUT AU PANIER
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default ProductForGrid
