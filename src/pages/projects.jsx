import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { ContextConsumer } from '../context'
import SEO from '../components/SEO'

import Portfolio from '../components/Portfolio'

const Page = () => {
  const data = useStaticQuery(graphql`
    query DevelopmentQuery {
      allMarkdownRemark(filter: { fields: { source: { eq: "projects" } } }) {
        edges {
          node {
            frontmatter {
              title
              subtitle
              image {
                childImageSharp {
                  fluid(maxWidth: 1600) {
                    src
                  }
                }
              }
              thumb {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    src
                  }
                }
              }
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

  return (
    <ContextConsumer>
      {({ data, set }) => (
        <>
          <SEO title="Development"></SEO>
          <Helmet
            bodyAttributes={{ page: 'development', class: 'header-fixed' }}
          ></Helmet>

          <div className="gallery">
            {items.map((item, index) => (
              <Portfolio item={item.node} key={index}></Portfolio>
            ))}
          </div>
        </>
      )}
    </ContextConsumer>
  )
}

export default Page
