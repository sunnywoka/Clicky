import GameOver from './GameOver'
import { Link } from 'react-router-dom'
import Circle from './shapes/Circle'
import Square from './shapes/Square'
import Triangle from './shapes/Triangle'
import Explode from './Explode'
import useGame from './hooks/useGame'

function Game() {
  const { states, effects, clicks } = useGame()

  //explode function

  return (
    <>
      <button className="go-back-button">
        <Link to="/catagory"> Go Back </Link>
      </button>
      <div className="game-over-container">
        <div className="game-over">
          {states.showDiv.state && (
            <GameOver score={states.count.state} show={states.showDiv.state} />
          )}
        </div>
      </div>
      <div>
        <h1>Clicky!</h1>
        <h2>Score: {states.count.state}</h2>

        <div>
          <h2>{states.num.state}</h2>
        </div>
        <div className="game-container"></div>

        <div className="flex justify-center items-center p-2">
          <svg
            viewBox={`0 0 300 ${states.screenSize.state.height}`}
            style={{ borderWidth: '2px', borderColor: 'black', margin: '30px' }}
          >
            <Square
              x={states.squareXY.state[0]}
              y={states.squareXY.state[1]}
              size={20}
              handleClick={clicks.handleSquareClick}
            />
            <Circle
              x={states.circleXY.state[0]}
              y={states.circleXY.state[1]}
              radius={10}
              handleCircleClick={clicks.handleCircleClick}
            />
            <Triangle
              x={states.triangleXY.state[0]}
              y={states.triangleXY.state[1]}
              sideLength={20}
              handleTriangleClick={clicks.handleTriangleClick}
            />
          </svg>
        </div>

        {states.isExploding.state && (
          <Explode
            x={states.explosionPosition.state[0] - 100}
            y={states.explosionPosition.state[1] - 100}
          />
        )}
      </div>
    </>
  )
}

//1340 855 game dimension
//1440 1024 screen size

export default Game
