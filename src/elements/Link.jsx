import React from 'react'
import normalizeUrl from 'normalize-url'

import Icon from '../components/Icon'

const Link = (props) => {
  const { href, children, className, ...restProps } = props

  const isAnchor = href[0] === '#'
  const isInternal = href[0] === '/'

  let classes = 'link'
  if (className) {
    classes += ' ' + className
  }

  if (isAnchor) {
    return (
      <a
        href={href}
        title={`Anchor to ${href}`}
        className={classes}
        tabIndex="0"
        {...restProps}
      >
        {children}
      </a>
    )
  } else if (isInternal) {
    return (
      <a
        href={href}
        title={`Open link to ${href}`}
        className={classes}
        tabIndex="0"
        {...restProps}
      >
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
        className={classes}
        {...restProps}
      >
        {children}
        <Icon name="arrow-top-right" />
      </a>
    )
  }
}

export { Link }
