import React from 'react'
import Backdrop from './Backdrop'
import Time from './Time'

const HeroWritings = ({ img, title, time }) => (
  <div id="hero">
    <Backdrop src={img.image.childImageSharp.fluid.src}></Backdrop>

    <div className="container">
      <div className="post-title">
        <h1>{title}</h1>
        <h2>
          <Time date={time} format="LL" />
        </h2>
      </div>
    </div>
  </div>
)

export default HeroWritings
