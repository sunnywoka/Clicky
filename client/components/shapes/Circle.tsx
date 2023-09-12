interface Props {
  x: number
  y: number
  radius: number
}

//cy and cy need to be tweaked when we start displaying shapes in

function Circle(props: Props) {
  return (
    <svg style={{ overflow: 'visible', position: 'absolute' }}>
      <circle cx={props.x} cy={props.y} r={props.radius}></circle>
    </svg>
  )
}

export default Circle
