import React from 'react'
import './styles.css'

const BannerColumns = () => {
  return (
    <div className="BannerColumn home-banners">
      <div className="banner-item">
        <div className="overlay">
          <div className="banner-hover"></div>

          <img
            className="lazy"
            src="//cdn.shopify.com/s/files/1/0030/1796/5603/files/IMG_4848.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="banner-item">
        <div className="overlay">
          <div className="banner-hover"></div>
          <img
            className="lazy"
            src="//cdn.shopify.com/s/files/1/0030/1796/5603/files/IMG_4913.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="banner-item">
        <div className="overlay">
          <div className="banner-hover"></div>

          <img
            className="lazy"
            src="//cdn.shopify.com/s/files/1/0030/1796/5603/files/IMG_4854.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default BannerColumns
