import React from 'react'

const defaultState = {
  location: '',
  crumbLabel: '',
  crumbs: [],
}

// Context
const State = React.createContext()
const Dispatch = React.createContext()

// Reducer
const reducer = (state, newState) => {
  return { ...state, ...newState }
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
export const History = {
  State,
  Dispatch,
  Provider,
}
