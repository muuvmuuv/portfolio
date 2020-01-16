import React from 'react'

const Container = ({ children }) => <div className="container">{children}</div>

const ContainerSmall = ({ children }) => (
  <div className="container container--small">{children}</div>
)

export { Container, ContainerSmall }
