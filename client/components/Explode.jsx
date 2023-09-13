import React, { Component } from 'react'
import Explosion from 'react-explode/Corregidor'

class Explode extends Component {
  render() {
    return (
      <Explosion
        size="200"
        color="orange"
        delay={0}
        repeatDelay={0}
        repeat={5}
      />
    )
  }
}

export default Explode
