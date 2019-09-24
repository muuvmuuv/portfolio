import React from 'react'

const Member = ({ item }) => {
  return item.link ? (
    <a
      href={item.link}
      title={item.name}
      target="_blank"
      rel="noopener noreferrer"
      className="link"
    >
      {item.name}
    </a>
  ) : (
    item.name
  )
}

export default Member
