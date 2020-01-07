import React from 'react'

import { Scheme } from './scheme'
import { Nav } from './nav'

const providers = [<Scheme.Provider />, <Nav.Provider />]

const Store = ({ children: initial }) =>
  providers.reduce(
    (children, parent) => React.cloneElement(parent, { children }),
    initial
  )

export { Store, Scheme, Nav }
