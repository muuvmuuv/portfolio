const React = require('react')

const { OverlayProvider } = require('../src/provider/overlay')

module.exports = ({ element }) => <OverlayProvider>{element}</OverlayProvider>
