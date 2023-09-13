import { Link } from "react-router-dom"


function Home() {
  return (
    <>
      <h1 className="catagory-choose">Blicky</h1>
      <button className="home-button">
        <Link to="/catagory"> Choose Game Mode </Link>
      </button>
    </>
  )
}

export default Home