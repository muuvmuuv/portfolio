import React from 'react'
import { Link as NativeLink } from 'gatsby'
import Img from 'gatsby-image'

import Placeholder from './Placeholder'
import Time from './Time'

const Portfolio = ({ item: { frontmatter, fields } }) => (
  <div className="portfolio">
    <div className="image">
      <NativeLink to={fields.slug}>
        {frontmatter.image?.childImageSharp.fluid ? (
          <Img
            fluid={frontmatter.image.childImageSharp.fluid}
            alt={frontmatter.title}
            imgStyle={{
              objectPosition: 'top center',
            }}
          />
        ) : (
          <Placeholder>{frontmatter.title}</Placeholder>
        )}
      </NativeLink>
    </div>
    <div className="info">
      <div className="timespan">
        <Time date={frontmatter.started} /> – <Time date={frontmatter.ended} />
      </div>
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
