import React from 'react'
import './styles.css'
import ProductForGrid from '../ProductForGrid'

const GridProducts = ({ products, selection }) => {
  return (
    <div className="ProductGrid" id={selection}>
      {products ? (
        products.slice(0, 12).map(product => (
          <div className="product" key={product.id}>
            <ProductForGrid product={product} />
          </div>
        ))
      ) : (
        <p>No products</p>
      )}
      <div className="filling-empty-space-childs"></div>
      <div className="filling-empty-space-childs"></div>
      <div className="filling-empty-space-childs"></div>
    </div>
  )
}

export default GridProducts
