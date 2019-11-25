import React from 'react'
import './styles.css'
import ProductForGrid from '../ProductForGrid'

const GridProducts = (products, selection) => {
  return (
    <div className="flex-item-center">
      <div className="ProductGrid" id={selection}>
        {products.products ? (
          products.products.map(product => <ProductForGrid product={product} />)
        ) : (
          <p>No products</p>
        )}
      </div>
    </div>
  )
}

export default GridProducts
