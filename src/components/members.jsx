import React from 'react'

import Member from './Member'

const Members = ({ list }) => {
  return list.map((m, i) => {
    const end = list.length > i + 1 ? ', ' : ''
    return (
      <span key={`member-${i}`}>
        <Member item={m}></Member>
        {end}
      </span>
    )
  })
}

export default Members
