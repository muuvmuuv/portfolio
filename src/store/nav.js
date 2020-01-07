import React from 'react'

const defaultState = {
  open: false,
}

// Context
const State = React.createContext()
const Dispatch = React.createContext()

// Reducer
const reducer = (state, action) => {
  return {
    ...state,
    open: action,
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
export const Nav = {
  State,
  Dispatch,
  Provider,
}
