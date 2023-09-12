interface Props {
  radius: number
}

//cy and cy need to be tweaked when we start displaying shapes in

function Circle(props: Props) {
  return (
    <svg style={{ overflow: 'visible' }}>
      <circle cx="10" cy="100" r={props.radius}></circle>
    </svg>
  )
}

export default Circle
