// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-product-page-index-js": () => import("../src/templates/ProductPage/index.js" /* webpackChunkName: "component---src-templates-product-page-index-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-cart-js": () => import("../src/pages/cart.js" /* webpackChunkName: "component---src-pages-cart-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("../src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

