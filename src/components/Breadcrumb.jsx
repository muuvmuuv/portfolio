import React, { useContext } from 'react'
import { Link } from 'gatsby'
import titleize from 'titleize'

import { HistoryContext } from '../provider/history'

const Breadcrumb = () => {
  const { location, crumbLabel, crumbs } = useContext(HistoryContext)

  if (!crumbs || !location) {
    return <div id="breadcrumb"></div>
  }

  const slugOverrides = {
    about: 'About Me',
    lifephases: 'Life Phases',
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
            {slugOverrides[label] || titleize(crumbLabel || label)}
          </span>
        ) : (
          <Link key={index} className="breadcrumb__item breadcrumb__link" to={pathname}>
            {slugOverrides[label] || titleize(label)}
          </Link>
        ),
      ])}
    </div>
  )
}

export default Breadcrumb
