import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import favicon from '../img/favicon.ico'
import android from '../img/android-chrome-256x256.png'
import apple from '../img/apple-touch-icon.png'
import './index.scss'

const Layout = ({ children, data }) => (
  <div className="app">
    <Helmet
      title={data.site.siteMetadata.title}
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${favicon}`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${android}`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${apple}`,
        },
      ]}
      meta={[
        {
          name: 'description',
          content: 'Simo Edwin, Front End Web Developer, Germany',
        },
        { name: 'keywords', content: 'web developer, simo edwin, deved' },
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
