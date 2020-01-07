import React from 'react'
import { default as NativeLink } from 'gatsby-plugin-transition-link'

const Link = props => {
  const DEFAULT_PROPS = {
    exit: {
      trigger: () => {
        console.log('IMHEREIMHEREIMHEREIMHEREIMHERE')
      },
    },
  }
  props = { ...props, ...DEFAULT_PROPS }
  return <NativeLink {...props}>{props.children}</NativeLink>
}

export default Link
