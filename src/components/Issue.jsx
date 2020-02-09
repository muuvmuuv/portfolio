import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Link } from '../elements/Link'
import Time from './Time'
import Label from './Label'
import DataType from './DataType'

const Issue = ({
  data: {
    tag,
    ref,
    modifiedTime,
    line,
    text,
    value,
    file: { relativePath },
  },
}) => {
  const fileUrl = `https://github.com/muuvmuuv/portfolio/blob/master/${relativePath}`

  return (
    <div className="issue">
      <div className="issue__header">
        <Label className="issue__label" text={tag} type={tag} />
        <span className="issue__ref">({ref ? ref : <DataType type="null" />})</span>
        <span className="issue__separator">@</span>
        <Link className="issue__link" href={fileUrl} title={`Go to file`}>
          {relativePath}#{line}
        </Link>
        <Time className="issue__modified" date={modifiedTime} format="LLL" />
      </div>
      <div className="issue__body">
        <MDXRenderer>{value || text}</MDXRenderer>
      </div>
    </div>
  )
}

export default Issue
