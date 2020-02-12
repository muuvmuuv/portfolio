import React from 'react'

import { Footnotes } from './Sup'

const Div = (props) => {
  switch (props.className || props.id) {
    case 'footnotes':
      return <Footnotes {...props} />

    default:
      return <div {...props} />
  }
}

export { Div }
