import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import {
  Wrapper,
  BtnRemove,
  CartDescText,
  BtnWrapper,
  CartDescValue,
  CartLineDetails,
  CartSm,
} from './styles'
import { FaTrashAlt } from 'react-icons/fa'

import {
  CartRow,
  CartImage,
  CartDesc,
  CartQty,
  CartUnitPrice,
  CartSubTotal,
} from '../styles.js'
import Cart from '..'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  const formatPrice = (amount, currency) => {
    let price = parseFloat(amount).toFixed(2)
    let numberFormat = new Intl.NumberFormat(['fr-FR'], {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'symbol',
    })
    return numberFormat.format(price)
  }

  return (
    <Wrapper>
      <CartImage>{variantImage}</CartImage>
      <CartLineDetails>
        <CartDescValue>
          <CartDescText>
            {line_item.title}
            {line_item.variant.title === !'Default Title'
              ? '-' + line_item.variant.title
              : ''}
          </CartDescText>
          <BtnWrapper>
            <BtnRemove onClick={handleRemove}>
              <FaTrashAlt /> Remove
            </BtnRemove>
          </BtnWrapper>
        </CartDescValue>
        <CartQty>
          <CartSm>Quantité : </CartSm>
          {line_item.quantity}
        </CartQty>
        <CartUnitPrice>
          <CartSm>Prix unitaire : </CartSm>
          {formatPrice(
            line_item.variant.price,
            line_item.variant.priceV2.currencyCode
          )}
        </CartUnitPrice>
        <CartSubTotal>
          <CartSm>Total : </CartSm>
          {formatPrice(
            line_item.variant.price * line_item.quantity,
            line_item.variant.priceV2.currencyCode
          )}
        </CartSubTotal>
      </CartLineDetails>
    </Wrapper>
  )
}

export default LineItem
