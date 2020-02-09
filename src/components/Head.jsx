import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { Location } from '@reach/router'

import { stringSlugify } from '../utils/helper'

const Head = ({
  siteTitle,
  siteDescription,
  siteAuthor,
  siteLanguage,
  siteKeywords = [],
  siteUrl,
  pageName,
  pageTitle = pageName,
  pageLang,
  social,
  ogImage,
  twitterCard,
  location,
  canonical = siteUrl + (location.pathname || ''),
  bodyClasses,
}) => {
  const twitter = social.find(({ icon }) => icon === 'twitter')

  // TODO: improve this if i18n
  const language = pageLang || siteLanguage || 'en'

  // set default social-media images
  if (!ogImage) {
    ogImage = `${siteUrl}/og-image.jpg`
  }
  if (!twitterCard) {
    twitterCard = `${siteUrl}/twitter-card.jpg`
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      bodyAttributes={{
        page: stringSlugify(pageName),
        class: bodyClasses,
      }}
      title={pageTitle}
      defaultTitle={siteTitle}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <meta name="language" content={language} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords.join(', ')} />
      <meta name="author" content={siteAuthor} />

      <meta name="og:type" content="website" />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={siteDescription} />
      <meta name="og:image" content={ogImage} />
      <meta name="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@${twitter.user}`} />
      <meta name="twitter:site" content={`@${twitter.user}`} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={twitterCard} />
      <meta name="twitter:image:alt" content={pageTitle} />
      <meta name="twitter:url" content={canonical} />
    </Helmet>
  )
}

Head.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  siteAuthor: PropTypes.string,
  siteKeywords: PropTypes.arrayOf(PropTypes.string),
  siteLanguage: PropTypes.string,
  siteUrl: PropTypes.string,
  pageName: PropTypes.string,
  pageTitle: PropTypes.string,
  pageLang: PropTypes.string,
  ogImage: PropTypes.string,
  twitterCard: PropTypes.string,
  location: PropTypes.object.isRequired,
  canonical: PropTypes.string,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
      user: PropTypes.string,
    })
  ),
  bodyClasses: PropTypes.string,
}

const HeadWithQuery = (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteTitleShort
            siteDescription
            siteAuthor
            siteKeywords
            siteLanguage
            siteUrl
            social {
              name
              icon
              user
            }
          }
        }
      }
    `}
    render={(data) => (
      <Location>
        {({ location }) => (
          <Head {...data.site.siteMetadata} {...props} location={location} />
        )}
      </Location>
    )}
  />
)

export default HeadWithQuery
