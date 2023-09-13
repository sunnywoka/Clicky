import { useState } from 'react'
interface Props {
  // x: number
  // y: number
  size: number
  // handleClick: () => void
}

function getRandomNum(min: number, max: number) {
  return Math.random() * (max - min) + min
}
function Square(props: Props) {
  const [randomSquareNum, setRandomSquareNum] = useState(200)

  function handleSquareClick() {
    console.log('Click')
    const rand = getRandomNum(200, 600)
    setRandomSquareNum(rand)
    console.log({ randomSquareNum })
  }

  return (
    <svg style={{ overflow: 'visible' }}>
      <rect
        x={randomSquareNum}
        y={randomSquareNum}
        width={props.size}
        height={props.size}
        onClick={handleSquareClick}
      ></rect>
    </svg>
  )
}

export default Square
