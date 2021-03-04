import React from 'react'

const Keywords = ({ list }) => (
  <span className="keywords">
    {list.map((item, i) => (
      <span key={i}>
        {item}
        {list.length > i + 1 ? ', ' : ''}
      </span>
    ))}
  </span>
)

export default Keywords
