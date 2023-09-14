interface Props {
    score: number
    show: boolean
  }
  
function GameOver(props:Props) {
  return (
    <div>
      {props.show? <div>Game Over<br/>Your score is {props.score}</div> : ''}
    </div>
  )
}

export default GameOver



