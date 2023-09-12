import Circle from './shapes/Circle'
import Square from './shapes/Square'
import Triangle from './shapes/Triangle'

function Game() {
  function getRandomNum(min: number, max: number) {
    return Math.random() * (max - min) + min
  }
  return (
    <div>
      <h1>Clicky!</h1>
      <Square
        x={getRandomNum(200, 600)}
        y={getRandomNum(200, 600)}
        size={100}
      />
      <Circle
        x={getRandomNum(200, 600)}
        y={getRandomNum(200, 600)}
        radius={80}
      />
    </div>
  )
}

//1340 855 game dimension
//1440 1024 screen size

export default Game

//1340 855 gmae dimesion max size
//1440 1024 screen size
