import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/custom.css"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"
import Helmet from "react-helmet"

const LayoutStyles = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutStyles>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        className="body"
      />
      <div>
        <Helmet>
          <title>Cleaning Services for Bradford and Leeds</title>
          <meta
            name="description"
            content="Carpet Cleaning. Oven Cleaning. House Cleaning Services for Bradford and Leeds. Cleaning your home at your convenience."
          />

          <meta
            property="og:image"
            content="https://freedom-cleaning.netlify.app/static/seo-f1a30a9e2dbda83938f450049742ec48.png"
          />
          <meta property="og:locale" content="en_UK" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Freedom Cleaning Services for Bradford and Leeds"
          />
          <meta
            property="og:description"
            content="Carpet Cleaning. Oven Cleaning. House Cleaning Services for Bradford and Leeds. Cleaning your home at your convenience."
          />
          <meta
            property="og:url"
            content="https://freedom-cleaning.netlify.app"
          />
          <meta property="og:updated_time" content="31-10-2021" />
          <meta
            property="og:image:alt"
            content="Carpet Cleaning. Oven Cleaning. House Cleaning Services for Bradford and Leeds."
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="Freedom Cleaning Services" />
          <meta property="twitter:creator" content="Freedom Cleaning" />
          <meta
            property="twitter:title"
            content="Freedom Cleaning Services for Bradford and Leeds"
          />
          <meta
            property="twitter:description"
            content="Carpet Cleaning. Oven Cleaning. House Cleaning Services for Bradford and Leeds. Cleaning your home at your convenience."
          />
          <meta
            property="twitter:image"
            content="https://freedom-cleaning.netlify.app/static/seo-f1a30a9e2dbda83938f450049742ec48.png"
          />
        </Helmet>
      </div>
      <div>
        <main>{children}</main>
      </div>
      <Footer
        title="Freedom Cleaning Services"
        tagline="Bringing peace of mind to your home."
      />
    </LayoutStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
