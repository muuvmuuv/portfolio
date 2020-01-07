import React from 'react'
import Link from './Link'
import Img from 'gatsby-image'

const Portfolio = ({ item }) => {
  const article = item.frontmatter
  const meta = item.fields

  // console.log(article)
  // console.log(meta)

  return (
    <article className="portfolio">
      <h2>{article.title}</h2>
      <h3>{article.subtitle}</h3>
      <Link to={meta.slug} className="btn btn-primary">
        Show more
      </Link>
      <Img fluid={article.image.childImageSharp.fluid} alt={article.title} />
    </article>
  )
}

export default Portfolio
