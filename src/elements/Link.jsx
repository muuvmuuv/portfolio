import React from 'react'

import normalizeUrl from 'normalize-url'
import Icon from '../components/Icon'

const Link = ({ href, children }) => {
  href = normalizeUrl(href, {
    normalizeProtocol: true,
    stripAuthentication: true,
    forceHttps: true,
    stripHash: false,
    stripProtocol: false,
    stripWWW: false,
    removeTrailingSlash: true,
    removeDirectoryIndex: true,
  })

  return (
    <a href={href} target="_blank" rel="noopener noreferrer nofollow">
      {children}
      <Icon name="arrow-top-right" />
    </a>
  )
}

export { Link }
