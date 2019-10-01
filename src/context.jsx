import React, { useState } from 'react'

const DEFAULT_STATE = {
  title: null,
}

const GlobalContext = React.createContext([DEFAULT_STATE, () => {}])
const { Consumer, Provider } = GlobalContext

const GlobalProvider = props => {
  const [state, setState] = useState(DEFAULT_STATE)

  return <Provider value={[state, setState]}>{props.children}</Provider>
}

export { Consumer as GlobalConsumer, GlobalProvider, GlobalContext }
