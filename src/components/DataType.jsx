import React from 'react'

const DataType = ({ type, tooltip, position = 'top' }) => {
  let attr = {}
  let classes = []

  if (tooltip) {
    classes.push('tooltip')
    classes.push('cursor-help')
    attr['aria-label'] = tooltip
    attr['data-position'] = position
    attr['role'] = 'tooltip'
  }

  switch (type) {
    case 'null':
      return (
        <span className={'mono color--orange ' + classes.join(' ')} {...attr}>
          {type}
        </span>
      )

    case 'false':
      return (
        <span className={'mono color--red ' + classes.join(' ')} {...attr}>
          {type}
        </span>
      )

    case 'true':
      return (
        <span className={'mono color--green ' + classes.join(' ')} {...attr}>
          {type}
        </span>
      )

    case 'number':
      return (
        <span className={'mono color--blue ' + classes.join(' ')} {...attr}>
          {type}
        </span>
      )

    default:
      return <span className="mono color--muted">Type `{type}` unknown</span>
  }
}

export default DataType
