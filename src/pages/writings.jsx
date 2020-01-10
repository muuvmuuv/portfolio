import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { isDev } from '../environment'
import Link from '../components/Link'
import SEO from '../components/SEO'
import { History } from '../store'
import Time from '../components/Time'

const Page = ({
  pageContext: { breadcrumb },
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const pageName = 'Writings'
  const historyDispatch = useContext(History.Dispatch)

  useEffect(() => {
    historyDispatch({
      location: breadcrumb.location,
      crumbLabel: pageName,
      crumbs: breadcrumb.crumbs,
    })
  })

  if (isDev) {
    console.group(pageName)
    console.log(edges)
    console.log(breadcrumb)
    console.groupEnd()
  }

  return (
    <>
      <SEO title={pageName} />
      <Helmet
        bodyAttributes={{ page: pageName.toLowerCase(), class: 'home' }}
      />

      <div className="container container--medium">
        <div className="list">
          {edges.map(({ node: { frontmatter, fields, excerpt } }, index) => (
            <div className="item" key={index}>
              <Link to={fields.slug}>
                <header>
                  <h2>{frontmatter.title}</h2>
                  <Time date={frontmatter.created} />
                </header>
                <p>{excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
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
            keywords
            created
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
