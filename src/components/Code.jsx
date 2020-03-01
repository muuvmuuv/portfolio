import React, { useState, useContext } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import copy from 'copy-text-to-clipboard'

import { normalize } from '../utils/normalize'
import { lightTheme, darkTheme } from './CodeThemes'
import { ThemeContext, Mode } from '../provider/theme'
import { Link } from '../elements/Link'

const highlightStart = (line) => {
  return line.some((token) => token.content.includes('highlight-start'))
}

const highlightEnd = (line) => {
  return line.some((token) => token.content.includes('highlight-end'))
}

const parser = {
  link: ({ content }, key, props) => {
    const [match, alt, url] = new RegExp('!\\[(.+?)\\]\\((.+?)\\)').exec(content)
    const [before, after] = content.split(match)
    return (
      <span key={key} {...props}>
        {before}
        <Link href={url}>{alt}</Link>
        {after}
      </span>
    )
  },
}

const tokenType = ({ content }) => {
  switch (true) {
    case new RegExp('!\\[.+?\\]\\(.+?\\)').test(content):
      return 'link'
    default:
      return null
  }
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
        {line.map((token, key) => {
          const props = getTokenProps({ token, key })
          const type = tokenType(token)
          if (Object.keys(parser).indexOf(type) !== -1) {
            console.log(token)
            console.log(props)
            return parser[type](token, key, props)
          }
          return <span key={key} {...props} />
        })}
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
              <div className="code-lang">{language.toUpperCase()}</div>
            </div>
          </pre>
        )
      }}
    </Highlight>
  )
}

export default Code
