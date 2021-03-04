import React from 'react'
import { Link as NativeLink } from 'gatsby'

import Time from '../Time'

const Item = ({ title, description, started, ended, link }) => (
  <div className="item">
    <div className="timespan">
      <Time date={started} /> – <Time date={ended} />
    </div>
    <div className="title">
      <NativeLink to={link}>{title}</NativeLink>
    </div>
    <div className="desc">{description}</div>
  </div>
)

export default Item
