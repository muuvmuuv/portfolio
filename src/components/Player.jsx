import React, { useRef, useEffect } from 'react'

// import Plyr from 'plyr/src/js/plyr' // non minified version
import Plyr from 'plyr'

const Player = ({ provider, src, options }) => {
  const element = useRef()

  const defaultOptions = {
    debug: false,
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'fullscreen',
    ],
    autoplay: false,
    autopause: true,
    youtube: {
      noCookie: true,
    },
  }
  options = { ...defaultOptions, ...options }
  console.log(options)

  useEffect(() => {
    const instance = new Plyr(element.current, options)
    return () => instance.destroy()
  }, [element.current])

  return <div ref={element} data-plyr-provider={provider} data-plyr-embed-id={src}></div>
}

export default Player
