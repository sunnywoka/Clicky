import { useState } from 'react'
// import Circle from './shapes/Circle'
import Square from './shapes/Square'
// import Triangle from './shapes/Triangle'

function Game() {
  // const initSquareRandomNum = [200, 200]
  // // const initCircleRandomNum = getRandomNum(200, 600)
  // const [randomSquareNum, setRandomSquareNum] = useState(200)

  // function getRandomNum(min: number, max: number) {
  //   return Math.random() * (max - min) + min
  // }

  // // const [randomCircleNum, setRandomCircleNum] = useState(
  // //   initCircleRandomNum as number[]
  // // )

  // function handleSquareClick() {
  //   console.log('Click')
  //   // const newPosition = () => getRandomNum(200, 600)
  //   // setRandomSquareNum(newPosition)
  //   // // setRandomCircleNum(() => getRandomNum(200, 600))
  //   // const squareX = getRandomNum(200, 600)
  //   // const squareY = getRandomNum(200, 600)
  //   const rand = getRandomNum(200, 600)
  //   setRandomSquareNum(rand)
  //   console.log({ randomSquareNum })
  // }

  // console.log('randomSquareNum', randomSquareNum)

  return (
    <div>
      <h1>Clicky!</h1>
      <Square
        // x={randomSquareNum}
        // y={randomSquareNum}
        size={50}
        // handleClick={handleSquareClick}
      />
      {/* <Circle x={randomCircleNum[0]} y={randomCircleNum[1]} radius={80} /> */}
    </div>
  )
}

//1340 855 game dimension
//1440 1024 screen size

export default Game
