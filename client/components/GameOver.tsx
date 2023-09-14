interface Props {
  score: number
}

function GameOver(props: Props) {
  return (
    <div>
      <div>
        Game Over
        <br />
        Your score is {props.score}
      </div>
    </div>
  )
}

export default GameOver
