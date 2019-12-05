import React, { useState } from 'react'
import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import { MdExpandMore, MdChevronRight, MdTouchApp } from 'react-icons/md'
import Footer from '~/components/Footer'
import { graphql } from 'gatsby'
import GImage from '../../components/GImage'

import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles'
import {
  ProductContainer,
  ProductTitle,
  ProductDescription,
  ProductGridLeft,
  ProductGridRight,
  ImgTwoColumnGrid,
  ProductCollateral,
  ProductNavTabs,
  ProductTabContent,
  Section,
  FlexTabs,
  Chevrons,
  ImgThumb,
} from './styles'

const ProductPage = ({ data }) => {
  const tabDescRef = React.createRef()
  const tabDeliverRef = React.createRef()

  const product = data.shopifyProduct
  const {
    title,
    description,
    descriptionHtml,
    images,
    images: [firstImage],
    variants: [firstVariant],
  } = data.shopifyProduct

  const [activeTabId, setActiveTabId] = useState('tabDescription')
  const [activeImg, setActiveImg] = useState(firstImage)

  function setTabActive(id) {
    id === 'tabDescription'
      ? tabDescRef.current.focus()
      : tabDeliverRef.current.focus()
    setActiveTabId(id)
  }

  function setActiveImage(img) {
    setActiveImg(img)
  }

  return (
    <>
      <SEO title={title} description={description} />
      <ProductContainer>
        <TwoColumnGrid>
          <GridLeft>
            <ImgTwoColumnGrid>
              <ProductGridLeft>
                {images.map(image => {
                  const {
                    id,
                    localFile: {
                      childImageSharp: { thumbImg, thumbImgBase64 },
                    },
                  } = image
                  return (
                    <ImgThumb
                      src={thumbImg.src}
                      base64={thumbImgBase64.base64}
                      sizes={`(max-width: 65px) 65px`}
                      key={id}
                      alt={title}
                      image={image}
                      className={id === activeImg.id ? 'active' : ''}
                      clickHandler={setActiveImage}
                    />
                  )
                })}
              </ProductGridLeft>
              <ProductGridRight>
                <GImage
                  src={activeImg.localFile.childImageSharp.bigImg.src}
                  base64={
                    activeImg.localFile.childImageSharp.bigImgBase64.base64
                  }
                  sizes={`(max-width: 500px) 500px`}
                  key={activeImg.id}
                  alt={title}
                />
              </ProductGridRight>
            </ImgTwoColumnGrid>
          </GridLeft>
          <GridRight>
            <ProductTitle>{title}</ProductTitle>
            <ProductForm product={product} />
          </GridRight>
        </TwoColumnGrid>
      </ProductContainer>
      <ProductCollateral>
        <ProductNavTabs>
          <FlexTabs className="tabs">
            <div
              id="tabDescription-label"
              className={
                activeTabId === 'tabDescription' ? 'tab active' : 'tab'
              }
              onClick={() => setTabActive('tabDescription')}
              ref={tabDescRef}
            >
              Description du produit
              <Chevrons>
                {activeTabId === 'tabDescription' ? (
                  <MdExpandMore />
                ) : (
                  <MdChevronRight />
                )}
              </Chevrons>
            </div>
            <div
              id="tabDeliver-label"
              className={activeTabId === 'tabDeliver' ? 'tab active' : 'tab'}
              onClick={() => setTabActive('tabDeliver')}
              ref={tabDeliverRef}
            >
              Livraisons &amp; Retours
              <Chevrons>
                {activeTabId === 'tabDeliver' ? (
                  <MdExpandMore />
                ) : (
                  <MdChevronRight />
                )}
              </Chevrons>
            </div>
            <div
              id="tabDescription-panel"
              className={
                activeTabId === 'tabDescription' ? 'panel active' : 'panel'
              }
            >
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            </div>
            <div
              id="tabDeliver-panel"
              className={
                activeTabId === 'tabDeliver' ? 'panel active' : 'panel'
              }
            >
              Les produits sont expédiés dans un délai de 48 à 72h selon
              disponibilité. Les envois se font par la Poste Indonésienne qui
              assure les livraisons entre 10 et 15 jours. Les retours sont
              acceptés dans un délai de 7 jours, en faire préalablement la
              demande par mail.
            </div>
          </FlexTabs>
        </ProductNavTabs>
      </ProductCollateral>
      <Footer />
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp
            }
            bigImg: resize(
              width: 500
              height: 667
              jpegProgressive: true
              quality: 100
            ) {
              src
            }
            bigImgBase64: fluid(maxWidth: 500) {
              base64
            }
            thumbImg: resize(width: 65, height: 87, jpegProgressive: true) {
              src
            }
            thumbImgBase64: fluid(maxWidth: 65) {
              base64
            }
          }
        }
      }
    }
  }
`

export default ProductPage
