import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ContextProvider from '~/provider/ContextProvider'
import { GlobalStyle, Container } from '~/utils/styles'
import Navigation from '../components/Navigation'

// const Wrapper = styled.div`
//   margin: 0 auto;
//   max-width: 960px;
//   padding: 0px 1.0875rem 1.45rem;
// `

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Container>
              <Navigation />
              {children}
            </Container>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
