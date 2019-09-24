import { graphql } from 'gatsby'
import React from 'react'

import Hero from '../layouts/hero'
import { scrollTo } from '../utils/animate'
import { prefersReducedMotion } from '../utils/accessibility'
import SEO from '../components/SEO'
import { isDev } from '../environment'

class PortfolioSingle extends React.Component {
  refs = []

  componentDidMount() {
    this.refs = document.querySelectorAll('.footnote-backref, .footnote-ref')
    this.refs.forEach(ref => {
      ref.addEventListener('click', this.handleClick)
    })
  }

  componentWillUnmount() {
    this.refs.forEach(ref => {
      ref.removeEventListener('click', this.handleClick)
    })
  }

  handleClick(event) {
    if (prefersReducedMotion()) {
      return
    }
    event.preventDefault()
    const target = document.getElementById(event.target.hash.substr(1))
    if (target) {
      scrollTo(target)
    }
  }

  render() {
    const { frontmatter, html } = this.props.data.markdownRemark

    if (isDev) {
      console.log(frontmatter)
      console.log(this)
    }

    const attr = {}

    const homeUrl = this.props.location.origin
    if (frontmatter.thumb.facebook.resize.src) {
      attr.ogImage = `ogImage=${homeUrl}${frontmatter.thumb.facebook.resize.src}`
    }
    if (frontmatter.thumb.twitter.resize.src) {
      attr.twitterCard = `${homeUrl}${frontmatter.thumb.twitter.resize.src}`
    }

    if (frontmatter.keywords && frontmatter.keywords.length > 0) {
      attr.keywords = frontmatter.keywords
    }

    const fallbackContent = (
      <div className="container">
        <h3>Sorry, more info will come soon!</h3>
      </div>
    )

    return (
      <>
        <SEO
          title={frontmatter.title}
          description={frontmatter.subtitle}
          {...attr}
        ></SEO>
        <Hero item={frontmatter} />
        <article
          id="article"
          className="container"
          dangerouslySetInnerHTML={{
            __html: html || fallbackContent,
          }}
        />
      </>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 1600) {
              src
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
        website
        keywords
      }
      fields {
        slug
      }
      html
    }
  }
`

export default PortfolioSingle
