import { useEffect, useRef, useState } from 'react'

import Timer from './Timer'
import { Link } from 'react-router-dom'
import Circle from './shapes/Circle'
import Square from './shapes/Square'
import Triangle from './shapes/Triangle'
// import Triangle from './shapes/Triangle'

function getRandom() {
  const squareXY = getRandomXY()

  let circleXY
  do {
    circleXY = getRandomXY()
  } while (
    Math.sqrt(
      (squareXY[0] - circleXY[0]) ** 2 + (squareXY[1] - circleXY[1]) ** 2
    ) < 40
  )

  let triangleXY
  do {
    triangleXY = getRandomXY()
  } while (
    Math.sqrt(
      (squareXY[0] - triangleXY[0]) ** 2 + (squareXY[1] - triangleXY[1]) ** 2
    ) < 40 ||
    Math.sqrt(
      (circleXY[0] - triangleXY[0]) ** 2 + (circleXY[1] - triangleXY[1]) ** 2
    ) < 40
  )
  return [squareXY, circleXY, triangleXY]
}

function getRandomXY() {
  return [
    Math.floor(Math.random() * 275) + 5,
    Math.floor(Math.random() * 105) + 5,
  ]
}

function Game() {
  const [squareXY, setSquareXY] = useState(getRandom()[0])
  const [circleXY, setCircleXY] = useState(getRandom()[1])
  const [triangleXY, setTriangleXY] = useState(getRandom()[2])

  const [count, setCount] = useState(0)

  //scoring states
  const [shapeScore, setShapeScore] = useState(100)
  //timer values

  const [num, setNum] = useState(60)
  const intervalRef = useRef()

  const decreaseNum = () => setNum((prev) => prev - 1)

  const decreaseScore = () => setShapeScore((prev) => prev - 1)

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000)
    intervalRef.current = setInterval(decreaseScore, 100)

    return () => clearInterval(intervalRef.current)
  }, [])

  //click handlers

  function handleClick() {
    setSquareXY(getNewXY(circleXY, triangleXY))
    setCount(count + shapeScore)
    setShapeScore(100)
  }

  function handleCircleClick() {
    setCircleXY(getNewXY(squareXY, triangleXY))
    setCount(count + shapeScore)
    setShapeScore(100)
  }
  function handleTriangleClick() {
    setTriangleXY(getNewXY(squareXY, circleXY))
    setCount(count + shapeScore)
    setShapeScore(100)
  }

  function isOverlap(coords1: number[], coords2: number[]) {
    const [x1, y1] = coords1
    const [x2, y2] = coords2
    const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    return distance < 40 // Adjust this threshold as needed
  }

  function getNewXY(coords1: number[], coords2: number[]) {
    let coords
    do {
      coords = getRandomXY()
    } while (isOverlap(coords, coords1) || isOverlap(coords, coords2))
    return coords
  }

  return (
    <>
      <button className="go-back-button">
        <Link to="/catagory"> Go Back </Link>
      </button>
      <div>
        <h1>Clicky!</h1>
        <h2>Score: {count}</h2>
        <div>
          <h2>{num}</h2>
        </div>
        <svg viewBox="0 0 300 130" style={{ border: 'solid' }}>
          <Square
            x={squareXY[0]}
            y={squareXY[1]}
            size={20}
            handleClick={handleClick}
          />
          <Circle
            x={circleXY[0]}
            y={circleXY[1]}
            radius={10}
            handleCircleClick={handleCircleClick}
          />
          <Triangle
            x={triangleXY[0]}
            y={triangleXY[1]}
            sideLength={20}
            handleTriangleClick={handleTriangleClick}
          />
        </svg>
      </div>
    </>
  )
}

//1340 855 game dimension
//1440 1024 screen size

export default Game
