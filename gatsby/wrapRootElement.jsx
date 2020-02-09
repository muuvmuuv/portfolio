const React = require('react')

const { ThemeProvider } = require('../src/provider/theme')
const { HistoryProvider } = require('../src/provider/history')
const { OverlayProvider } = require('../src/provider/overlay')
const { ToastProvider } = require('../src/provider/toast')

module.exports = ({ element }) => (
  <ThemeProvider>
    <HistoryProvider>
      <OverlayProvider>
        <ToastProvider>{element}</ToastProvider>
      </OverlayProvider>
    </HistoryProvider>
  </ThemeProvider>
)
