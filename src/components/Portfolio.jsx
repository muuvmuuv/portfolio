import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Link from './Link'

const Portfolio = ({ item: { frontmatter, fields } }) => (
  <div className="portfolio">
    <div className="image">
      <Link to={fields.slug}>
        <Img
          fluid={frontmatter.image.childImageSharp.fluid}
          alt={frontmatter.title}
          imgStyle={{
            objectPosition: 'top center',
          }}
        />
      </Link>
    </div>
    <div className="info">
      <Link to={fields.slug}>
        <h2>{frontmatter.title}</h2>
      </Link>
      <h3>{frontmatter.subtitle}</h3>
      <Link to={fields.slug}>
        <div className="btn btn-primary">Show more</div>
      </Link>
    </div>
  </div>
)

export default Portfolio
