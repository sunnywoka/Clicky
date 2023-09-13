import { useState } from 'react'
// import Circle from './shapes/Circle'
import Square from './shapes/Square'
// import Triangle from './shapes/Triangle'

function Game() {
  const initSquareRandomNum = getRandomNum(200, 600)
  // const initCircleRandomNum = getRandomNum(200, 600)
  const [randomSquareNum, setRandomSquareNum] = useState(
    initSquareRandomNum as number[]
  )
  function getRandomNum(min: number, max: number) {
    return [
      Math.random() * (max - min) + min,
      Math.random() * (max - min) + min,
    ]
  }

  // const [randomCircleNum, setRandomCircleNum] = useState(
  //   initCircleRandomNum as number[]
  // )

  function handleSquareClick() {
    console.log('Click')
    const newPosition = () => getRandomNum(200, 600)
    setRandomSquareNum(newPosition)
    // setRandomCircleNum(() => getRandomNum(200, 600))
  }

  console.log(randomSquareNum)

  return (
    <div>
      <h1>Clicky!</h1>
      <Square
        x={randomSquareNum[0]}
        y={randomSquareNum[1]}
        size={50}
        handleClick={handleSquareClick}
      />
      {/* <Circle x={randomCircleNum[0]} y={randomCircleNum[1]} radius={80} /> */}
    </div>
  )
}

//1340 855 game dimension
//1440 1024 screen size

export default Game
