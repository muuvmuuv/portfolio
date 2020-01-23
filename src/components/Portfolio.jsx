import React from 'react'
import Img from 'gatsby-image'

import Link from './Link'

const Portfolio = ({ item: { frontmatter, fields } }) => (
  <div className="portfolio">
    <Img fluid={frontmatter.image.childImageSharp.fluid} alt={frontmatter.title} />
    <div className="info">
      <h2>{frontmatter.title}</h2>
      <h3>{frontmatter.subtitle}</h3>
      <Link to={fields.slug} className="btn btn-primary">
        Show more
      </Link>
    </div>
  </div>
)

export default Portfolio
