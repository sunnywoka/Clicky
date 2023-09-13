interface Props {
  x: number
  y: number
  size: number
  handleClick: () => void
}

function Square(props: Props) {
  return (
    <svg style={{ overflow: 'visible' }}>
      <rect
        x={props.x}
        y={props.y}
        width={props.size}
        height={props.size}
        onClick={props.handleClick}
      ></rect>
    </svg>
  )
}

export default Square
