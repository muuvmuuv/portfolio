import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Portfolio from '../components/portfolio'

const PagesIndex = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allMarkdownRemark {
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

  const portfolio = data.allMarkdownRemark.edges

  return (
    <div className="gallery">
      {portfolio.map((p, i) => (
        <Portfolio item={p.node} key={i}></Portfolio>
      ))}
    </div>
  )
}

export default PagesIndex
