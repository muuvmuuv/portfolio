import React from 'react'

const Portfolio = ({ item }) => {
  const article = item.frontmatter
  const meta = item.fields

  console.log(article)
  console.log(meta)

  return (
    <article className="portfolio">
      <h2>{article.title}</h2>
      <h3>{article.subtitle}</h3>
      <a href={meta.slug} className="btn btn-primary">
        Show more
      </a>
      <img src={article.image.childImageSharp.fluid.src} alt={article.title} />
    </article>
  )
}

export default Portfolio
