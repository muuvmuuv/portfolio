import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Article from '@layouts/Article'
import SEO from '@components/SEO'
import { isDev } from '@app/environment'

import HeroProjects from '@components/HeroProjects'

class Single extends React.Component {
  render() {
    const { frontmatter, html, excerpt } = this.props.data.markdownRemark

    if (isDev) {
      console.group('ProjectSingle')
      console.log(this)
      console.log(frontmatter)
      console.groupEnd()
    }

    const attr = {}

    const homeUrl = this.props.location.origin
    if (frontmatter.thumb.facebook.resize.src) {
      attr.ogImage = `${homeUrl}${frontmatter.thumb.facebook.resize.src}`
    }
    if (frontmatter.thumb.twitter.resize.src) {
      attr.twitterCard = `${homeUrl}${frontmatter.thumb.twitter.resize.src}`
    }

    if (frontmatter.keywords && frontmatter.keywords.length > 0) {
      attr.keywords = frontmatter.keywords
    }

    return (
      <>
        <Helmet
          bodyAttributes={{ page: 'projects', class: 'single header-fixed' }}
        />
        <SEO
          title={frontmatter.title}
          description={frontmatter.subtitle || excerpt}
          {...attr}
        />

        <HeroProjects item={frontmatter} />

        <Article html={html} />
      </>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, source: { eq: "projects" } }
    ) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        thumb {
          twitter: childImageSharp {
            resize(height: 471, width: 900, quality: 100) {
              src
            }
          }
          facebook: childImageSharp {
            resize(height: 900, width: 600, quality: 100) {
              src
            }
          }
        }
        started
        ended
        status
        team {
          name
          link
        }
        website
        keywords
        categories
        tags
      }
      fields {
        slug
      }
      html
      excerpt
    }
  }
`

export default Single
