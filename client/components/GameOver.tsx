interface Props {
  score: number
}

function GameOver(props: Props) {
  return (
    <div>
      <div data-testid="game-over">
        Game Over
        <br />
        Your score is {props.score}
      </div>
    </div>
  )
}

export default GameOver
