interface Props {
  x: number
  y: number
  size: number
}

function Square(props: Props) {
  return (
    <svg style={{ overflow: 'visible', position: 'absolute' }}>
      <rect
        x={props.x}
        y={props.y}
        width={props.size}
        height={props.size}
      ></rect>
    </svg>
  )
}

export default Square
