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
        <span className={'text-mono color--orange ' + classes.join(' ')} {...attr}>
          null
        </span>
      )

    case 'array':
      return (
        <>
          [
          <span className={'text-mono color--orange ' + classes.join(' ')} {...attr}>
            null
          </span>
          ]
        </>
      )

    case 'object':
      return (
        <>
          {
            <span className={'text-mono color--orange ' + classes.join(' ')} {...attr}>
              key: null
            </span>
          }
        </>
      )

    case 'false':
      return (
        <span className={'text-mono color--red ' + classes.join(' ')} {...attr}>
          false
        </span>
      )

    case 'true':
      return (
        <span className={'text-mono color--green ' + classes.join(' ')} {...attr}>
          true
        </span>
      )

    case 'number':
      return (
        <span className={'text-mono color--blue ' + classes.join(' ')} {...attr}>
          number
        </span>
      )

    case 'string':
      return (
        <span className={'text-mono color--blue ' + classes.join(' ')} {...attr}>
          string
        </span>
      )

    default:
      return <span className="text-mono color--muted">Type `{type}` unknown</span>
  }
}

export default DataType
