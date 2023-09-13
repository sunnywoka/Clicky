import { Link } from "react-router-dom"


function Catagory() {
  return (
    <>
      <h1 className="catagory-choose">Game Modes</h1>
      <button className="home-button">
        <Link to="/blicky"> Blicky </Link>
      </button>
      <button className="home-button">
        <Link to="/2"> Game 2/ Difficulty </Link>
      </button>
      <button className="home-button">
        <Link to="/3"> Game 3/ Difficulty </Link>
      </button>
      <button className="home-button">
        <Link to="/4"> Game 4/ Difficulty </Link>
      </button>
      <button className="home-button">
        <Link to="/5"> Game 5/ Difficulty </Link>
      </button>
    </>
  )
}

export default Catagory