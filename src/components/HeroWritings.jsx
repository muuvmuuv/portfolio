import React from 'react'

import Backdrop from './Backdrop'
import Time from './Time'
import Language from './Language'
import Separator from './Separator'
import Keywords from './Keywords'

const HeroWritings = ({ title, backdrop, keywords, lang, time }) => (
  <div id="hero">
    <Backdrop img={backdrop} alt={title}></Backdrop>

    <div className="container">
      <div className="post-title">
        <h1>{title}</h1>
        <h2>
          <Keywords list={keywords} />
          <Separator />
          <Time date={time} format="LL" />
          <Separator />
          <Language code={lang} />
        </h2>
      </div>
    </div>
  </div>
)

export default HeroWritings
