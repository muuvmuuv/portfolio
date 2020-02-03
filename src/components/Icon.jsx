import React, { createElement } from 'react'

const icons = {}

function importAll(resolve) {
  resolve.keys().forEach((file) => {
    const ext = /(?:\.([^.]+))?$/.exec(file)
    const name = file
      .replace('./', '')
      .replace(ext[0], '')
      .toLowerCase()

    icons[name] = createElement(resolve(file))
  })
}
importAll(require.context('../images/icons', false, /\.svg$/))

const Icon = ({ name, textOnly }) => {
  const IconElement = icons[name] || (
    <span aria-hidden="true" aria-label="Icon not found">
      ⚠
    </span>
  )

  let classes = 'icon'
  if (textOnly) {
    classes += ' icon-text'
  }

  return (
    <span
      className={classes}
      name={name}
      aria-hidden="true"
      aria-label={`An icon which shows "${name}"`}
    >
      {IconElement}
    </span>
  )
}

export default Icon
