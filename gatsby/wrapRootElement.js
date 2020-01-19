const React = require('react')

const { ThemeProvider } = require('../src/store/theme')
const { HistoryProvider } = require('../src/store/history')

module.exports = ({ element }) => (
  <ThemeProvider>
    <HistoryProvider>{element}</HistoryProvider>
  </ThemeProvider>
)
