import React from 'react'

import Backdrop from './Backdrop'
import Time from './Time'
import Language from './Language'
import Separator from './Separator'
import Keywords from './Keywords'
import TimeToRead from './TimeToRead'

const HeroWritings = ({ title, backdrop, keywords, lang, time, ttr }) => (
  <header
    id="hero"
    className={backdrop ? 'content-center' : 'content-center size-medium'}
  >
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
  </header>
)

export default HeroWritings
