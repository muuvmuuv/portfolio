import React from 'react'
import { Link as NativeLink } from 'gatsby'
import Img from 'gatsby-image'

const Portfolio = ({ item: { frontmatter, fields } }) => (
  <div className="portfolio">
    <div className="image">
      <NativeLink to={fields.slug}>
        <Img
          fluid={frontmatter.image.childImageSharp.fluid}
          alt={frontmatter.title}
          imgStyle={{
            objectPosition: 'top center',
          }}
        />
      </NativeLink>
    </div>
    <div className="info">
      <NativeLink to={fields.slug}>
        <h2>{frontmatter.title}</h2>
      </NativeLink>
      <h3>{frontmatter.subtitle}</h3>
      <NativeLink to={fields.slug}>
        <div className="btn btn-primary">Show more</div>
      </NativeLink>
    </div>
  </div>
)

export default Portfolio
