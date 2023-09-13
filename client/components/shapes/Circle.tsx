interface Props {
  x: number
  y: number
  radius: number
  handleCircleClick: () => void
}

//cy and cy need to be tweaked when we start displaying shapes in

function Circle(props: Props) {
  return (
    <svg style={{ overflow: 'visible' }}>
      <circle
        cx={props.x}
        cy={props.y}
        r={props.radius}
        onClick={props.handleCircleClick}
      ></circle>
    </svg>
  )
}

export default Circle
