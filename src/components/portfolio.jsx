import React from 'react'
import Img from 'gatsby-image'

import Link from './Link'

const Portfolio = ({ item }) => {
  const article = item.frontmatter
  const meta = item.fields

  // console.log(article)
  // console.log(meta)

  return (
    <div className="portfolio">
      <Img fluid={article.image.childImageSharp.fluid} alt={article.title} />
      <div className="info">
        <h2>{article.title}</h2>
        <h3>{article.subtitle}</h3>
        <Link to={meta.slug} className="btn btn-primary">
          Show more
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
