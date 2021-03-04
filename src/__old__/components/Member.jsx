import React from 'react'

const Member = ({ item }) => {
  return item.link ? (
    <a
      href={item.link}
      title={`Link to ${item.name} website: ${item.link}`}
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
