import React from 'react'
import Code from '../components/Code'

const PreformattedCode = (props) => {
  const normalizeLanguage = (lang) => {
    const lower = lang.toLowerCase()
    return lower.replace('language-', '')
  }

  const {
    children: {
      props: { children, className },
    },
  } = props

  const languageName = normalizeLanguage(className)

  return <Code language={languageName}>{children}</Code>
}

const InlineCode = (props) => <code {...props} />

export { PreformattedCode, InlineCode }
