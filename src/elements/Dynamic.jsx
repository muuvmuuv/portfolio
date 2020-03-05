import React from 'react'

const Video = (props) => {
  /* eslint-disable-next-line */
  return <video {...props} />
}

const Audio = (props) => {
  /* eslint-disable-next-line */
  return <audio {...props} />
}

const IFrame = (props) => {
  /* eslint-disable-next-line */
  return <iframe {...props} />
}

export { Video, Audio, IFrame }
