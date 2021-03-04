import React from 'react'

import Hero from './Hero'

const HeroPage = ({ title, subtitle }) => (
  <Hero size="small">
    <div className="container">
      <div className="post-title">
        <h1 itemProp="headline">{title}</h1>
        {subtitle && <h2 itemProp="alternativeHeadline">{subtitle}</h2>}
      </div>
    </div>
  </Hero>
)

export default HeroPage
