

import React from 'react'
import './styles.css'

const GImage = ({src, base64, sizes}) => (
<div className="gatsby-image-wrapper">
    <div className="gatsby-image-wrapper-empty"></div>
    <img src={base64} alt="ki-decoration" className="gImg" />
    <picture>
    <source srcset={src} sizes={sizes}/>                
    <img src={src} alt="ki decoration" loading="lazy" className="gImg" sizes={sizes} />
    </picture>
    <noscript>
    "<picture>
        <source srcset={src} sizes={sizes}/>
        <img loading="lazy" src={src} alt="ki decoration" className="gImgNoScript" sizes={sizes} />
    </picture>"
    </noscript>
</div>
 
)

export default GImage
