import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../provider/history'
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
      crumbLabel: this.props.data.mdx.frontmatter.title,
      crumbs: breadcrumb.crumbs,
    })
  }

  render() {
    const {
      mdx: {
        body,
        fields: { slug },
        frontmatter,
      },
    } = this.props.data

    const attr = {}

    const homeUrl = this.props.location.origin
    if (frontmatter.thumb.facebook.resize.src) {
      attr.ogImage = `${homeUrl}${frontmatter.thumb.facebook.resize.src}`
    }
    if (frontmatter.thumb.twitter.resize.src) {
      attr.twitterCard = `${homeUrl}${frontmatter.thumb.twitter.resize.src}`
    }

    if (frontmatter.tags && frontmatter.tags.length > 0) {
      attr.keywords = frontmatter.tags
    }

    return (
      <>
        <Head
          pageTitle={frontmatter.title}
          pageName={this.state.pageName}
          bodyClasses="single header-float"
          siteDescription={frontmatter.subtitle}
          siteKeywords={frontmatter.tags}
        />

        <HeroProjects
          title={frontmatter.title}
          subtitle={frontmatter.subtitle}
          backdrop={frontmatter.image.childImageSharp.fluid}
          status={frontmatter.status}
          started={frontmatter.started}
          ended={frontmatter.ended}
          website={frontmatter.website}
          team={frontmatter.team}
          roles={frontmatter.roles}
        />

        <Article slug={slug} mdx={body} />
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
    mdx(fields: { slug: { eq: $slug }, source: { eq: "projects" } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2100, srcSetBreakpoints: [576, 768, 992, 1200]) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumb {
          twitter: childImageSharp {
            resize(height: 471, width: 900) {
              src
            }
          }
          facebook: childImageSharp {
            resize(height: 900, width: 600) {
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
        roles
        website
        categories
        tags
      }
    }
  }
`
