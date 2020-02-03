import { useContext } from 'react'

import { OverlayContext } from '../provider/overlay'

function useOverlay() {
  const { show, hide } = useContext(OverlayContext)

  return { show, hide }
}

export default useOverlay
