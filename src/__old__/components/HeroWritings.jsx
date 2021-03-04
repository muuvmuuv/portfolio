import React from 'react'

import Backdrop from './Backdrop'
import Time from './Time'
import Language from './Language'
import Separator from './Separator'
import Keywords from './Keywords'
import TimeToRead from './TimeToRead'
import Hero from './Hero'

const HeroWritings = ({ title, backdrop, keywords, lang, time, ttr }) => (
  <Hero centered={true} size={backdrop ? 'medium' : false}>
    <Backdrop img={backdrop} alt={title}></Backdrop>

    <div className="container">
      <div className="post-title">
        <h1 itemProp="headline">{title}</h1>
        <h2>
          <Keywords list={keywords} />
          <Separator />
          <Time date={time} format="LL" itemProp="datePublished" />
          <Separator />
          <Language code={lang} />
          <Separator />
          <TimeToRead time={ttr} />
        </h2>
      </div>
    </div>
  </Hero>
)

export default HeroWritings
