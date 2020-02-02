const React = require(`react`)
const { renderToStaticMarkup } = require('react-dom/server')
const visit = require(`unist-util-visit`)

// const { PreformattedCode } = require('../../src/elements/Code.jsx')
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

  return <code language={languageName}>{children}</code>
}

module.exports = ({ markdownAST }) => {
  visit(markdownAST, `code`, (node) => {
    console.log(node)
    const props = {
      children: {
        props: {
          children: node.value,
          className: node.lang,
        },
      },
    }
    node.value = renderToStaticMarkup(PreformattedCode)
  })
}
