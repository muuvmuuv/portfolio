import React, { createContext, useState } from 'react'

const defaultState = {
  location: '',
  crumbLabel: '',
  crumbs: [],
  update: () => {},
}

const HistoryContext = createContext(defaultState)
const HistoryConsumer = HistoryContext.Consumer

function HistoryProvider({ children }) {
  const [state, setState] = useState({
    crumbs: [],
  })

  const update = (newState) => {
    console.log(newState)

    setState(newState)
  }

  return (
    <HistoryContext.Provider value={{ ...state, update }}>
      {children}
    </HistoryContext.Provider>
  )
}

export { HistoryProvider, HistoryConsumer, HistoryContext }
