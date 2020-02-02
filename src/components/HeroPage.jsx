import React from 'react'

const HeroPage = ({ title, subtitle }) => (
  <header id="hero" className="size-small">
    <div className="container">
      <div className="post-title">
        <h1 itemProp="headline">{title}</h1>
        {subtitle && <h2 itemProp="alternativeHeadline">{subtitle}</h2>}
      </div>
    </div>
  </header>
)

export default HeroPage
