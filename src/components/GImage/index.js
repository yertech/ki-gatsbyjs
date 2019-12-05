import React from 'react'
import './styles.css'

const GImage = ({ src, base64, sizes, ...props }) => {
  const pictureHtml =
    `<picture>
 <source srcset="` +
    src +
    `" sizes="` +
    sizes +
    `"/>
 <img loading="lazy" src="` +
    src +
    `" alt="ki decoration" className="gImgNoScript" sizes="` +
    sizes +
    `" />
</picture>`

  return (
    <div
      className={
        props && props.className
          ? props.className + ' gatsby-image-wrapper'
          : 'gatsby-image-wrapper'
      }
      onClick={() => props.clickHandler && props.clickHandler(props.image)}
    >
      <div className="gatsby-image-wrapper-empty"></div>
      <img
        src={base64}
        alt={props.alt ? props.alt : 'ki-decoration'}
        className="gImg"
      />
      <picture>
        <source srcSet={src} sizes={sizes} />
        <img
          src={src}
          alt={props.alt ? props.alt : 'ki-decoration'}
          loading="lazy"
          className="gImg"
          sizes={sizes}
        />
      </picture>
      <noscript>{pictureHtml}</noscript>
    </div>
  )
}

export default GImage
