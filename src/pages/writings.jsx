import React from 'react'
import { graphql } from 'gatsby'
import Link from '@components/Link'
import { Helmet } from 'react-helmet-async'
import SEO from '@components/SEO'
import { isDev } from '@app/environment'

class Page extends React.Component {
  render() {
    const {
      allMarkdownRemark: { edges },
    } = this.props.data

    if (isDev) {
      console.group('Writings')
      console.log(this)
      console.log(edges)
      console.groupEnd()
    }

    return (
      <>
        <SEO title="Writings" />
        <Helmet bodyAttributes={{ page: 'writings', class: 'home' }} />

        <div className="container container--medium">
          <div className="list">
            {edges.map(({ node }, index) => (
              <Link key={index} to={node.fields.slug}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export const pageQuery = graphql`
  query WritingsQuery {
    allMarkdownRemark(
      filter: { fields: { source: { eq: "writings" } } }
      sort: {
        fields: [frontmatter___created, frontmatter___modified]
        order: DESC
      }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Page
