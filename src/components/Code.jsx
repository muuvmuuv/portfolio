import React, { useState, useContext } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import copy from 'copy-text-to-clipboard'

import { normalize } from '../utils/normalize'
import { lightTheme, darkTheme } from './CodeThemes'
import { ThemeContext, Mode } from '../provider/theme'

const highlightStart = (line) => {
  return line.some((token) => token.content.includes('highlight-start'))
}

const highlightEnd = (line) => {
  return line.some((token) => token.content.includes('highlight-end'))
}

const renderTokens = (tokens, getLineProps, getTokenProps) => {
  let linesTokened = []
  let linesNumbered = []
  let lineHighlighted = false

  tokens.forEach((line, i) => {
    if (highlightStart(line)) {
      lineHighlighted = true
      return false
    } else if (highlightEnd(line)) {
      lineHighlighted = false
      return false
    }

    linesTokened.push(
      <div
        {...getLineProps({ line, key: i })}
        className={lineHighlighted ? 'highlight-line' : ''}
      >
        {line.map((token, key) => (
          <span {...getTokenProps({ token, key })} />
        ))}
      </div>
    )

    linesNumbered.push(
      <div key={i} className={lineHighlighted ? 'highlight-line' : ''}>
        {i}
      </div>
    )
  })

  return { linesTokened, linesNumbered }
}

const Code = ({ children, language }) => {
  const { theme } = useContext(ThemeContext)

  const [copyState, setCopyState] = useState('Copy')
  const copyCode = () => {
    copy(children)
    setCopyState('Copied!')
    setTimeout(() => {
      setCopyState('Copy')
    }, 1200)
  }

  const highlightProps = {
    ...defaultProps,
    ...{
      theme: theme === Mode.DARK ? darkTheme : lightTheme,
    },
  }

  const markup = normalize(children)

  return (
    <Highlight {...highlightProps} code={markup} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        const { linesTokened, linesNumbered } = renderTokens(
          tokens,
          getLineProps,
          getTokenProps
        )

        return (
          <pre className={className} style={style}>
            <div className="line-numbers">{linesNumbered}</div>
            <code>{linesTokened}</code>
            <div className="action-bar">
              <button className="copy-code" onClick={copyCode} onKeyPress={copyCode}>
                {copyState}
              </button>
              <div className="label">{language.toUpperCase()}</div>
            </div>
          </pre>
        )
      }}
    </Highlight>
  )
}

export default Code
