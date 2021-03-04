import React, { createContext, useState } from 'react'
import uniqueString from 'unique-string'
import Toast from '../components/Toast'

const ToastContext = createContext([])
const ToastConsumer = ToastContext.Consumer

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toastOptions = {
    type: 'toast', // toast/prompt
    labelClose: 'Close',
    labelAccept: 'Accept',
    onClose: () => {},
    onAccept: () => {},
  }

  const add = (content, options) => {
    const id = uniqueString()
    options = { ...toastOptions, ...options }
    setToasts([...toasts, { id, content, options }])
    return id // toast id
  }
  const remove = (id) => {
    setToasts(toasts.filter((t) => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ add, remove, toasts }}>
      {children}

      <div className="toasts-wrapper">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            type={t.options.type}
            labelClose={t.options.labelClose}
            labelAccept={t.options.labelAccept}
            onClose={() => t.options.onClose(() => remove(t.id))}
            onAccept={() => t.options.onAccept(() => remove(t.id))}
          >
            {t.content}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export { ToastProvider, ToastConsumer, ToastContext }
