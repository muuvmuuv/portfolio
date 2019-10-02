import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { GlobalConsumer } from '@app/context'
import SEO from '@components/SEO'
import { isDev } from '@app/environment'

import Portfolio from '@components/Portfolio'

class Page extends React.Component {
  static contextType = GlobalConsumer

  render() {
    const { withDates, withoutStartDate, withoutEndDate } = this.props.data
    const [state, setState] = this.context

    setState(s => ({ ...s, title: 'Projects' }))

    const idList = new Set(withoutStartDate.edges.map(x => x.node.id))
    const items = [
      ...withDates.edges,
      ...withoutStartDate.edges,
      ...withoutEndDate.edges.filter(d => !idList.has(d.node.id)),
    ].sort((starting, ending) => {
      return (
        new Date(ending.node.frontmatter.ended) -
        new Date(starting.node.frontmatter.ended)
      )
    })

    if (isDev) {
      console.group('Projects')
      console.log(this)
      console.log(state)
      console.log(items)
      console.groupEnd()
    }

    return (
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
    )
  }
}

// NOTE: this query could be simplified (https://github.com/gatsbyjs/gatsby/issues/17953)
export const pageQuery = graphql`
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
`

export default Page
