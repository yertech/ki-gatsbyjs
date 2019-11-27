import React from 'react'
import './styles.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_top">
        <div className="logo-ft">
          <img
            src="//cdn.shopify.com/s/files/1/0030/1796/5603/files/logo-black-100_214x.png"
            alt="Ki decoration - décoration de Bali"
          />
        </div>
        <p className="text-center">
          Vintage and New Homeware • From Bali with Love
        </p>
        <ul className="icon">
          <li>
            <a
              href="https://www.facebook.com/kidecoration-853390995037580/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="link to facebook"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kidecoration/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to Instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_middle">
        <div>
          <h3>
            <span>KI DECORATION</span>
            <span className="line-ft"></span>
          </h3>
          <ul>
            <li>
              <a href="/pages/nous-contacter">Nous contacter</a>
            </li>

            <li>
              <a href="/policies/shipping-policy" rel="nofollow">
                Livraison
              </a>
            </li>

            <li>
              <a href="/policies/refund-policy" rel="nofollow">
                Remboursement
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <span>Collections</span>
            <span className="line-ft"></span>
          </h3>
          <ul>
            <li>
              <a href="/collections/all">Tous les produits</a>
            </li>
            <li>
              <a href="/collections/selection-de-noel">Sélection de Noël</a>
            </li>
            <li>
              <a href="/products/personal-shopping">Personal Shopping</a>
            </li>
            <li>
              <a href="/collections/boites-a-offrandes-bali">
                Boites à Offrandes Bali
              </a>
            </li>
            <li>
              <a href="/collections/linge-de-maison">Linge de Maison</a>
            </li>
            <li>
              <a href="/collections/ethnique-chic">Ethnique Chic</a>
            </li>
            <li>
              <a href="/collections/sacs-et-paniers">Sacs et Paniers</a>
            </li>
            <li>
              <a href="/collections/sur-le-mur">Sur le mur !</a>
            </li>
            <li>
              <a href="/collections/tie-and-dye">Tie and dye</a>
            </li>
            <li>
              <a href="/collections/petits-prix">Petits Prix</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <span>INFORMATIONS</span>
            <span className="line-ft"></span>
          </h3>

          <ul>
            <li>
              <a href="/policies/legal-notice" rel="nofollow">
                Mentions Légales
              </a>
            </li>

            <li>
              <a href="/policies/terms-of-sale" rel="nofollow">
                CGV
              </a>
            </li>

            <li>
              <a href="/policies/privacy-policy" rel="nofollow">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <address>© 2019 Ki Decoration</address>
        <a
          href="https://www.paypal.com/fr/webapps/mpp/paypal-popup"
          title="PayPal Comment Ca Marche"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to Paypal"
        >
          <img
            src="https://www.paypalobjects.com/webstatic/mktg/logo-center/logo_paypal_moyens_paiement_fr.jpg"
            alt="PayPal Acceptance Mark"
          />
        </a>
      </div>
    </div>
  )
}

export default Footer
