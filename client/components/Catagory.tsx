import { Link } from 'react-router-dom'
import Header from './Header'

function Catagory() {
  return (
    <>
      <Header />
      <h2 className="text-5xl m-12 text-primary font-bold text-center">
        Game Modes
      </h2>
      <div className="flex justify-center items-center gap-96 m-6">
        <Link className="cat-btn" to="/blicky">
          Blicky
        </Link>
        <Link className="cat-btn" to="/2">
          Game 2/ Difficulty
        </Link>
      </div>

      <div className="flex justify-center m-6">
        <Link className="cat-btn" to="/3">
          Game 3/ Difficulty
        </Link>
      </div>

      <div className="flex justify-center items-center gap-96 m-6">
        <Link className="cat-btn" to="/4">
          Game 4/ Difficulty
        </Link>
        <Link className="cat-btn" to="/5">
          Game 5/ Difficulty
        </Link>
      </div>
    </>
  )
}

export default Catagory
