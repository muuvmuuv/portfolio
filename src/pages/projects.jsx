import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { ContextConsumer } from '../context'
import SEO from '../components/SEO'

import Portfolio from '../components/Portfolio'
import { isDev } from '../environment'

const Page = () => {
  const results = useStaticQuery(graphql`
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
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              thumb {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
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

  const items = results.allMarkdownRemark.edges

  if (isDev) {
    console.log(items)
  }

  return (
    <ContextConsumer>
      {({ data, set }) => (
        <>
          <SEO title="Development" />
          <Helmet
            bodyAttributes={{ page: 'projects', class: 'home header-fixed' }}
          />

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
