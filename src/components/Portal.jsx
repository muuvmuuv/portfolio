import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import uniqueString from 'unique-string'

const Portal = ({ children, name = uniqueString().substr(0, 6) }) => {
  const portalRoot = document.getElementById('portal')
  const container = document.createElement('div')

  container.setAttribute('key', uniqueString().substr(0, 6))
  container.classList.add(name)

  useEffect(() => {
    portalRoot.appendChild(container)

    return () => {
      portalRoot.removeChild(container)
    }
  }, [container, portalRoot])

  return createPortal(children, container)
}

export default Portal
