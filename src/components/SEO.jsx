import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title,
  ogImage,
  twitterCard,
}) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description

      console.log(data)

      // set default social-media images
      if (!ogImage) {
        ogImage = `${data.site.siteMetadata.siteUrl}/og-image.jpg`
      }
      if (!twitterCard) {
        twitterCard = `${data.site.siteMetadata.siteUrl}/twitter-card.jpg`
      }

      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          defaultTitle={data.site.siteMetadata.title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={meta.concat(
            keywords && keywords.length > 0
              ? {
                  name: 'keywords',
                  content: keywords.join(', '),
                }
              : []
          )}
        >
          <meta name="language" content={lang} />
          <meta name="description" content={metaDescription} />

          <meta name="og:title" content={title} />
          <meta name="og:description" content={metaDescription} />
          <meta name="og:type" content="website" />
          <meta name="og:image" content={ogImage} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:creator"
            content={`@${data.site.siteMetadata.author}`}
          />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={twitterCard} />
        </Helmet>
      )
    }}
  />
)

SEO.defaultProps = {
  lang: 'en',
  keywords: [],
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  ogImage: PropTypes.string,
  twitterCard: PropTypes.string,
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        keywords
      }
    }
  }
`

export default SEO
