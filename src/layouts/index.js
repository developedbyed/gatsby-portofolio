import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.scss'

const Layout = ({ children, data }) => (
  <div className="app">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'Simo Edwin', content: 'Simo Edwin, Web Developer' },
        { name: 'Projects', content: 'My personal projects' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
