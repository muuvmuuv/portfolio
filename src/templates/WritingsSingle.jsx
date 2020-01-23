import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../store/history'
import Article from '../layouts/Article'
import Head from '../components/Head'
import HeroWritings from '../components/HeroWritings'

class Page extends React.Component {
  state = {
    pageName: 'Writings',
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
      markdownRemark: { frontmatter, html, excerpt, tableOfContents },
    } = this.props.data

    console.log(tableOfContents)

    const attr = {}

    if (frontmatter.tags && frontmatter.tags.length > 0) {
      attr.keywords = frontmatter.tags
    }

    return (
      <>
        <Head
          pageTitle={frontmatter.title}
          pageName={this.state.pageName}
          bodyClasses="single header-fixed"
          siteDescription={excerpt}
          siteKeywords={frontmatter.tags}
        />

        <HeroWritings
          title={frontmatter.title}
          backdrop={frontmatter.image.childImageSharp.fluid}
          time={frontmatter.created}
          lang={frontmatter.language}
          keywords={frontmatter.tags}
        />

        <Article html={html} toc={tableOfContents} />
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
    markdownRemark(fields: { slug: { eq: $slug }, source: { eq: "writings" } }) {
      frontmatter {
        title
        description
        image {
          ...FluidResponsiveSet
        }
        created
        language
        tags
      }
      fields {
        slug
      }
      html
      excerpt(format: PLAIN, pruneLength: 150, truncate: true)
      tableOfContents
    }
  }
`
