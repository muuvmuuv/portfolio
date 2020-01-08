import React from 'react'

import Backdrop from './Backdrop'
import Time from './Time'
import Language from './Language'
import Separator from './Separator'

const HeroWritings = ({ img, title, lang, time }) => (
  <div id="hero">
    <Backdrop img={img.image.childImageSharp.fluid}></Backdrop>

    <div className="container">
      <div className="post-title">
        <h1>{title}</h1>
        <h2>
          <Time date={time} format="LL" />
          <Separator />
          <Language lang={lang} />
        </h2>
      </div>
    </div>
  </div>
)

export default HeroWritings
