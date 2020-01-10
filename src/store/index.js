/**
 * Global store provider.
 *
 * @see https://react.christmas/2019/7
 * @see https://medium.com/@samuelresua/global-state-with-react-context-cfa99946900d
 */

import React from 'react'

import { Theme } from './theme'
import { History } from './history'
import { Nav } from './nav'

const providers = [<Theme.Provider />, <History.Provider />, <Nav.Provider />]

const Store = ({ children: initial }) =>
  providers.reduce(
    (children, parent) => React.cloneElement(parent, { children }),
    initial
  )

export { Store, Theme, History, Nav }
