import React from 'react'

import Section from './Section'

const Timeline = ({ data }) => {
  return (
    <div className="container container--small">
      <div id="timeline">
        {data.map((props, index) => (
          <Section key={index} {...props} />
        ))}
      </div>
    </div>
  )
}

export default Timeline
