import React from 'react'
import { Link as NativeLink } from 'gatsby'

import Icon from '../components/Icon'

const Link = ({
  href,
  title,
  children,
  key,
  className = '',
  noStyling = false,
  noIcon = false,
  ...props
}) => {
  let classes = 'link ' + className
  if (noStyling) {
    classes = className
  }

  if (href.startsWith('#')) {
    // ANCHOR
    return (
      <a
        href={href}
        title={title ? title : `Anchor to ${href}`}
        className={classes}
        tabIndex="0"
        key={key}
      >
        {children}
      </a>
    )
  } else if (href.startsWith('/')) {
    // INTERNAL
    return (
      <NativeLink
        to={href}
        title={title ? title : `Open link to ${href}`}
        className={classes}
        tabIndex="0"
        key={key}
        {...props}
      >
        {children}
      </NativeLink>
    )
  } else {
    // EXTERNAL
    return (
      <a
        href={href}
        title={title ? title : `Open link to ${href}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={classes}
        tabIndex="0"
        key={key}
      >
        {children}
        {!noIcon && <Icon name="arrow-up-right" />}
      </a>
    )
  }
}

export { Link }
