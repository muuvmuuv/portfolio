const React = require('react')

const { ThemeProvider } = require('../src/provider/theme')
const { HistoryProvider } = require('../src/provider/history')
const { ToastProvider } = require('../src/provider/toast')

module.exports = ({ element }) => (
  <ThemeProvider>
    <HistoryProvider>
      <ToastProvider>{element}</ToastProvider>
    </HistoryProvider>
  </ThemeProvider>
)
