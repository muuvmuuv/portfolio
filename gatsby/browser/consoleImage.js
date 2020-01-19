module.exports = (src, scale = 100) => {
  const img = new Image()

  img.onload = function() {
    const width = Math.floor((this.width / 100) * scale)
    const height = Math.floor((this.height / 100) * scale)
    const style = `
      font-size: 1px;
      padding: ${height}px ${width}px;
      background: url(${src}) no-repeat;
      background-size: contain;
    `
    console.log('%c ', style)
  }

  img.src = src
}
