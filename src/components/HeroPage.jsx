import React from 'react'

// import Backdrop from './Backdrop'

const HeroPage = ({ img, title }) => (
  <div id="hero">
    {/* <Backdrop img={img.image.childImageSharp.fluid}></Backdrop> */}

    <div className="container">
      <div className="post-title">
        <h1>{title}</h1>
      </div>
    </div>
  </div>
)

export default HeroPage
