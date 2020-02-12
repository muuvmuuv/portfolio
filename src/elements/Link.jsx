import React from 'react'
import normalizeUrl from 'normalize-url'

import Icon from '../components/Icon'

const Link = (props) => {
  const { href, children, ...restProps } = props

  const isAnchor = href[0] === '#'
  const isInternal = href[0] === '/'

  if (isAnchor) {
    return (
      <a href={href} title={`Anchor to ${href}`} {...restProps} tabIndex="0">
        {children}
      </a>
    )
  } else if (isInternal) {
    return (
      <a href={href} title={`Open link to ${href}`} {...restProps} tabIndex="0">
        {children}
      </a>
    )
  } else {
    const normalizedHref = normalizeUrl(href, {
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
      <a
        href={normalizedHref}
        title={`Open link to ${href}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        tabIndex="0"
        {...restProps}
      >
        {children}
        <Icon name="arrow-top-right" />
      </a>
    )
  }
}

export { Link }
