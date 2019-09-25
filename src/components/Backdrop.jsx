import React from 'react'

const Backdrop = ({ src }) => {
  if (!src) {
    return <div className="backdrop">No image src</div>
  }

  return (
    <div className="backdrop">
      <div className="img" style={{ backgroundImage: `url(${src})` }}></div>
    </div>
  )
}

export default Backdrop
