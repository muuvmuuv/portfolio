import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../store/history'
import Article from '../layouts/Article'
import Head from '../components/Head'
import HeroProjects from '../components/HeroProjects'

class Page extends React.Component {
  state = {
    pageName: 'Projects',
  }

  componentDidMount() {
    const { breadcrumb } = this.props.pageContext

    this.props.history.update({
      location: breadcrumb.location,
      crumbLabel: this.props.data.markdownRemark.frontmatter.title,
      crumbs: breadcrumb.crumbs,
    })
  }

  render() {
    const {
      markdownRemark: { frontmatter, html },
    } = this.props.data

    const attr = {}

    const homeUrl = this.props.location.origin
    if (frontmatter.thumb.facebook.resize.src) {
      attr.ogImage = `${homeUrl}${frontmatter.thumb.facebook.resize.src}`
    }
    if (frontmatter.thumb.twitter.resize.src) {
      attr.twitterCard = `${homeUrl}${frontmatter.thumb.twitter.resize.src}`
    }

    if (frontmatter.keywords && frontmatter.keywords.length > 0) {
      attr.keywords = frontmatter.keywords
    }

    return (
      <>
        <Head
          pageTitle={frontmatter.title}
          pageName={this.state.pageName}
          bodyClasses="single header-fixed"
        />

        <HeroProjects item={frontmatter} />

        <Article html={html} />
      </>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <HistoryConsumer>
    {(history) => <Page {...props} ref={ref} history={history} />}
  </HistoryConsumer>
))

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, source: { eq: "projects" } }
    ) {
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
          twitter: childImageSharp {
            resize(height: 471, width: 900, quality: 100) {
              src
            }
          }
          facebook: childImageSharp {
            resize(height: 900, width: 600, quality: 100) {
              src
            }
          }
        }
        started
        ended
        status
        team {
          name
          link
        }
        role
        website
        keywords
        categories
        tags
      }
      fields {
        slug
      }
      html
      excerpt
    }
  }
`
