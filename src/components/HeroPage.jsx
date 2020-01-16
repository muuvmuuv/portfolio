import React from 'react'

const HeroPage = ({ title, subtitle }) => (
  <div id="hero">
    <div className="container">
      <div className="post-title">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </div>
  </div>
)

export default HeroPage
