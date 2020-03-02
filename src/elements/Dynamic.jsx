import React from 'react'

import Placeholder from '../components/Placeholder'
import { isSSR } from '../utils/environment'

const Video = (props) => {
  /* eslint-disable-next-line */
  return <video {...props} />
}

const Audio = (props) => {
  /* eslint-disable-next-line */
  return <audio {...props} />
}

const IFrame = (props) => {
  const provider = new RegExp(['youtube', 'vimeo'].join('|')).exec(props.src)[0]

  if (provider) {
    const Player = React.lazy(() => import('../components/Player'))

    return (
      !isSSR && (
        <React.Suspense
          fallback={<Placeholder className="player">Loading video...</Placeholder>}
        >
          <Player provider={provider} src={props.src} />
        </React.Suspense>
      )
    )
  }

  /* eslint-disable-next-line */
  return <iframe {...props} />
}

export { Video, Audio, IFrame }
