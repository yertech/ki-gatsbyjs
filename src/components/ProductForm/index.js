import React, { useState, useContext, useEffect, useCallback } from 'react'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'
import { FaFacebookF, FaPinterest, FaEnvelope } from 'react-icons/fa'
import {
  ProductCodes,
  ProductOptions,
  AddToQty,
  AddToCart,
  ProductPrice,
  ShortDescription,
  SocialShare,
} from './styles'

import StoreContext from '~/context/StoreContext'

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
    description,
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const shortDescription = description.substring(0, 235) + `...`

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(() => {
        // this checks the currently selected variant for availability
        const result = variants.filter(
          variant => variant.shopifyId === productVariant.shopifyId
        )
        setAvailable(result[0].availableForSale)
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price)

  return (
    <>
      <ProductPrice>{price}</ProductPrice>
      <ProductCodes>
        <p class="availability in-stock">
          Disponibilité : <span>{available ? 'en stock' : 'épuisé'}</span>
        </p>
      </ProductCodes>
      {options.length > 1 && (
        <ProductOptions>
          {options.map(({ id, name, values }, index) => (
            <React.Fragment key={id}>
              <label htmlFor={name}>{name} </label>
              <select
                name={name}
                key={id}
                onChange={event => handleOptionChange(index, event)}
              >
                {values.map(value => (
                  <option
                    value={value}
                    key={`${name}-${value}`}
                    disabled={checkDisabled(name, value)}
                  >
                    {value}
                  </option>
                ))}
              </select>
              <br />
            </React.Fragment>
          ))}
        </ProductOptions>
      )}
      <AddToQty>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          step="1"
          onChange={handleQuantityChange}
          value={quantity}
        />
      </AddToQty>
      <AddToCart>
        <button
          type="submit"
          disabled={!available || adding}
          onClick={handleAddToCart}
        >
          Ajouter au panier
        </button>
      </AddToCart>
      <ShortDescription>{shortDescription}</ShortDescription>
      <SocialShare>
        <h2>PARTAGER:</h2>
        <ul>
          <li class="facebook">
            <a
              href="https://www.facebook.com/kidecoration-853390995037580/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="share to facebook"
            >
              <FaFacebookF />
            </a>
          </li>
          <li class="mail">
            <a
              href="mailto:"
              title="Envoyer un email à un ami"
              aria-label="share by email"
            >
              <FaEnvelope />
            </a>
          </li>
          <li class="pinterest">
            <a
              href="https://pinterest.com/pin/create/button/?url=https://ki-decoration.com/products/collier-balinais-en-raphia-et-coquillages-1&amp;media=//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_5368_1024x1024.jpg?v=1575014846&amp;description=Collier balinais en raphia et coquillages"
              rel="noopener noreferrer"
              target="_blank"
              title="Pin sur Pinterest"
              aria-label="pin on Pinterest"
            >
              <FaPinterest />
            </a>
          </li>
        </ul>
      </SocialShare>
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
