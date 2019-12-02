import React from 'react'
import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'

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
} from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct

  const {
    title,
    description,
    descriptionHtml,
    images,
    images: [firstImage],
    variants: [firstVariant],
  } = data.shopifyProduct

  return (
    <>
      <SEO title={title} description={description} />
      <ProductContainer>
        <TwoColumnGrid>
          <GridLeft>
            <ImgTwoColumnGrid>
              <ProductGridLeft>
                {images.map(image => (
                  <Img
                    fluid={image.localFile.childImageSharp.fluid}
                    key={image.id}
                    alt={title}
                  />
                ))}
              </ProductGridLeft>
              <ProductGridRight>
                <Img
                  fluid={firstImage.localFile.childImageSharp.fluid}
                  key={firstImage.id}
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
          <input
            class="state"
            type="radio"
            title="tabDescription"
            name="tabs-state"
            id="tabDescription"
            checked
          />
          <input
            class="state"
            type="radio"
            title="tabDeliver"
            name="tabs-state"
            id="tabDeliver"
          />
          <FlexTabs className="tabs">
            <label for="tabDescription" id="tabDescription-label" class="tab">
              Description du produit
            </label>
            <label for="tabDeliver" id="tabDeliver-label" class="tab">
              Livraisons &amp; Retours
            </label>
            <div id="tabDescription-panel" className="panel active">
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            </div>
            <div id="tabDeliver-panel" className="panel">
              Les produits sont expédiés dans un délai de 48 à 72h selon
              disponibilité. Les envois se font par la Poste Indonésienne qui
              assure les livraisons entre 10 et 15 jours. Les retours sont
              acceptés dans un délai de 7 jours, en faire préalablement la
              demande par mail.
            </div>
          </FlexTabs>
        </ProductNavTabs>
      </ProductCollateral>
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
          }
        }
      }
    }
  }
`

export default ProductPage
