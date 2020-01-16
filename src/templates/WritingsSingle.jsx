import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { graphql } from 'gatsby'

import { isDev } from '../environment'
import { History } from '../store'
import Article from '../layouts/Article'
import SEO from '../components/SEO'
import HeroWritings from '../components/HeroWritings'

const Single = ({
  pageContext: { breadcrumb },
  data: {
    markdownRemark: { frontmatter, html, excerpt, tableOfContents },
  },
}) => {
  const historyDispatch = useContext(History.Dispatch)
  console.log(tableOfContents)

  useEffect(() => {
    historyDispatch({
      location: breadcrumb.location,
      crumbLabel: frontmatter.title,
      crumbs: breadcrumb.crumbs,
    })
  })

  if (isDev) {
    console.group('WritingsSingle')
    console.log(frontmatter)
    console.log(breadcrumb)
    console.groupEnd()
  }

  const attr = {}

  if (frontmatter.keywords && frontmatter.keywords.length > 0) {
    attr.keywords = frontmatter.keywords
  }

  return (
    <>
      <Helmet
        bodyAttributes={{ page: 'writings', class: 'single header-fixed' }}
      />
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
        {...attr}
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

export const pageQuery = graphql`
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

export default Single
