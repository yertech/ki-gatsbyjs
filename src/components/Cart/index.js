import React, { useContext } from 'react'
import { Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import {
  CartContainer,
  CartTab,
  CartDetails,
  CartSummary,
  CartTitle,
  CartRow,
  CartImage,
  CartDesc,
  CartQty,
  CartUnitPrice,
  CartSubTotal,
  CartSummaryTotal,
  CartSummaryPrice,
  CartSummaryTxt,
  CartSummaryBtn,
  BackToShop,
} from './styles.js'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl.replace('.myshopify', ''))
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <CartContainer>
      <CartTitle>Mon panier</CartTitle>

      {line_items && line_items.length > 0 ? (
        <CartTab>
          <CartDetails>
            <div>
              <CartRow>
                <CartImage></CartImage>
                <CartDesc>Désignation</CartDesc>
                <CartQty>Quantité</CartQty>
                <CartUnitPrice>Prix unitaire</CartUnitPrice>
                <CartSubTotal>Total</CartSubTotal>
              </CartRow>
              {line_items}
            </div>
            <div>
              <BackToShop>
                <Link to={'/'}>Continuer le shopping</Link>
              </BackToShop>
            </div>
          </CartDetails>
          <CartSummary>
            <h2>Récapitulatif</h2>
            <CartSummaryTotal>
              <div>Total</div>
              <CartSummaryPrice>{checkout.subtotalPrice} €</CartSummaryPrice>
            </CartSummaryTotal>
            <h2>Informations</h2>
            <CartSummaryTxt>
              Frais de livraison, taxes et stock réellement disponible calculés
              lors de la finalisation de la commandeEn cliquant sur « Finaliser
              la commande », je déclare avoir lu et accepté les conditions
              générales de vente.
            </CartSummaryTxt>
            <CartSummaryBtn onClick={handleCheckout}>Règlement</CartSummaryBtn>
          </CartSummary>
        </CartTab>
      ) : (
        <>
          <p>Aucun article n'est encore présent dans votre panier</p>
        </>
      )}
    </CartContainer>
  )
}

export default Cart
