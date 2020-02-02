import React from 'react'

import normalizeUrl from 'normalize-url'
import Icon from '../components/Icon'

const Link = ({ href, children }) => {
  const isInternal = href[0] === '/'

  if (!isInternal) {
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
  }

  return isInternal ? (
    <a href={href} title={`Open link to ${href}`}>
      {children}
    </a>
  ) : (
    <a
      href={href}
      title={`Open link to ${href}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {children}
      <Icon name="arrow-top-right" />
    </a>
  )
}

export { Link }
