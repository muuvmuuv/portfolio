import React, { useContext } from 'react'
import titleize from 'titleize'

import { HistoryContext } from '../provider/history'
import { Link } from 'gatsby'

const Breadcrumb = () => {
  const { location, crumbLabel, crumbs } = useContext(HistoryContext)

  if (!crumbs || !location) {
    return <div id="breadcrumb"></div>
  }

  // skip first; `arr.shift()` does not work here
  const [, ...items] = crumbs

  return (
    <div id="breadcrumb">
      {items.map(({ pathname, crumbLabel: label }, index) => [
        <span key={`${index}-sep`} className="breadcrumb__separator">
          /
        </span>,
        location === pathname ? (
          <span key={index} className="breadcrumb__item">
            {titleize(crumbLabel || label)}
          </span>
        ) : (
          <Link key={index} className="breadcrumb__item breadcrumb__link" to={pathname}>
            {titleize(label)}
          </Link>
        ),
      ])}
    </div>
  )
}

export default Breadcrumb
