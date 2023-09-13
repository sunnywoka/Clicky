import { useEffect, useRef, useState } from 'react'

import Timer from './Timer'
import { Link } from 'react-router-dom'
import Circle from './shapes/Circle'
import Square from './shapes/Square'
import Triangle from './shapes/Triangle'
import Explode from './Explode'
// import Triangle from './shapes/Triangle'

function getRandom() {
  return [
    Math.floor(Math.random() * 275) + 5,
    Math.floor(Math.random() * 105) + 5,
  ]
}

function Game() {
  const [xy, setXY] = useState([getRandom()[0], getRandom()[1]])
  const [circleXY, setCircleXY] = useState([getRandom()[0], getRandom()[1]])
  const [triangleXY, setTriangleXY] = useState([getRandom()[0], getRandom()[1]])
  const [count, setCount] = useState(0)

  //scoring states
  const [shapeScore, setShapeScore] = useState(100)

  //explosion state
  const [isExploding, setIsExploding] = useState(false)
  const [explosionPosition, setExplosionPosition] = useState([0, 0])
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

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setXY(getRandom())
    setCount(count + shapeScore)
    setShapeScore(100)
    explode(e)
  }

  function handleCircleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setCircleXY(getRandom())
    setCount(count + shapeScore)
    setShapeScore(100)
    explode(e)
  }
  function handleTriangleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setTriangleXY(getRandom())
    setCount(count + shapeScore)
    setShapeScore(100)
    explode(e)
  }

  //explode function
  function explode(e: React.MouseEvent<HTMLButtonElement>) {
    setExplosionPosition([e.pageX, e.pageY])
    setIsExploding(true)
    setTimeout(() => {
      setIsExploding(false)
    }, 250)
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
          <Square x={xy[0]} y={xy[1]} size={20} handleClick={handleClick} />
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
        {isExploding && (
          <Explode
            x={explosionPosition[0] - 100}
            y={explosionPosition[1] - 100}
          />
        )}
      </div>
    </>
  )
}

//1340 855 game dimension
//1440 1024 screen size

export default Game
