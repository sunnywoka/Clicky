import { useState } from 'react'

import Timer from './Timer'
import { Link } from 'react-router-dom'
import Circle from './shapes/Circle'
import Square from './shapes/Square'
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

  function handleClick() {
    setXY(getRandom())
  }

  function handleCircleClick() {
    setCircleXY(getRandom())
  }

  return (
    <>
    <button className='go-back-button'>
    <Link to="/catagory"> Go Back </Link>
    </button>
    <div>
      <h1>Clicky!</h1>
         <Timer />

      <svg viewBox="0 0 300 130" style={{ border: 'solid' }}>
        <Square x={xy[0]} y={xy[1]} size={20} handleClick={handleClick} />
        <Circle
          x={circleXY[0]}
          y={circleXY[1]}
          radius={10}
          handleCircleClick={handleCircleClick}
        />
      </svg>

    </div>
    
    </>
  )
}

//1340 855 game dimension
//1440 1024 screen size

export default Game
