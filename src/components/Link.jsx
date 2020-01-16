import React from 'react'
import { Link as NativeLink } from 'gatsby'

const Link = (props) => {
  const DEFAULT_PROPS = {}
  props = { ...props, ...DEFAULT_PROPS }
  return <NativeLink {...props}>{props.children}</NativeLink>
}

export default Link
