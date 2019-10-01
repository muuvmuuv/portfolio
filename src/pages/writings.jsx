import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { ContextConsumer } from '../context'
import SEO from '../components/SEO'
import { isDev } from '../environment'

const Page = () => {
  const results = useStaticQuery(graphql`
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
  `)

  const items = results.allMarkdownRemark.edges

  if (isDev) {
    console.log(items)
  }

  return (
    <ContextConsumer>
      {({ data, set }) => (
        <>
          <SEO title="Writings" />
          <Helmet bodyAttributes={{ page: 'writings', class: 'home' }} />

          <div className="container container--medium">
            <div className="list">
              {items.map((item, index) => (
                <Link key={index} to={item.node.fields.slug}>
                  <h2>{item.node.frontmatter.title}</h2>
                  <p>{item.node.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </ContextConsumer>
  )
}

export default Page
