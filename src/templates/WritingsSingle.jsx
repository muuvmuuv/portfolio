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

    const keywords = frontmatter.tags
    const backdrop = frontmatter.image?.childImageSharp.fluid || null
    const homeUrl = this.props.location.origin
    const ogImage = frontmatter.image
      ? `${homeUrl}${frontmatter.image.facebook.resize.src}`
      : null
    const twitterCard = frontmatter.image
      ? `${homeUrl}${frontmatter.image.twitter.resize.src}`
      : null

    return (
      <>
        <Head
          pageTitle={frontmatter.title}
          pageName={this.state.pageName}
          bodyClasses="single header-float"
          ogImage={ogImage}
          twitterCard={twitterCard}
          siteDescription={excerpt}
          siteKeywords={keywords}
        />

        <HeroWritings
          title={frontmatter.title}
          backdrop={backdrop}
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
      fields {
        slug
      }
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2100, srcSetBreakpoints: [576, 768, 992, 1200]) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
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
        created
        language
        tags
      }
    }
  }
`
