import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import SEO from '../components/SEO'
import { isDev } from '../environment'
import HeroWritings from '../components/HeroWritings'

class PortfolioSingle extends React.Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark

    if (isDev) {
      console.log(frontmatter)
      console.log(this)
    }

    const attr = {}

    if (frontmatter.keywords && frontmatter.keywords.length > 0) {
      attr.keywords = frontmatter.keywords
    }

    const fallbackContent = (
      <div className="container">
        <h3>Sorry, more will come soon!</h3>
      </div>
    )

    return (
      <>
        <Helmet bodyAttributes={{ page: 'writings', class: 'header-fixed' }} />
        <SEO
          title={frontmatter.title}
          description={frontmatter.description}
          {...attr}
        />

        <HeroWritings
          title={frontmatter.title}
          img={frontmatter.header}
          time={frontmatter.created}
        />
        <article
          id="article"
          className="container container--small"
          dangerouslySetInnerHTML={{
            __html: html || fallbackContent,
          }}
        />
      </>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, source: { eq: "writings" } }
    ) {
      frontmatter {
        title
        description
        created
        header {
          image {
            childImageSharp {
              fluid(maxWidth: 1600) {
                src
              }
            }
          }
          author
          link
          source
        }
        keywords
        tags
      }
      fields {
        slug
      }
      html
    }
  }
`

export default PortfolioSingle
