import { useContext } from 'react'

import { OverlayContext } from '../provider/overlay'

function useOverlay() {
  const { show, hide, on } = useContext(OverlayContext)

  const onClick = (fn) => on({ click: fn })

  return { show, hide, onClick }
}

export { useOverlay }
