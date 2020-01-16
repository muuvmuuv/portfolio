import React, { useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import SEO from '../components/SEO'
import Portfolio from '../components/Portfolio'
import { History } from '../store'
import dayjs from 'dayjs'

const Page = ({ pageContext: { breadcrumb }, data: { projects } }) => {
  const pageName = 'Projects'
  const historyDispatch = useContext(History.Dispatch)

  useEffect(() => {
    historyDispatch({
      location: breadcrumb.location,
      crumbLabel: pageName,
      crumbs: breadcrumb.crumbs,
    })
  })

  const items = projects.edges.sort((nodeA, nodeB) => {
    const AF = nodeA.node.frontmatter
    const BF = nodeB.node.frontmatter

    const future = dayjs().add(10, 'y')
    const present = dayjs().add(-10, 'y')
    const AEnded = AF.ended ? dayjs(AF.ended) : future
    const BEnded = BF.ended ? dayjs(BF.ended) : future
    const diffEnded = BEnded.diff(AEnded)
    const AStarted = AF.started ? dayjs(AF.started) : present
    const BStarted = BF.started ? dayjs(BF.started) : present
    const diffStarted = AStarted.diff(BStarted)

    if (!BF.started && !BF.ended) {
      return -1
    } else if (!AF.started && !AF.ended) {
      return 1
    }

    return diffEnded - diffStarted
  })

  return (
    <>
      <SEO title={pageName} />
      <Helmet
        bodyAttributes={{
          page: pageName.toLowerCase(),
          class: 'home',
        }}
      />

      <h1 className="headline">{pageName}</h1>

      <div className="container gallery">
        {items.map((item, index) => (
          <Portfolio item={item.node} key={index}></Portfolio>
        ))}
      </div>
    </>
  )
}

// NOTE: this query could be simplified (https://github.com/gatsbyjs/gatsby/issues/17953)
export const pageQuery = graphql`
  query ProjectsQuery {
    projects: allMarkdownRemark(
      filter: { fields: { source: { eq: "projects" } } }
    ) {
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
            started
            ended
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Page
