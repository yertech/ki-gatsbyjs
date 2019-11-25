import React from 'react'
import SEO from '~/components/seo'
import Hero from '~/components/Hero'
import BannerColumns from '~/components/BannerColumns'
import Selection from '~/components/Selection'
import Newsletter from '~/components/Newsletter'
import Footer from '~/components/Footer'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <BannerColumns />
    <Selection />
    <Newsletter />
    <Footer />
  </>
)

export default IndexPage
