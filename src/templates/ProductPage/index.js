import React from 'react'
import { graphql } from 'gatsby'

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
        <ProductDescription
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      </ProductContainer>
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
