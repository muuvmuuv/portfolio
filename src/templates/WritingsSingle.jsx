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
      markdownRemark: { frontmatter, html, tableOfContents },
    } = this.props.data

    console.log(tableOfContents)

    const attr = {}

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

        <HeroWritings
          title={frontmatter.title}
          img={frontmatter.header}
          time={frontmatter.created}
          lang={frontmatter.language}
          keywords={frontmatter.keywords}
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
    markdownRemark(
      fields: { slug: { eq: $slug }, source: { eq: "writings" } }
    ) {
      frontmatter {
        title
        description
        created
        header {
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author
          link
          source
        }
        language
        keywords
      }
      fields {
        slug
      }
      html
      excerpt
      tableOfContents
    }
  }
`
