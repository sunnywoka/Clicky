import Circle from './shapes/Circle'
import Square from './shapes/Square'
import Triangle from './shapes/Triangle'

function Game() {
  return (
    <div>
      <h1>Clicky!</h1>
      <Square x={50} y={200} size={100} />
      <Circle x={150} y={200} radius={80} />
    </div>
  )
}

export default Game

//1340 855 gmae dimesion max size
//1440 1024 screen size
