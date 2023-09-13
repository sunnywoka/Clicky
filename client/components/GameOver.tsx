interface Props {
    score: number
    show: boolean
  }
  
function GameOver(props:Props) {
console.log('re render')
console.log(props.show)
  return (
    <div>
      {props.show? <div>Your score is {props.score}</div> : ''}
    </div>
  )
}

export default GameOver



