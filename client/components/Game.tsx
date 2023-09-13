import { useEffect, useRef, useState } from 'react'

import GameOver from './GameOver'
import { Link } from 'react-router-dom'
import Circle from './shapes/Circle'
import Square from './shapes/Square'
import Triangle from './shapes/Triangle'
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
  const [showDiv, setShowDiv] = useState(false)


  //scoring states
  const [shapeScore, setShapeScore] = useState(100)
  //timer values


  const [num, setNum] = useState(60)
  const intervalRef = useRef() 

 
  const decreaseNum = () => {
    setNum((prev) => {
      if (prev > 0) {
        return prev - 1
      } else {
        clearInterval(intervalRef.current)
          setShowDiv(true)
        return 0
      }
    })
    
  }
  
  const decreaseScore = () => setShapeScore((prev) => prev - 1)

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000)
    intervalRef.current = setInterval(decreaseScore, 100)

    return () => clearInterval(intervalRef.current)
  }, [])

  //click handlers

  function handleClick() {
    setXY(getRandom())
    setCount(count + shapeScore)
    setShapeScore(100)
  }

  function handleCircleClick() {
    setCircleXY(getRandom())
    setCount(count + shapeScore)
    setShapeScore(100)
  }
  function handleTriangleClick() {
    setTriangleXY(getRandom())
    setCount(count + shapeScore)
    setShapeScore(100)
  }

  return (
    <>
      <button className="go-back-button">
        <Link to="/catagory"> Go Back </Link>
      </button>
      <div>
        <h1>Clicky!</h1>
        <h2>Score: {count}</h2>
        { showDiv && <GameOver score={count} show={showDiv} />}
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
      </div>
    </>
  )
}

//1340 855 game dimension
//1440 1024 screen size

export default Game
