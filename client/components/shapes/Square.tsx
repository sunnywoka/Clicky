interface Props {
  size: number
}

function Square(props: Props) {
  return (
    <svg style={{ overflow: 'visible' }}>
      <rect width={props.size} height={props.size}></rect>
    </svg>
  )
}

export default Square
