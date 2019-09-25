import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { ContextConsumer } from '../context'
import SEO from '../components/SEO'

const Page = () => {
  const data = useStaticQuery(graphql`
    query WritingsQuery {
      allMarkdownRemark(filter: { fields: { source: { eq: "writings" } } }) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const items = data.allMarkdownRemark.edges

  console.log(items)

  return (
    <ContextConsumer>
      {({ data, set }) => (
        <>
          <SEO title="Writings"></SEO>
          <Helmet bodyAttributes={{ page: 'writings' }}></Helmet>

          <div className="list">
            {items.map((item, index) => (
              <Link key={index} to={item.node.fields.slug}>
                {item.node.frontmatter.title}
              </Link>
            ))}
          </div>
        </>
      )}
    </ContextConsumer>
  )
}

export default Page
