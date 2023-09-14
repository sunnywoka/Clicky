import { useEffect, useState, useRef } from 'react'
import * as coord from '../coordinatefunctions'

function useGame() {
  const [screenSize, setScreenSize] = useState(coord.getCurrentDimension)
  const [squareXY, setSquareXY] = useState([0, 0])
  const [circleXY, setCircleXY] = useState([0, 0])
  const [triangleXY, setTriangleXY] = useState([0, 0])
  const [showDiv, setShowDiv] = useState(false)
  const [num, setNum] = useState(60)

  const [count, setCount] = useState(0)
  const [shapeScore, setShapeScore] = useState(100)
  const intervalRef = useRef()
  const decreaseScore = () => setShapeScore((prev) => prev - 1)

  const [isExploding, setIsExploding] = useState(false)
  const [explosionPosition, setExplosionPosition] = useState([0, 0])

  const coordEffect = useEffect(() => {
    const xy = coord.getRandom(screenSize)
    setSquareXY(xy[0])
    setCircleXY(xy[1])
    setTriangleXY(xy[2])
  }, [])

  const dimensionEffect = useEffect(() => {
    const updateDimension = () => {
      setScreenSize(coord.getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension)
    return () => {
      window.removeEventListener('resize', updateDimension)
    }
  }, [])

  const timerEffect = useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000)
    intervalRef.current = setInterval(decreaseScore, 100)
    return () => clearInterval(intervalRef.current)
  }, [])

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

  function handleSquareClick(e: React.MouseEvent<SVGRectElement>) {
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

  const states = {
    screenSize: { state: screenSize, function: setScreenSize },
    squareXY: { state: squareXY, function: setSquareXY },
    circleXY: { state: circleXY, function: setCircleXY },
    triangleXY: { state: triangleXY, function: setTriangleXY },
    showDiv: { state: showDiv, function: setShowDiv },
    num: { state: num, function: setNum },
    count: { state: count, function: setCount },
    shapeScore: { state: shapeScore, function: setShapeScore },
    isExploding: { state: isExploding, function: setIsExploding },
    explosionPosition: {
      state: explosionPosition,
      function: setExplosionPosition,
    },
  }

  const effects = {
    coordEffect,
    dimensionEffect,
    timerEffect,
  }
  const clicks = { handleTriangleClick, handleCircleClick, handleSquareClick }
  return { states, effects, clicks }
}

export default useGame
