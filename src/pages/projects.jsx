import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { ContextConsumer } from '../context'
import SEO from '../components/SEO'

import Portfolio from '../components/Portfolio'
import { isDev } from '../environment'

const Page = () => {
  // NOTE: this query can be simplified (https://github.com/gatsbyjs/gatsby/issues/17953)
  const results = useStaticQuery(graphql`
    fragment ProjectsNodes on MarkdownRemark {
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

    query DevelopmentQuery {
      withDates: allMarkdownRemark(
        filter: {
          fields: { source: { eq: "projects" } }
          frontmatter: { started: { ne: null }, ended: { ne: null } }
        }
        sort: {
          fields: [frontmatter___ended, frontmatter___started]
          order: DESC
        }
      ) {
        edges {
          node {
            ...ProjectsNodes
          }
        }
      }
      withoutStartDate: allMarkdownRemark(
        filter: {
          fields: { source: { eq: "projects" } }
          frontmatter: { started: { eq: null } }
        }
        sort: { fields: frontmatter___ended, order: DESC }
      ) {
        edges {
          node {
            ...ProjectsNodes
          }
        }
      }
      withoutEndDate: allMarkdownRemark(
        filter: {
          fields: { source: { eq: "projects" } }
          frontmatter: { ended: { eq: null } }
        }
        sort: { fields: frontmatter___started, order: DESC }
      ) {
        edges {
          node {
            ...ProjectsNodes
          }
        }
      }
    }
  `)

  const idList = new Set(results.withoutStartDate.edges.map(x => x.node.id))
  const items = [
    ...results.withDates.edges,
    ...results.withoutStartDate.edges,
    ...results.withoutEndDate.edges.filter(d => !idList.has(d.node.id)),
  ].sort((starting, ending) => {
    return (
      new Date(ending.node.frontmatter.ended) -
      new Date(starting.node.frontmatter.ended)
    )
  })

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
