import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="flex justify-center items-center gap-80">
        <img className="w-64 h-full" src="images/gun.png" alt="gun" />
        <h1 className="text-8xl m-4 text-primary">Blicky</h1>
        <img
          className="w-64 h-full transform -scale-x-100"
          src="images/gun.png"
          alt="gun"
        />
      </div>
      <hr className="border-4 border-primary" />
      <div className="flex justify-center items-center h-screen bg-pink4">
        <Link
          to="/catagory"
          className="border-4 rounded text-4xl border-primary px-36 py-24 text-primary hover:bg-primary hover:text-pink4 hover:animate-pulse"
        >
          Choose Game Mode
        </Link>
      </div>
    </div>
  )
}

export default Home
