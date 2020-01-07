import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Article from '@layouts/Article'
import SEO from '@components/SEO'
import { isDev } from '@app/environment'

import HeroWritings from '@components/HeroWritings'

class Single extends React.Component {
  render() {
    const {
      frontmatter,
      html,
      excerpt,
      tableOfContents,
    } = this.props.data.markdownRemark

    if (isDev) {
      console.group('WritingsSingle')
      console.log(this)
      console.log(frontmatter)
      console.groupEnd()
    }

    const attr = {}

    if (frontmatter.keywords && frontmatter.keywords.length > 0) {
      attr.keywords = frontmatter.keywords
    }

    return (
      <>
        <Helmet
          bodyAttributes={{ page: 'writings', class: 'single header-fixed' }}
        />
        <SEO
          title={frontmatter.title}
          description={frontmatter.description || excerpt}
          {...attr}
        />

        <HeroWritings
          title={frontmatter.title}
          img={frontmatter.header}
          time={frontmatter.created}
        />

        <Article html={html} toc={tableOfContents} />
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
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
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
      excerpt
      tableOfContents
    }
  }
`

export default Single
