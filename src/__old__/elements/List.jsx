import React from 'react'

import uniqueString from 'unique-string'

const UnorderedList = (props) => <ul {...props} />

const OrderedList = (props) => <ol {...props} />

const ListElement = (props) => {
  if (props.className === 'task-list-item') {
    const [input, ...restChildren] = props.children
    const id = uniqueString()

    return (
      <li className="task-list-item" {...props}>
        <label htmlFor={id}>
          <input
            id={id}
            type="checkbox"
            defaultChecked={input.props.checked}
            disabled={input.props.disabled}
          />
          <span className="custom-checkbox"></span>
          {restChildren}
        </label>
      </li>
    )
  }

  return <li {...props} />
}

export { UnorderedList, OrderedList, ListElement }
