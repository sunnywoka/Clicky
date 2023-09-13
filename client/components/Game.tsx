import { Link } from 'react-router-dom'
import Circle from './shapes/Circle'
import Square from './shapes/Square'
import Triangle from './shapes/Triangle'

function Game() {
  return (
    <>
    <button className='go-back-button'>
    <Link to="/catagory"> Go Back </Link>
    </button>
    <div>
      <h1>Clicky!</h1>
      <Square x={200} y={0} size={100} />
      <Circle x={150} y={200} radius={80} />
      <Triangle x={1200} y={500} sideLength={100} />
    </div>
    
    </>
  )
}
export default Game