import React from 'react'

import Item from './Item'
import Icon from '../Icon'

const Section = ({ name, icon, data }) => {
  return (
    <section>
      <header>
        <Icon name={icon} />
        <h2 className="title">{name}</h2>
      </header>
      <div className="items">
        {data.map((props, index) => (
          <Item key={index} {...props} />
        ))}
      </div>
    </section>
  )
}

export default Section
