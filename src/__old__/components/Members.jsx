import React from 'react'

import Member from './Member'

const Members = ({ list }) => {
  return list.map((m, i) => (
    <span key={i}>
      <Member item={m}></Member>
      {list.length > i + 1 ? ', ' : ''}
    </span>
  ))
}

export default Members
