import { useEffect, useRef, useState } from 'react'
import GameOver from './GameOver'
import { Link } from 'react-router-dom'
import Circle from './shapes/Circle'
import Square from './shapes/Square'
import Triangle from './shapes/Triangle'
import Explode from './Explode'

import * as coord from './coordinatefunctions'

function Game() {
  //Screen Size
  const [screenSize, setScreenSize] = useState(coord.getCurrentDimension)
  const [squareXY, setSquareXY] = useState([0, 0])
  const [circleXY, setCircleXY] = useState([0, 0])
  const [triangleXY, setTriangleXY] = useState([0, 0])
  const [showDiv, setShowDiv] = useState(false)

  useEffect(() => {
    const xy = coord.getRandom(screenSize)
    setSquareXY(xy[0])
    setCircleXY(xy[1])
    setTriangleXY(xy[2])
  }, [])

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(coord.getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension)
    return () => {
      window.removeEventListener('resize', updateDimension)
    }
  }, [])
  console.log(screenSize)

  const [count, setCount] = useState(0)
  const [shapeScore, setShapeScore] = useState(100)
  //Timer

  //explosion state
  const [isExploding, setIsExploding] = useState(false)
  const [explosionPosition, setExplosionPosition] = useState([0, 0])
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

  //Timer useEffect
  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000)
    intervalRef.current = setInterval(decreaseScore, 100)
    return () => clearInterval(intervalRef.current)
  }, [])

  //click handlers
  function handleClick(e: React.MouseEvent<SVGRectElement>) {
    setSquareXY(coord.getNewXY(circleXY, triangleXY, screenSize))
    setCount(count + shapeScore)
    setShapeScore(100)
    explode(e)
  }

  function handleCircleClick(e: React.MouseEvent<SVGCircleElement>) {
    setCircleXY(coord.getNewXY(squareXY, triangleXY, screenSize))
    console.log(circleXY)
    setCount(count + shapeScore)
    setShapeScore(100)
    explode(e)
  }

  function handleTriangleClick(e: React.MouseEvent<SVGPolygonElement>) {
    setTriangleXY(coord.getNewXY(squareXY, circleXY, screenSize))
    setCount(count + shapeScore)
    setShapeScore(100)
    explode(e)
  }

  //explode function
  function explode(
    e:
      | React.MouseEvent<SVGRectElement>
      | React.MouseEvent<SVGCircleElement>
      | React.MouseEvent<SVGPolygonElement>
  ) {
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
      <div className="game-over-container">
        <div className="game-over">
          {showDiv && <GameOver score={count} show={showDiv} />}
        </div>
      </div>
      <div>
        <h1>Clicky!</h1>
        <h2>Score: {count}</h2>

        <div>
          <h2>{num}</h2>
        </div>
        <div className="game-container"></div>

        <div className="flex justify-center items-center p-2">
          <svg
            viewBox={`0 0 300 ${screenSize.height}`}
            style={{ borderWidth: '2px', borderColor: 'black', margin: '30px' }}
          >
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
