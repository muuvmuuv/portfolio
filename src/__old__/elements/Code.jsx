import React from 'react'
import Code from '../components/Code'

const PreformattedCode = (props) => {
  const normalizeLanguage = (lang) => {
    const lower = lang.toLowerCase()
    return lower.replace('language-', '')
  }

  const {
    children: {
      props: { children: content, className: languageClass },
    },
  } = props

  let languageName = 'text'
  if (languageClass) {
    languageName = normalizeLanguage(languageClass)
  }

  return <Code language={languageName}>{content}</Code>
}

const InlineCode = (props) => <code {...props} />

export { PreformattedCode, InlineCode }
