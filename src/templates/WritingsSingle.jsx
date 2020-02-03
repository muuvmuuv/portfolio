import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../provider/history'
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
      crumbLabel: this.props.data.mdx.frontmatter.title,
      crumbs: breadcrumb.crumbs,
    })
  }

  render() {
    const {
      mdx: {
        fields: { slug },
        frontmatter,
        body,
        excerpt,
        tableOfContents,
        timeToRead,
      },
    } = this.props.data

    console.log(tableOfContents)

    const attr = {}

    if (frontmatter.tags && frontmatter.tags.length > 0) {
      attr.keywords = frontmatter.tags
    }

    const image = frontmatter?.image?.childImageSharp?.fluid || null

    return (
      <>
        <Head
          pageTitle={frontmatter.title}
          pageName={this.state.pageName}
          bodyClasses="single header-float"
          siteDescription={excerpt}
          siteKeywords={frontmatter.tags}
        />

        <HeroWritings
          title={frontmatter.title}
          backdrop={image}
          time={frontmatter.created}
          lang={frontmatter.language}
          keywords={frontmatter.tags}
          ttr={timeToRead}
        />

        <Article slug={slug} mdx={body} toc={tableOfContents} />
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
    mdx(fields: { slug: { eq: $slug }, source: { eq: "writings" } }) {
      body
      excerpt(pruneLength: 150)
      timeToRead
      tableOfContents(maxDepth: 3)
      # wordCount {
      #   words
      #   sentences
      #   paragraphs
      # }
      fields {
        slug
      }
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(
              maxWidth: 2100
              traceSVG: {
                color: "#272c36"
                turnPolicy: TURNPOLICY_MAJORITY
                blackOnWhite: true
              }
              srcSetBreakpoints: [576, 768, 992, 1200]
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        created
        language
        tags
      }
    }
  }
`
