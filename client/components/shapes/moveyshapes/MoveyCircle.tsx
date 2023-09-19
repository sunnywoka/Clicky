interface Props {
  x: number
  y: number
  radius: number
  handleCircleClick: (e: React.MouseEvent<SVGCircleElement>) => void
  className: string
}

//cy and cy need to be tweaked when we start displaying shapes in

function MoveyCircle(props: Props) {
  return (
    <svg style={{ overflow: 'visible', position: 'absolute' }}>
      <circle
        data-testid="circle-circle"
        role="img"
        cx={props.x + props.radius / 2}
        cy={props.y + props.radius / 2}
        r={props.radius}
        onClick={props.handleCircleClick}
        className={`${props.className} dark:fill-white`}
      >
        {' '}
        <animateMotion
          path="M0,0 0 50 0 0"
          begin="0s"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animateMotion
          path="M0,0 50 0 0 0"
          begin="0s"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default MoveyCircle
