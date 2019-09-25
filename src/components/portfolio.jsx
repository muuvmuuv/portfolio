import React from 'react'
import { Link } from 'gatsby'

const Portfolio = ({ item }) => {
  const article = item.frontmatter
  const meta = item.fields

  console.log(article)
  console.log(meta)

  return (
    <article className="portfolio">
      <h2>{article.title}</h2>
      <h3>{article.subtitle}</h3>
      <Link to={meta.slug} className="btn btn-primary">
        Show more
      </Link>
      <img src={article.image.childImageSharp.fluid.src} alt={article.title} />
    </article>
  )
}

export default Portfolio
