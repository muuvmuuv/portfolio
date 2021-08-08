import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet-async"

import { stringSlugify } from "../utils/helper"

const SEO = ({
  pageName = "",
  pageTitle = pageName,
  pageDescription = "",
  pageKeywords = [],
  ogImage,
  twitterCard,
  bodyClasses,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteAuthor
          siteKeywords
          siteUrl
        }
      }
    }
  `)

  pageKeywords = [...siteMetadata.siteKeywords, ...pageKeywords]

  if (!pageDescription) {
    pageDescription = siteMetadata.siteDescription
  }

  if (!ogImage) {
    ogImage = `${siteMetadata.siteUrl}/og-image.jpg`
  }

  if (!twitterCard) {
    twitterCard = `${siteMetadata.siteUrl}/twitter-card.jpg`
  }

  return (
    <Helmet
      title={pageTitle}
      defaultTitle={siteMetadata.siteTitle}
      titleTemplate={`%s | ${siteMetadata.siteTitle}`}
      bodyAttributes={{
        page: stringSlugify(pageName),
        class: bodyClasses,
      }}
    >
      <meta name="language" content="en" />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(", ")} />
      <meta name="author" content={siteMetadata.siteAuthor} />

      <meta name="og:type" content="website" />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={pageDescription} />
      <meta name="og:image" content={ogImage} />
      <meta name="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content={siteMetadata.siteTitle} />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@muuvmuuv" />
      <meta name="twitter:site" content="@muuvmuuv" />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={twitterCard} />
      <meta name="twitter:image:alt" content={pageTitle} />
    </Helmet>
  )
}

SEO.propTypes = {
  pageName: PropTypes.string,
  pageTitle: PropTypes.string,
  pageKeywords: PropTypes.arrayOf(PropTypes.string),
  pageDescription: PropTypes.string,

  ogImage: PropTypes.string,
  twitterCard: PropTypes.string,

  social: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
      user: PropTypes.string,
    })
  ),

  bodyClasses: PropTypes.string,
}

export default SEO
