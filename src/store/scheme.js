import React from 'react'

const defaultState = {
  scheme: 'light',
}

// Context
const State = React.createContext()
const Dispatch = React.createContext()

// Reducer
const reducer = (state, preferred) => {
  return {
    ...state,
    scheme: preferred,
  }
}

// Provider
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState)

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  )
}

// Export
export const Scheme = {
  State,
  Dispatch,
  Provider,
}
