import React, { useEffect } from 'react'

import Icon from './Icon'

function Toast({ children, type, labelClose, labelAccept, onClose, onAccept }) {
  useEffect(() => {
    if (type === 'toast') {
      // TODO: add progress bar
      const id = setTimeout(() => onClose(), 3000)
      return () => clearTimeout(id)
    }
  })

  return type === 'prompt' ? (
    <div className="toast">
      <div className="toast__text">{children}</div>
      <div className="toast__actions">
        <button onClick={() => onClose()} className="btn btn--small">
          {labelClose}
        </button>
        <button onClick={() => onAccept()} className="btn btn--small">
          {labelAccept}
        </button>
      </div>
    </div>
  ) : (
    <div className="toast">
      <div className="toast__text">{children}</div>
      <button
        onClick={() => onClose()}
        className="toast__btn-close reset"
        title={labelClose}
      >
        <Icon name="close" />
      </button>
    </div>
  )
}

export default Toast
