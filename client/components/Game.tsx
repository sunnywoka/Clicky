import Circle from './shapes/Circle'
import Square from './shapes/Square'
import Triangle from './shapes/Triangle'

function Game() {
  return (
    <div>
      <h1>Clicky!</h1>
      <Square size={100} />
      <Circle radius={100} />
      <Triangle />
    </div>
  )
}

export default Game
