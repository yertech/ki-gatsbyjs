const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-page-index-js": hot(preferDefault(require("C:\\yertech\\Personal\\gatsby-shopify-starter\\src\\templates\\ProductPage\\index.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\yertech\\Personal\\gatsby-shopify-starter\\src\\pages\\404.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("C:\\yertech\\Personal\\gatsby-shopify-starter\\src\\pages\\cart.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\yertech\\Personal\\gatsby-shopify-starter\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\yertech\\Personal\\gatsby-shopify-starter\\src\\pages\\page-2.js")))
}

