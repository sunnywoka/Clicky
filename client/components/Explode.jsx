import React, { Component } from 'react'
import Explosion from 'react-explode/Corregidor'

class Explode extends Component {
  render() {
    const { x, y } = this.props
    return (
      <Explosion
        size="200"
        color="orange"
        delay={0}
        style={{ position: 'absolute', top: `${y}px`, left: `${x}px` }}
        repeatDelay={0}
        repeat={0}
      />
    )
  }
}

export default Explode
